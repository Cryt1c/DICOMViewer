use std::collections::BTreeMap;

use dicom_dictionary_std::tags;
use dicom_hierarchy::DicomHierarchy;
use dicom_object::{FileDicomObject, InMemDicomObject};
use dicom_volume::{enums::SortBy, volume::Volume, volume_loader::VolumeLoader};
use image_repository::ImageRepository;
use js_sys::Uint8Array;
use renderer::Renderer;
use serde::Serialize;
use tracing::debug;
use tracing_wasm::WASMLayerConfigBuilder;
use wasm_bindgen::prelude::*;

use crate::{debug::timeit_future, wasm_enum::WasmOrientation};

const ACQUISITION_KEY_SEPARATOR: &str = "_acq_";
const UNKNOWN_ACQUISITION_KEY: &str = "Unknown";

fn acquisition_key(acquisition_number: Option<u16>) -> String {
    acquisition_number
        .map(|acquisition_number| acquisition_number.to_string())
        .unwrap_or_else(|| UNKNOWN_ACQUISITION_KEY.to_string())
}

mod debug;
mod dicom_hierarchy;
mod image_repository;
mod renderer;
mod wasm_enum;

#[wasm_bindgen]
struct DicomViewer {
    metadata: MetaData,
    dicom_hierarchy: DicomHierarchy,
    #[wasm_bindgen(skip)]
    image_repository: ImageRepository,
    #[wasm_bindgen(skip)]
    renderer: Renderer,
}

/// Snapshot of the viewer state, serialized to a plain JS object for the UI.
///
/// Keeping it a plain serializable struct (instead of a `#[wasm_bindgen]`
/// type) means JS reads fields instead of calling wasm getters, and the value
/// is a detached copy - JS can hold on to it without keeping Rust borrowed.
#[derive(Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct MetaData {
    pub total: usize,
    pub current_index: usize,
    pub series_total: usize,
    pub mpr_orientation: WasmOrientation,
    pub current_series_instance_uid: Option<String>,
}

impl MetaData {
    fn new() -> Self {
        Self {
            total: 0,
            current_index: 0,
            series_total: 0,
            mpr_orientation: WasmOrientation::Axial,
            current_series_instance_uid: None,
        }
    }

    fn to_js(&self) -> JsValue {
        to_js(self)
    }
}

/// Serializes a plain Rust struct into a JS object. `None` becomes `null`
/// (instead of the serde-wasm-bindgen default of `undefined`) so the
/// TypeScript interfaces can use `| null`.
fn to_js<T: Serialize>(value: &T) -> JsValue {
    let serializer = serde_wasm_bindgen::Serializer::new().serialize_missing_as_null(true);
    value
        .serialize(&serializer)
        .expect("value should be serializable")
}

/// Result of `DicomViewer::set_use_gpu`, so switching backends stays a single
/// call: it reports whether the GPU is now in use and the refreshed metadata.
#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct GpuUpdate {
    gpu_active: bool,
    metadata: MetaData,
}

#[wasm_bindgen]
impl DicomViewer {
    #[wasm_bindgen]
    pub fn new() -> Self {
        console_error_panic_hook::set_once();

        let mut builder = WASMLayerConfigBuilder::new();
        #[cfg(debug_assertions)]
        builder.set_max_level(tracing::Level::DEBUG);
        #[cfg(not(debug_assertions))]
        builder.set_max_level(tracing::Level::INFO);
        let config = builder.build();
        tracing_wasm::set_as_global_default_with_config(config);

        Self {
            metadata: MetaData::new(),
            dicom_hierarchy: DicomHierarchy::new(),
            image_repository: ImageRepository::new(),
            renderer: Renderer::new("viewer-canvas"),
        }
    }

    #[wasm_bindgen]
    pub fn read_files(&mut self, files: Vec<Uint8Array>) -> Result<(), JsError> {
        self.metadata = MetaData::new();
        self.dicom_hierarchy = DicomHierarchy::new();
        self.renderer.clear_canvas();

        let mut dicom_objects: BTreeMap<String, Vec<FileDicomObject<InMemDicomObject>>> =
            BTreeMap::new();
        let mut total = 0;
        files
            .iter()
            .map(|uint8_array| {
                let bytes: Vec<u8> = uint8_array.to_vec();
                let cursor = std::io::Cursor::new(bytes);
                let dicom_object =
                    dicom_object::from_reader(cursor).map_err(|e| JsError::new(&e.to_string()))?;

                self.dicom_hierarchy.add_patient(&dicom_object);
                let series_instance_uid = dicom_object
                    .element(tags::SERIES_INSTANCE_UID)
                    .expect("could not get series_instance_uid")
                    .to_str()
                    .expect("could not convert series_instance_uid to string")
                    .to_string();

                dicom_objects
                    .entry(series_instance_uid)
                    .or_insert_with(Vec::new)
                    .push(dicom_object);
                total += 1;

                Ok(())
            })
            .collect::<Result<(), JsError>>()?;
        let mut volumes: BTreeMap<String, Volume> = BTreeMap::new();
        for (series_instance_uid, objects) in dicom_objects {
            let mut acquisitions: BTreeMap<Option<u16>, Vec<_>> = BTreeMap::new();
            for object in objects {
                let acquisition_number = object
                    .element(tags::ACQUISITION_NUMBER)
                    .ok()
                    .and_then(|element| element.to_int::<u16>().ok());
                acquisitions
                    .entry(acquisition_number)
                    .or_default()
                    .push(object);
            }

            if acquisitions.len() > 1 {
                for (acquisition_number, objects) in acquisitions {
                    let volume = VolumeLoader::load_from_dicom_objects(
                        &objects,
                        SortBy::ImagePositionPatient,
                    )
                    .expect("Should load dicom object vec");
                    let key = format!(
                        "{}{}{}",
                        series_instance_uid,
                        ACQUISITION_KEY_SEPARATOR,
                        acquisition_key(acquisition_number)
                    );
                    volumes.insert(key, volume);
                }
            } else if let Some(objects) = acquisitions.into_values().next() {
                let volume =
                    VolumeLoader::load_from_dicom_objects(&objects, SortBy::ImagePositionPatient)
                        .expect("Should load dicom object vec");
                volumes.insert(series_instance_uid, volume);
            }
        }

        let first_series_instance_uid = volumes.first_key_value().unwrap().0.clone();
        self.image_repository.add_volumes(volumes);

        self.metadata.current_series_instance_uid = Some(first_series_instance_uid);
        self.metadata.series_total = self.image_repository.get_total_from_axis(
            &self.metadata.current_series_instance_uid,
            self.metadata.mpr_orientation.into(),
        );
        self.metadata.total = total;
        self.metadata.current_index = self.metadata.series_total / 2;
        Ok(())
    }

    #[wasm_bindgen]
    pub async fn render_image_at_index(&mut self, index: usize) -> JsValue {
        self.render_at_index(index).await;
        self.metadata.to_js()
    }

    #[wasm_bindgen]
    pub async fn set_current_series_instance_uid(&mut self, series_instance_uid: String) -> JsValue {
        self.metadata.current_series_instance_uid = Some(series_instance_uid);
        self.metadata.series_total = self.image_repository.get_total_from_axis(
            &self.metadata.current_series_instance_uid,
            self.metadata.mpr_orientation.into(),
        );
        self.metadata.current_index = self.metadata.series_total / 2;
        self.render_image_at_center().await
    }

    #[wasm_bindgen]
    pub async fn render_image_at_center(&mut self) -> JsValue {
        let center_index = self.image_repository.get_total_from_axis(
            &self.metadata.current_series_instance_uid,
            self.metadata.mpr_orientation.into(),
        ) / 2;
        self.render_at_index(center_index).await;
        self.metadata.to_js()
    }

    #[wasm_bindgen]
    pub async fn render_next_file(&mut self) -> JsValue {
        let next_index = self.metadata.current_index.saturating_add(1);
        let Some(image) = timeit_future(
            self.image_repository.get_image_at_index(
                &self.metadata.current_series_instance_uid,
                next_index,
                self.metadata.mpr_orientation.into(),
            ),
            "next_image",
        )
        .await
        else {
            debug!("Next image at {} not found", next_index);
            return self.metadata.to_js();
        };
        self.metadata.current_index = next_index;
        self.renderer.render_to_context(image);
        self.metadata.to_js()
    }

    #[wasm_bindgen]
    pub async fn render_previous_file(&mut self) -> JsValue {
        let previous_index = self.metadata.current_index.saturating_sub(1);
        let Some(image) = self
            .image_repository
            .get_image_at_index(
                &self.metadata.current_series_instance_uid,
                previous_index,
                self.metadata.mpr_orientation.into(),
            )
            .await
        else {
            debug!("Previous image at {} not found", previous_index);
            return self.metadata.to_js();
        };
        self.metadata.current_index = previous_index;
        self.renderer.render_to_context(image);
        self.metadata.to_js()
    }

    #[wasm_bindgen]
    pub fn get_metadata(&self) -> JsValue {
        self.metadata.to_js()
    }

    #[wasm_bindgen]
    pub fn get_dicom_hierarchy(&self) -> JsValue {
        serde_wasm_bindgen::to_value(&self.dicom_hierarchy).unwrap()
    }

    #[wasm_bindgen]
    pub async fn set_use_gpu(&mut self, use_gpu: bool) -> JsValue {
        self.image_repository.set_use_gpu(use_gpu);
        if use_gpu
            && !self
                .image_repository
                .ensure_gpu_interpolator(&self.metadata.current_series_instance_uid)
                .await
        {
            // No usable adapter: clear the preference so subsequent renders
            // take the CPU path without retrying on every slice.
            self.image_repository.set_use_gpu(false);
        }
        self.render_at_index(self.metadata.current_index).await;
        let gpu_active = self
            .image_repository
            .is_gpu_active(&self.metadata.current_series_instance_uid);
        to_js(&GpuUpdate {
            gpu_active,
            metadata: self.metadata.clone(),
        })
    }

    #[wasm_bindgen]
    pub async fn set_mpr_orientation(&mut self, mpr_orientation: WasmOrientation) -> JsValue {
        self.metadata.mpr_orientation = mpr_orientation;
        self.metadata.series_total = self.image_repository.get_total_from_axis(
            &self.metadata.current_series_instance_uid,
            mpr_orientation.into(),
        );
        self.render_image_at_center().await
    }
}

impl DicomViewer {
    /// Renders `index` and only commits `current_index` when a slice was
    /// actually produced, so a failed render leaves the state untouched.
    async fn render_at_index(&mut self, index: usize) {
        let Some(image) = self
            .image_repository
            .get_image_at_index(
                &self.metadata.current_series_instance_uid,
                index,
                self.metadata.mpr_orientation.into(),
            )
            .await
        else {
            debug!("Image at index {} not found", index);
            return;
        };
        self.metadata.current_index = index;
        self.renderer.render_to_context(image);
    }
}


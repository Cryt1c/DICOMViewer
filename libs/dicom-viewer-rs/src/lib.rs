use std::collections::BTreeMap;

use dicom_dictionary_std::tags;
use dicom_hierarchy::DicomHierarchy;
use dicom_object::{FileDicomObject, InMemDicomObject};
use dicom_volume::{enums::SortBy, volume::Volume, volume_loader::VolumeLoader};
use image_repository::ImageRepository;
use js_sys::Uint8Array;
use renderer::Renderer;
use tracing::debug;
use tracing_wasm::WASMLayerConfigBuilder;
use wasm_bindgen::prelude::*;

use crate::{debug::timeit_future, wasm_enum::WasmOrientation};

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

#[wasm_bindgen]
#[derive(Clone)]
struct MetaData {
    pub total: usize,
    pub current_index: usize,
    pub series_total: usize,
    pub mpr_orientation: WasmOrientation,
    current_series_instance_uid: Option<String>,
}

#[wasm_bindgen]
impl MetaData {
    #[wasm_bindgen]
    pub fn new() -> Self {
        Self {
            total: 0,
            current_index: 0,
            series_total: 0,
            mpr_orientation: WasmOrientation::Axial,
            current_series_instance_uid: None,
        }
    }

    pub fn get_current_series_instance_uid(&self) -> JsValue {
        let Some(current_series_instance_uid) = &self.current_series_instance_uid else {
            return String::from("Not filtered").into();
        };
        current_series_instance_uid.into()
    }
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
        let volumes: BTreeMap<String, Volume> = dicom_objects
            .iter()
            .map(|(key, value)| {
                let volume =
                    VolumeLoader::load_from_dicom_objects(&value, SortBy::ImagePositionPatient)
                        .expect("Should load dicom object vec");
                return (key.clone(), volume);
            })
            .collect();

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
    pub async fn render_image_at_index(&mut self, index: usize) {
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

    #[wasm_bindgen]
    pub async fn set_current_series_instance_uid(&mut self, series_instance_uid: String) {
        self.metadata.current_series_instance_uid = Some(series_instance_uid);
        self.metadata.series_total = self.image_repository.get_total_from_axis(
            &self.metadata.current_series_instance_uid,
            self.metadata.mpr_orientation.into(),
        );
        self.metadata.current_index = self.metadata.series_total / 2;
        self.render_image_at_center().await;
    }

    #[wasm_bindgen]
    pub async fn render_image_at_center(&mut self) {
        let center_index = self.image_repository.get_total_from_axis(
            &self.metadata.current_series_instance_uid,
            self.metadata.mpr_orientation.into(),
        ) / 2;
        self.render_image_at_index(center_index).await;
    }

    #[wasm_bindgen]
    pub async fn render_next_file(&mut self) {
        self.metadata.current_index += 1;
        let Some(image) = timeit_future(
            self.image_repository.get_image_at_index(
                &self.metadata.current_series_instance_uid,
                self.metadata.current_index,
                self.metadata.mpr_orientation.into(),
            ),
            "next_image",
        )
        .await
        else {
            self.metadata.current_index -= 1;
            debug!("Next image at {} not found", self.metadata.current_index);
            return;
        };
        self.renderer.render_to_context(image);
    }

    #[wasm_bindgen]
    pub async fn render_previous_file(&mut self) {
        self.metadata.current_index = self.metadata.current_index.saturating_sub(1);
        let result = self
            .image_repository
            .get_image_at_index(
                &self.metadata.current_series_instance_uid,
                self.metadata.current_index,
                self.metadata.mpr_orientation.into(),
            )
            .await;
        let Some(image) = result else {
            debug!(
                "Previous image at {} not found",
                self.metadata.current_index
            );
            return;
        };
        self.renderer.render_to_context(image);
    }

    #[wasm_bindgen]
    pub fn get_metadata(&self) -> MetaData {
        self.metadata.clone()
    }

    #[wasm_bindgen]
    pub fn get_dicom_hierarchy(&self) -> JsValue {
        serde_wasm_bindgen::to_value(&self.dicom_hierarchy).unwrap()
    }

    #[wasm_bindgen]
    pub async fn set_mpr_orientation(&mut self, mpr_orientation: WasmOrientation) {
        self.metadata.mpr_orientation = mpr_orientation;
        self.metadata.series_total = self.image_repository.get_total_from_axis(
            &self.metadata.current_series_instance_uid,
            mpr_orientation.into(),
        );
        self.render_image_at_center().await;
    }
}

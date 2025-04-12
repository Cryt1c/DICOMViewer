use dicom_hierarchy::DicomHierarchy;
use image_repository::ImageRepository;
use js_sys::Uint8Array;
use renderer::Renderer;
use tracing::debug;
use tracing_wasm::WASMLayerConfigBuilder;
use wasm_bindgen::prelude::*;

mod dicom_hierarchy;
mod image;
mod image_repository;
mod renderer;

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
    pub fn reset_filter(&mut self) {
        self.metadata.current_series_instance_uid = None;
        self.metadata.series_total = self
            .image_repository
            .filter_indices(&self.metadata.current_series_instance_uid);
        self.render_image_at_index(0);
    }

    #[wasm_bindgen]
    pub fn read_files(&mut self, files: Vec<Uint8Array>) -> Result<(), JsError> {
        self.metadata = MetaData::new();
        self.image_repository.reset_images();

        files
            .iter()
            .try_for_each::<_, Result<(), JsError>>(|uint8_array| {
                let bytes: Vec<u8> = uint8_array.to_vec();
                let cursor = std::io::Cursor::new(bytes);

                let dicom_object =
                    dicom_object::from_reader(cursor).map_err(|e| JsError::new(&e.to_string()))?;
                self.dicom_hierarchy.add_patient(&dicom_object);
                self.image_repository
                    .add_image(&dicom_object)
                    .map_err(|e| JsError::new(&e.to_string()))
            })?;
        self.metadata.total = self
            .image_repository
            .filter_indices(&self.metadata.current_series_instance_uid);
        self.metadata.series_total = self.metadata.total;
        debug!("{:#?}", self.dicom_hierarchy);
        Ok(())
    }

    #[wasm_bindgen]
    pub fn render_image_at_index(&mut self, index: usize) {
        let Some(image) = self.image_repository.get_image_at_index(index) else {
            debug!("Image at index {} not found", index);
            return;
        };
        self.metadata.current_index = index;
        self.renderer.render_to_context(image);
    }

    #[wasm_bindgen]
    pub fn set_current_series_instance_uid(&mut self, series_instance_uid: String) {
        let Some(image) = self
            .image_repository
            .get_first_image_in_series(&series_instance_uid)
        else {
            debug!("First image in series {} not found", series_instance_uid);
            return;
        };
        self.renderer.render_to_context(image);
        self.metadata.current_series_instance_uid = Some(series_instance_uid);
        self.metadata.current_index = 0;
        self.metadata.series_total = self
            .image_repository
            .filter_indices(&self.metadata.current_series_instance_uid);
    }

    #[wasm_bindgen]
    pub fn render_next_file(&mut self) {
        self.metadata.current_index += 1;
        let Some(image) = self
            .image_repository
            .get_image_at_index(self.metadata.current_index)
        else {
            self.metadata.current_index -= 1;
            debug!("Next image at {} not found", self.metadata.current_index);
            return;
        };
        self.renderer.render_to_context(image);
    }

    #[wasm_bindgen]
    pub fn render_previous_file(&mut self) {
        self.metadata.current_index = self.metadata.current_index.saturating_sub(1);
        let Some(image) = self
            .image_repository
            .get_image_at_index(self.metadata.current_index)
        else {
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
}

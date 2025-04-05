use dicom_dictionary_std::tags;
use dicom_hierarchy::DicomHierarchy;
use dicom_object::DefaultDicomObject;
use dicom_pixeldata::PixelDecoder;
use image::Image;
use image_repository::ImageRepository;
use js_sys::Uint8Array;
use tracing::info;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::window;

mod dicom_hierarchy;
mod image;
mod image_repository;

#[wasm_bindgen]
struct DicomViewer {
    metadata: MetaData,
    dicom_hierarchy: DicomHierarchy,
    #[wasm_bindgen(skip)]
    image_repository: ImageRepository,
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
        tracing_wasm::set_as_global_default();
        Self {
            metadata: MetaData::new(),
            dicom_hierarchy: DicomHierarchy::new(),
            image_repository: ImageRepository::new(),
        }
    }

    #[wasm_bindgen]
    pub fn reset_filter(&mut self) {
        self.metadata.current_series_instance_uid = None;
        self.metadata.series_total = self
            .image_repository
            .filter_indices(&self.metadata.current_series_instance_uid);
        self.render_file_at_index(0);
    }

    #[wasm_bindgen]
    pub fn read_files(&mut self, files: Vec<Uint8Array>) -> Result<(), JsError> {
        self.reset_images();
        files
            .iter()
            .try_for_each::<_, Result<(), JsError>>(|uint8_array| {
                let bytes: Vec<u8> = uint8_array.to_vec();
                let cursor = std::io::Cursor::new(bytes);

                let dicom_object =
                    dicom_object::from_reader(cursor).map_err(|e| JsError::new(&e.to_string()))?;
                self.dicom_hierarchy.add_patient(&dicom_object);
                // TODO: Move to image repository
                let pixel_data = dicom_object
                    .decode_pixel_data()
                    .map_err(|e| JsError::new(&e.to_string()))?;
                let dynamic_image = pixel_data.to_dynamic_image(0).unwrap();
                let scaled_dynamic_image = dynamic_image.resize(
                    512,
                    512,
                    dicom_pixeldata::image::imageops::FilterType::Nearest,
                );
                let instance_number = dicom_object
                    .element(tags::INSTANCE_NUMBER)
                    .unwrap()
                    .to_int::<u16>()
                    .unwrap();
                let series_instance_uid = dicom_object
                    .element(tags::SERIES_INSTANCE_UID)
                    .unwrap()
                    .to_str()
                    .unwrap()
                    .to_string();
                let rgba8_image = scaled_dynamic_image.to_rgba8();
                self.image_repository.add_image(
                    scaled_dynamic_image.width(),
                    scaled_dynamic_image.height(),
                    rgba8_image,
                    series_instance_uid,
                    instance_number,
                );
                DicomViewer::log_file_infos(&dicom_object);

                Ok(())
            })?;
        info!("{:?}", &self.dicom_hierarchy);
        self.metadata.total = self
            .image_repository
            .filter_indices(&self.metadata.current_series_instance_uid);
        self.metadata.series_total = self.metadata.total;
        Ok(())
    }

    #[wasm_bindgen]
    pub fn render_file_at_index(&mut self, index: usize) {
        let Some(image) = self.image_repository.get_image_at_index(index) else {
            info!("Image at index {} not found", index);
            return;
        };
        DicomViewer::render_to_context(image);
    }

    fn render_first_image_in_series(&self, series_instance_uid: &String) {
        let Some(image) = self
            .image_repository
            .get_first_image_in_series(series_instance_uid)
        else {
            info!("First image in series {} not found", series_instance_uid);
            return;
        };
        DicomViewer::render_to_context(image);
    }

    #[wasm_bindgen]
    pub fn set_current_series_instance_uid(&mut self, series_instance_uid: String) {
        self.render_first_image_in_series(&series_instance_uid);
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
            info!("Next image at {} not found", self.metadata.current_index);
            return;
        };
        DicomViewer::render_to_context(image);
    }

    #[wasm_bindgen]
    pub fn render_previous_file(&mut self) {
        self.metadata.current_index = self.metadata.current_index.saturating_sub(1);
        let Some(image) = self
            .image_repository
            .get_image_at_index(self.metadata.current_index)
        else {
            info!(
                "Previous image at {} not found",
                self.metadata.current_index
            );
            return;
        };
        DicomViewer::render_to_context(image);
    }

    #[wasm_bindgen]
    pub fn get_metadata(&self) -> MetaData {
        self.metadata.clone()
    }

    #[wasm_bindgen]
    pub fn get_dicom_hierarchy(&self) -> JsValue {
        serde_wasm_bindgen::to_value(&self.dicom_hierarchy).unwrap()
    }

    fn reset_images(&mut self) {
        self.metadata = MetaData::new();
        self.image_repository.reset_images();
    }

    fn render_to_context(image: &Image) {
        info!(
            "Rendering file with instance number: {}",
            &image.instance_number
        );
        let rgba_data = &image.image;
        let width = image.width;
        let height = image.height;

        let document = window()
            .and_then(|win| win.document())
            .expect("Could not access the document");

        let canvas = document.get_element_by_id("viewer-canvas").unwrap();

        let canvas: web_sys::HtmlCanvasElement = canvas
            .dyn_into::<web_sys::HtmlCanvasElement>()
            .map_err(|_| ())
            .unwrap();

        let context = canvas
            .get_context("2d")
            .unwrap()
            .unwrap()
            .dyn_into::<web_sys::CanvasRenderingContext2d>()
            .unwrap();

        let image = web_sys::ImageData::new_with_u8_clamped_array_and_sh(
            wasm_bindgen::Clamped(rgba_data),
            width,
            height,
        )
        .unwrap();

        context.clear_rect(0.0, 0.0, canvas.width() as f64, canvas.height() as f64);
        context.put_image_data(&image, 0.0, 0.0).unwrap();
    }

    fn log_file_infos(dicom_object: &DefaultDicomObject) {
        let photometric_interpretation = dicom_object
            .element(tags::PHOTOMETRIC_INTERPRETATION)
            .unwrap()
            .to_str()
            .unwrap();

        let width = dicom_object
            .element(tags::COLUMNS)
            .unwrap()
            .to_int::<u32>()
            .unwrap();
        let height = dicom_object
            .element(tags::ROWS)
            .unwrap()
            .to_int::<u32>()
            .unwrap();

        let bits_allocated = dicom_object
            .element(tags::BITS_ALLOCATED)
            .unwrap()
            .to_int::<u16>()
            .unwrap();

        let instance_number = dicom_object
            .element(tags::INSTANCE_NUMBER)
            .unwrap()
            .to_int::<u16>()
            .unwrap();

        let sop_instance_uid = dicom_object
            .element(tags::SOP_INSTANCE_UID)
            .unwrap()
            .to_str()
            .unwrap();

        info!(
            "\nDICOM Info:\n\
                 Photometric: {}\n\
                 Bits allocated: {}\n\
                 Width: {}\n\
                 Height: {}\n\
                 SOP Instance UID: {}\n\
                 Instance number: {}",
            photometric_interpretation,
            bits_allocated,
            width,
            height,
            sop_instance_uid,
            instance_number
        );
    }
}
#[wasm_bindgen]
pub fn set_console_error_panic_hook() {
    console_error_panic_hook::set_once();
}

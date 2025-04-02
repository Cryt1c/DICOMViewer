use dicom_dictionary_std::tags;
use dicom_hierarchy::DicomHierarchy;
use dicom_object::DefaultDicomObject;
use dicom_pixeldata::image::ImageBuffer;
use dicom_pixeldata::image::Rgba;
use dicom_pixeldata::PixelDecoder;
use js_sys::Uint8Array;
use tracing::info;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::window;

mod dicom_hierarchy;

#[wasm_bindgen]
struct DicomViewer {
    images: Vec<Image>,
    filtered_images: Vec<Image>,
    metadata: MetaData,
    dicom_hierarchy: DicomHierarchy,
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

#[derive(Clone)]
struct Image {
    width: u32,
    height: u32,
    image: ImageBuffer<Rgba<u8>, Vec<u8>>,
    series_instance_uid: String,
    sop_instance_uid: String,
    instance_number: u16,
}

#[wasm_bindgen]
impl DicomViewer {
    #[wasm_bindgen]
    pub fn new() -> Self {
        tracing_wasm::set_as_global_default();
        Self {
            images: Vec::new(),
            filtered_images: Vec::new(),
            metadata: MetaData {
                total: 0,
                current_index: 0,
                series_total: 0,
                current_series_instance_uid: None,
            },
            dicom_hierarchy: DicomHierarchy::new(),
        }
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
                self.dicom_hierarchy.add_patient(dicom_object.clone());
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
                let sop_instance_uid = dicom_object
                    .element(tags::SOP_INSTANCE_UID)
                    .unwrap()
                    .to_str()
                    .unwrap()
                    .to_string();
                let series_instance_uid = dicom_object
                    .element(tags::SERIES_INSTANCE_UID)
                    .unwrap()
                    .to_str()
                    .unwrap()
                    .to_string();
                let rgba8_image = scaled_dynamic_image.to_rgba8();
                let image = Image {
                    width: scaled_dynamic_image.width(),
                    height: scaled_dynamic_image.height(),
                    image: rgba8_image,
                    series_instance_uid,
                    instance_number,
                    sop_instance_uid,
                };

                DicomViewer::log_file_infos(&dicom_object);
                self.images.push(image);

                Ok(())
            })?;
        info!("{:?}", &self.dicom_hierarchy);
        self.metadata.total = self.images.len();
        self.metadata.series_total = self.metadata.total;

        self.images
            .sort_by(|a, b| a.instance_number.cmp(&b.instance_number));
        self.filtered_images = self.images.clone();
        Ok(())
    }

    #[wasm_bindgen]
    pub fn render_file_at_index(&self, index: usize) {
        let image = &self.images[index];
        DicomViewer::render_to_context(image);
    }

    fn render_first_image_in_series(&self, series_instance_uid: &String) {
        let image = &self
            .images
            .iter()
            .find(|&image| image.series_instance_uid == *series_instance_uid)
            .unwrap();
        DicomViewer::render_to_context(image);
    }

    #[wasm_bindgen]
    pub fn set_current_series_instance_uid(&mut self, series_instance_uid: String) {
        self.render_first_image_in_series(&series_instance_uid);
        self.metadata.current_series_instance_uid = Some(series_instance_uid);
        self.metadata.current_index = 0;
        self.filtered_images = self.filter_images();
        self.metadata.series_total = self.filtered_images.len();
    }

    fn filter_images(&self) -> Vec<Image> {
        let current_series_instance_uid =
            self.metadata.current_series_instance_uid.as_ref().unwrap();
        self.images
            .clone()
            .into_iter()
            .filter(|image| &image.series_instance_uid == current_series_instance_uid)
            .collect()
    }

    #[wasm_bindgen]
    pub fn render_next_file(&mut self) {
        if self.metadata.current_index < &self.filtered_images.len() - 1 {
            self.metadata.current_index += 1;
            let current_image = &self.filtered_images[self.metadata.current_index];
            DicomViewer::render_to_context(current_image);
        }
    }

    #[wasm_bindgen]
    pub fn render_previous_file(&mut self) {
        if self.metadata.current_index > 0 {
            self.metadata.current_index -= 1;
            let current_image = &self.filtered_images[self.metadata.current_index];
            DicomViewer::render_to_context(current_image);
        }
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
        self.images = vec![];
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

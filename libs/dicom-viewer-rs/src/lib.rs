use dicom_dictionary_std::tags;
use dicom_object::DefaultDicomObject;
use dicom_pixeldata::image::ImageBuffer;
use dicom_pixeldata::image::Rgba;
use dicom_pixeldata::PixelDecoder;
use js_sys::Uint8Array;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::window;

#[wasm_bindgen]
struct DicomViewer {
    images: Vec<Image>,
    metadata: MetaData,
}

#[wasm_bindgen]
#[derive(Clone)]
struct MetaData {
    pub total: usize,
    pub current_index: usize,
}

#[wasm_bindgen]
impl MetaData {
    #[wasm_bindgen]
    pub fn new() -> Self {
        Self {
            total: 0,
            current_index: 0,
        }
    }
}

#[derive(Clone)]
struct Image {
    width: u32,
    height: u32,
    image: ImageBuffer<Rgba<u8>, Vec<u8>>,
}

#[wasm_bindgen]
impl DicomViewer {
    #[wasm_bindgen]
    pub fn new() -> Self {
        Self {
            images: Vec::new(),
            metadata: MetaData {
                total: 0,
                current_index: 0,
            },
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
                let pixel_data = dicom_object
                    .decode_pixel_data()
                    .map_err(|e| JsError::new(&e.to_string()))?;
                let dynamic_image = pixel_data.to_dynamic_image(0).unwrap();
                let scaled_dynamic_image = dynamic_image.resize(
                    512,
                    512,
                    dicom_pixeldata::image::imageops::FilterType::Nearest,
                );
                let rgba8_image = scaled_dynamic_image.to_rgba8();
                let image = Image {
                    width: scaled_dynamic_image.width(),
                    height: scaled_dynamic_image.height(),
                    image: rgba8_image,
                };

                DicomViewer::log_file_infos(&dicom_object);
                self.images.push(image);

                Ok(())
            })?;
        self.metadata.total = self.images.len();
        Ok(())
    }

    #[wasm_bindgen]
    pub fn render_file_at_index(&self, index: usize) {
        let image = &self.images[index];
        DicomViewer::render_to_context(image);
    }

    #[wasm_bindgen]
    pub fn render_next_file(&mut self) {
        let upper_limit = self.images.len() - 1;
        if self.metadata.current_index < upper_limit {
            self.metadata.current_index += 1;
            let image = &self.images[self.metadata.current_index];
            DicomViewer::render_to_context(image);
        }
    }

    #[wasm_bindgen]
    pub fn render_previous_file(&mut self) {
        if self.metadata.current_index > 0 {
            self.metadata.current_index -= 1;
            let image = &self.images[self.metadata.current_index];
            DicomViewer::render_to_context(image);
        }
    }

    #[wasm_bindgen]
    pub fn get_metadata(&self) -> MetaData {
        self.metadata.clone()
    }

    fn reset_images(&mut self) {
        self.metadata = MetaData::new();
        self.images = vec![];
    }

    fn render_to_context(image: &Image) {
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

        web_sys::console::log_1(
            &format!(
                "DICOM Info:\n\
                 Photometric: {}\n\
                 Bits allocated: {}\n\
                 Width: {}\n\
                 Height: {}",
                photometric_interpretation, bits_allocated, width, height
            )
            .into(),
        );
    }
}
#[wasm_bindgen]
pub fn set_console_error_panic_hook() {
    console_error_panic_hook::set_once();
}

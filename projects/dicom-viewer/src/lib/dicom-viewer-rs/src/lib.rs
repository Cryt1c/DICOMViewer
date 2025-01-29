use dicom_dictionary_std::tags;
use dicom_object::DefaultDicomObject;
use dicom_pixeldata::PixelDecoder;
use dicom_pixeldata::image::ImageBuffer;
use dicom_pixeldata::image::Rgba;
use js_sys::Uint8Array;
use wasm_bindgen::JsCast;
use wasm_bindgen::prelude::*;
use web_sys::window;

#[wasm_bindgen]
struct DicomViewer {
    images: Vec<Image>,
    current_index: usize,
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
        return Self {
            images: Vec::new(),
            current_index: 0,
        };
    }

    #[wasm_bindgen]
    pub fn read_files(&mut self, files: Vec<Uint8Array>) {
        files.iter().for_each(|uint8_array| {
            let bytes: Vec<u8> = uint8_array.to_vec();
            let cursor = std::io::Cursor::new(bytes);

            let dicom_object = dicom_object::from_reader(cursor).unwrap();
            let pixel_data = dicom_object.decode_pixel_data().unwrap();
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
            let dynamic_image = pixel_data.to_dynamic_image(0).unwrap();
            let rgba8_image = dynamic_image.to_rgba8();
            let image = Image {
                width,
                height,
                image: rgba8_image,
            };

            DicomViewer::log_file_infos(&dicom_object);
            self.images.push(image);
        })
    }

    #[wasm_bindgen]
    pub fn render_file_at_index(&self, index: usize) {
        let image = &self.images[index];
        let dynamic_image = &image.image;
        let width = image.width;
        let height = image.height;
        DicomViewer::render_to_context(&dynamic_image, width, height);
    }

    #[wasm_bindgen]
    pub fn render_next_file(&mut self) {
        let upper_limit = self.images.len() - 1;
        if self.current_index < upper_limit {
            self.current_index += 1;
            web_sys::console::log_2(&"Rendering file nr: ".into(), &self.current_index.into());
            let image = &self.images[self.current_index];
            let dynamic_image = &image.image;
            let width = image.width;
            let height = image.height;
            DicomViewer::render_to_context(&dynamic_image, width, height);
        }
    }

    #[wasm_bindgen]
    pub fn render_previous_file(&mut self) {
        if self.current_index > 0 {
            self.current_index -= 1;
            web_sys::console::log_2(&"Rendering file nr: ".into(), &self.current_index.into());
            let image = &self.images[self.current_index];
            let dynamic_image = &image.image;
            let width = image.width;
            let height = image.height;
            DicomViewer::render_to_context(&dynamic_image, width, height);
        }
    }

    fn render_to_context(rgba_data: &ImageBuffer<Rgba<u8>, Vec<u8>>, height: u32, width: u32) {
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
            wasm_bindgen::Clamped(&rgba_data),
            width,
            height,
        )
        .unwrap();

        // Put the image data on the canvas
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

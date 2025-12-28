use dicom_pixeldata::image::{DynamicImage, ImageBuffer, Luma, Rgba};
use wasm_bindgen::{Clamped, JsCast};
use web_sys::{CanvasRenderingContext2d, HtmlCanvasElement, ImageData, window};

use crate::debug::timeit;

pub struct Renderer {
    context: CanvasRenderingContext2d,
    canvas: HtmlCanvasElement,
}

impl Renderer {
    pub fn new(canvas_id: &str) -> Self {
        let document = window()
            .and_then(|win| win.document())
            .expect("Could not access the document");

        let canvas = document.get_element_by_id(canvas_id).unwrap();
        let canvas: HtmlCanvasElement = canvas
            .dyn_into::<HtmlCanvasElement>()
            .map_err(|_| ())
            .unwrap();

        let context = canvas
            .get_context("2d")
            .unwrap()
            .unwrap()
            .dyn_into::<CanvasRenderingContext2d>()
            .unwrap();
        Self { context, canvas }
    }

    pub fn render_to_context(&self, image: ImageBuffer<Luma<u8>, Vec<u8>>) {
        let width = image.width();
        let height = image.height();

        let rgba_data: Vec<u8> = timeit(
            || {
                let gray_data = image.as_raw();
                let len = gray_data.len();
                let mut rgba = Vec::with_capacity(len * 4);

                unsafe {
                    let ptr: *mut u8 = rgba.as_mut_ptr();
                    for (i, &gray) in gray_data.iter().enumerate() {
                        let offset = i * 4;
                        *ptr.add(offset) = gray;
                        *ptr.add(offset + 1) = gray;
                        *ptr.add(offset + 2) = gray;
                        *ptr.add(offset + 3) = 255;
                    }
                    rgba.set_len(len * 4);
                }

                rgba
            },
            "luma_to_rgba",
        );

        let image = ImageData::new_with_u8_clamped_array_and_sh(Clamped(&rgba_data), width, height)
            .unwrap();

        self.clear_canvas();
        self.context.put_image_data(&image, 0.0, 0.0).unwrap();
    }

    pub fn clear_canvas(&self) {
        self.context.clear_rect(
            0.0,
            0.0,
            self.canvas.width() as f64,
            self.canvas.height() as f64,
        );
    }
}

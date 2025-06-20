use js_sys::Uint8ClampedArray;
use wasm_bindgen::{Clamped, JsCast};
use web_sys::{window, CanvasRenderingContext2d, HtmlCanvasElement, ImageData};

use crate::image::Image;

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

    pub fn render_to_context(&self, image: &Image) {
        let luma_data = &image.image;
        let width = image.width;
        let height = image.height;
        let mut rgba_data = Vec::with_capacity((width * height * 4) as usize);

        for &luma in luma_data.iter() {
            rgba_data.push(luma);
            rgba_data.push(luma);
            rgba_data.push(luma);
            rgba_data.push(255);
        }

                // Create non-shared Uint8ClampedArray in JS memory
        let js_array = Uint8ClampedArray::new_with_length(rgba_data.len() as u32);

        // Copy data from shared WASM memory to JS memory
        js_array.copy_from(&rgba_data[..]);

        let image_data =
            ImageData::new_with_js_u8_clamped_array_and_sh(&js_array, width, height).unwrap();

        self.clear_canvas();
        self.context.put_image_data(&image_data, 0.0, 0.0).unwrap();
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

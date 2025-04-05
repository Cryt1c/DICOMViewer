use wasm_bindgen::{Clamped, JsCast};
use web_sys::{window, CanvasRenderingContext2d, HtmlCanvasElement, ImageData};

use crate::image::Image;

pub struct Renderer {
    context: CanvasRenderingContext2d,
    canvas: HtmlCanvasElement,
}

impl Renderer {
    pub fn new() -> Self {
        let document = window()
            .and_then(|win| win.document())
            .expect("Could not access the document");

        let canvas = document.get_element_by_id("viewer-canvas").unwrap();
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
        let rgba_data = &image.image;
        let width = image.width;
        let height = image.height;
        let image =
            ImageData::new_with_u8_clamped_array_and_sh(Clamped(rgba_data), width, height).unwrap();

        self.context.clear_rect(
            0.0,
            0.0,
            self.canvas.width() as f64,
            self.canvas.height() as f64,
        );
        self.context.put_image_data(&image, 0.0, 0.0).unwrap();
    }
}

use crate::debug::timeit;
use dicom_pixeldata::image::{ImageBuffer, Luma};
use wasm_bindgen::{Clamped, JsCast};
use web_sys::{CanvasRenderingContext2d, HtmlCanvasElement, ImageData, window};

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

        // Resize canvas to match image
        self.canvas.set_width(width);
        self.canvas.set_height(height);

        // Convert to RGBA
        let rgba_data: Vec<u8> = timeit(
            || {
                image
                    .as_raw()
                    .iter()
                    .flat_map(|&gray| [gray, gray, gray, 255])
                    .collect()
            },
            "luma_to_rgba",
        );

        let image_data =
            ImageData::new_with_u8_clamped_array_and_sh(Clamped(&rgba_data), width, height)
                .unwrap();

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

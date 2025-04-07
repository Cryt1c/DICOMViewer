use dicom_pixeldata::image::{ImageBuffer, Rgba};

pub struct Image {
    pub width: u32,
    pub height: u32,
    pub image: ImageBuffer<Rgba<u8>, Vec<u8>>,
    pub series_instance_uid: String,
    pub table_position: f32,
}

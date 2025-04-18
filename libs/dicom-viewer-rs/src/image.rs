use std::cmp::Ordering;
use dicom_pixeldata::image::{ImageBuffer, Rgba};

pub struct Image {
    pub width: u32,
    pub height: u32,
    pub image: ImageBuffer<Rgba<u8>, Vec<u8>>,
    pub series_instance_uid: String,
    pub order: f32,
}

impl PartialEq for Image {
    fn eq(&self, other: &Self) -> bool {
        self.series_instance_uid == other.series_instance_uid && self.order == other.order
    }
}

impl Eq for Image {}

impl PartialOrd for Image {
    fn partial_cmp(&self, other: &Self) -> Option<std::cmp::Ordering> {
        Some(self.cmp(other))
    }
}

impl Ord for Image {
    fn cmp(&self, other: &Self) -> std::cmp::Ordering {
        let uid_comparison = self.series_instance_uid.cmp(&other.series_instance_uid);

        if uid_comparison == Ordering::Equal {
            self.order.partial_cmp(&other.order).unwrap_or(Ordering::Equal)
        } else {
            uid_comparison
        }
    }
}

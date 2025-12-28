use dicom_pixeldata::image::{ImageBuffer, Rgba};
use dicom_volume::volume::Volume;
use std::cmp::Ordering;

pub struct VolumeContainer {
    pub volume: Volume,
    pub series_instance_uid: String,
}

use dicom_dictionary_std::tags;
use dicom_object::{FileDicomObject, InMemDicomObject};
use dicom_pixeldata::image::{ImageBuffer, Luma};
use dicom_volume::enums::{Interpolation, Orientation, Processor};
use thiserror::Error;
use tracing::debug;

use crate::{debug::timeit, volume::VolumeContainer};

pub struct ImageRepository {
    volume_containers: Vec<VolumeContainer>,
    filter_indices: Vec<usize>,
}

#[derive(Error, Debug)]
pub enum ImageRepositoryError {
    #[error("Pixel data processing error: {0}")]
    DicomPixelDataError(#[from] dicom_pixeldata::Error),

    #[error("Failed to access DICOM element: {0}")]
    DicomElementAccessError(#[from] dicom_object::AccessError),

    #[error("Failed to convert DICOM element: {0}")]
    DicomElementConversionError(#[from] dicom_core::value::ConvertValueError),
}

impl ImageRepository {
    pub fn new() -> Self {
        Self {
            volume_containers: Vec::new(),
            filter_indices: Vec::new(),
        }
    }

    pub fn filter_indices(
        &mut self,
        series_instance_uid: &Option<String>,
        mpr_orientation: Orientation,
    ) -> usize {
        // TODO: Fix filtering of indices
        let filter_indices: Vec<usize> = if series_instance_uid.is_none() {
            (0..self.volume_containers.len()).collect()
        } else {
            self.volume_containers
                .iter()
                .enumerate()
                .filter(|(_, image)| {
                    &image.series_instance_uid == series_instance_uid.as_ref().unwrap()
                })
                .map(|(index, _)| index)
                .collect()
        };
        self.filter_indices = filter_indices;
        self.get_total_from_axis(mpr_orientation)
    }

    pub fn get_total_from_axis(&self, mpr_orientation: Orientation) -> usize {
        let volume_container = self.volume_containers.get(0).unwrap();
        debug!(
            "asdf volume_continer.volume.interpolated_dim {:?}",
            volume_container.volume.interpolated_dim
        );
        return match mpr_orientation {
            Orientation::Axial => volume_container.volume.dim().0,
            Orientation::Coronal => volume_container.volume.interpolated_dim.1 as usize,
            Orientation::Sagittal => volume_container.volume.interpolated_dim.2 as usize,
        };
    }

    pub fn add_volume_containers(&mut self, volume_containers: Vec<VolumeContainer>) {
        self.volume_containers = volume_containers;
    }

    fn get_image_order(dicom_object: &FileDicomObject<InMemDicomObject>) -> f32 {
        let table_position = dicom_object
            .element(tags::TABLE_POSITION)
            .ok()
            .and_then(|element| element.to_float32().ok());
        if let Some(table_position) = table_position {
            table_position
        } else {
            dicom_object
                .element(tags::INSTANCE_NUMBER)
                .ok()
                .and_then(|element| element.to_float32().ok())
                .unwrap_or(0.0)
        }
    }

    pub fn get_image_at_index(
        &self,
        index: usize,
        orientation: Orientation,
    ) -> Option<ImageBuffer<Luma<u8>, Vec<u8>>> {
        // TODO:Fix mapped_index
        let mapped_index = &0;
        let volume_container = self
            .volume_containers
            .get(*mapped_index)
            .expect("should have a volume in volume_containers");
        let result = timeit(
            || {
                volume_container.volume.get_image_from_axis(
                    index,
                    orientation,
                    Interpolation::Bilinear(Processor::CPU),
                )
            },
            "get_image_from_axis",
        );
        result
    }
}

use dicom_pixeldata::image::{ImageBuffer, Luma};
use dicom_volume::{
    enums::{Interpolation, Orientation},
    gpu_interpolator::GpuInterpolator,
    volume::Volume,
};
use std::collections::BTreeMap;
use thiserror::Error;
use tracing::info;
pub struct ImageRepository {
    volumes: BTreeMap<String, Volume>,
    gpu_interpolator: Option<GpuInterpolator>,
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
            volumes: BTreeMap::new(),
            gpu_interpolator: None,
        }
    }

    pub fn get_total_from_axis(
        &self,
        series_instance_uid_option: &Option<String>,
        mpr_orientation: Orientation,
    ) -> usize {
        let volume = match series_instance_uid_option {
            Some(series_instance_uid) => self.volumes.get(series_instance_uid).unwrap(),
            None => self.volumes.first_key_value().unwrap().1,
        };
        return match mpr_orientation {
            Orientation::Axial => volume.dim().0,
            Orientation::Coronal => volume.interpolated_dim.1 as usize,
            Orientation::Sagittal => volume.interpolated_dim.2 as usize,
        };
    }

    pub fn add_volumes(&mut self, volumes: BTreeMap<String, Volume>) {
        self.volumes = volumes;
    }

    pub async fn get_image_at_index(
        &mut self,
        series_instance_uid_option: &Option<String>,
        index: usize,
        orientation: Orientation,
    ) -> Option<ImageBuffer<Luma<u8>, Vec<u8>>> {
        // TODO: Check if needs to be &mut VolumeContainer
        let volume = match series_instance_uid_option {
            Some(series_instance_uid) => self.volumes.get(series_instance_uid).unwrap(),
            None => self.volumes.first_key_value().unwrap().1,
        };
        if self.gpu_interpolator.is_none() {
            self.gpu_interpolator = Some(GpuInterpolator::new(&volume.data, volume.spacing).await);
        }
        let gpu_interpolator = if index % 2 == 0 {
            self.gpu_interpolator.as_ref()
        } else {
            None
        };
        info!("Is gpu?{:?}", gpu_interpolator.is_some());
        let result = volume.get_image_from_axis(
            index,
            orientation,
            Interpolation::Linear,
            self.gpu_interpolator.as_ref(),
        );
        result.await
    }
}

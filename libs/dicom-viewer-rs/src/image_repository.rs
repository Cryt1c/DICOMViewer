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
    volumes: BTreeMap<String, VolumeEntry>,
    use_gpu: bool,
}

struct VolumeEntry {
    volume: Volume,
    gpu_interpolator: Option<GpuInterpolator>,
    gpu_init_attempted: bool,
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
            use_gpu: true,
        }
    }

    pub fn set_use_gpu(&mut self, use_gpu: bool) {
        self.use_gpu = use_gpu;
        if use_gpu {
            for entry in self.volumes.values_mut() {
                entry.gpu_init_attempted = false;
            }
        }
    }

    fn get_entry_mut(
        &mut self,
        series_instance_uid_option: &Option<String>,
    ) -> Option<&mut VolumeEntry> {
        match series_instance_uid_option {
            Some(series_instance_uid) => self.volumes.get_mut(series_instance_uid),
            None => self.volumes.values_mut().next(),
        }
    }

    pub async fn ensure_gpu_interpolator(
        &mut self,
        series_instance_uid_option: &Option<String>,
    ) -> bool {
        if !self.use_gpu {
            return false;
        }

        let Some(entry) = self.get_entry_mut(series_instance_uid_option) else {
            return false;
        };

        if entry.gpu_interpolator.is_none() && !entry.gpu_init_attempted {
            entry.gpu_init_attempted = true;
            entry.gpu_interpolator =
                GpuInterpolator::try_new(&entry.volume.data, entry.volume.spacing).await;
            if entry.gpu_interpolator.is_some() {
                info!("GPU interpolation enabled");
            } else {
                info!("GPU interpolation unavailable, falling back to CPU");
            }
        }

        entry.gpu_interpolator.is_some()
    }

    pub fn is_gpu_active(&self, series_instance_uid_option: &Option<String>) -> bool {
        if !self.use_gpu {
            return false;
        }

        let entry = match series_instance_uid_option {
            Some(series_instance_uid) => self.volumes.get(series_instance_uid),
            None => self.volumes.values().next(),
        };
        entry.is_some_and(|entry| entry.gpu_interpolator.is_some())
    }

    pub fn get_total_from_axis(
        &self,
        series_instance_uid_option: &Option<String>,
        mpr_orientation: Orientation,
    ) -> usize {
        let volume = match series_instance_uid_option {
            Some(series_instance_uid) => self
                .volumes
                .get(series_instance_uid)
                .map(|entry| &entry.volume),
            None => self.volumes.values().next().map(|entry| &entry.volume),
        };
        let Some(volume) = volume else {
            return 0;
        };
        match mpr_orientation {
            Orientation::Axial => volume.dim().0,
            Orientation::Coronal => volume.dim().1,
            Orientation::Sagittal => volume.dim().2,
        }
    }

    pub fn add_volumes(&mut self, volumes: BTreeMap<String, Volume>) {
        self.volumes = volumes
            .into_iter()
            .map(|(key, volume)| {
                (
                    key,
                    VolumeEntry {
                        volume,
                        gpu_interpolator: None,
                        gpu_init_attempted: false,
                    },
                )
            })
            .collect();
    }

    pub async fn get_image_at_index(
        &mut self,
        series_instance_uid_option: &Option<String>,
        index: usize,
        orientation: Orientation,
    ) -> Option<ImageBuffer<Luma<u8>, Vec<u8>>> {
        // The GPU interpolator uploads the whole volume to a 3D texture, so
        // only initialize it once we actually need an interpolated slice.
        // Axial slices are already isotropic in-plane and are read directly.
        if self.use_gpu && !matches!(orientation, Orientation::Axial) {
            self.ensure_gpu_interpolator(series_instance_uid_option)
                .await;
        }

        let use_gpu = self.use_gpu;
        let entry = self.get_entry_mut(series_instance_uid_option)?;
        let gpu_interpolator = if use_gpu {
            entry.gpu_interpolator.as_mut()
        } else {
            None
        };

        entry
            .volume
            .get_image_from_axis(index, orientation, Interpolation::Linear, gpu_interpolator)
            .await
    }
}

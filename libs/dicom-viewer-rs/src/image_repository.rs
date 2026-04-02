use dicom_dictionary_std::tags;
use dicom_object::{FileDicomObject, InMemDicomObject};
use dicom_pixeldata::PixelDecoder;
use thiserror::Error;

use crate::image::Image;

pub struct ImageRepository {
    images: Vec<Image>,
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
            images: Vec::new(),
            filter_indices: Vec::new(),
        }
    }

    fn sort_indices(&mut self) {
        self.filter_indices
            .sort_by(|&a, &b| self.images[a].cmp(&self.images[b]));
    }

    fn split_and_filter_using_filter_key(&self, filter_key: &str) -> Vec<usize> {
        let mut filter_key_split = filter_key.split("_acq_");
        let Some(series_instance_uid) = filter_key_split.next() else {
            return (0..self.images.len()).collect();
        };
        let filtered_by_series = self
            .images
            .iter()
            .enumerate()
            .filter(|(_, image)| &image.series_instance_uid == series_instance_uid);
        let Some(acquisition_string) = filter_key_split.next() else {
            return filtered_by_series.map(|(index, _)| index).collect();
        };
        let Ok(acquisition_number) = acquisition_string.parse::<u16>() else {
            return filtered_by_series.map(|(index, _)| index).collect();
        };
        let filtered_by_series_and_acquisition =
            filtered_by_series.filter(|(_, image)| image.acquisition_number == acquisition_number);
        return filtered_by_series_and_acquisition
            .map(|(index, _)| index)
            .collect();
    }

    pub fn filter_indices(&mut self, filter_key: &Option<String>) -> usize {
        let filter_indices: Vec<usize> = match filter_key {
            Some(filter_key) => self.split_and_filter_using_filter_key(filter_key),
            None => (0..self.images.len()).collect(),
        };

        let filtered_length = filter_indices.len();
        self.filter_indices = filter_indices;
        self.sort_indices();
        filtered_length
    }

    pub fn add_image(
        &mut self,
        dicom_object: &FileDicomObject<InMemDicomObject>,
    ) -> Result<(), ImageRepositoryError> {
        let pixel_data = dicom_object.decode_pixel_data_frame(0)?;
        let dynamic_image = pixel_data.to_dynamic_image(0)?;
        let scaled_dynamic_image = dynamic_image.resize(
            512,
            512,
            dicom_pixeldata::image::imageops::FilterType::Nearest,
        );
        let rgba8_image = scaled_dynamic_image.to_rgba8();
        let series_instance_uid = dicom_object
            .element(tags::SERIES_INSTANCE_UID)?
            .to_str()?
            .to_string();

        let acquisition_number = dicom_object.element(tags::ACQUISITION_NUMBER)?.to_int()?;

        let image = Image {
            width: scaled_dynamic_image.width(),
            height: scaled_dynamic_image.height(),
            image: rgba8_image,
            series_instance_uid,
            acquisition_number,
            order: ImageRepository::get_image_order(dicom_object),
        };
        self.images.push(image);
        Ok(())
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

    pub fn get_image_at_index(&self, index: usize) -> Option<&Image> {
        let mapped_index = self.filter_indices.get(index)?;
        self.images.get(*mapped_index)
    }
}

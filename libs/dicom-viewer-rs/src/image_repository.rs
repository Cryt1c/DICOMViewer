use dicom_dictionary_std::tags;
use dicom_object::{FileDicomObject, InMemDicomObject};
use dicom_pixeldata::PixelDecoder;
use std::error::Error;

use crate::image::Image;

pub struct ImageRepository {
    images: Vec<Image>,
    filter_indices: Vec<usize>,
}

impl ImageRepository {
    pub fn new() -> Self {
        Self {
            images: Vec::new(),
            filter_indices: Vec::new(),
        }
    }

    fn sort_indices(&mut self) {
        self.filter_indices.sort_by(|&a, &b| {
            let img_a = &self.images[a];
            let img_b = &self.images[b];
            img_a.instance_number.cmp(&img_b.instance_number)
        });
    }

    pub fn filter_indices(&mut self, series_instance_uid: &Option<String>) -> usize {
        let filter_indices: Vec<usize> = if series_instance_uid.is_none() {
            (0..self.images.len()).collect()
        } else {
            self.images
                .iter()
                .enumerate()
                .filter(|(_, image)| {
                    &image.series_instance_uid == series_instance_uid.as_ref().unwrap()
                })
                .map(|(index, _)| index)
                .collect()
        };
        let filtered_length = filter_indices.len();
        self.filter_indices = filter_indices;
        self.sort_indices();
        filtered_length
    }

    pub fn add_image(
        &mut self,
        dicom_object: &FileDicomObject<InMemDicomObject>,
    ) -> Result<(), Box<dyn Error>> {
        let pixel_data = dicom_object.decode_pixel_data()?;
        let dynamic_image = pixel_data.to_dynamic_image(0)?;
        let scaled_dynamic_image = dynamic_image.resize(
            512,
            512,
            dicom_pixeldata::image::imageops::FilterType::Nearest,
        );
        let instance_number = dicom_object
            .element(tags::INSTANCE_NUMBER)?
            .to_int::<u16>()?;
        let series_instance_uid = dicom_object
            .element(tags::SERIES_INSTANCE_UID)?
            .to_str()?
            .to_string();
        let rgba8_image = scaled_dynamic_image.to_rgba8();
        self.images.push(Image {
            width: scaled_dynamic_image.width(),
            height: scaled_dynamic_image.height(),
            image: rgba8_image,
            series_instance_uid,
            instance_number,
        });
        Ok(())
    }

    pub fn get_image_at_index(&self, index: usize) -> Option<&Image> {
        let mapped_index = self.filter_indices.get(index)?;
        self.images.get(*mapped_index)
    }

    pub fn get_first_image_in_series(&self, series_instance_uid: &String) -> Option<&Image> {
        self.images
            .iter()
            .find(|&image| image.series_instance_uid == *series_instance_uid)
    }

    pub fn reset_images(&mut self) {
        self.images = vec![];
    }
}

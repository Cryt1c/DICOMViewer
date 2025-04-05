use dicom_pixeldata::image::{ImageBuffer, Rgba};

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
        width: u32,
        height: u32,
        image: ImageBuffer<Rgba<u8>, Vec<u8>>,
        series_instance_uid: String,
        instance_number: u16,
    ) {
        self.images.push(Image {
            width,
            height,
            image,
            series_instance_uid,
            instance_number,
        })
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

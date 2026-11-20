use dicom_pixeldata::image::ImageBuffer;

use crate::image::Image;

const DEFAULT_ACQUISITION_NUMBER: u16 = 0;

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

    pub fn add_image_data(
        &mut self,
        width: u32,
        height: u32,
        luma: Vec<u8>,
        series_instance_uid: String,
        acquisition_number: Option<u16>,
        order: f32,
    ) {
        let image = Image {
            width,
            height,
            image: ImageBuffer::from_raw(width, height, luma)
                .expect("luma buffer length should match image dimensions"),
            series_instance_uid,
            acquisition_number: acquisition_number.unwrap_or(DEFAULT_ACQUISITION_NUMBER),
            order,
        };
        self.images.push(image);
    }

    pub fn get_image_at_index(&self, index: usize) -> Option<&Image> {
        let mapped_index = self.filter_indices.get(index)?;
        self.images.get(*mapped_index)
    }
}

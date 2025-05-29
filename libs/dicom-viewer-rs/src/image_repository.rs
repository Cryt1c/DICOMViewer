use dicom_dictionary_std::tags;
use dicom_object::{FileDicomObject, InMemDicomObject};
use dicom_pixeldata::{
    image::{ImageBuffer, Rgba},
    ndarray::{s, stack, Array3, ArrayBase, Axis, Dim, OwnedRepr},
    ConvertOptions, ModalityLutOption, PixelDecoder, VoiLutOption,
};
use thiserror::Error;
use tracing::debug;

use crate::{debug::timeit, image::Image, Orientation};

pub struct ImageRepository {
    images: Vec<Image>,
    filter_indices: Vec<usize>,
    slices: Vec<ArrayBase<OwnedRepr<f32>, Dim<[usize; 2]>>>,
    slice_array: ArrayBase<OwnedRepr<f32>, Dim<[usize; 3]>>,
    slice_array_original: ArrayBase<OwnedRepr<f32>, Dim<[usize; 3]>>,
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
            slices: Vec::new(),
            slice_array: Array3::<f32>::zeros((0, 0, 0)),
            slice_array_original: Array3::<f32>::zeros((0, 0, 0)),
        }
    }

    fn sort_indices(&mut self) {
        self.filter_indices
            .sort_by(|&a, &b| self.images[a].cmp(&self.images[b]));
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

    pub fn create_slice_array(&mut self) {
        let min = 0.0;
        let max = 65535.0;
        self.slice_array = stack(
            Axis(0),
            &self.slices.iter().map(|a| a.view()).collect::<Vec<_>>(),
        )
        .unwrap();

        let slice_array_norm =
            (&self.slice_array + f32::abs(min)) / (f32::abs(min) + f32::abs(max));
        let slice_array_255 = slice_array_norm * 255.0;
        self.slice_array = slice_array_255.clone();
        self.slice_array_original = slice_array_255;
        // Delete items and clear memory.
        self.slices.clear();
        self.slices.shrink_to_fit();
    }

    pub fn add_image(
        &mut self,
        dicom_object: &FileDicomObject<InMemDicomObject>,
    ) -> Result<(), ImageRepositoryError> {
        let pixel_data = dicom_object.decode_pixel_data()?;
        let series_instance_uid = dicom_object
            .element(tags::SERIES_INSTANCE_UID)?
            .to_str()?
            .to_string();
        // let dynamic_image = pixel_data.to_dynamic_image(0)?;
        // let scaled_dynamic_image = dynamic_image.resize(
        //     512,
        //     512,
        //     dicom_pixeldata::image::imageops::FilterType::Nearest,
        // );
        // TODO: Use to_luma8() instead.
        // let rgba8_image = scaled_dynamic_image.to_rgba8();

        // TODO: Use f16 to reduce memory usage.
        let options = ConvertOptions::new()
            .with_modality_lut(ModalityLutOption::Default)
            .with_voi_lut(VoiLutOption::First)
            .force_8bit();
        let ndarray_4 = timeit(
            || pixel_data.to_ndarray_with_options::<f32>(&options),
            "to_ndarray_with_options",
        )?;
        let ndarray_2 = timeit(
            || ndarray_4.slice(s![0, .., .., 0]).to_owned(),
            "slice, to_owned",
        );
        let image = Image {
            width: ndarray_2.shape()[0] as u32,
            height: ndarray_2.shape()[1] as u32,
            image: None,
            series_instance_uid,
            order: ImageRepository::get_image_order(dicom_object),
        };
        self.slices.push(ndarray_2);

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

    // TODO: Fix filter and ordering for volume.
    // pub fn get_image_at_index(&self, index: usize) -> Option<&Image> {
    //     let mapped_index = self.filter_indices.get(index)?;
    //     self.images.get(*mapped_index)
    // }

    pub fn set_volume_orientation(&mut self, orientation: &Orientation) {
        let volume = self
            .slice_array_original
            .clone()
            .permuted_axes(orientation.get_permutation());

        self.slice_array = match orientation {
            Orientation::Axial => volume,
            Orientation::Coronal => volume.slice_move(s![.., ..;-1, ..]),
            Orientation::Sagittal => volume.slice_move(s![.., ..;-1, ..]),
        };
    }

    pub fn get_image_from_volume(&mut self, index: usize) -> Option<Image> {
        let volume = &self.slice_array;
        let length = volume.dim().0;
        if index >= length {
            return None;
        }
        debug!("dim {:?}", volume.dim());
        let width = volume.dim().2 as u32;
        let height = volume.dim().1 as u32;
        let slice = volume.slice(s![index, .., ..]);

        let mut pixel_data = Vec::with_capacity((width * height * 4) as usize);
        for &value in slice.iter() {
            let pixel_value = value as u8;
            // Add RGBA components (using the same value for R, G, B and 255 for A)
            pixel_data.push(pixel_value);
            pixel_data.push(pixel_value);
            pixel_data.push(pixel_value);
            pixel_data.push(255); // Alpha channel (fully opaque)
        }
        let image: ImageBuffer<Rgba<u8>, Vec<u8>> =
            ImageBuffer::from_raw(width, height, pixel_data).unwrap();
        let image = Image {
            width,
            height,
            image: Some(image),
            series_instance_uid: "asdf".to_owned(),
            order: 1.0,
        };
        Some(image)
    }

    pub fn get_total(&self) -> usize {
        self.slice_array.shape()[0]
    }

    pub fn get_first_image_in_series(&self, series_instance_uid: &String) -> Option<&Image> {
        self.images
            .iter()
            .find(|&image| image.series_instance_uid == *series_instance_uid)
    }
}

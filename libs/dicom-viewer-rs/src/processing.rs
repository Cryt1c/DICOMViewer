use dicom_dictionary_std::tags;
use dicom_object::{FileDicomObject, InMemDicomObject};
use dicom_pixeldata::PixelDecoder;
use serde::{Deserialize, Serialize};
use thiserror::Error;
use wasm_bindgen::prelude::*;

const TARGET_SIZE: u32 = 512;

const UNKNOWN_PATIENT_ID: &str = "UNKNOWN";
const UNKNOWN_STUDY_INSTANCE_UID: &str = "UNKNOWN";
const UNKNOWN_SERIES_INSTANCE_UID: &str = "UNKNOWN";
const UNKNOWN_SOP_INSTANCE_UID: &str = "UNKNOWN";

/// Everything a decoded DICOM file carries across the worker boundary:
/// the decoded image geometry plus the fields needed to build the
/// patient/study/series/instance hierarchy.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ProcessedFileMeta {
    pub width: u32,
    pub height: u32,
    pub series_instance_uid: String,
    pub acquisition_number: Option<u16>,
    pub order: f32,
    pub patient_id: String,
    pub study_instance_uid: String,
    pub study_description: Option<String>,
    pub series_number: Option<u16>,
    pub series_description: Option<String>,
    pub series_date: Option<String>,
    pub series_time: Option<String>,
    pub modality: Option<String>,
    pub body_part_examined: Option<String>,
    pub sop_instance_uid: String,
    pub instance_number: Option<u16>,
    pub table_position: Option<f32>,
}

#[derive(Error, Debug)]
pub enum ProcessingError {
    #[error("Pixel data processing error: {0}")]
    DicomPixelDataError(#[from] dicom_pixeldata::Error),
}

/// A parsed DICOM file, ready to be decoded. Holding the parsed object
/// allows splitting the work into a parse and a decode step so that both
/// can be timed separately.
#[wasm_bindgen]
pub struct ParsedDicom {
    dicom_object: FileDicomObject<InMemDicomObject>,
}

#[wasm_bindgen]
impl ParsedDicom {
    #[wasm_bindgen]
    pub fn decode(&self) -> Result<ProcessedFile, JsError> {
        decode_dicom_object(&self.dicom_object).map_err(|e| JsError::new(&e.to_string()))
    }
}

#[wasm_bindgen]
pub fn parse_file(bytes: Vec<u8>) -> Result<ParsedDicom, JsError> {
    console_error_panic_hook::set_once();
    let cursor = std::io::Cursor::new(bytes);
    let dicom_object =
        dicom_object::from_reader(cursor).map_err(|e| JsError::new(&e.to_string()))?;
    Ok(ParsedDicom { dicom_object })
}

/// The result of processing one DICOM file in a worker: `meta` is a plain
/// JS object (safe to structured-clone) and `luma` hands over the pixel
/// buffer so it can be transferred without a copy.
#[wasm_bindgen]
pub struct ProcessedFile {
    meta: ProcessedFileMeta,
    luma: Vec<u8>,
}

#[wasm_bindgen]
impl ProcessedFile {
    #[wasm_bindgen]
    pub fn meta(&self) -> JsValue {
        serde_wasm_bindgen::to_value(&self.meta).expect("should serialize ProcessedFileMeta")
    }

    #[wasm_bindgen]
    pub fn luma(&mut self) -> Vec<u8> {
        std::mem::take(&mut self.luma)
    }
}

fn decode_dicom_object(
    dicom_object: &FileDicomObject<InMemDicomObject>,
) -> Result<ProcessedFile, ProcessingError> {
    let pixel_data = dicom_object.decode_pixel_data_frame(0)?;
    let dynamic_image = pixel_data.to_dynamic_image(0)?;

    let pixel_spacing = get_pixel_spacing(dicom_object);
    let (target_width, target_height) = compute_aspect_ratio_dimensions(
        dynamic_image.width(),
        dynamic_image.height(),
        pixel_spacing,
    );

    let scaled_dynamic_image = dynamic_image.resize_exact(
        target_width,
        target_height,
        dicom_pixeldata::image::imageops::FilterType::Nearest,
    );
    let luma_image = scaled_dynamic_image.to_luma8();

    Ok(ProcessedFile {
        meta: extract_meta(
            dicom_object,
            scaled_dynamic_image.width(),
            scaled_dynamic_image.height(),
        ),
        luma: luma_image.into_raw(),
    })
}

fn extract_meta(
    dicom_object: &FileDicomObject<InMemDicomObject>,
    width: u32,
    height: u32,
) -> ProcessedFileMeta {
    let patient_id = string_element_or(dicom_object, tags::PATIENT_ID, UNKNOWN_PATIENT_ID);
    let study_instance_uid = string_element_or(
        dicom_object,
        tags::STUDY_INSTANCE_UID,
        UNKNOWN_STUDY_INSTANCE_UID,
    );
    let study_description = optional_string_element(dicom_object, tags::STUDY_DESCRIPTION);
    let series_instance_uid = string_element_or(
        dicom_object,
        tags::SERIES_INSTANCE_UID,
        UNKNOWN_SERIES_INSTANCE_UID,
    );
    let series_number = dicom_object
        .element(tags::SERIES_NUMBER)
        .ok()
        .and_then(|element| element.to_int::<u16>().ok());
    let series_description = optional_string_element(dicom_object, tags::SERIES_DESCRIPTION);
    let series_date = dicom_object
        .element(tags::SERIES_DATE)
        .ok()
        .and_then(|element| element.to_date().ok())
        .map(|date| date.to_string());
    let series_time = dicom_object
        .element(tags::SERIES_TIME)
        .ok()
        .and_then(|element| element.to_time().ok())
        .map(|time| time.to_string());
    let modality = optional_string_element(dicom_object, tags::MODALITY);
    let body_part_examined = optional_string_element(dicom_object, tags::BODY_PART_EXAMINED);
    let sop_instance_uid =
        string_element_or(dicom_object, tags::SOP_INSTANCE_UID, UNKNOWN_SOP_INSTANCE_UID);
    let instance_number = dicom_object
        .element(tags::INSTANCE_NUMBER)
        .ok()
        .and_then(|element| element.to_int::<u16>().ok());
    let table_position = dicom_object
        .element(tags::TABLE_POSITION)
        .ok()
        .and_then(|element| element.to_float32().ok());
    let acquisition_number = dicom_object
        .element(tags::ACQUISITION_NUMBER)
        .ok()
        .and_then(|element| element.to_int().ok());

    ProcessedFileMeta {
        width,
        height,
        series_instance_uid,
        acquisition_number,
        order: get_image_order(dicom_object),
        patient_id,
        study_instance_uid,
        study_description,
        series_number,
        series_description,
        series_date,
        series_time,
        modality,
        body_part_examined,
        sop_instance_uid,
        instance_number,
        table_position,
    }
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

fn string_element_or(
    dicom_object: &FileDicomObject<InMemDicomObject>,
    tag: dicom_core::Tag,
    fallback: &str,
) -> String {
    dicom_object
        .element(tag)
        .ok()
        .and_then(|element| element.to_str().ok())
        .map(|value| value.to_string())
        .unwrap_or_else(|| fallback.to_string())
}

fn optional_string_element(
    dicom_object: &FileDicomObject<InMemDicomObject>,
    tag: dicom_core::Tag,
) -> Option<String> {
    dicom_object
        .element(tag)
        .ok()
        .and_then(|element| element.to_str().ok())
        .map(|value| value.to_string())
}

fn get_pixel_spacing(dicom_object: &FileDicomObject<InMemDicomObject>) -> Option<(f64, f64)> {
    let pixel_spacing_str = dicom_object
        .element(tags::PIXEL_SPACING)
        .ok()?
        .to_str()
        .ok()?;

    let parts: Vec<&str> = pixel_spacing_str.split('\\').collect();
    if parts.len() != 2 {
        return None;
    }

    let row_spacing = parts[0].parse::<f64>().ok()?;
    let col_spacing = parts[1].parse::<f64>().ok()?;

    Some((row_spacing, col_spacing))
}

fn compute_aspect_ratio_dimensions(
    orig_width: u32,
    orig_height: u32,
    pixel_spacing: Option<(f64, f64)>,
) -> (u32, u32) {
    let (row_spacing, col_spacing) = pixel_spacing.unwrap_or((1.0, 1.0));

    let physical_width = orig_width as f64 * col_spacing;
    let physical_height = orig_height as f64 * row_spacing;
    let aspect_ratio = physical_width / physical_height;

    if aspect_ratio >= 1.0 {
        let w = TARGET_SIZE as f64;
        let h = w / aspect_ratio;
        (w.round() as u32, h.round() as u32)
    } else {
        let h = TARGET_SIZE as f64;
        let w = h * aspect_ratio;
        (w.round() as u32, h.round() as u32)
    }
}

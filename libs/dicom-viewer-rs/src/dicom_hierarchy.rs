use dicom_dictionary_std::tags;
use dicom_object::{FileDicomObject, InMemDicomObject};
use dicom_pixeldata::{
    image::{ImageBuffer, Rgba},
    PixelDecoder,
};
use serde::Serialize;
use std::{collections::HashMap, fmt::Debug};

#[derive(Debug, Serialize)]
pub struct DicomHierarchy {
    patients: HashMap<String, Patient>,
}
#[derive(Debug, Serialize)]
struct Patient {
    studies: HashMap<String, Study>,
}
#[derive(Debug, Serialize)]
struct Study {
    series: HashMap<String, Series>,
    // study_description: String,
}
#[derive(Debug, Serialize)]
struct Series {
    instances: HashMap<String, Instance>,
    series_number: u16,
    // series_description: String,
    series_date: String,
    series_time: String,
    modality: String,
    body_part_examined: String,
}
#[derive(Debug, Serialize)]
struct Instance {
    instance_number: u16,
    #[serde(skip)]
    image: Image,
}

#[derive(Clone)]
struct Image {
    width: u32,
    height: u32,
    image: ImageBuffer<Rgba<u8>, Vec<u8>>,
}

impl DicomHierarchy {
    pub fn new() -> Self {
        Self {
            patients: HashMap::new(),
        }
    }

    pub fn add_patient(&mut self, dicom_object: FileDicomObject<InMemDicomObject>) {
        let patient_id = dicom_object
            .element(tags::PATIENT_ID)
            .unwrap()
            .to_str()
            .unwrap()
            .to_string();
        let Some(patient) = self.patients.get_mut(&patient_id) else {
            let patient = Patient::new(dicom_object);
            self.patients.insert(patient_id, patient);
            return;
        };
        patient.add_study(dicom_object);
    }

    pub fn get_series_by_instance_uid(&self, series_instance_uid: &str) -> Option<&Series> {
        for patient in self.patients.values() {
            for study in patient.studies.values() {
                if let Some(series) = study.series.get(series_instance_uid) {
                    return Some(series);
                }
            }
        }

        None
    }

    pub fn get_all_images(&self) -> Vec<&Image> {
        let mut images = vec![];
        for patient in self.patients.values() {
            for study in patient.studies.values() {
                for series in study.series.values() {
                    for instance in series.instances.values() {
                        images.push(&instance.image);
                    }
                }
            }
        }
        // TODO: sort by table distance
        // images
        //     .sort_by(|a, b| a.instance_number.cmp(&b.instance_number));
        images
    }
}

impl Patient {
    pub fn new(dicom_object: FileDicomObject<InMemDicomObject>) -> Self {
        let mut patient = Self {
            studies: HashMap::new(),
        };
        patient.add_study(dicom_object);
        patient
    }
    pub fn add_study(&mut self, dicom_object: FileDicomObject<InMemDicomObject>) {
        let study_instance_uid = dicom_object
            .element(tags::STUDY_INSTANCE_UID)
            .unwrap()
            .to_str()
            .unwrap()
            .to_string();

        let Some(study) = self.studies.get_mut(&study_instance_uid) else {
            let study = Study::new(dicom_object);
            self.studies.insert(study_instance_uid, study);
            return;
        };
        study.add_series(dicom_object);
    }
}

impl Study {
    pub fn new(dicom_object: FileDicomObject<InMemDicomObject>) -> Self {
        // TODO: Add if available
        // let study_description = dicom_object
        //     .element(tags::STUDY_DESCRIPTION)
        //     .unwrap()
        //     .to_str()
        //     .unwrap()
        //     .to_string();
        let mut study = Self {
            series: HashMap::new(),
            // study_description,
        };
        study.add_series(dicom_object);
        study
    }

    pub fn add_series(&mut self, dicom_object: FileDicomObject<InMemDicomObject>) {
        let series_instance_uid = dicom_object
            .element(tags::SERIES_INSTANCE_UID)
            .unwrap()
            .to_str()
            .unwrap()
            .to_string();
        let Some(serie) = self.series.get_mut(&series_instance_uid) else {
            let serie = Series::new(dicom_object);
            self.series.insert(series_instance_uid, serie);
            return;
        };
        serie.add_instance(dicom_object);
    }
}

impl Series {
    pub fn new(dicom_object: FileDicomObject<InMemDicomObject>) -> Self {
        let series_number = dicom_object
            .element(tags::SERIES_NUMBER)
            .unwrap()
            .to_int::<u16>()
            .unwrap();
        // let series_description = dicom_object
        //     .element(tags::SERIES_DESCRIPTION)
        //     .unwrap()
        //     .to_str()
        //     .unwrap()
        //     .to_string();
        let series_date = dicom_object
            .element(tags::SERIES_DATE)
            .unwrap()
            .to_date()
            .unwrap()
            .to_string();
        let series_time = dicom_object
            .element(tags::SERIES_TIME)
            .unwrap()
            .to_time()
            .unwrap()
            .to_string();
        let modality = dicom_object
            .element(tags::MODALITY)
            .unwrap()
            .to_str()
            .unwrap()
            .to_string();
        let body_part_examined = dicom_object
            .element(tags::BODY_PART_EXAMINED)
            .unwrap()
            .to_str()
            .unwrap()
            .to_string();
        let mut series = Self {
            series_number,
            instances: HashMap::new(),
            // series_description,
            series_date,
            series_time,
            modality,
            body_part_examined,
        };
        series.add_instance(dicom_object);
        series
    }

    pub fn add_instance(&mut self, dicom_object: FileDicomObject<InMemDicomObject>) {
        let sop_instance_uid = dicom_object
            .element(tags::SOP_INSTANCE_UID)
            .unwrap()
            .to_str()
            .unwrap()
            .to_string();
        let instance = Instance::new(dicom_object);
        self.instances.insert(sop_instance_uid, instance);
    }
}

impl Instance {
    pub fn new(dicom_object: FileDicomObject<InMemDicomObject>) -> Self {
        let instance_number = dicom_object
            .element(tags::INSTANCE_NUMBER)
            .unwrap()
            .to_int::<u16>()
            .unwrap();
        let pixel_data = dicom_object.decode_pixel_data().unwrap();
        let dynamic_image = pixel_data.to_dynamic_image(0).unwrap();
        let scaled_dynamic_image = dynamic_image.resize(
            512,
            512,
            dicom_pixeldata::image::imageops::FilterType::Nearest,
        );
        let rgba8_image = scaled_dynamic_image.to_rgba8();
        let image = Image {
            width: scaled_dynamic_image.width(),
            height: scaled_dynamic_image.height(),
            image: rgba8_image,
        };
        Self {
            instance_number,
            image,
        }
    }
}

impl Debug for Image {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("Image")
            .field("width", &self.width)
            .field("height", &self.height)
            .finish()
    }
}

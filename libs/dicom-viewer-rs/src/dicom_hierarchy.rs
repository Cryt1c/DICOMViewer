use dicom_dictionary_std::tags;
use dicom_object::{FileDicomObject, InMemDicomObject};
use serde::Serialize;
use std::collections::BTreeMap;

#[derive(Debug, Serialize)]
pub struct DicomHierarchy {
    patients: BTreeMap<String, Patient>,
}
#[derive(Debug, Serialize)]
struct Patient {
    studies: BTreeMap<String, Study>,
}
#[derive(Debug, Serialize)]
struct Study {
    series: BTreeMap<String, Series>,
    study_description: Option<String>,
}
#[derive(Debug, Serialize)]
struct Series {
    instances: BTreeMap<String, Instance>,
    series_number: Option<u16>,
    series_description: Option<String>,
    series_date: Option<String>,
    series_time: Option<String>,
    modality: Option<String>,
    body_part_examined: Option<String>,
}
#[derive(Debug, Serialize)]
struct Instance {
    instance_number: Option<u16>,
    table_position: Option<f32>,
}

impl DicomHierarchy {
    pub fn new() -> Self {
        Self {
            patients: BTreeMap::new(),
        }
    }

    pub fn add_patient(&mut self, dicom_object: &FileDicomObject<InMemDicomObject>) {
        let patient_id = dicom_object
            .element(tags::PATIENT_ID)
            .expect("could not get patient_id")
            .to_str()
            .expect("could not convert patient_id to string")
            .to_string();
        let Some(patient) = self.patients.get_mut(&patient_id) else {
            let patient = Patient::new(&dicom_object);
            self.patients.insert(patient_id, patient);
            return;
        };
        patient.add_study(&dicom_object);
    }
}

impl Patient {
    pub fn new(dicom_object: &FileDicomObject<InMemDicomObject>) -> Self {
        let mut patient = Self {
            studies: BTreeMap::new(),
        };
        patient.add_study(&dicom_object);
        patient
    }
    pub fn add_study(&mut self, dicom_object: &FileDicomObject<InMemDicomObject>) {
        let study_instance_uid = dicom_object
            .element(tags::STUDY_INSTANCE_UID)
            .expect("could not get study_instance_uid")
            .to_str()
            .expect("could not convert study_instance_uid to string")
            .to_string();

        let Some(study) = self.studies.get_mut(&study_instance_uid) else {
            let study = Study::new(&dicom_object);
            self.studies.insert(study_instance_uid, study);
            return;
        };
        study.add_series(&dicom_object);
    }
}

impl Study {
    pub fn new(dicom_object: &FileDicomObject<InMemDicomObject>) -> Self {
        let study_description = dicom_object
            .element(tags::STUDY_DESCRIPTION)
            .ok()
            .and_then(|element| element.to_str().ok())
            .and_then(|string| Some(string.to_string()));
        let mut study = Self {
            series: BTreeMap::new(),
            study_description,
        };
        study.add_series(&dicom_object);
        study
    }

    pub fn add_series(&mut self, dicom_object: &FileDicomObject<InMemDicomObject>) {
        let series_instance_uid = dicom_object
            .element(tags::SERIES_INSTANCE_UID)
            .expect("could not get series_instance_uid")
            .to_str()
            .expect("could not convert series_instance_uid to string")
            .to_string();
        let Some(serie) = self.series.get_mut(&series_instance_uid) else {
            let serie = Series::new(&dicom_object);
            self.series.insert(series_instance_uid, serie);
            return;
        };
        serie.add_instance(&dicom_object);
    }
}

impl Series {
    pub fn new(dicom_object: &FileDicomObject<InMemDicomObject>) -> Self {
        let series_number: Option<u16> = dicom_object
            .element(tags::SERIES_NUMBER)
            .ok()
            .and_then(|element| element.to_int::<u16>().ok());

        let series_description = dicom_object
            .element(tags::SERIES_DESCRIPTION)
            .ok()
            .and_then(|element| element.to_str().ok())
            .and_then(|description| Some(description.to_string()));

        let series_date: Option<String> = dicom_object
            .element(tags::SERIES_DATE)
            .ok()
            .and_then(|element| element.to_date().ok())
            .and_then(|date| Some(date.to_string()));

        let series_time = dicom_object
            .element(tags::SERIES_TIME)
            .ok()
            .and_then(|element| element.to_time().ok())
            .and_then(|time| Some(time.to_string()));

        let modality: Option<String> = dicom_object
            .element(tags::MODALITY)
            .ok()
            .and_then(|element| element.to_str().ok())
            .and_then(|modality_str| Some(modality_str.to_string()));

        let body_part_examined: Option<String> = dicom_object
            .element(tags::BODY_PART_EXAMINED)
            .ok()
            .and_then(|element| element.to_str().ok())
            .and_then(|body_part| Some(body_part.to_string()));
        let mut series = Self {
            series_number,
            instances: BTreeMap::new(),
            series_description,
            series_date,
            series_time,
            modality,
            body_part_examined,
        };
        series.add_instance(dicom_object);
        series
    }

    pub fn add_instance(&mut self, dicom_object: &FileDicomObject<InMemDicomObject>) {
        let sop_instance_uid = dicom_object
            .element(tags::SOP_INSTANCE_UID)
            .expect("could not get sop_instance_uid")
            .to_str()
            .expect("could not convert sop_instance_uid to string")
            .to_string();
        let instance = Instance::new(&dicom_object);
        self.instances.insert(sop_instance_uid, instance);
    }
}

impl Instance {
    pub fn new(dicom_object: &FileDicomObject<InMemDicomObject>) -> Self {
        let instance_number = dicom_object
            .element(tags::INSTANCE_NUMBER)
            .ok()
            .and_then(|element| element.to_int::<u16>().ok());
        let table_position = dicom_object
            .element(tags::TABLE_POSITION)
            .ok()
            .and_then(|element| element.to_float32().ok());
        Self {
            instance_number,
            table_position,
        }
    }
}

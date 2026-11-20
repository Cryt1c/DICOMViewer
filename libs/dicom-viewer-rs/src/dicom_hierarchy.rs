use serde::Serialize;
use std::collections::BTreeMap;

use crate::processing::ProcessedFileMeta;

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
    acquisition_number: Option<u16>,
}

impl DicomHierarchy {
    pub fn new() -> Self {
        Self {
            patients: BTreeMap::new(),
        }
    }

    pub fn add_processed(&mut self, meta: &ProcessedFileMeta) {
        let Some(patient) = self.patients.get_mut(&meta.patient_id) else {
            self.patients
                .insert(meta.patient_id.clone(), Patient::from_meta(meta));
            return;
        };
        patient.add_study(meta);
    }
}

impl Patient {
    fn from_meta(meta: &ProcessedFileMeta) -> Self {
        let mut patient = Self {
            studies: BTreeMap::new(),
        };
        patient.add_study(meta);
        patient
    }

    fn add_study(&mut self, meta: &ProcessedFileMeta) {
        let Some(study) = self.studies.get_mut(&meta.study_instance_uid) else {
            self.studies
                .insert(meta.study_instance_uid.clone(), Study::from_meta(meta));
            return;
        };
        study.add_series(meta);
    }
}

impl Study {
    fn from_meta(meta: &ProcessedFileMeta) -> Self {
        let mut study = Self {
            series: BTreeMap::new(),
            study_description: meta.study_description.clone(),
        };
        study.add_series(meta);
        study
    }

    fn add_series(&mut self, meta: &ProcessedFileMeta) {
        let Some(serie) = self.series.get_mut(&meta.series_instance_uid) else {
            self.series
                .insert(meta.series_instance_uid.clone(), Series::from_meta(meta));
            return;
        };
        serie.add_instance(meta);
    }
}

impl Series {
    fn from_meta(meta: &ProcessedFileMeta) -> Self {
        let mut series = Self {
            instances: BTreeMap::new(),
            series_number: meta.series_number,
            series_description: meta.series_description.clone(),
            series_date: meta.series_date.clone(),
            series_time: meta.series_time.clone(),
            modality: meta.modality.clone(),
            body_part_examined: meta.body_part_examined.clone(),
        };
        series.add_instance(meta);
        series
    }

    fn add_instance(&mut self, meta: &ProcessedFileMeta) {
        let instance = Instance {
            instance_number: meta.instance_number,
            table_position: meta.table_position,
            acquisition_number: meta.acquisition_number,
        };
        self.instances
            .insert(meta.sop_instance_uid.clone(), instance);
    }
}

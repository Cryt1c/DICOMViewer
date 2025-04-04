export interface DicomHierarchy {
  patients: Map<string, Patient>
}

export interface Patient {
  studies: Map<string, Study>
}

export interface Study {
  series: Map<string, Serie>,
}

export interface Serie {
  instances: Map<String, Instance>,
  series_number: number,
  series_date: string,
  series_time: string,
  modality: string,
  body_part_examined: string,
}
export interface Instance {
  instance_number: number,
}


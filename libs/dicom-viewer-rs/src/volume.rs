use dicom_volume::volume::Volume;

pub struct VolumeContainer {
    pub volume: Volume,
    pub series_instance_uid: String,
}

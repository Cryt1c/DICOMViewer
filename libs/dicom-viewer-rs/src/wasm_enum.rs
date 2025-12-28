use dicom_volume::enums::Orientation;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[derive(Clone, Copy, Debug)]
pub enum WasmOrientation {
    Axial = 0,
    Coronal = 1,
    Sagittal = 2,
}

impl From<WasmOrientation> for Orientation {
    fn from(value: WasmOrientation) -> Orientation {
        match value {
            WasmOrientation::Axial => Orientation::Axial,
            WasmOrientation::Coronal => Orientation::Coronal,
            WasmOrientation::Sagittal => Orientation::Sagittal,
        }
    }
}

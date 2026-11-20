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

/// Serialized as the numeric discriminant so it matches the `WasmOrientation`
/// enum the generated TypeScript bindings expose.
impl serde::Serialize for WasmOrientation {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::Serializer,
    {
        serializer.serialize_u32(*self as u32)
    }
}

# DICOMViewer

DICOMViewer lets you select and view DICOM files locally. The files stay on your device.\
You can select files from different patients/studies/series and switch between
them using the DICOM hierarchy on the left side of the app.\
To navigate through the images either use the slider or mouse scroll on the image.

The app is deployed here: [DICOMViewer](https://cryt1c.github.io/DicomViewer/)
<!--Showcase: [Placeholder]-->

I am happily accepting contributions. Please use the issue queue if you, want to contribute, find bugs or have feature requests.\
If you want to learn more about my motivation for these projects watch my [EuroRust 2024 talk](https://www.youtube.com/watch?v=ZzQaVH-9Dzs).\
Reach out to me on [LinkedIn](https://www.linkedin.com/in/david-peherstorfer/).

## Features

- View DICOM files directly in your browser
- Navigate through multi-slice DICOM series
- Explore DICOM hierarchy (Patient/Study/Series)
- Privacy-focused: all processing happens locally, no data is sent to servers
- Supports common DICOM transfer syntaxes

## Prerequisites

- [Rust 1.86 + Cargo](https://www.rust-lang.org/tools/install)
- [NPM](https://www.npmjs.com)
- [nx](https://nx.dev)
- [wasm-pack](https://rustwasm.github.io/wasm-pack/)

## Getting Started

1. Clone the repository
2. Run `npm install` in the root directory
3. Use the commands below to serve or build the application

## Commands

Serve app and watch library locally (for local development under (http://localhost:4200)
```
nx run dicom-viewer:serve-all
```

Build Angular app and WASM module.
```
nx run dicom-viewer:build
```

## Architecture
The repository is using nx to provide a monorepo. It contains:
- An Angular frontend (`apps/dicom-viewer`)
- WASM module to parse DICOM files, provide the DICOM hierarchy and render images (`libs/dicom-viewer-rs`)

## Roadmap
- [x] Basic DICOM viewer functionality
- [ ] Segmentation functionality (MedSAM)
- [ ] Add tests
- [ ] Implement progressive image loading
- [ ] Add functionality to add more DICOM files to already loaded DICOM hierarchy
- [ ] Multiplanar reconstruction/3D functionality for series with multiple slices

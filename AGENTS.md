# AGENTS.md — DICOMViewer

## Quick start

```sh
npm install
nx run dicom-viewer:serve-all    # dev server at localhost:4200 (Angular + WASM watch)
nx run dicom-viewer:build        # production build (also builds WASM first)
nx run dicom-viewer:test         # run Angular tests (Jasmine/Karma/Chrome)
npx nx run dicom-viewer:format   # format: prettier --write apps/dicom-viewer/src/**/*.{ts,html,css,scss}
```

## Prerequisites

- Rust 1.86+, `wasm-pack` installed, Node.js
- `dicom-volume` is a **local path dependency** at `../../../dicom-volume` (sibling directory of repo root). Not published to crates.io.

## Architecture

- **Nx monorepo** with two projects:
  - `dicom-viewer` — Angular 22 app (standalone components, signals, no NgModules)
  - `dicom-viewer-rs` — Rust WASM library (wasm-bindgen, compiled via wasm-pack)
- Angular build **depends on** WASM build (`"dependsOn": ["dicom-viewer-rs:build"]`). Build order is automatic via Nx.
- **No backend** — all DICOM processing happens client-side in WASM. No data leaves the device.

## Loading pipeline (worker pool)

- `DecodePoolService` (`apps/dicom-viewer/src/app/services/decode-pool.service.ts`) manages a **pull-based pool of decode workers** — each worker (`apps/dicom-viewer/src/app/workers/decode.worker.ts`) reads, parses and decodes one file at a time and asks for the next when done, so uneven file costs self-balance.
- The WASM module is compiled **once on the main thread** (`WebAssembly.compileStreaming`) and the compiled artifact is handed to every worker via `postMessage`, so it is never re-compiled.
- Files entering the pipeline are pre-filtered by the `DICM` magic at offset 128 (`filterDicomFiles`), so non-DICOM files in folder drops don't pollute the failure count.
- Results flow back as `{ meta, luma }` per file and are assembled on the main thread via `dicomViewer.begin_read()` / `add_processed_file()` / `finish_read()`.
- `processSequential()` is a single-threaded baseline using the same WASM calls, for A/B comparison (toggle in the image picker).
- Ranked further improvements live in `todos.md`.

## WASM <-> Angular boundary

- Public API re-exported at `libs/dicom-viewer-rs/public-api.ts`:
  ```ts
  import { DicomViewer, MetaData, initDicomViewerRs } from '../../../../libs/dicom-viewer-rs/public-api';
  ```
- `DicomViewer` and `MetaData` are `#[wasm_bindgen]` Rust structs. WASM methods are async (rendering) or sync (metadata).
- Canvas rendering is done **directly from Rust** — the `Renderer` binds to `<canvas id="viewer-canvas">` by DOM ID and calls `putImageData`. Angular has no renderer component logic beyond the template.
- MPR orientation enum: `0 = Axial`, `1 = Coronal`, `2 = Sagittal` (from `WasmOrientation`).

## Key conventions

- **Angular Material** with `mat.$cyan-palette`. Dark mode toggled via `.dark-theme` class on `<html>` + `localStorage['darkMode']`.
- **State management**: Angular signals only (`WritableSignal`, `computed`), no external state library.
- **Notifications** via `MatSnackBar` (injected, not constructor-based).
- **`MatSnackBar`** used with `inject()` pattern, not constructor injection.
- **TypeScript strict mode** enabled (`strict: true` in tsconfig).
- **Code style**: Prettier with tabs=2, single quotes, trailing commas es5, printWidth 80. No ESLint configured.
- **Component styles**: Mostly `.css` (not `.scss`). The Nx generator is configured for `.css` by default.
- **`changeDetection: ChangeDetectionStrategy.OnPush`** on `DicomTreeComponent`.

## Deployment

- CI (GitHub Actions) on push to `main`: builds + deploys to GitHub Pages via `angular-cli-ghpages`.
- The `build-deploy` target runs: `nx run dicom-viewer:build && nx run dicom-viewer:deploy -- --base-href=https://cryt1c.github.io/DICOMViewer/ --add=true`. The `--add=true` is required so the main deploy does not delete the PR preview directories on the `gh-pages` branch.
- PR previews: `.github/workflows/pr-preview.yml` builds and deploys every PR from a branch in this repo to `https://cryt1c.github.io/DICOMViewer/<PR-number>/` (fork PRs only build, no deploy). The preview directory is removed automatically when the PR closes.
- All deploys commit to the `gh-pages` branch (root = main site, numeric directories = PR previews) and are serialized via the shared `pages-deploy` concurrency group.

## Testing

- Jasmine + Karma with Chrome. Tests use `TestBed.configureTestingModule({ imports: [AppComponent] })` pattern for standalone components.
- Single run mode (`singleRun: true`). Coverage output to `./coverage/`.

## Roadmap (unimplemented)

Segmentation (MedSAM), progressive image loading, adding more files to hierarchy, 3D/MPR improvements — tracked and ranked in `todos.md`.

# Improvement todos

Ranked list of further improvements for the worker-pool loading pipeline.

## High value

- [x] **Time-to-first-image (progressive loading).** The user currently waits for all
  files (e.g. ~590ms for 501) before anything renders. `begin_read` / `add_processed_file`
  / `finish_read` is already an incremental API — make `DecodePoolService.process()` invoke
  a callback per result as it arrives, assemble and render slice 0 the moment it lands,
  let the rest trickle in. Perceived load time drops to ~50ms. This is the
  "progressive image loading" roadmap item.
  *Done:* `process()` / `processSequential()` accept an `onResult` callback; the image
  picker calls `begin_read()` up front, adds and renders slice 0 on the first result, and
  `finish_read()` once all files land.

- [ ] **The display buffer is a dead end for the roadmap.** The pipeline bakes an 8-bit,
  ≤512×512 resized image and discards both the original resolution and the raw values.
  Consequences: real window/level needs the raw 12–16-bit values (not already-mapped
  8-bit luma), and MPR/volume cannot be built from 512×512 thumbnails. Decide before
  more display-path code accumulates: keep the full-res slice alongside the display
  buffer (workers already have it before resizing — cheap to keep), or accept re-decode
  later.

- [ ] **Rust unit tests.** `processing.rs`, the hierarchy tree-builder, the filter-key
  parsing (`uid_acq_N`) and the ordering comparator are pure logic, currently only
  exercised through a browser. `cargo test` with a few synthetic `InMemDicomObject`s
  would lock in the aspect-ratio math, ordering and UNKNOWN fallbacks. The dicom-rs 0.9
  upgrade and the hierarchy from-meta refactor would have been safer with these.

- [ ] **Fix `dicom-hierarchy.model.ts` — the type lies about the runtime shape.**
  serde-wasm-bindgen serializes `BTreeMap` as a plain object, but the interface declares
  `patients: Map<string, Patient>`. Change to `{ [key: string]: Patient }` and add the
  fields that exist in Rust but not in TS (`study_description`, `series_description`).

## Medium

- [ ] **Color modalities silently desaturate.** `to_luma8()` is correct for CT/MR but
  turns RGB content (ultrasound, endoscopy, photography) gray. Fix in the back pocket:
  `enum Image { Luma(Luma8), Rgba(Rgba8) }` chosen by photometric interpretation —
  grayscale keeps the 4× memory/transfer savings, color keeps its colors.

- [ ] **Meta schema drift has no guard.** `ProcessedFileMeta` exists twice (Rust serde
  struct ↔ `processed-file.model.ts`); a field rename on one side fails only at runtime,
  per file. Guard with a round-trip test or generate TS from Rust via `ts-rs`.

- [ ] **Batch the assembly.** `add_processed_file` × N means N boundary crossings and N
  deserializations on the main thread. A single batched call (flat buffer + offsets, or
  `Vec<JsValue>` + `Vec<Vec<u8>>`) shrinks the serial tail as series sizes grow.

## Small cleanups

- [x] **Filter folder drops**: a `"DICM"` magic check at offset 128 (or extension filter)
  keeps non-DICOM files out of the failure count.

- [x] **Remove leftover `console.log`s** in `drag-and-drop.ts` (`File: …`, `Directory: …`).

- [x] **Update stale `AGENTS.md`**: still says Angular 19 and `read_files`; predates the
  worker architecture entirely.

- [x] **Retire the `par_iter` branch** once the worker-pool branch is validated — it
  duplicates the loading feature with permanent maintenance weight (nightly toolchain
  pin, `.cargo/config.toml`, wasm-bindgen-rayon, the worker-bootstrap patch script).
  Bonus: GitHub Pages cannot serve COOP/COEP, so `par_iter` silently degrades to
  single-threaded there, while the worker-pool branch parallelizes on Pages too.

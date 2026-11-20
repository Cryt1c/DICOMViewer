# TODO

## Viewer facade service (`DicomViewerStore`) — planned, not implemented

This document records the design for the next step in the WASM <-> UI
refactor. Everything under "Already in place" is done today; the rest is the
plan to execute later.

## Already in place (A + B)

- `apps/dicom-viewer/src/app/services/wasm-task-queue.ts` — serializes every
  call into `DicomViewer`, so no two calls can overlap a held wasm-bindgen
  borrow (the "recursive use of an object detected" panic).
- Metadata is a plain serializable snapshot (`ViewerMetadata` in
  `apps/dicom-viewer/src/app/models/viewer-metadata.model.ts`), produced by
  `MetaData` in `libs/dicom-viewer-rs/src/lib.rs` with camelCase field names.
- Every mutating WASM method **returns the fresh snapshot** (`render_*`,
  `set_mpr_orientation`, `set_current_series_instance_uid`, `set_use_gpu`), so
  no component has to make a second `get_metadata()` call after mutating.
- Components pass that snapshot up through the `metadataChange` output;
  `AppComponent` just stores it in the `metaData` signal.
- `mpr_orientation` is authoritative in Rust and the MPR select is driven from
  `metaData().mprOrientation` (no local duplicate).
- The GPU/CPU switch is greyed out with an explanatory tooltip when no WebGPU
  adapter is available (`gpuAvailable` in the renderer; the store should own
  this signal later).

## Why the facade is still worth doing

1. **The borrow discipline is still spread across three components.** Each of
   `dicom-renderer`, `image-picker` and `app.component` knows about
   `WasmTaskQueue`, `DicomViewer` and the `metadataChange` round trip. A new
   feature (e.g. window/level, cine playback, segmentation preview) has to
   remember all of it, or it reintroduces the re-entrancy panic.
2. **`AppComponent` is doing a service's job.** It owns the viewer signal, the
   metadata and hierarchy signals, the series filter and the task queue, while
   also being a layout component.
3. **Coalescing lives in the wrong place.** The "latest slider position wins"
   loop is UI-specific but sits in the renderer; cine playback or keyboard
   navigation will need the same behaviour.
4. **Testability.** Components cannot be instantiated without a real
   `DicomViewer`; a store with a narrow interface can be faked in tests.

## Target API

```ts
// apps/dicom-viewer/src/app/services/dicom-viewer-store.ts
@Injectable({ providedIn: 'root' })
export class DicomViewerStore {
  readonly metadata = signal<ViewerMetadata | null>(null); // readonly
  readonly hierarchy = signal<DicomHierarchy | null>(null);
  readonly gpuAvailable = signal(true);
  readonly loading = signal(false);

  // all methods are queued + set the signals before resolving
  init(): Promise<void>; // wasm init
  loadFiles(files: File[]): Promise<void>; // read_files + center render
  setSeries(seriesInstanceUid: string): Promise<void>;
  showIndex(index: number): Promise<void>; // coalesced
  showNextSlice(): Promise<void>;
  showPreviousSlice(): Promise<void>;
  setOrientation(orientation: WasmOrientation): Promise<void>;
  setUseGpu(useGpu: boolean): Promise<boolean>;

  // optional: free the wasm object on teardown
  // destroy(): void
}
```

Rules for the implementation:

- `DicomViewer` never leaves the service. Components must not receive it.
- `WasmTaskQueue` stays a separate, injectable primitive and becomes an
  internal detail of the store (still unit-testable on its own).
- Signals are exposed as `Signal<T>` (readonly); only the store writes them.
- Methods set the signals **before** resolving, so
  `await store.setSeries(uid)` implies `store.metadata()` is already updated.
- The coalescing loop ("latest wins") moves into `showIndex()`; keep it, it is
  what makes slider dragging usable in GPU mode.
- `MatSnackBar` notifications for GPU-unavailable and load errors move into
  the store too (they are consequences of viewer state, not of a component).

## Migration steps

1. `nx generate @nx/angular:service dicom-viewer-store --project=dicom-viewer`
   (or a plain `@Injectable({ providedIn: 'root' })` class, matching how
   `WasmTaskQueue` was added).
2. Move `dicomViewer`, `metaData`, `dicomHierarchy` and `taskQueue` out of
   `AppComponent` into the store; `AppComponent.ngOnInit` becomes
   `await store.init()`.
3. Move each `taskQueue.run(...)` block from the components into a store
   method, returning/committing the snapshot there.
4. Move the slider coalescing (`pendingIndex`, `isRenderLoopRunning`) from
   `DicomRendererComponent` into `showIndex()`.
5. Drop the `metadataChange` outputs, the `dicomViewer`/`metaData` inputs and
   the `dicomHierarchy` input; components inject the store and read signals.
6. Move the "GPU interpolation is not available" snackbar from the renderer
   and the load snackbars from `image-picker` into the store (or leave the
   success message in the component if it is purely presentational).
7. Delete `libs/dicom-viewer-rs/public-api.ts` consumers' direct imports of
   `dist/dicom-viewer-rs` outside the store (`WasmOrientation` may stay a
   public enum).
8. Add tests:
   - `WasmTaskQueue`: FIFO order, failure does not block, return values.
   - `showIndex` coalescing: 10 rapid calls produce one render of the last
     index (fake viewer recoding calls).
   - store: signals updated after each method.

## Open questions

- Should the store own the `DicomViewer` lifecycle (`free()` on destroy)? It
  currently leaks the wasm object on app teardown, which is harmless for a
  single-page app but trivial to fix with `DestroyRef`.
- Should `get_dicom_hierarchy()` snapshots be rebuilt only when files are
  loaded (they are now), or also on series filter changes?
- Do we want `metadata` split into `ViewerMetadata` + a separate
  `VolumeInfo` once more fields appear, to avoid re-emitting everything?
- Keep `metadataChange` for compatibility for one release, or delete it in
  the same change? (Recommend: delete; no external consumers.)

## Explicitly rejected alternatives

- **Live `MetaData` view** (`Rc<RefCell<...>>` shared with JS): trades a
  `WasmRefCell` panic for a `RefCell` panic, and Angular signals need
  immutable snapshots to detect changes.
- **Push/callback from Rust** (`Closure` invoked on state change): solves
  polling we no longer have, but adds closure lifetime management and a new
  re-entrancy hazard (the callback must never call back into the viewer).

## Acceptance criteria

- `grep -r "DicomViewer" apps/dicom-viewer/src/app` only matches the store.
- No component mentions `WasmTaskQueue`.
- Slider drag, wheel scroll, series switch, file load and backend toggle in
  GPU (Coronal/Sagittal) mode produce no "recursive use of an object" panic.
- `nx run dicom-viewer:test` and `nx run dicom-viewer:build` are green.

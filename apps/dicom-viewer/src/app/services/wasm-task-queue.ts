import { Injectable } from '@angular/core';

/**
 * Serializes calls into the WASM `DicomViewer`.
 *
 * wasm-bindgen wraps exported structs in a `WasmRefCell` and keeps the mutable
 * borrow alive for as long as an `async fn (&mut self)` is suspended. Calling
 * into the same viewer while such a future is still pending - even with
 * `&self`, e.g. `get_metadata()` - panics with:
 *
 *   "recursive use of an object detected which would lead to unsafe aliasing
 *    in rust"
 *
 * GPU rendering suspends on actual GPU work, so overlapping calls (dragging
 * the slice slider, scrolling, switching backend, ...) hit that panic easily.
 * Route every viewer call through this queue to guarantee they never overlap.
 */
@Injectable({ providedIn: 'root' })
export class WasmTaskQueue {
  private tail: Promise<void> = Promise.resolve();

  /**
   * Runs `task` once every previously queued task has settled. A failing task
   * rejects its own promise but does not block the ones queued after it.
   */
  run<T>(task: () => Promise<T> | T): Promise<T> {
    const result = this.tail.then(task, task);
    this.tail = result.then(
      () => undefined,
      () => undefined
    );
    return result;
  }
}

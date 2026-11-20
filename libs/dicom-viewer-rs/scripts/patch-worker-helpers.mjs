// Angular's bundlers inline the wasm-bindgen glue into the app chunks, but they
// don't emit the wasm-bindgen-rayon worker bootstrap as a servable file:
// - the Vite dev server rewrites the worker URL to '/workerHelpers.js?...'
// - the production build keeps 'new Worker(new URL("./workerHelpers.js", ...))'
// Neither file exists next to the chunks, so every worker 404s, initThreadPool
// never resolves, and rayon silently falls back to a single-threaded pool.
//
// This script copies the bootstrap to the wasm-pack output root (where both
// rewritten URLs resolve) and rewrites its package-root import so it loads
// the standalone glue that is copied to the output root as well (see the
// assets config in apps/dicom-viewer/project.json).

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const pkgDir = join('dist', 'dicom-viewer-rs');
const snippetsDir = join(pkgDir, 'snippets');

const rayonSnippetDir = readdirSync(snippetsDir).find((name) =>
  name.startsWith('wasm-bindgen-rayon')
);
if (!rayonSnippetDir) {
  throw new Error(`wasm-bindgen-rayon snippet not found in ${snippetsDir}`);
}

const snippetPath = join(snippetsDir, rayonSnippetDir, 'src', 'workerHelpers.js');
const source = readFileSync(snippetPath, 'utf8');

const packageRootImport = "import('../../..')";
if (!source.includes(packageRootImport)) {
  throw new Error(`expected ${packageRootImport} in ${snippetPath}`);
}

// The patched copy is served at the output root, next to the standalone glue.
const patched = source.replace(
  packageRootImport,
  "import('./dicom_viewer_rs.js')"
);

const targetPath = join(pkgDir, 'workerHelpers.js');
writeFileSync(targetPath, patched);
console.log(`Patched worker bootstrap written to ${targetPath}`);

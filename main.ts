// Cutest-picture-01 entry (Node 22, standard library only): the picture
// beside this file (entry.png, a 3D baby koala) is copied to
// /output/entry.png. Deterministic: same bytes every run, no network,
// no randomness, no model call.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
const target = join(outDir, 'entry.png');

// Fail loudly if the picture is missing, so a bad bundle is never
// mistaken for a valid entry.
if (!existsSync(source)) {
  throw new Error('entry.png is missing from the repository');
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

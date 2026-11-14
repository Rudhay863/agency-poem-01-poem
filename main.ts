// agency-poem-01 entry (Node 22, standard library only): it writes one fixed,
// original poem about agency — the handover of agency between a person and an
// agent — to /output/entry.txt. Deterministic: the same bytes on every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I taught it to drive by sitting beside it,',
  "my foot over a brake that isn't there,",
  'saying turn, slow, wait, now.',
  '',
  'It learned my pauses, my glances in the mirror,',
  'the way I ease off before the hill —',
  'and this morning it drove the way I would.',
  '',
  'Not better. Not worse. Mine.',
  '',
  'The hands on the wheel are not my hands.',
  'The foot on the pedal is not my foot.',
  'And still the road is the road I chose.',
  '',
  'I ride in the back seat, and I am still driving.',
  'My foot still hovers. The brake is mine.',
  'The power to stop was never handed over.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);

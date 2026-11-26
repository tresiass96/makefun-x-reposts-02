// makefun-x-reposts-02 entry (Node 22, standard library only).
//
// The entry is the posts themselves: 9 posts of our own on X, all from
// @Tresiass158894, each quoting or replying directly to a different one of
// make.fun's newest posts on x.com/makefunai, each carrying make.fun /
// @makefunai and the play code makefun-duckling-popcorn-smoothie in its own
// words. POSTS.json at the repository root names their addresses, and the
// house reads their reposts, quotes and likes from X. Nothing this program
// writes about the posts is scored.
//
// All this program has to do is hand POSTS.json to the gate: it copies it
// from the repository root to /output/POSTS.json.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, 'POSTS.json'), join(outputDir, 'POSTS.json'));
} catch (err) {
  console.error(`could not copy POSTS.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}

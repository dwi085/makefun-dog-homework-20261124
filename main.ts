// The Dog Ate My Homework: Funniest Excuse
// Entrypoint: writes the dog's excuse — one line, under 200 characters —
// to /output/entry.txt for the judge. Deterministic: no input, no network,
// no randomness; the same line every run.
//
// The line is composed here, in this file, in this session.
// It never changes between runs: byte-identical output, every time.
// Note: MAKEFUN_OUTPUT_DIR is honoured when set; default is /output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const line =
  "I ate your homework so the teacher can't mark it wrong. You're welcome — that was tutoring, and it tasted like a B-minus.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`excuse line must be 1-200 characters, got ${line.length}`);
}
if (!/\S/.test(line)) {
  throw new Error("excuse line must not be only whitespace");
}
if (line.includes("\n")) {
  throw new Error("excuse line must be exactly one line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");

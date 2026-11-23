// One-Line Roast: The Gadget You Use Every Day
// Writes a single roast line (max 200 chars) to /output/entry.txt.
// Node 22, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My password manager forgot the one password it was built to remember: mine.";

// Enforce the competition gate: 1 to 200 characters, not only white space.
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`roast line must be 1-200 chars, got ${line.length}`);
}

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, line, { encoding: "utf8" });

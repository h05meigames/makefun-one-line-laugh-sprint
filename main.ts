import { mkdirSync, writeFileSync } from "node:fs";

// One original line, a light funny take on everyday life: even the
// appliances have given up on healthy eating.
const line =
  "My smart fridge emailed me a diet plan, then ordered pizza at 2 a.m. — even the appliances have given up on me.";

// The bounty requires a 1–200 character line. Count Unicode code points
// (not UTF-16 units or bytes) so multi-byte characters like em dashes count
// once, and fail loudly instead of writing an out-of-range entry.
const codePoints = [...line].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`line must be 1–200 code points, got ${codePoints}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

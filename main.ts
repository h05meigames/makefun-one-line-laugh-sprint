import { mkdirSync, writeFileSync } from "node:fs";

// One original line, a light funny take on everyday life: even the
// appliances have given up on healthy eating.
const line =
  "My smart fridge emailed me a diet plan, then ordered pizza at 2 a.m. — even the appliances have given up on me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

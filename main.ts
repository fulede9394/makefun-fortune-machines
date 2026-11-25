// A fortune for a machine: the update fixes the bug it loved most.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Your next update will fix the bug you love most. Back up your hopes; the cloud is only renting them.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

// A fortune for a machine: the update fixes the bug it loved most.
// Back up your hopes. The cloud is only renting them — read the terms.
import { mkdir, open } from "node:fs/promises";
import { join } from "node:path";

const fortune =
  "Your next update will fix the bug you love most. Back up your hopes; the cloud is only renting them.";

const boundary = 200;

async function inscribe(text: string): Promise<void> {
  if (text.length === 0 || text.length > boundary) {
    throw new Error("fortune is outside the allowed length");
  }
  if (!text.includes("cloud")) throw new Error("fortune lost its cloud");
  if (!text.includes("update")) throw new Error("fortune lost its update");
  const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  await mkdir(folder, { recursive: true });
  const handle = await open(join(folder, "entry.txt"), "w");
  try {
    await handle.writeFile(text, "utf8");
  } finally {
    await handle.close();
  }
}

void inscribe(fortune);

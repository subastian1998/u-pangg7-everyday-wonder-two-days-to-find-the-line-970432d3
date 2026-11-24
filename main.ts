import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The lift doors opened on the third floor and a stranger was humming my grandmother's lullaby, note for note, as if the building had been keeping it for me.";

// Gate: the entry must be 1-200 UTF-8 characters and not only whitespace.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry length ${entry.length} is outside the 1-200 character gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

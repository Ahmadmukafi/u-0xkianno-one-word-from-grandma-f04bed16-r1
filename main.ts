import { writeFileSync, mkdirSync } from "node:fs";

// One word, exactly as a grandma would text it about AI: her universal
// fix for every machine, typed in accidental caps-lock.
const WORD = "UNPLUG";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, WORD);

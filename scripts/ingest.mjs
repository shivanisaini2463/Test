// Seed the knowledge base from data/*.txt|md and src/case-data.json.
// Re-running replaces the "seed" items but keeps any admin-added items.
//
//   npm run ingest                 # embed via NVIDIA (needs NVIDIA_API_KEY)
//   MOCK_EMBED=1 npm run ingest     # plumbing test, no key needed

import "dotenv/config";
import { promises as fs } from "fs";
import path from "path";
import { embed } from "../lib/nvidia.mjs";
import { loadItems, saveItems } from "../lib/store.mjs";
import { chunkText, extractProseFromJson } from "../lib/rag.mjs";

const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, "data");
const CASE_DATA = path.join(ROOT, "src", "case-data.json");
const BATCH = 16;

async function gatherSources() {
  const sources = [];

  // Plain-text / markdown files dropped in data/
  const files = await fs.readdir(DATA_DIR).catch(() => []);
  for (const f of files.sort()) {
    if (/\.(txt|md)$/i.test(f)) {
      const text = await fs.readFile(path.join(DATA_DIR, f), "utf8");
      if (text.trim()) sources.push({ source: f.replace(/\.(txt|md)$/i, ""), text });
    }
  }

  // Structured case studies already in the repo
  try {
    const cases = JSON.parse(await fs.readFile(CASE_DATA, "utf8"));
    for (const [key, obj] of Object.entries(cases)) {
      const text = extractProseFromJson(obj);
      if (text.trim()) sources.push({ source: `case-${key}`, text });
    }
  } catch (e) {
    console.warn("Skipping case-data.json:", e.message);
  }

  return sources;
}

async function main() {
  const sources = await gatherSources();
  if (!sources.length) {
    console.error("No sources found. Add .txt/.md files to data/ or ensure src/case-data.json exists.");
    process.exit(1);
  }

  const chunks = [];
  for (const s of sources) {
    for (const c of chunkText(s.text)) chunks.push({ source: s.source, text: c });
  }
  console.log(`Sources: ${sources.length} | chunks: ${chunks.length}${process.env.MOCK_EMBED === "1" ? " | MOCK mode" : ""}`);

  const seedItems = [];
  for (let i = 0; i < chunks.length; i += BATCH) {
    const batch = chunks.slice(i, i + BATCH);
    const vecs = await embed(batch.map((c) => c.text), "passage");
    batch.forEach((c, j) =>
      seedItems.push({ id: `seed-${i + j}`, origin: "seed", source: c.source, text: c.text, vector: vecs[j] })
    );
    console.log(`  embedded ${Math.min(i + BATCH, chunks.length)}/${chunks.length}`);
  }

  const existing = await loadItems();
  const keptAdmin = existing.filter((it) => it.origin !== "seed");
  await saveItems([...seedItems, ...keptAdmin]);

  const bySource = {};
  for (const it of seedItems) bySource[it.source] = (bySource[it.source] || 0) + 1;
  console.log("\nSeed sources:");
  for (const [s, n] of Object.entries(bySource)) console.log(`  ${s}: ${n} chunk(s)`);
  console.log(`\nSaved ${seedItems.length} seed items (+${keptAdmin.length} kept admin item(s)).`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

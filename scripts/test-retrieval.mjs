// Quick retrieval check: embed a question, print the top matching chunks.
//   MOCK_EMBED=1 node scripts/test-retrieval.mjs "who does shivani work for"

import "dotenv/config";
import { embed } from "../lib/nvidia.mjs";
import { loadItems } from "../lib/store.mjs";
import { topK } from "../lib/rag.mjs";

const query = process.argv.slice(2).join(" ") || "What is Shivani's current role?";

const items = await loadItems();
if (!items.length) {
  console.error("Knowledge base is empty — run `npm run ingest` first.");
  process.exit(1);
}

const qvec = await embed(query, "query");
const hits = topK(qvec, items, 5);

console.log(`Query: ${query}\nItems in store: ${items.length}\n`);
hits.forEach((h, i) => {
  console.log(`#${i + 1}  score=${h.score.toFixed(3)}  source=${h.it.source} (${h.it.origin})`);
  console.log(`     ${h.it.text.slice(0, 160).replace(/\n/g, " ")}...\n`);
});

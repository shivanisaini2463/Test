// Admin-only knowledge management. Auth via the x-admin-password header
// (compared against ADMIN_PASSWORD). Powers the /admin.html panel.
//
//   GET     -> list current sources
//   POST    { text, source? }  -> embed + add/replace an admin source (live)
//   DELETE  { source }         -> remove an admin source

import { embed } from "../lib/nvidia.mjs";
import { loadItems, saveItems } from "../lib/store.mjs";
import { chunkText } from "../lib/rag.mjs";

async function readJson(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") return JSON.parse(req.body || "{}");
  const chunks = [];
  for await (const c of req) chunks.push(c);
  return JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
}

function json(res, status, obj) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(obj));
}

export default async function handler(req, res) {
  const pass = req.headers["x-admin-password"];
  if (!process.env.ADMIN_PASSWORD || pass !== process.env.ADMIN_PASSWORD) {
    return json(res, 401, { error: "unauthorized" });
  }

  try {
    if (req.method === "GET") {
      const items = await loadItems();
      const bySource = {};
      for (const it of items) {
        bySource[it.source] = bySource[it.source] || { source: it.source, origin: it.origin, chunks: 0 };
        bySource[it.source].chunks++;
      }
      return json(res, 200, { total: items.length, sources: Object.values(bySource) });
    }

    if (req.method === "POST") {
      const { text, source } = await readJson(req);
      if (!text || !String(text).trim()) return json(res, 400, { error: "text is required" });

      const label = (source && String(source).trim()) || `note-${Date.now()}`;
      const chunks = chunkText(String(text));
      const vecs = await embed(chunks, "passage");

      const items = await loadItems();
      const kept = items.filter((it) => !(it.origin === "admin" && it.source === label));
      const added = chunks.map((c, i) => ({
        id: `admin-${label}-${Date.now()}-${i}`,
        origin: "admin",
        source: label,
        text: c,
        vector: vecs[i],
      }));
      await saveItems([...kept, ...added]);
      return json(res, 200, { ok: true, source: label, chunks: added.length });
    }

    if (req.method === "DELETE") {
      const { source } = await readJson(req);
      if (!source) return json(res, 400, { error: "source is required" });
      const items = await loadItems();
      const kept = items.filter((it) => !(it.origin === "admin" && it.source === source));
      await saveItems(kept);
      return json(res, 200, { ok: true, removed: items.length - kept.length });
    }

    return json(res, 405, { error: "method not allowed" });
  } catch (e) {
    console.error("ingest error:", e);
    return json(res, 500, { error: e.message });
  }
}

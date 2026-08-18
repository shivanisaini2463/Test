// Single knowledge store, holding both the seed (resume/LinkedIn/case studies)
// and admin-added items. Each item: { id, origin: "seed"|"admin", source, text, vector }.
//
// Storage backend is chosen automatically:
//   - Vercel Blob   when BLOB_READ_WRITE_TOKEN is set (production, live updates)
//   - local file    data/knowledge.json otherwise (local dev / testing)

import { promises as fs } from "fs";
import path from "path";

const BLOB_PATH = "chatbot/knowledge.json";
const LOCAL_PATH = path.join(process.cwd(), "data", "knowledge.json");

const useBlob = () => !!process.env.BLOB_READ_WRITE_TOKEN;

export async function loadItems() {
  if (useBlob()) {
    try {
      const { list } = await import("@vercel/blob");
      const { blobs } = await list({ prefix: BLOB_PATH });
      const b = blobs.find((x) => x.pathname === BLOB_PATH);
      if (!b) return [];
      const res = await fetch(b.url, { cache: "no-store" });
      if (!res.ok) return [];
      return await res.json();
    } catch (e) {
      console.error("Blob load failed:", e.message);
      return [];
    }
  }
  try {
    return JSON.parse(await fs.readFile(LOCAL_PATH, "utf8"));
  } catch {
    return [];
  }
}

export async function saveItems(items) {
  const json = JSON.stringify(items);
  if (useBlob()) {
    const { put } = await import("@vercel/blob");
    await put(BLOB_PATH, json, {
      access: "public",
      contentType: "application/json",
      addRandomSuffix: false,
      allowOverwrite: true,
    });
    return;
  }
  await fs.mkdir(path.dirname(LOCAL_PATH), { recursive: true });
  await fs.writeFile(LOCAL_PATH, json);
}

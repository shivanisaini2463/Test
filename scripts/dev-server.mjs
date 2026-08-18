// Minimal local dev server so the /api functions can be tested without the
// Vercel CLI. Serves the static site and routes /api/chat and /api/ingest to
// the same handlers Vercel runs in production.
//
//   npm run dev:api      then open http://localhost:5050

import "dotenv/config";
import http from "http";
import { promises as fs } from "fs";
import path from "path";
import chatHandler from "../api/chat.js";
import ingestHandler from "../api/ingest.js";

const ROOT = process.cwd();
const PORT = Number(process.env.PORT) || 5050;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".jsx": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  if (url.pathname === "/api/chat") return chatHandler(req, res);
  if (url.pathname === "/api/ingest") return ingestHandler(req, res);

  let p = decodeURIComponent(url.pathname);
  if (p === "/") p = "/index.html";
  const file = path.normalize(path.join(ROOT, p));
  if (!file.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end("Forbidden");
  }
  try {
    const data = await fs.readFile(file);
    res.writeHead(200, { "Content-Type": MIME[path.extname(file).toLowerCase()] || "application/octet-stream" });
    res.end(data);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
  }
});

server.listen(PORT, () => console.log(`Dev server running: http://localhost:${PORT}`));

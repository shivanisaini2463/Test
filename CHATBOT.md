# Portfolio RAG Chatbot — Backend

A retrieval-augmented chatbot that answers questions about Shivani using her
resume, LinkedIn, and portfolio case studies. Runs on a single free
[NVIDIA build](https://build.nvidia.com) key (Kimi K2.5 for answers,
nv-embedqa for retrieval). No answer in the data → it deflects to Shivani's
contact details.

## Pieces

| Path | Role |
|------|------|
| `lib/nvidia.mjs` | NVIDIA (Kimi + embeddings) client; `MOCK_EMBED=1` runs key-free |
| `lib/rag.mjs` | chunking, cosine similarity, retrieval, JSON prose extraction |
| `lib/store.mjs` | knowledge store — Vercel Blob in prod, `data/knowledge.json` locally |
| `scripts/ingest.mjs` | seed the store from `data/*.txt|md` + `src/case-data.json` |
| `scripts/test-retrieval.mjs` | print top matches for a query |
| `scripts/dev-server.mjs` | local server for the `/api` functions (no Vercel CLI needed) |
| `api/chat.js` | `POST` question → retrieve → Kimi → stream answer |
| `api/ingest.js` | admin CRUD for live knowledge (password-gated) |
| `admin.html` | admin panel to add/update/delete memory |

## Environment variables

Copy `.env.example` → `.env` (local) and set the same in Vercel (production):

- `NVIDIA_API_KEY` — from build.nvidia.com (`nvapi-…`)
- `ADMIN_PASSWORD` — you choose; guards the admin panel
- `BLOB_READ_WRITE_TOKEN` — from a Vercel Blob store (prod only; blank locally)
- `CONTACT_PHONE` — kept in env so it stays out of the public repo
- `CONTACT_EMAIL`, `CONTACT_LINKEDIN` — have public defaults; override if needed

## Local test

```bash
npm install
cp .env.example .env         # then fill in NVIDIA_API_KEY + ADMIN_PASSWORD
npm run ingest               # embed resume/LinkedIn/case studies
npm run test:retrieval "What is Shivani's current role?"
npm run dev:api              # http://localhost:5050  (+ /admin.html)
```

No key yet? Prefix any command with `MOCK_EMBED=1` to run with fake vectors.

## Deploy (Vercel)

1. Create a **Blob store**: Vercel → Storage → Create → Blob. It adds
   `BLOB_READ_WRITE_TOKEN` to the project automatically.
2. Add `NVIDIA_API_KEY`, `ADMIN_PASSWORD`, `CONTACT_PHONE` under
   Settings → Environment Variables.
3. Seed production once: pull the token locally (`vercel env pull .env`) and run
   `npm run ingest` — with the Blob token set, the seed is written to Blob.
4. Push to deploy. Add knowledge anytime at `/admin.html` — updates are live,
   no redeploy.

## Updating knowledge

- **Live:** `/admin.html` → paste text → saved to Blob instantly.
- **Bulk / re-seed:** update `data/` sources, run `npm run ingest`
  (replaces the `seed` items, keeps admin-added ones).

// Pure helpers for the RAG pipeline: chunking, similarity, retrieval, and
// pulling readable prose out of the structured case-data.json.

/** Split one paragraph that is itself longer than maxChars into sentence-
 *  aligned pieces (hard-slicing only if a single sentence is still too long). */
function splitLongBlock(block, maxChars) {
  const sentences = block.match(/[^.!?]+[.!?]+|\S[^.!?]*$/g) || [block];
  const out = [];
  let cur = "";
  for (let s of sentences) {
    s = s.trim();
    while (s.length > maxChars) {
      out.push(s.slice(0, maxChars));
      s = s.slice(maxChars);
    }
    if (cur && (cur + " " + s).length > maxChars) {
      out.push(cur.trim());
      cur = s;
    } else {
      cur = cur ? cur + " " + s : s;
    }
  }
  if (cur.trim()) out.push(cur.trim());
  return out;
}

/** Split prose into ~maxChars chunks on paragraph boundaries, further
 *  breaking up any paragraph that alone exceeds maxChars. */
export function chunkText(text, { maxChars = 1100 } = {}) {
  const blocks = String(text)
    .split(/\n\s*\n/)
    .map((b) => b.replace(/[ \t]+/g, " ").trim())
    .filter((b) => b.length > 2)
    .flatMap((b) => (b.length > maxChars ? splitLongBlock(b, maxChars) : [b]));

  const chunks = [];
  let cur = "";
  for (const b of blocks) {
    if (cur && (cur + "\n" + b).length > maxChars) {
      chunks.push(cur.trim());
      cur = b;
    } else {
      cur = cur ? cur + "\n" + b : b;
    }
  }
  if (cur.trim()) chunks.push(cur.trim());
  return chunks;
}

/** Cosine similarity between two equal-length vectors. */
export function cosine(a, b) {
  let dot = 0, na = 0, nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  return dot / (Math.sqrt(na) * Math.sqrt(nb) + 1e-8);
}

/** Return the top-k items by cosine similarity to queryVec.
 *  Items whose vector length differs from the query (e.g. left over from a
 *  different embedding model) are skipped rather than producing NaN scores. */
export function topK(queryVec, items, k = 5) {
  const n = queryVec.length;
  return items
    .filter((it) => Array.isArray(it.vector) && it.vector.length === n)
    .map((it) => ({ it, score: cosine(queryVec, it.vector) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, k);
}

/** Recursively collect human-readable strings from a JSON object,
 *  skipping colors, asset paths, and image filenames. */
export function extractProseFromJson(obj) {
  const out = [];
  const imgExt = /\.(png|jpe?g|webp|gif|svg)$/i;
  (function walk(v) {
    if (typeof v === "string") {
      const s = v.trim();
      if (
        s.length > 15 &&
        !s.startsWith("#") &&
        !s.startsWith("assets/") &&
        !imgExt.test(s)
      ) {
        out.push(s);
      }
    } else if (Array.isArray(v)) {
      v.forEach(walk);
    } else if (v && typeof v === "object") {
      Object.values(v).forEach(walk);
    }
  })(obj);
  return out.join("\n\n");
}

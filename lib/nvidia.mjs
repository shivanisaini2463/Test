// NVIDIA build.nvidia.com — OpenAI-compatible client for Kimi K2.5 (chat)
// and nv-embedqa (embeddings). A single NVIDIA_API_KEY powers both.
//
// MOCK_EMBED=1 lets the whole RAG pipeline run WITHOUT a key (deterministic
// keyword-hash vectors + a canned chat reply) so the plumbing can be verified
// before the real key is wired in.

import OpenAI from "openai";

const BASE_URL = "https://integrate.api.nvidia.com/v1";
export const CHAT_MODEL = process.env.CHAT_MODEL || "moonshotai/kimi-k2.5";
export const EMBED_MODEL = process.env.EMBED_MODEL || "nvidia/nv-embedqa-e5-v5";

const isMock = () => process.env.MOCK_EMBED === "1";

let _client;
function client() {
  if (!_client) {
    const apiKey = process.env.NVIDIA_API_KEY;
    if (!apiKey) throw new Error("NVIDIA_API_KEY is not set (or run with MOCK_EMBED=1)");
    _client = new OpenAI({ apiKey, baseURL: BASE_URL });
  }
  return _client;
}

// Deterministic keyword-hash vector — only used in MOCK_EMBED mode.
// Not semantic, but overlapping words score higher, which is enough to prove
// that retrieval selects relevant chunks end-to-end.
function mockVector(text) {
  const dims = 256;
  const v = new Array(dims).fill(0);
  for (const w of String(text).toLowerCase().match(/[a-z0-9]+/g) || []) {
    let h = 0;
    for (let i = 0; i < w.length; i++) h = (h * 31 + w.charCodeAt(i)) >>> 0;
    v[h % dims] += 1;
  }
  const n = Math.sqrt(v.reduce((s, x) => s + x * x, 0)) || 1;
  return v.map((x) => x / n);
}

/**
 * Embed one string or an array of strings.
 * @param {string|string[]} input
 * @param {"passage"|"query"} inputType  nv-embedqa requires this hint.
 * @returns {Promise<number[]|number[][]>}
 */
export async function embed(input, inputType = "passage") {
  const inputs = Array.isArray(input) ? input : [input];

  if (isMock()) {
    const vecs = inputs.map(mockVector);
    return Array.isArray(input) ? vecs : vecs[0];
  }

  const resp = await client().embeddings.create({
    model: EMBED_MODEL,
    input: inputs,
    input_type: inputType, // nv-embedqa: "passage" for docs, "query" for questions
    truncate: "END",
    encoding_format: "float",
  });
  const vecs = resp.data.map((d) => d.embedding);
  return Array.isArray(input) ? vecs : vecs[0];
}

/**
 * Streamed chat completion. Returns an async iterable of OpenAI stream chunks.
 * In MOCK_EMBED mode, yields a canned reply so the wiring can be exercised.
 */
export async function chatStream(messages, { temperature = 0.3, maxTokens = 700 } = {}) {
  if (isMock()) {
    const reply =
      "[MOCK MODE] Retrieval and streaming are wired correctly. " +
      "Set NVIDIA_API_KEY (and remove MOCK_EMBED) to get real Kimi K2.5 answers.";
    async function* gen() {
      for (const word of reply.split(" ")) {
        yield { choices: [{ delta: { content: word + " " } }] };
      }
    }
    return gen();
  }

  return client().chat.completions.create({
    model: CHAT_MODEL,
    messages,
    temperature,
    max_tokens: maxTokens,
    stream: true,
  });
}

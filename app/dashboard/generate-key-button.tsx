"use client";

import { useState } from "react";

export default function GenerateKeyButton() {
  const [key, setKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  async function generateKey() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/keys/generate", { method: "POST" });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to generate key");
      }
      const data = await res.json();
      setKey(data.key);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function copyKey() {
    if (!key) return;
    await navigator.clipboard.writeText(key);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  if (key) {
    return (
      <div>
        <div className="flex items-center gap-2 mb-3">
          <code className="flex-1 bg-neutral-800 rounded-lg px-4 py-3 font-mono text-sm text-green-400 break-all">
            {key}
          </code>
          <button
            onClick={copyKey}
            className="shrink-0 bg-neutral-800 hover:bg-neutral-700 px-4 py-3 rounded-lg text-sm transition"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <p className="text-amber-400 text-xs">
          Save this key now. It will not be shown again.
        </p>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={generateKey}
        disabled={loading}
        className="bg-white text-black px-6 py-2.5 rounded-lg font-medium hover:bg-neutral-200 transition disabled:opacity-50 text-sm"
      >
        {loading ? "Generating..." : "Generate Test Key"}
      </button>
      {error && <p className="mt-2 text-red-400 text-xs">{error}</p>}
    </div>
  );
}

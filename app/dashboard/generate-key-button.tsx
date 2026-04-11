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
          <code className="flex-1 bg-[#1d1d1d] text-[#a8d8a8] rounded-xl px-4 py-3 font-mono text-sm break-all">
            {key}
          </code>
          <button
            onClick={copyKey}
            className="shrink-0 bg-[#8069af] text-white hover:bg-[#6d5a96] px-4 py-3 rounded-xl text-sm font-medium transition"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <p className="text-[#8069af] text-xs font-medium">
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
        className="bg-[#1d1d1d] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-[#333] transition disabled:opacity-50 text-sm"
      >
        {loading ? "Generating..." : "+ Create new secret key"}
      </button>
      {error && <p className="mt-2 text-red-600 text-xs">{error}</p>}
    </div>
  );
}

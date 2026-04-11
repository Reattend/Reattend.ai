"use client";

import { useState } from "react";

interface ApiKey {
  name: string;
  key: string;
  created: string;
  lastUsed: string;
}

export default function KeysPage() {
  const [keys, setKeys] = useState<ApiKey[]>([]);
  const [showCreate, setShowCreate] = useState(false);
  const [newKeyName, setNewKeyName] = useState("");
  const [loading, setLoading] = useState(false);
  const [newlyCreatedKey, setNewlyCreatedKey] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  async function createKey() {
    if (!newKeyName.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/keys/generate", { method: "POST" });
      if (!res.ok) throw new Error("Failed to generate key");
      const data = await res.json();
      const now = new Date().toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });
      setKeys(prev => [...prev, {
        name: newKeyName.trim(),
        key: data.key,
        created: now,
        lastUsed: "Never",
      }]);
      setNewlyCreatedKey(data.key);
      setNewKeyName("");
      setShowCreate(false);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed");
    } finally {
      setLoading(false);
    }
  }

  function deleteKey(keyToDelete: string) {
    setKeys(prev => prev.filter(k => k.key !== keyToDelete));
  }

  async function copyKey(key: string) {
    await navigator.clipboard.writeText(key);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function maskKey(key: string) {
    return key.slice(0, 12) + "..." + key.slice(-4);
  }

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#1d1d1d]">API keys</h1>
          <p className="text-sm text-[#6b5f7a] font-light mt-1">
            Your secret API keys are listed below. Do not share your API key with others, or expose it in the browser or other client-side code.
          </p>
        </div>
        <button
          onClick={() => setShowCreate(true)}
          className="bg-[#1d1d1d] text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-[#333] transition flex items-center gap-2"
        >
          <span className="text-lg leading-none">+</span> Create new secret key
        </button>
      </div>

      {/* Newly created key banner */}
      {newlyCreatedKey && (
        <div className="bg-[#8069af]/10 border border-[#8069af]/30 rounded-2xl p-5 mb-6">
          <p className="text-sm font-medium text-[#1d1d1d] mb-2">Save your API key</p>
          <p className="text-xs text-[#6b5f7a] mb-3">Please save this secret key somewhere safe and accessible. For security reasons, you will not be able to view it again. If you lose this key, you will need to generate a new one.</p>
          <div className="flex items-center gap-2">
            <code className="flex-1 bg-[#1d1d1d] text-green-400 rounded-xl px-4 py-3 font-mono text-[13px] break-all">
              {newlyCreatedKey}
            </code>
            <button
              onClick={() => copyKey(newlyCreatedKey)}
              className="shrink-0 bg-[#8069af] text-white px-4 py-3 rounded-xl text-sm font-medium hover:bg-[#6d5a96] transition"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <button
            onClick={() => setNewlyCreatedKey(null)}
            className="text-xs text-[#8069af] mt-3 hover:underline"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Create modal */}
      {showCreate && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50" onClick={() => setShowCreate(false)}>
          <div className="bg-[#f5f2f8] border border-[#d4cade] rounded-2xl p-6 w-full max-w-md shadow-xl" onClick={e => e.stopPropagation()}>
            <h2 className="text-lg font-semibold text-[#1d1d1d] mb-4">Create new secret key</h2>
            <div className="mb-4">
              <label className="text-sm text-[#6b5f7a] block mb-1.5">Name</label>
              <input
                type="text"
                placeholder="My test key"
                value={newKeyName}
                onChange={e => setNewKeyName(e.target.value)}
                onKeyDown={e => e.key === "Enter" && newKeyName.trim() && createKey()}
                className="w-full bg-white border border-[#d4cade] rounded-xl px-4 py-2.5 text-sm text-[#1d1d1d] placeholder-[#a89bb5] focus:outline-none focus:border-[#8069af]"
                autoFocus
              />
            </div>
            <div className="flex gap-3 justify-end">
              <button onClick={() => setShowCreate(false)} className="px-4 py-2 text-sm text-[#6b5f7a] hover:text-[#1d1d1d] transition">Cancel</button>
              <button
                onClick={createKey}
                disabled={!newKeyName.trim() || loading}
                className="bg-[#1d1d1d] text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-[#333] transition disabled:opacity-50"
              >
                {loading ? "Creating..." : "Create secret key"}
              </button>
            </div>
            {error && <p className="text-red-600 text-xs mt-3">{error}</p>}
          </div>
        </div>
      )}

      {/* Keys table */}
      <div className="bg-white/60 border border-[#d4cade] rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#d4cade]">
              <th className="text-left px-5 py-3.5 font-semibold text-[#6b5f7a] text-xs uppercase tracking-wider">Name</th>
              <th className="text-left px-5 py-3.5 font-semibold text-[#6b5f7a] text-xs uppercase tracking-wider">Secret key</th>
              <th className="text-left px-5 py-3.5 font-semibold text-[#6b5f7a] text-xs uppercase tracking-wider">Created</th>
              <th className="text-left px-5 py-3.5 font-semibold text-[#6b5f7a] text-xs uppercase tracking-wider">Last used</th>
              <th className="text-right px-5 py-3.5 font-semibold text-[#6b5f7a] text-xs uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody>
            {keys.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-5 py-10 text-center text-[#a89bb5] text-sm">
                  No API keys yet. Click &quot;Create new secret key&quot; to get started.
                </td>
              </tr>
            ) : (
              keys.map((k) => (
                <tr key={k.key} className="border-b border-[#d4cade]/50 last:border-0 hover:bg-white/40 transition">
                  <td className="px-5 py-3.5 font-medium text-[#1d1d1d]">{k.name}</td>
                  <td className="px-5 py-3.5 font-mono text-[13px] text-[#6b5f7a]">{maskKey(k.key)}</td>
                  <td className="px-5 py-3.5 text-[#6b5f7a]">{k.created}</td>
                  <td className="px-5 py-3.5 text-[#6b5f7a]">{k.lastUsed}</td>
                  <td className="px-5 py-3.5 text-right">
                    <button
                      onClick={() => deleteKey(k.key)}
                      className="text-red-400 hover:text-red-600 transition p-1"
                      title="Delete key"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[#a89bb5] mt-4">
        View usage per API key on the <a href="/dashboard/usage" className="text-[#8069af] hover:underline">Usage page</a>.
      </p>
    </div>
  );
}

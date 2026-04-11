"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

type ViewMode = "list" | "grid" | "timeline";

interface Memory {
  id: string;
  content: string;
  source: string;
  summary: string;
  triage_type: string;
  tags: string[];
  sentiment: string;
  importance: number;
  created_at: number;
  extraction: {
    people: string[];
    decisions: string[];
    action_items: { owner?: string; task?: string }[];
  };
}

export default function MemoriesPage() {
  const [view, setView] = useState<ViewMode>("list");
  const [filter, setFilter] = useState("all");
  const [memories, setMemories] = useState<Memory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMemories();
  }, []);

  async function fetchMemories() {
    setLoading(true);
    try {
      const res = await fetch("/api/reattend/memories");
      if (res.ok) {
        const data = await res.json();
        setMemories(data.memories || []);
      }
    } catch { /* ignore */ }
    setLoading(false);
  }

  const filtered = filter === "all"
    ? memories
    : memories.filter(m => m.triage_type === filter || m.source === filter);

  const filters = ["all", "meeting", "note", "email", "decision", "task", "document"];

  function timeAgo(ts: number) {
    const diff = Date.now() / 1000 - ts;
    if (diff < 60) return "just now";
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  }

  return (
    <div className="p-6 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-[#111827]">Memories</h1>
        <div className="flex items-center gap-3">
          <button onClick={fetchMemories} className="text-xs text-gray-400 hover:text-[#111827] transition">Refresh</button>
          <Link href="/app/memories/new" className="bg-[#111827] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-black transition">
            + Add Memory
          </Link>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-1.5 overflow-x-auto">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition whitespace-nowrap ${
                filter === f ? "bg-[#111827] text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="flex border border-gray-200 rounded-lg overflow-hidden">
          {(["list", "grid", "timeline"] as ViewMode[]).map(v => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-3 py-1.5 text-xs font-medium capitalize transition ${
                view === v ? "bg-[#111827] text-white" : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {loading ? (
        <div className="text-center py-12 text-gray-400 text-sm">Loading memories...</div>
      ) : filtered.length === 0 ? (
        <div className="border border-dashed border-gray-300 rounded-xl p-12 text-center">
          <p className="text-gray-400 text-sm mb-4">{memories.length === 0 ? "No memories yet" : "No memories match this filter"}</p>
          <Link href="/app/memories/new" className="text-sm text-[#111827] font-medium hover:underline">
            Add your first memory
          </Link>
        </div>
      ) : view === "grid" ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map(m => (
            <div key={m.id} className="border border-gray-200 rounded-xl p-4 hover:border-gray-300 transition">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-medium capitalize">{m.triage_type || m.source}</span>
                <span className="text-[10px] text-gray-400">{timeAgo(m.created_at)}</span>
              </div>
              <p className="text-sm text-[#111827] font-medium line-clamp-2 mb-1">{m.summary || m.content.slice(0, 100)}</p>
              {m.tags?.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {m.tags.slice(0, 3).map(t => <span key={t} className="text-[10px] bg-gray-50 text-gray-400 px-1.5 py-0.5 rounded">{t}</span>)}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map(m => (
            <div key={m.id} className="border border-gray-200 rounded-xl px-5 py-4 hover:border-gray-300 transition flex items-start gap-4">
              {view === "timeline" && (
                <div className="shrink-0 w-16 text-right">
                  <p className="text-[10px] text-gray-400">{timeAgo(m.created_at)}</p>
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-medium capitalize">{m.triage_type || m.source}</span>
                  {m.sentiment && <span className="text-[10px] text-gray-400 capitalize">{m.sentiment}</span>}
                  <span className="text-[10px] text-gray-400">Importance: {m.importance}/5</span>
                  {view !== "timeline" && <span className="text-[10px] text-gray-400 ml-auto">{timeAgo(m.created_at)}</span>}
                </div>
                <p className="text-sm text-[#111827] leading-relaxed">{m.summary || m.content.slice(0, 200)}</p>
                {m.extraction?.people?.length > 0 && (
                  <p className="text-xs text-gray-400 mt-1">People: {m.extraction.people.join(", ")}</p>
                )}
                {m.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {m.tags.map(t => <span key={t} className="text-[10px] bg-gray-50 text-gray-400 px-1.5 py-0.5 rounded">{t}</span>)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <p className="text-xs text-gray-400 text-center mt-6">{filtered.length} memories</p>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { getMemoryType, timeAgo, groupByDate } from "@/lib/memory-types";

type ViewMode = "list" | "grid";

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
    organizations: string[];
    decisions: string[];
    action_items: { owner?: string; task?: string }[];
    topics: string[];
  };
}

export default function MemoriesPage() {
  const [view, setView] = useState<ViewMode>("list");
  const [filter, setFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("any");
  const [search, setSearch] = useState("");
  const [memories, setMemories] = useState<Memory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchMemories(); }, []);

  async function fetchMemories() {
    setLoading(true);
    try {
      const res = await fetch("/api/reattend/memories?limit=100");
      if (res.ok) {
        const data = await res.json();
        setMemories(data.memories || []);
      }
    } catch { /* ignore */ }
    setLoading(false);
  }

  // Filter
  let filtered = memories;
  if (filter !== "all") filtered = filtered.filter(m => m.triage_type === filter || m.source === filter);
  if (search) filtered = filtered.filter(m =>
    (m.summary || m.content).toLowerCase().includes(search.toLowerCase()) ||
    m.tags?.some(t => t.toLowerCase().includes(search.toLowerCase()))
  );

  const dateFilters = ["any", "today", "this week", "this month"];
  const typeFilters = ["all", "meeting", "decision", "note", "task", "idea", "email", "report"];
  const groups = groupByDate(filtered);

  return (
    <div className="p-6 max-w-4xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <h1 className="text-xl font-bold text-[#111827]">Memories</h1>
        <Link href="/app/memories/new" className="bg-[#111827] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-black transition">
          + New Memory
        </Link>
      </div>
      <p className="text-sm text-gray-500 mb-5">{memories.length} memories</p>

      {/* Search + filters */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search memories..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg pl-9 pr-4 py-2 text-sm text-[#111827] placeholder-gray-400 focus:outline-none focus:border-[#111827]"
          />
          <svg className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Date filter */}
        <div className="flex border border-gray-200 rounded-lg overflow-hidden">
          {dateFilters.map(d => (
            <button key={d} onClick={() => setDateFilter(d)} className={`px-3 py-2 text-xs font-medium capitalize transition ${dateFilter === d ? "bg-[#111827] text-white" : "text-gray-500 hover:bg-gray-50"}`}>
              {d === "any" ? "Any time" : d.charAt(0).toUpperCase() + d.slice(1)}
            </button>
          ))}
        </div>

        {/* View toggle */}
        <div className="flex border border-gray-200 rounded-lg overflow-hidden">
          <button onClick={() => setView("list")} className={`px-2.5 py-2 transition ${view === "list" ? "bg-[#111827] text-white" : "text-gray-400 hover:bg-gray-50"}`}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <button onClick={() => setView("grid")} className={`px-2.5 py-2 transition ${view === "grid" ? "bg-[#111827] text-white" : "text-gray-400 hover:bg-gray-50"}`}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
          </button>
        </div>
      </div>

      {/* Type filters */}
      <div className="flex gap-1.5 mb-6 overflow-x-auto">
        {typeFilters.map(f => (
          <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1.5 rounded-full text-xs font-medium capitalize transition whitespace-nowrap ${filter === f ? "bg-[#111827] text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}>
            {f === "all" ? "All types" : `${getMemoryType(f).icon} ${f}`}
          </button>
        ))}
      </div>

      {/* Content */}
      {loading ? (
        <div className="text-center py-16 text-gray-400 text-sm">Loading memories...</div>
      ) : filtered.length === 0 ? (
        <div className="border border-dashed border-gray-300 rounded-xl p-16 text-center">
          <p className="text-gray-400 text-sm mb-4">{memories.length === 0 ? "No memories yet" : "No memories match this filter"}</p>
          <Link href="/app/memories/new" className="text-sm text-[#111827] font-medium hover:underline">Add your first memory</Link>
        </div>
      ) : view === "grid" ? (
        <div className="grid sm:grid-cols-2 gap-3">
          {filtered.map(m => <MemoryCard key={m.id} memory={m} />)}
        </div>
      ) : (
        <div className="space-y-6">
          {groups.map(group => (
            <div key={group.label}>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{group.label}</p>
              <div className="space-y-1">
                {(group.items as Memory[]).map(m => <MemoryRow key={m.id} memory={m} />)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function MemoryRow({ memory: m }: { memory: Memory }) {
  const type = getMemoryType(m.triage_type);
  const title = m.summary?.split(".")[0] || m.content.slice(0, 80);

  return (
    <Link href={`/app/memories/${m.id}`} className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition group">
      <span className="text-base mt-0.5 shrink-0">{type.icon}</span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded font-medium">{type.label}</span>
          {m.source && m.source !== m.triage_type && (
            <span className="text-[10px] text-gray-400">via {m.source}</span>
          )}
        </div>
        <p className="text-sm text-[#111827] font-medium truncate group-hover:text-black">{title}</p>
        {m.summary && m.summary !== title && (
          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{m.summary}</p>
        )}
        {m.tags?.length > 0 && (
          <div className="flex gap-1 mt-1.5">
            {m.tags.slice(0, 4).map(t => (
              <span key={t} className="text-[10px] bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded">{t}</span>
            ))}
          </div>
        )}
      </div>
      <span className="text-[11px] text-gray-400 shrink-0 mt-1">{timeAgo(m.created_at)}</span>
    </Link>
  );
}

function MemoryCard({ memory: m }: { memory: Memory }) {
  const type = getMemoryType(m.triage_type);
  const title = m.summary?.split(".")[0] || m.content.slice(0, 80);

  return (
    <Link href={`/app/memories/${m.id}`} className="border border-gray-200 rounded-xl p-4 hover:border-gray-300 hover:shadow-sm transition block">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-sm">{type.icon}</span>
          <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded font-medium">{type.label}</span>
        </div>
        <span className="text-[10px] text-gray-400">{timeAgo(m.created_at)}</span>
      </div>
      <p className="text-sm text-[#111827] font-medium mb-1 line-clamp-2">{title}</p>
      {m.extraction?.people?.length > 0 && (
        <p className="text-[11px] text-gray-400 mb-2">{m.extraction.people.join(", ")}</p>
      )}
      {m.tags?.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {m.tags.slice(0, 3).map(t => <span key={t} className="text-[10px] bg-gray-50 text-gray-400 px-1.5 py-0.5 rounded">{t}</span>)}
        </div>
      )}
    </Link>
  );
}

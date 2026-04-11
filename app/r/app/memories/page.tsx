"use client";

import Link from "next/link";
import { useState } from "react";

type ViewMode = "list" | "grid" | "timeline";

export default function MemoriesPage() {
  const [view, setView] = useState<ViewMode>("list");
  const [filter, setFilter] = useState("all");

  const filters = ["all", "meetings", "notes", "decisions", "tasks", "files", "emails"];

  // Placeholder - these will come from the API
  const memories: never[] = [];

  return (
    <div className="p-6 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-[#111827]">Memories</h1>
        <Link href="/app/memories/new" className="bg-[#111827] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-black transition">
          + Add Memory
        </Link>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between mb-6">
        {/* Filters */}
        <div className="flex gap-1.5">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition ${
                filter === f ? "bg-[#111827] text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* View toggle */}
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

      {/* Memory list */}
      {memories.length === 0 ? (
        <div className="border border-dashed border-gray-300 rounded-xl p-12 text-center">
          <p className="text-gray-400 text-sm mb-4">No memories yet</p>
          <Link href="/app/memories/new" className="text-sm text-[#111827] font-medium hover:underline">
            Add your first memory
          </Link>
        </div>
      ) : (
        <div className={view === "grid" ? "grid sm:grid-cols-2 md:grid-cols-3 gap-4" : "space-y-2"}>
          {/* Memory cards will render here */}
        </div>
      )}
    </div>
  );
}

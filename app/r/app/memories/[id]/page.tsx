"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getMemoryType, timeAgo } from "@/lib/memory-types";

interface Memory {
  id: string;
  content: string;
  source: string;
  summary: string;
  triage_type: string;
  tags: string[];
  sentiment: string;
  importance: number;
  importance_reason: string;
  created_at: number;
  metadata: Record<string, unknown>;
  extraction: {
    people: string[];
    organizations: string[];
    decisions: string[];
    action_items: { owner?: string; task?: string }[];
    dates: string[];
    topics: string[];
  };
  links: { target_id: string; kind: string; weight: number; explanation: string }[];
}

interface LinkedMemory {
  id: string;
  summary: string;
  triage_type: string;
  created_at: number;
}

export default function MemoryDetailPage() {
  const params = useParams();
  const router = useRouter();
  const memoryId = params.id as string;
  const [memory, setMemory] = useState<Memory | null>(null);
  const [connections, setConnections] = useState<LinkedMemory[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/reattend/memories/${memoryId}`);
        if (res.ok) {
          const data = await res.json();
          setMemory(data.memory);
          setConnections(data.connections || []);
        }
      } catch { /* ignore */ }
      setLoading(false);
    }
    load();
  }, [memoryId]);

  async function handleDelete() {
    if (!confirm("Delete this memory permanently?")) return;
    setDeleting(true);
    try {
      await fetch(`/api/reattend/memories/${memoryId}`, { method: "DELETE" });
      router.push("/app/memories");
    } catch { setDeleting(false); }
  }

  if (loading) return <div className="p-6 text-gray-400 text-sm">Loading...</div>;
  if (!memory) return (
    <div className="p-6">
      <p className="text-gray-500 text-sm">Memory not found.</p>
      <Link href="/app/memories" className="text-sm text-[#111827] font-medium hover:underline mt-2 inline-block">Back to memories</Link>
    </div>
  );

  const type = getMemoryType(memory.triage_type);
  const title = memory.summary?.split(".")[0] || memory.content.slice(0, 100);
  const confidence = Math.min(100, Math.round((memory.importance / 5) * 100));

  return (
    <div className="p-6 max-w-5xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/app/memories" className="hover:text-[#111827] transition">Memories</Link>
        <span>/</span>
        <span className="text-[#111827] truncate max-w-xs">{title}</span>
      </div>

      <div className="flex gap-6">
        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-start gap-3 mb-4">
            <span className="text-2xl mt-0.5">{type.icon}</span>
            <div className="flex-1">
              <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded font-medium">{type.label}</span>
              <h1 className="text-lg font-bold text-[#111827] mt-1">{title}</h1>
              {memory.summary && memory.summary !== title && (
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">{memory.summary}</p>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="border border-gray-200 rounded-xl p-5 mb-5">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Content</h3>
            <p className="text-sm text-[#111827] leading-relaxed whitespace-pre-wrap">{memory.content}</p>
          </div>

          {/* Extractions */}
          {memory.extraction && (
            <div className="space-y-4 mb-5">
              {memory.extraction.decisions?.length > 0 && (
                <div className="border border-gray-200 rounded-xl p-5">
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Decisions</h3>
                  <ul className="space-y-1.5">
                    {memory.extraction.decisions.map((d, i) => (
                      <li key={i} className="text-sm text-[#111827] flex items-start gap-2">
                        <span className="text-gray-400 mt-0.5">&#x2022;</span>{d}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {memory.extraction.action_items?.length > 0 && (
                <div className="border border-gray-200 rounded-xl p-5">
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Action Items</h3>
                  <ul className="space-y-1.5">
                    {memory.extraction.action_items.map((a, i) => (
                      <li key={i} className="text-sm text-[#111827] flex items-start gap-2">
                        <span className="text-gray-300 mt-0.5">☐</span>
                        <span>{typeof a === "string" ? a : `${a.owner ? a.owner + ": " : ""}${a.task || ""}`}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Linked Memories */}
          {(connections.length > 0 || memory.links?.length > 0) && (
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Linked Memories ({connections.length || memory.links?.length || 0})
              </h3>
              <div className="space-y-2">
                {connections.length > 0 ? connections.map(c => {
                  const cType = getMemoryType(c.triage_type);
                  const link = memory.links?.find(l => l.target_id === c.id);
                  return (
                    <Link key={c.id} href={`/app/memories/${c.id}`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                      <span className="text-sm">{cType.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-[#111827] truncate">{c.summary || "Untitled memory"}</p>
                      </div>
                      {link && (
                        <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded font-mono">{link.kind}</span>
                      )}
                    </Link>
                  );
                }) : memory.links?.map((l, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                    <span className="text-sm">🔗</span>
                    <span className="text-sm text-gray-500 font-mono">{l.target_id}</span>
                    <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded font-mono ml-auto">{l.kind}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right panel - Details */}
        <div className="w-72 shrink-0">
          <div className="border border-gray-200 rounded-xl p-5 sticky top-6">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Details</h3>

            {/* Confidence bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-gray-500">Confidence</span>
                <span className="text-xs font-semibold text-[#111827]">{confidence}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="bg-[#111827] h-1.5 rounded-full transition-all" style={{ width: `${confidence}%` }} />
              </div>
            </div>

            {/* Meta rows */}
            <div className="space-y-3 mb-5">
              <DetailRow label="Created" value={new Date(memory.created_at * 1000).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} />
              <DetailRow label="Created by" value="AI Agent" />
              <DetailRow label="Source" value={memory.source || "manual"} />
              <DetailRow label="Sentiment" value={memory.sentiment || "neutral"} />
              <DetailRow label="Importance" value={`${memory.importance}/5`} />
              {memory.importance_reason && <DetailRow label="Reason" value={memory.importance_reason} />}
            </div>

            {/* Tags */}
            {memory.tags?.length > 0 && (
              <div className="mb-5">
                <h4 className="text-xs text-gray-400 mb-2">Tags</h4>
                <div className="flex flex-wrap gap-1.5">
                  {memory.tags.map(t => (
                    <span key={t} className="text-[11px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{t}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Entities */}
            {(memory.extraction?.people?.length > 0 || memory.extraction?.organizations?.length > 0 || memory.extraction?.topics?.length > 0) && (
              <div className="mb-5">
                <h4 className="text-xs text-gray-400 mb-2">Entities</h4>
                <div className="space-y-1.5">
                  {memory.extraction.people?.map(p => (
                    <div key={p} className="flex items-center gap-2 text-sm">
                      <span className="text-[10px] bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded w-12 text-center">person</span>
                      <span className="text-[#111827]">{p}</span>
                    </div>
                  ))}
                  {memory.extraction.organizations?.map(o => (
                    <div key={o} className="flex items-center gap-2 text-sm">
                      <span className="text-[10px] bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded w-12 text-center">org</span>
                      <span className="text-[#111827]">{o}</span>
                    </div>
                  ))}
                  {memory.extraction.topics?.map(t => (
                    <div key={t} className="flex items-center gap-2 text-sm">
                      <span className="text-[10px] bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded w-12 text-center">topic</span>
                      <span className="text-[#111827]">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Dates */}
            {memory.extraction?.dates?.length > 0 && (
              <div className="mb-5">
                <h4 className="text-xs text-gray-400 mb-2">Dates mentioned</h4>
                <div className="space-y-1">
                  {memory.extraction.dates.map((d, i) => (
                    <p key={i} className="text-sm text-[#111827]">{d}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Delete */}
            <button
              onClick={handleDelete}
              disabled={deleting}
              className="w-full text-center py-2 text-xs text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition mt-2"
            >
              {deleting ? "Deleting..." : "Delete memory"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <span className="text-xs text-gray-400 shrink-0">{label}</span>
      <span className="text-xs text-[#111827] text-right capitalize">{value}</span>
    </div>
  );
}

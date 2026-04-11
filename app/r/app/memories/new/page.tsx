"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddMemoryPage() {
  const [mode, setMode] = useState<"text" | "file" | "url">("text");
  const [content, setContent] = useState("");
  const [source, setSource] = useState("note");
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Record<string, unknown> | null>(null);
  const router = useRouter();

  async function handleSubmit() {
    setLoading(true);
    setResult(null);
    const startTime = Date.now();
    try {
      const res = await fetch("/api/reattend/remember", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: mode === "url" ? url : content, source }),
      });
      const data = await res.json();
      data._clientLatency = Date.now() - startTime;

      // Save to agent logs in localStorage
      const logs = JSON.parse(localStorage.getItem("reattend_agent_logs") || "[]");
      logs.unshift({
        time: new Date().toISOString(),
        action: "Processed memory",
        summary: data.summary || "",
        triage_type: data.triage_type || "",
        sentiment: data.sentiment || "",
        importance: data.importance || 0,
        extraction: data.extraction || {},
        links: data.links || [],
        latency_ms: data.latency_ms || 0,
        clientLatency: data._clientLatency,
      });
      localStorage.setItem("reattend_agent_logs", JSON.stringify(logs.slice(0, 50)));

      setResult(data);
    } catch {
      setResult({ error: "Failed to save memory" });
    } finally {
      setLoading(false);
    }
  }

  const r = result as Record<string, unknown> | null;

  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-xl font-bold text-[#111827] mb-6">Add Memory</h1>

      {/* Mode tabs */}
      <div className="flex gap-1.5 mb-6">
        {(["text", "file", "url"] as const).map(m => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition ${
              mode === m ? "bg-[#111827] text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            {m === "url" ? "URL" : m}
          </button>
        ))}
      </div>

      {/* Source selector */}
      <div className="mb-4">
        <label className="text-sm text-gray-500 block mb-1.5">Source</label>
        <select
          value={source}
          onChange={e => setSource(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-[#111827] focus:outline-none focus:border-[#111827]"
        >
          <option value="note">Note</option>
          <option value="meeting">Meeting</option>
          <option value="email">Email</option>
          <option value="slack">Slack</option>
          <option value="document">Document</option>
          <option value="article">Article</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Input */}
      {mode === "text" && (
        <textarea
          placeholder="Type or paste your memory here... Meeting notes, thoughts, decisions, anything."
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={8}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-[#111827] placeholder-gray-400 focus:outline-none focus:border-[#111827] resize-none mb-4"
          autoFocus
        />
      )}
      {mode === "file" && (
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center mb-4">
          <input type="file" onChange={e => setFile(e.target.files?.[0] || null)} className="hidden" id="file-upload" accept=".pdf,.docx,.pptx,.mp3,.wav,.m4a,.png,.jpg,.jpeg,.md,.txt,.html,.eml,.ics" />
          <label htmlFor="file-upload" className="cursor-pointer">
            {file ? (
              <div><p className="text-sm font-medium text-[#111827]">{file.name}</p><p className="text-xs text-gray-400 mt-1">{(file.size / 1024 / 1024).toFixed(1)} MB</p></div>
            ) : (
              <div><p className="text-sm text-gray-500 mb-2">Drop a file or click to browse</p><p className="text-xs text-gray-400">PDF, DOCX, audio, images, markdown, email, calendar</p></div>
            )}
          </label>
        </div>
      )}
      {mode === "url" && (
        <input type="url" placeholder="https://example.com/article" value={url} onChange={e => setUrl(e.target.value)} className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-[#111827] placeholder-gray-400 focus:outline-none focus:border-[#111827] mb-4" autoFocus />
      )}

      <button
        onClick={handleSubmit}
        disabled={loading || (mode === "text" && !content.trim()) || (mode === "url" && !url.trim()) || (mode === "file" && !file)}
        className="bg-[#111827] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-black transition disabled:opacity-50"
      >
        {loading ? "Processing..." : "Save Memory"}
      </button>

      {/* Result with agent log */}
      {r && !r.error && (
        <div className="mt-6 border border-gray-200 rounded-xl overflow-hidden">
          {/* Summary */}
          <div className="p-5 border-b border-gray-100">
            <h3 className="text-sm font-semibold text-[#111827] mb-2">Memory saved</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{String(r.summary || "")}</p>
          </div>

          {/* Agent log */}
          <div className="p-5 bg-gray-50">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Agent Log</p>
            <div className="space-y-1.5 text-xs">
              <LogRow signal="TRIAGE" result={`Type: ${r.triage_type || "unknown"}`} />
              <LogRow signal="EXTRACT" result={`${(r.extraction as Record<string, string[]>)?.people?.length || 0} people, ${(r.extraction as Record<string, string[]>)?.decisions?.length || 0} decisions`} />
              <LogRow signal="SUMMARIZE" result={String(r.summary || "").slice(0, 60) + "..."} />
              <LogRow signal="SENTIMENT" result={String(r.sentiment || "neutral")} />
              <LogRow signal="IMPORTANCE" result={`${r.importance}/5`} />
              <LogRow signal="EMBED" result="Vector stored" />
              <LogRow signal="LINK" result={`${(r.links as unknown[])?.length || 0} connections`} />
            </div>
            <p className="text-[10px] text-gray-400 mt-3">
              Total: {Number(r.latency_ms || 0).toLocaleString()}ms server + {Number(r._clientLatency || 0).toLocaleString()}ms network
            </p>
          </div>

          {/* Tags */}
          {(r.tags as string[])?.length > 0 && (
            <div className="px-5 py-3 border-t border-gray-100 flex flex-wrap gap-1.5">
              {(r.tags as string[]).map(t => <span key={t} className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{t}</span>)}
            </div>
          )}

          <div className="px-5 py-3 border-t border-gray-100">
            <button onClick={() => router.push("/app/memories")} className="text-xs text-[#111827] font-medium hover:underline">View all memories</button>
          </div>
        </div>
      )}

      {r && r.error ? (
        <div className="mt-6 border border-red-200 rounded-xl p-5">
          <p className="text-sm text-red-600">{String(r.error)}</p>
        </div>
      ) : null}
    </div>
  );
}

function LogRow({ signal, result }: { signal: string; result: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-green-600">&#x2713;</span>
      <span className="font-mono text-gray-500 w-24">{signal}</span>
      <span className="text-[#111827] flex-1">{result}</span>
    </div>
  );
}

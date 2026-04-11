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
    try {
      const res = await fetch("/api/reattend/remember", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: mode === "url" ? url : content, source }),
      });
      const data = await res.json();
      setResult(data);
    } catch {
      setResult({ error: "Failed to save memory" });
    } finally {
      setLoading(false);
    }
  }

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
          <input
            type="file"
            onChange={e => setFile(e.target.files?.[0] || null)}
            className="hidden"
            id="file-upload"
            accept=".pdf,.docx,.pptx,.mp3,.wav,.m4a,.png,.jpg,.jpeg,.md,.txt,.html,.eml,.ics"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            {file ? (
              <div>
                <p className="text-sm font-medium text-[#111827]">{file.name}</p>
                <p className="text-xs text-gray-400 mt-1">{(file.size / 1024 / 1024).toFixed(1)} MB</p>
              </div>
            ) : (
              <div>
                <p className="text-sm text-gray-500 mb-2">Drop a file or click to browse</p>
                <p className="text-xs text-gray-400">PDF, DOCX, audio, images, markdown, email, calendar</p>
              </div>
            )}
          </label>
        </div>
      )}
      {mode === "url" && (
        <input
          type="url"
          placeholder="https://example.com/article"
          value={url}
          onChange={e => setUrl(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-[#111827] placeholder-gray-400 focus:outline-none focus:border-[#111827] mb-4"
          autoFocus
        />
      )}

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={loading || (mode === "text" && !content.trim()) || (mode === "url" && !url.trim()) || (mode === "file" && !file)}
        className="bg-[#111827] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-black transition disabled:opacity-50"
      >
        {loading ? "Processing..." : "Save Memory"}
      </button>

      {/* Result */}
      {result && (
        <div className="mt-6 border border-gray-200 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-[#111827] mb-3">
            {(result as Record<string, unknown>).error ? "Error" : "Memory saved"}
          </h3>
          {(result as Record<string, unknown>).error ? (
            <p className="text-sm text-red-600">{String((result as Record<string, unknown>).error)}</p>
          ) : (
            <div className="space-y-2 text-sm">
              <div className="flex gap-2"><span className="text-gray-400 w-20 shrink-0">Summary</span><span className="text-[#111827]">{String((result as Record<string, unknown>).summary || "")}</span></div>
              <div className="flex gap-2"><span className="text-gray-400 w-20 shrink-0">Type</span><span className="text-[#111827]">{String((result as Record<string, unknown>).triage_type || "")}</span></div>
              <div className="flex gap-2"><span className="text-gray-400 w-20 shrink-0">Sentiment</span><span className="text-[#111827]">{String((result as Record<string, unknown>).sentiment || "")}</span></div>
              <div className="flex gap-2"><span className="text-gray-400 w-20 shrink-0">Importance</span><span className="text-[#111827]">{String((result as Record<string, unknown>).importance || "")}/5</span></div>
              <button onClick={() => router.push("/app/memories")} className="text-xs text-[#111827] font-medium hover:underline mt-2">View all memories</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

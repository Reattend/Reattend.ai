"use client";

import { useState, useEffect, useRef } from "react";

export default function QuickCapture() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(prev => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
    if (!open) {
      setContent("");
      setSaved(false);
    }
  }, [open]);

  async function handleSave() {
    if (!content.trim() || loading) return;
    setLoading(true);
    try {
      const res = await fetch("/api/reattend/remember", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, source: "quick-capture" }),
      });
      if (res.ok) {
        setSaved(true);
        setTimeout(() => { setOpen(false); setContent(""); setSaved(false); }, 1000);
      }
    } catch { /* ignore */ }
    setLoading(false);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-start justify-center pt-[20vh] z-50" onClick={() => setOpen(false)}>
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg border border-gray-200" onClick={e => e.stopPropagation()}>
        <div className="p-4">
          <textarea
            ref={inputRef}
            value={content}
            onChange={e => setContent(e.target.value)}
            onKeyDown={e => { if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleSave(); }}
            placeholder="Quick capture... Type anything to save as a memory."
            rows={3}
            className="w-full text-sm text-[#111827] placeholder-gray-400 outline-none resize-none"
          />
        </div>
        <div className="border-t border-gray-100 px-4 py-3 flex items-center justify-between">
          <span className="text-[10px] text-gray-400">
            {saved ? "Saved!" : "Cmd+Enter to save"}
          </span>
          <div className="flex gap-2">
            <button onClick={() => setOpen(false)} className="px-3 py-1.5 text-xs text-gray-500 hover:text-[#111827]">Cancel</button>
            <button
              onClick={handleSave}
              disabled={!content.trim() || loading || saved}
              className="bg-[#111827] text-white px-4 py-1.5 rounded-lg text-xs font-medium hover:bg-black disabled:opacity-50 transition"
            >
              {loading ? "Saving..." : saved ? "Saved" : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

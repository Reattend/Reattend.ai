"use client";

import { useState } from "react";

export default function PlaygroundPage() {
  const [input, setInput] = useState("Met with Sarah Chen from Acme Corp on Tuesday. She confirmed the Q2 launch budget at $45,000 and agreed to send the signed contract by Friday. Brian from our side will handle the onboarding.");
  const [output, setOutput] = useState<string | null>(null);
  const [mode, setMode] = useState<"remember" | "ask">("remember");
  const [loading, setLoading] = useState(false);

  async function run() {
    setLoading(true);
    setOutput(null);
    try {
      // Get the first key from localStorage
      const savedKeys = localStorage.getItem("rabbit_keys");
      if (!savedKeys) {
        setOutput("No API key found. Create one in the API Keys page first.");
        return;
      }
      // We don't store the full key, just the preview. User needs to use their actual key.
      setOutput(
        mode === "remember"
          ? `// To test this, run:\n\ncurl -X POST http://api.rabbit.reattend.ai:8000/v1/remember \\\n  -H "Authorization: Bearer YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d '${JSON.stringify({ content: input, source: "playground" })}'`
          : `// To test this, run:\n\ncurl -X POST http://api.rabbit.reattend.ai:8000/v1/ask \\\n  -H "Authorization: Bearer YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d '${JSON.stringify({ question: input })}'`
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-[#1d1d1d] mb-1">Playground</h1>
      <p className="text-sm text-[#6b5f7a] font-light mb-8">Test the Rabbit API directly from your browser.</p>

      {/* Mode toggle */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => { setMode("remember"); setInput("Met with Sarah Chen from Acme Corp on Tuesday. She confirmed the Q2 launch budget at $45,000 and agreed to send the signed contract by Friday."); setOutput(null); }}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition ${mode === "remember" ? "bg-[#8069af]/10 text-[#8069af] border border-[#8069af]" : "bg-white/50 border border-[#d4cade] text-[#6b5f7a]"}`}
        >
          Remember
        </button>
        <button
          onClick={() => { setMode("ask"); setInput("What did we decide about the Q2 launch?"); setOutput(null); }}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition ${mode === "ask" ? "bg-[#8069af]/10 text-[#8069af] border border-[#8069af]" : "bg-white/50 border border-[#d4cade] text-[#6b5f7a]"}`}
        >
          Ask
        </button>
      </div>

      {/* Input */}
      <div className="mb-4">
        <label className="text-sm text-[#6b5f7a] block mb-1.5">{mode === "remember" ? "Content to remember" : "Question to ask"}</label>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          rows={4}
          className="w-full bg-white border border-[#d4cade] rounded-xl px-4 py-3 text-sm text-[#1d1d1d] placeholder-[#a89bb5] focus:outline-none focus:border-[#8069af] resize-none"
        />
      </div>

      <button
        onClick={run}
        disabled={!input.trim() || loading}
        className="bg-[#1d1d1d] text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-[#333] transition disabled:opacity-50 mb-6"
      >
        {loading ? "Processing..." : mode === "remember" ? "Run remember()" : "Run ask()"}
      </button>

      {/* Output */}
      {output && (
        <div>
          <label className="text-sm text-[#6b5f7a] block mb-1.5">Output</label>
          <pre className="bg-[#1d1d1d] text-[#eee9f4] rounded-xl px-4 py-4 font-mono text-[13px] overflow-x-auto whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      )}

      <p className="text-xs text-[#a89bb5] mt-6">
        Full interactive playground with live API calls coming soon. For now, use the generated curl commands or the Python/JS SDK.
      </p>
    </div>
  );
}

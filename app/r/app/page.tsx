"use client";

import { useState } from "react";

export default function ReattendChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSend() {
    if (!input.trim() || loading) return;
    const question = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: question }]);
    setLoading(true);

    try {
      const res = await fetch("/api/reattend/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", text: data.text || data.error || "No answer found." }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", text: "Something went wrong. Please try again." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center h-full px-6">
            <h1 className="text-3xl font-bold text-[#111827] mb-2">Hello!</h1>
            <p className="text-gray-400 mb-10">Ask anything. I&apos;ll answer from your memories.</p>

            {/* Suggestion cards */}
            <div className="grid grid-cols-3 gap-3 max-w-xl w-full mb-8">
              <SuggestionCard
                title="Synthesize"
                desc="Combine insights from multiple memories"
                onClick={() => setInput("What decisions did I make this week?")}
              />
              <SuggestionCard
                title="Brainstorm"
                desc="Generate new ideas from your captured thoughts"
                onClick={() => setInput("What are my key insights recently?")}
              />
              <SuggestionCard
                title="Open Tasks"
                desc="Review action items and pending decisions"
                onClick={() => setInput("What are my open action items?")}
              />
            </div>

            {/* Quick prompts */}
            <div className="flex flex-wrap gap-2 max-w-xl justify-center">
              <Pill onClick={() => setInput("What decisions did I make this week?")}>What decisions did I make this week?</Pill>
              <Pill onClick={() => setInput("Summarize my recent meetings")}>Summarize my recent meetings</Pill>
              <Pill onClick={() => setInput("What did I learn recently?")}>What did I learn recently?</Pill>
              <Pill onClick={() => setInput("What are my key insights?")}>What are my key insights?</Pill>
            </div>
          </div>
        ) : (
          /* Chat messages */
          <div className="max-w-2xl mx-auto px-6 py-8 space-y-6">
            {messages.map((msg, i) => (
              <div key={i} className="flex gap-3">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                  msg.role === "user" ? "bg-[#111827] text-white" : "bg-gray-200 text-gray-600"
                }`}>
                  {msg.role === "user" ? "Y" : "R"}
                </div>
                <div className={`rounded-lg px-4 py-2.5 text-sm leading-relaxed max-w-[85%] ${
                  msg.role === "user" ? "bg-gray-100 text-[#111827]" : "text-gray-600"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-bold shrink-0">R</div>
                <div className="text-sm text-gray-400 animate-pulse">Thinking...</div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input bar */}
      <div className="border-t border-gray-200 px-6 py-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 focus-within:border-[#111827] focus-within:ring-1 focus-within:ring-[#111827] transition">
            <input
              type="text"
              placeholder="Ask me anything about your memories..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSend()}
              className="flex-1 text-sm text-[#111827] placeholder-gray-400 outline-none bg-transparent"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || loading}
              className="text-gray-400 hover:text-[#111827] transition disabled:opacity-30"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </div>
          <p className="text-[10px] text-gray-400 text-center mt-2">
            Enter to send. Shift+Enter for new line.
          </p>
        </div>
      </div>
    </div>
  );
}

function SuggestionCard({ title, desc, onClick }: { title: string; desc: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-left border border-gray-200 rounded-xl p-4 hover:border-gray-300 hover:bg-gray-50 transition"
    >
      <h3 className="text-sm font-semibold text-[#111827] mb-1">{title}</h3>
      <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
    </button>
  );
}

function Pill({ children, onClick }: { children: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-xs text-gray-500 border border-gray-200 rounded-full px-3.5 py-1.5 hover:bg-gray-50 hover:border-gray-300 transition"
    >
      {children}
    </button>
  );
}

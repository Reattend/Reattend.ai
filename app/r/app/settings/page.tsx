"use client";

import { useState, useEffect } from "react";

type Tab = "profile" | "workspace" | "preferences" | "agent-logs";

export default function SettingsPage() {
  const [tab, setTab] = useState<Tab>("profile");

  return (
    <div className="p-6 max-w-3xl">
      <h1 className="text-xl font-bold text-[#111827] mb-6">Settings</h1>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-gray-200 mb-6">
        {([
          { key: "profile", label: "Profile" },
          { key: "workspace", label: "Workspace" },
          { key: "preferences", label: "Preferences" },
          { key: "agent-logs", label: "Agent Logs" },
        ] as { key: Tab; label: string }[]).map(t => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 transition ${
              tab === t.key ? "border-[#111827] text-[#111827]" : "border-transparent text-gray-500 hover:text-[#111827]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Profile */}
      {tab === "profile" && (
        <div className="space-y-6">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-[#111827] mb-4">Profile</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 block mb-1">Name</label>
                <input className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-[#111827] focus:outline-none focus:border-[#111827]" placeholder="Your name" />
              </div>
              <div>
                <label className="text-xs text-gray-500 block mb-1">Email</label>
                <input className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-400 bg-gray-50" disabled value="your@email.com" />
              </div>
            </div>
            <button className="mt-4 bg-[#111827] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-black transition">Save Changes</button>
          </div>

          <div className="border border-red-200 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-red-600 mb-2">Delete Account</h3>
            <p className="text-xs text-gray-500 mb-3">Permanently delete your account and all associated data. This cannot be undone.</p>
            <button className="bg-red-50 text-red-600 border border-red-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition">Delete My Account</button>
          </div>
        </div>
      )}

      {/* Workspace */}
      {tab === "workspace" && (
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-[#111827] mb-4">Workspace</h3>
          <div className="space-y-3 text-sm">
            <Row label="Plan" value="Free" />
            <Row label="Memories used" value="0 / 500" />
            <Row label="Asks today" value="0 / 20" />
            <Row label="Projects" value="0 / 3" />
            <Row label="Data region" value="India (Mumbai)" />
          </div>
          <button className="mt-4 bg-[#111827] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-black transition">Upgrade to Pro</button>
        </div>
      )}

      {/* Preferences */}
      {tab === "preferences" && (
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-[#111827] mb-4">Preferences</h3>
          <div className="space-y-4">
            <Toggle label="Daily digest email" desc="Receive a summary of your memories every morning." />
            <Toggle label="Weekly health report" desc="Get a report of contradictions, stale items, and knowledge gaps." />
            <Toggle label="Contradiction alerts" desc="Get notified when new memories conflict with existing ones." />
            <Toggle label="Deep reasoning mode" desc="Use advanced reasoning for complex questions (slightly slower)." />
          </div>
        </div>
      )}

      {/* Agent Logs */}
      {tab === "agent-logs" && <AgentLogsTab />}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
      <span className="text-gray-500">{label}</span>
      <span className="text-[#111827] font-medium">{value}</span>
    </div>
  );
}

function Toggle({ label, desc }: { label: string; desc: string }) {
  const [on, setOn] = useState(false);
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <p className="text-sm text-[#111827] font-medium">{label}</p>
        <p className="text-xs text-gray-400">{desc}</p>
      </div>
      <button
        onClick={() => setOn(!on)}
        className={`w-10 h-6 rounded-full transition ${on ? "bg-[#111827]" : "bg-gray-300"} relative`}
      >
        <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition ${on ? "left-5" : "left-1"}`} />
      </button>
    </div>
  );
}

function AgentLogsTab() {
  const [logs, setLogs] = useState<Record<string, unknown>[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("reattend_agent_logs");
    if (saved) try { setLogs(JSON.parse(saved)); } catch { /* ignore */ }
  }, []);

  function timeAgo(iso: string) {
    const diff = (Date.now() - new Date(iso).getTime()) / 1000;
    if (diff < 60) return "just now";
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  }

  return (
    <div className="border border-gray-200 rounded-xl p-5">
      <h3 className="text-sm font-semibold text-[#111827] mb-2">Agent Logs</h3>
      <p className="text-xs text-gray-500 mb-4">Real processing logs from when you save memories.</p>
      {logs.length === 0 ? (
        <div className="text-center py-8 text-xs text-gray-400">
          No agent logs yet. Add a memory to see what Rabbit does behind the scenes.
        </div>
      ) : (
        <div className="space-y-3">
          {logs.map((log, i) => {
            const ext = (log.extraction || {}) as Record<string, string[]>;
            return (
              <div key={i} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-[#111827]">{String(log.action || "Processed")}</span>
                  <span className="text-xs text-gray-400">{timeAgo(String(log.time || ""))}</span>
                </div>
                <div className="space-y-1.5 text-xs">
                  <LogRow signal="TRIAGE" result={`Type: ${String(log.triage_type || "unknown")}`} />
                  <LogRow signal="EXTRACT" result={`${ext.people?.length || 0} people, ${ext.decisions?.length || 0} decisions`} />
                  <LogRow signal="SUMMARIZE" result={String(log.summary || "").slice(0, 60) + "..."} />
                  <LogRow signal="SENTIMENT" result={String(log.sentiment || "neutral")} />
                  <LogRow signal="IMPORTANCE" result={`${log.importance}/5`} />
                  <LogRow signal="LINK" result={`${(log.links as unknown[])?.length || 0} connections`} />
                </div>
                <p className="text-[10px] text-gray-400 mt-2">
                  Total: {Number(log.latency_ms || 0).toLocaleString()}ms
                </p>
              </div>
            );
          })}
        </div>
      )}
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

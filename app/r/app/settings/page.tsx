"use client";

import { useState } from "react";

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
      {tab === "agent-logs" && (
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-[#111827] mb-2">Agent Logs</h3>
          <p className="text-xs text-gray-500 mb-4">See what Rabbit did behind the scenes for each memory.</p>

          <div className="space-y-3">
            <AgentLog
              time="2 min ago"
              action="Processed memory"
              steps={[
                { signal: "TRIAGE", result: "Type: meeting", latency: "240ms" },
                { signal: "EXTRACT", result: "3 people, 2 decisions", latency: "450ms" },
                { signal: "SUMMARIZE", result: "Launch delayed to March 15...", latency: "380ms" },
                { signal: "SENTIMENT", result: "tense", latency: "240ms" },
                { signal: "IMPORTANCE", result: "4/5", latency: "300ms" },
                { signal: "LINK", result: "2 connections found", latency: "500ms" },
              ]}
            />
            <div className="text-center py-6 text-xs text-gray-400">
              Agent logs will appear here as you add memories and ask questions.
            </div>
          </div>
        </div>
      )}
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

function AgentLog({ time, action, steps }: {
  time: string;
  action: string;
  steps: { signal: string; result: string; latency: string }[];
}) {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-[#111827]">{action}</span>
        <span className="text-xs text-gray-400">{time}</span>
      </div>
      <div className="space-y-1.5">
        {steps.map(s => (
          <div key={s.signal} className="flex items-center gap-3 text-xs">
            <span className="text-green-600">&#x2713;</span>
            <span className="font-mono text-gray-500 w-24">{s.signal}</span>
            <span className="text-[#111827] flex-1">{s.result}</span>
            <span className="text-gray-400 font-mono">{s.latency}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

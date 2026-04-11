"use client";

export default function LogsPage() {
  // Placeholder logs - in production these come from the Rabbit API
  const logs = [
    { id: 1, method: "POST", endpoint: "/v1/remember", status: 200, latency: "2,340ms", time: "2 min ago", signal: "TRIAGE + EXTRACT + SUMMARIZE" },
    { id: 2, method: "POST", endpoint: "/v1/ask", status: 200, latency: "4,120ms", time: "5 min ago", signal: "INTENT + EXPAND + ANSWER" },
    { id: 3, method: "POST", endpoint: "/v1/remember", status: 200, latency: "1,890ms", time: "12 min ago", signal: "TRIAGE + EXTRACT + SUMMARIZE" },
    { id: 4, method: "POST", endpoint: "/v1/check", status: 200, latency: "890ms", time: "15 min ago", signal: "AMBIENT" },
    { id: 5, method: "GET", endpoint: "/v1/memories", status: 200, latency: "45ms", time: "20 min ago", signal: "" },
    { id: 6, method: "POST", endpoint: "/v1/ask", status: 200, latency: "3,780ms", time: "1 hr ago", signal: "INTENT + EXPAND + ANSWER" },
    { id: 7, method: "POST", endpoint: "/v1/remember/file", status: 200, latency: "8,450ms", time: "2 hrs ago", signal: "WHISPER + TRIAGE + EXTRACT" },
    { id: 8, method: "POST", endpoint: "/v1/compile/Sarah", status: 200, latency: "5,200ms", time: "3 hrs ago", signal: "ANSWER" },
  ];

  return (
    <div className="max-w-5xl">
      <h1 className="text-2xl font-bold text-[#1d1d1d] mb-1">Logs</h1>
      <p className="text-sm text-[#6b5f7a] font-light mb-8">Recent API requests from your keys.</p>

      <div className="bg-white/60 border border-[#d4cade] rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#d4cade]">
              <th className="text-left px-5 py-3.5 font-semibold text-[#6b5f7a] text-xs uppercase tracking-wider">Method</th>
              <th className="text-left px-5 py-3.5 font-semibold text-[#6b5f7a] text-xs uppercase tracking-wider">Endpoint</th>
              <th className="text-left px-5 py-3.5 font-semibold text-[#6b5f7a] text-xs uppercase tracking-wider">Status</th>
              <th className="text-left px-5 py-3.5 font-semibold text-[#6b5f7a] text-xs uppercase tracking-wider">Signals</th>
              <th className="text-right px-5 py-3.5 font-semibold text-[#6b5f7a] text-xs uppercase tracking-wider">Latency</th>
              <th className="text-right px-5 py-3.5 font-semibold text-[#6b5f7a] text-xs uppercase tracking-wider">Time</th>
            </tr>
          </thead>
          <tbody>
            {logs.map(log => (
              <tr key={log.id} className="border-b border-[#d4cade]/50 last:border-0 hover:bg-white/40 transition">
                <td className="px-5 py-3">
                  <span className={`font-mono text-[10px] px-2 py-0.5 rounded-md border ${
                    log.method === "GET" ? "bg-green-50 text-green-700 border-green-200" :
                    log.method === "POST" ? "bg-blue-50 text-blue-700 border-blue-200" :
                    "bg-gray-50 text-gray-700 border-gray-200"
                  }`}>{log.method}</span>
                </td>
                <td className="px-5 py-3 font-mono text-[13px] text-[#1d1d1d]">{log.endpoint}</td>
                <td className="px-5 py-3">
                  <span className={`text-xs font-medium ${log.status === 200 ? "text-green-600" : "text-red-600"}`}>
                    {log.status}
                  </span>
                </td>
                <td className="px-5 py-3">
                  {log.signal && (
                    <span className="text-[10px] font-mono text-[#8069af] bg-[#8069af]/10 px-2 py-0.5 rounded-lg">
                      {log.signal}
                    </span>
                  )}
                </td>
                <td className="px-5 py-3 text-right font-mono text-[13px] text-[#6b5f7a]">{log.latency}</td>
                <td className="px-5 py-3 text-right text-[#a89bb5] text-xs">{log.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[#a89bb5] mt-4 text-center">
        Showing recent requests. Live log streaming coming soon.
      </p>
    </div>
  );
}

export default function UsagePage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-[#1d1d1d] mb-1">Usage</h1>
      <p className="text-sm text-[#6b5f7a] font-light mb-8">API usage for the current billing period.</p>

      {/* Stats */}
      <div className="grid sm:grid-cols-4 gap-4 mb-8">
        <Stat label="Requests today" value="12" />
        <Stat label="Requests this month" value="47" />
        <Stat label="Memories stored" value="8" />
        <Stat label="Avg latency" value="2.8s" />
      </div>

      {/* Limits */}
      <div className="bg-white/60 border border-[#d4cade] rounded-2xl p-6 mb-6">
        <h2 className="text-base font-semibold text-[#1d1d1d] mb-4">Current plan: Beta (free)</h2>
        <div className="space-y-4">
          <LimitBar label="Daily requests" used={12} total={100} />
          <LimitBar label="Monthly requests" used={47} total={1000} />
          <LimitBar label="Memories" used={8} total={1000} />
        </div>
      </div>

      {/* Breakdown */}
      <div className="bg-white/60 border border-[#d4cade] rounded-2xl p-6">
        <h2 className="text-base font-semibold text-[#1d1d1d] mb-4">Requests by endpoint</h2>
        <div className="space-y-2">
          <EndpointUsage endpoint="/v1/remember" count={23} pct={49} />
          <EndpointUsage endpoint="/v1/ask" count={15} pct={32} />
          <EndpointUsage endpoint="/v1/memories" count={5} pct={11} />
          <EndpointUsage endpoint="/v1/check" count={2} pct={4} />
          <EndpointUsage endpoint="/v1/compile" count={1} pct={2} />
          <EndpointUsage endpoint="/v1/lint" count={1} pct={2} />
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/60 border border-[#d4cade] rounded-2xl p-5">
      <p className="text-xs text-[#6b5f7a] mb-1">{label}</p>
      <p className="text-2xl font-bold text-[#1d1d1d]">{value}</p>
    </div>
  );
}

function LimitBar({ label, used, total }: { label: string; used: number; total: number }) {
  const pct = Math.min((used / total) * 100, 100);
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-[#6b5f7a]">{label}</span>
        <span className="text-[#1d1d1d] font-medium">{used} / {total.toLocaleString()}</span>
      </div>
      <div className="w-full bg-[#d4cade] rounded-full h-2">
        <div className="bg-[#8069af] h-2 rounded-full transition-all" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function EndpointUsage({ endpoint, count, pct }: { endpoint: string; count: number; pct: number }) {
  return (
    <div className="flex items-center gap-3 py-1.5">
      <code className="font-mono text-[13px] text-[#1d1d1d] w-36">{endpoint}</code>
      <div className="flex-1 bg-[#d4cade] rounded-full h-2">
        <div className="bg-[#8069af] h-2 rounded-full" style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs text-[#6b5f7a] w-12 text-right">{count}</span>
    </div>
  );
}

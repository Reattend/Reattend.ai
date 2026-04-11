export default function SettingsPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-[#1d1d1d] mb-1">Settings</h1>
      <p className="text-sm text-[#6b5f7a] font-light mb-8">Manage your account and organization settings.</p>

      {/* Account */}
      <div className="bg-white/60 border border-[#d4cade] rounded-2xl p-6 mb-6">
        <h2 className="text-base font-semibold text-[#1d1d1d] mb-4">Account</h2>
        <div className="space-y-3">
          <Row label="Plan" value="Free (Beta)" />
          <Row label="API base URL" value="http://api.rabbit.reattend.ai:8000" mono />
          <Row label="Model" value="Rabbit v1.4 (Phi-3.5 Mini, 3.8B)" />
          <Row label="Signals" value="12 signals available" />
        </div>
      </div>

      {/* Defaults */}
      <div className="bg-white/60 border border-[#d4cade] rounded-2xl p-6 mb-6">
        <h2 className="text-base font-semibold text-[#1d1d1d] mb-4">Defaults</h2>
        <div className="space-y-3">
          <Row label="Default ask limit" value="5 memories" />
          <Row label="Reasoning mode" value="Disabled by default" />
          <Row label="Streaming" value="Disabled by default" />
          <Row label="File upload max" value="10 MB (Test) / 100 MB (Live)" />
        </div>
      </div>

      {/* Danger */}
      <div className="bg-white/60 border border-red-200 rounded-2xl p-6">
        <h2 className="text-base font-semibold text-red-600 mb-4">Danger zone</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-[#1d1d1d] font-medium">Delete all memories</p>
            <p className="text-xs text-[#6b5f7a] font-light">Permanently delete all stored memories for this account. This cannot be undone.</p>
          </div>
          <button className="bg-red-50 text-red-600 border border-red-200 px-4 py-2 rounded-xl text-sm font-medium hover:bg-red-100 transition">
            Delete all
          </button>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-[#d4cade]/50 last:border-0">
      <span className="text-sm text-[#6b5f7a]">{label}</span>
      <span className={`text-sm text-[#1d1d1d] ${mono ? "font-mono text-[13px]" : ""}`}>{value}</span>
    </div>
  );
}

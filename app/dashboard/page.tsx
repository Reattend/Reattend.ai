import Link from "next/link";

export default function DashboardOverview() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-[#1d1d1d] mb-1">Overview</h1>
      <p className="text-sm text-[#6b5f7a] font-light mb-8">Welcome to the Rabbit API platform.</p>

      {/* Quick start */}
      <div className="bg-white/60 border border-[#d4cade] rounded-2xl p-6 mb-6">
        <h2 className="text-base font-semibold text-[#1d1d1d] mb-4">Quick start</h2>
        <div className="space-y-4 text-sm">
          <div>
            <p className="text-[#6b5f7a] mb-2 font-light">1. Create an API key</p>
            <Link href="/dashboard/keys" className="text-[#8069af] text-sm font-medium hover:underline">
              Go to API keys
            </Link>
          </div>
          <div>
            <p className="text-[#6b5f7a] mb-2 font-light">2. Install the SDK</p>
            <pre className="bg-[#1d1d1d] text-[#eee9f4] rounded-xl px-4 py-3 font-mono text-[13px]">pip install rabbit-memory</pre>
          </div>
          <div>
            <p className="text-[#6b5f7a] mb-2 font-light">3. Make your first API call</p>
            <pre className="bg-[#1d1d1d] text-[#eee9f4] rounded-xl px-4 py-3 font-mono text-[13px] overflow-x-auto whitespace-pre-wrap">{`from rabbit import Rabbit

rab = Rabbit("rab_test_YOUR_KEY")
rab.remember("Meeting notes here...", source="meeting")
answer = rab.ask("What was decided?")
print(answer.text)`}</pre>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="grid sm:grid-cols-3 gap-4">
        <QuickLink href="/dashboard/keys" title="API keys" desc="Create and manage your secret keys" />
        <QuickLink href="/dashboard/docs" title="Documentation" desc="Full API reference and guides" />
        <QuickLink href="/dashboard/logs" title="Logs" desc="View API request history" />
      </div>
    </div>
  );
}

function QuickLink({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <Link href={href} className="bg-white/60 border border-[#d4cade] rounded-2xl p-5 hover:border-[#8069af] transition block">
      <h3 className="font-semibold text-[#1d1d1d] text-sm mb-1">{title}</h3>
      <p className="text-xs text-[#6b5f7a] font-light">{desc}</p>
    </Link>
  );
}

import { redirect } from "next/navigation";
import { getUser } from "@/lib/auth";
import Link from "next/link";
import Image from "next/image";
import GenerateKeyButton from "./generate-key-button";

export default async function DashboardPage() {
  const email = await getUser();
  if (!email) redirect("/login");

  return (
    <main className="flex-1 bg-[#eee9f4]">
      {/* Header */}
      <header className="border-b border-[#d4cade] px-6 py-4 flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Rabbit" width={24} height={24} />
            <span className="text-lg font-bold tracking-tight text-[#1d1d1d]">rabbit</span>
          </Link>
          <nav className="flex items-center gap-6 text-[13px] font-medium text-[#6b5f7a]">
            <Link href="/dashboard" className="text-[#1d1d1d]">Dashboard</Link>
            <Link href="/docs" className="hover:text-[#1d1d1d] transition">API Docs</Link>
          </nav>
        </div>
        <span className="text-[13px] text-[#6b5f7a]">{email}</span>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-xl font-bold text-[#1d1d1d]">API keys</h1>
            <p className="text-[#6b5f7a] text-sm font-light mt-1">
              Manage your API keys. Do not share your key or expose it in client-side code.
            </p>
          </div>
        </div>

        {/* Generate Key */}
        <div className="bg-white/60 border border-[#d4cade] rounded-2xl p-6 mb-8">
          <GenerateKeyButton />
        </div>

        {/* Quick Start */}
        <div className="bg-white/60 border border-[#d4cade] rounded-2xl p-6 mb-8">
          <h2 className="text-sm font-semibold text-[#1d1d1d] mb-5">Quick start</h2>
          <div className="space-y-5 text-sm">
            <div>
              <p className="text-[#6b5f7a] mb-2 font-light">1. Install the SDK</p>
              <code className="block bg-[#1d1d1d] text-[#eee9f4] rounded-xl px-4 py-3 font-mono text-[13px]">
                pip install rabbit-memory
              </code>
            </div>
            <div>
              <p className="text-[#6b5f7a] mb-2 font-light">2. Remember and ask</p>
              <pre className="bg-[#1d1d1d] text-[#eee9f4] rounded-xl px-4 py-3 font-mono text-[13px] overflow-x-auto">
{`from rabbit import Rabbit

rab = Rabbit("YOUR_KEY_HERE")

rab.remember("Meeting notes...", source="meeting")
answer = rab.ask("What was decided?")
print(answer.text)`}
              </pre>
            </div>
          </div>
        </div>

        {/* API Endpoints */}
        <div className="bg-white/60 border border-[#d4cade] rounded-2xl p-6">
          <h2 className="text-sm font-semibold text-[#1d1d1d] mb-5">API endpoints</h2>
          <div className="space-y-1 text-sm">
            <EndpointRow method="POST" path="/v1/remember" desc="Ingest text into memory" />
            <EndpointRow method="POST" path="/v1/remember/file" desc="Ingest a file" />
            <EndpointRow method="POST" path="/v1/ask" desc="Ask a question" />
            <EndpointRow method="POST" path="/v1/check" desc="Detect contradictions" />
            <EndpointRow method="GET" path="/v1/memories" desc="List memories" />
            <EndpointRow method="GET" path="/v1/memories/:id" desc="Get a memory" />
            <EndpointRow method="DELETE" path="/v1/memories/:id" desc="Delete a memory" />
            <EndpointRow method="GET" path="/v1/graph/:id" desc="Knowledge graph" />
            <EndpointRow method="POST" path="/v1/compile/:entity" desc="Compile wiki page" />
            <EndpointRow method="POST" path="/v1/lint" desc="Health audit" />
            <EndpointRow method="GET" path="/v1/stats" desc="Usage stats" />
            <EndpointRow method="POST" path="/v1/feedback" desc="Submit feedback" />
          </div>
        </div>
      </div>
    </main>
  );
}

function EndpointRow({ method, path, desc }: { method: string; path: string; desc: string }) {
  const colors: Record<string, string> = {
    GET: "bg-green-50 text-green-700 border-green-200",
    POST: "bg-blue-50 text-blue-700 border-blue-200",
    DELETE: "bg-red-50 text-red-700 border-red-200",
  };
  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-[#d4cade]/50 last:border-0">
      <span className={`font-mono text-[10px] px-2 py-0.5 rounded-md border ${colors[method] || ""}`}>
        {method}
      </span>
      <code className="font-mono text-[#1d1d1d] text-[13px]">{path}</code>
      <span className="text-[#6b5f7a] ml-auto text-[13px] font-light">{desc}</span>
    </div>
  );
}

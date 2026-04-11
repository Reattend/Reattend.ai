import { redirect } from "next/navigation";
import { getUser } from "@/lib/auth";
import Link from "next/link";
import GenerateKeyButton from "./generate-key-button";

export default async function DashboardPage() {
  const email = await getUser();
  if (!email) redirect("/login");

  return (
    <main className="flex-1">
      {/* Header */}
      <header className="border-b border-[#c2a6cf] px-6 py-4 flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold tracking-tight text-[#1d1d1d]">
            rabbit
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-[#6b5f7a]">
            <Link href="/dashboard" className="text-[#1d1d1d]">Dashboard</Link>
            <Link href="/docs" className="hover:text-[#1d1d1d] transition">API Docs</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-[#6b5f7a]">{email}</span>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold text-[#1d1d1d] mb-1">API keys</h1>
        <p className="text-[#6b5f7a] text-sm mb-8 font-light">
          You have permission to view and manage all API keys in this project.
        </p>

        {/* Generate Key */}
        <div className="bg-[#f0eaf5] border border-[#d8cfe6] rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-semibold text-[#1d1d1d]">Create new secret key</h2>
              <p className="text-[#6b5f7a] text-sm font-light mt-1">
                Free test key. 100 calls/day, 1,000 calls/month, 1,000 memories max.
              </p>
            </div>
          </div>
          <GenerateKeyButton />
        </div>

        {/* Quick Start */}
        <div className="bg-[#f0eaf5] border border-[#d8cfe6] rounded-2xl p-6 mb-8">
          <h2 className="text-base font-semibold text-[#1d1d1d] mb-5">Quick start</h2>
          <div className="space-y-5 text-sm">
            <div>
              <p className="text-[#6b5f7a] mb-2 font-light">1. Install the SDK</p>
              <code className="block bg-[#1d1d1d] text-[#e5def1] rounded-xl px-4 py-3 font-mono text-sm">
                pip install rabbit-memory
              </code>
            </div>
            <div>
              <p className="text-[#6b5f7a] mb-2 font-light">2. Remember and ask</p>
              <pre className="bg-[#1d1d1d] text-[#e5def1] rounded-xl px-4 py-3 font-mono text-sm overflow-x-auto">
{`from rabbit import Rabbit

rab = Rabbit("YOUR_KEY_HERE")

rab.remember("Meeting notes...", source="meeting")
answer = rab.ask("What was decided?")
print(answer.text)`}
              </pre>
            </div>
            <div>
              <p className="text-[#6b5f7a] mb-2 font-light">3. Or use curl</p>
              <pre className="bg-[#1d1d1d] text-[#e5def1] rounded-xl px-4 py-3 font-mono text-xs overflow-x-auto">
{`curl -X POST http://api.rabbit.reattend.ai:8000/v1/remember \\
  -H "Authorization: Bearer YOUR_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"content": "Meeting notes...", "source": "meeting"}'`}
              </pre>
            </div>
          </div>
        </div>

        {/* API Endpoints */}
        <div className="bg-[#f0eaf5] border border-[#d8cfe6] rounded-2xl p-6">
          <h2 className="text-base font-semibold text-[#1d1d1d] mb-5">API endpoints</h2>
          <div className="space-y-2.5 text-sm">
            <EndpointRow method="POST" path="/v1/remember" desc="Ingest text into memory" />
            <EndpointRow method="POST" path="/v1/remember/file" desc="Ingest a file (audio, PDF, image, doc)" />
            <EndpointRow method="POST" path="/v1/ask" desc="Ask a question across memories" />
            <EndpointRow method="POST" path="/v1/check" desc="Detect contradictions" />
            <EndpointRow method="GET" path="/v1/memories" desc="List stored memories" />
            <EndpointRow method="GET" path="/v1/memories/:id" desc="Get a specific memory" />
            <EndpointRow method="DELETE" path="/v1/memories/:id" desc="Delete a memory" />
            <EndpointRow method="GET" path="/v1/graph/:id" desc="Get memory connections" />
            <EndpointRow method="POST" path="/v1/compile/:entity" desc="Compile wiki page" />
            <EndpointRow method="POST" path="/v1/lint" desc="Run health audit" />
            <EndpointRow method="GET" path="/v1/stats" desc="Usage statistics" />
            <EndpointRow method="POST" path="/v1/feedback" desc="Submit thumbs up/down" />
          </div>
        </div>
      </div>
    </main>
  );
}

function EndpointRow({ method, path, desc }: { method: string; path: string; desc: string }) {
  const colors: Record<string, string> = {
    GET: "bg-green-100 text-green-700",
    POST: "bg-blue-100 text-blue-700",
    DELETE: "bg-red-100 text-red-700",
  };
  return (
    <div className="flex items-center gap-3 py-2 border-b border-[#d8cfe6] last:border-0">
      <span className={`font-mono text-xs px-2 py-0.5 rounded-lg ${colors[method] || "bg-gray-100 text-gray-700"}`}>
        {method}
      </span>
      <code className="font-mono text-[#1d1d1d] text-sm">{path}</code>
      <span className="text-[#6b5f7a] ml-auto text-sm font-light">{desc}</span>
    </div>
  );
}

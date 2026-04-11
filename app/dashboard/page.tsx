import { redirect } from "next/navigation";
import { getUser } from "@/lib/auth";
import Link from "next/link";
import GenerateKeyButton from "./generate-key-button";

export default async function DashboardPage() {
  const email = await getUser();
  if (!email) redirect("/login");

  return (
    <main className="flex-1">
      {/* Nav */}
      <nav className="border-b border-neutral-800 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto w-full">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Rabbit
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-neutral-400">{email}</span>
          <form action="/api/auth/logout" method="POST">
            <button className="text-neutral-500 hover:text-white transition">
              Log out
            </button>
          </form>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-neutral-400 mb-10">Manage your Rabbit API keys.</p>

        {/* Generate Key */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold mb-2">API Key</h2>
          <p className="text-neutral-400 text-sm mb-4">
            Generate a free test key. 100 calls/day, 1,000 calls/month.
          </p>
          <GenerateKeyButton />
        </div>

        {/* Quick Start */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Start</h2>
          <div className="space-y-4 text-sm">
            <div>
              <p className="text-neutral-400 mb-2">1. Install the SDK:</p>
              <code className="block bg-neutral-800 rounded-lg px-4 py-3 font-mono text-neutral-300">
                pip install rabbit-memory
              </code>
            </div>
            <div>
              <p className="text-neutral-400 mb-2">2. Use it:</p>
              <pre className="bg-neutral-800 rounded-lg px-4 py-3 font-mono text-neutral-300 overflow-x-auto">
{`from rabbit import Rabbit

rab = Rabbit("YOUR_KEY_HERE")
rab.remember("Meeting notes...", source="meeting")
answer = rab.ask("What was decided?")`}
              </pre>
            </div>
            <div>
              <p className="text-neutral-400 mb-2">3. Or use curl:</p>
              <pre className="bg-neutral-800 rounded-lg px-4 py-3 font-mono text-neutral-300 overflow-x-auto text-xs">
{`curl -X POST http://api.rabbit.reattend.ai:8000/v1/remember \\
  -H "Authorization: Bearer YOUR_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"content": "Meeting notes...", "source": "meeting"}'`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

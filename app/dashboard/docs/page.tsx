export default function DashboardDocsPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-[#1d1d1d] mb-1">API Documentation</h1>
      <p className="text-sm text-[#6b5f7a] font-light mb-8">
        Base URL: <code className="font-mono text-[#8069af]">http://api.rabbit.reattend.ai:8000</code>
      </p>

      {/* Auth */}
      <Section title="Authentication">
        <p className="text-sm text-[#6b5f7a] font-light mb-3">
          All requests require a Bearer token in the Authorization header.
        </p>
        <Code>{`Authorization: Bearer rab_test_YOUR_KEY`}</Code>
      </Section>

      {/* Remember */}
      <Section title="POST /v1/remember">
        <p className="text-sm text-[#6b5f7a] font-light mb-3">
          Ingest content into memory. Runs the full pipeline: triage, extract, summarize, sentiment, importance, embed, store, and link.
        </p>
        <h4 className="text-xs font-semibold text-[#6b5f7a] uppercase tracking-wider mb-2 mt-5">Request</h4>
        <Code>{`curl -X POST http://api.rabbit.reattend.ai:8000/v1/remember \\
  -H "Authorization: Bearer rab_test_YOUR_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "content": "Sarah delayed the launch to March 15. Budget is $50K.",
    "source": "meeting",
    "metadata": {}
  }'`}</Code>
        <h4 className="text-xs font-semibold text-[#6b5f7a] uppercase tracking-wider mb-2 mt-5">Response</h4>
        <Code>{`{
  "id": "mem_abc123",
  "summary": "Sarah postponed the product launch to March 15...",
  "triage_type": "decision",
  "tags": ["launch", "budget"],
  "extraction": {
    "people": ["Sarah"],
    "organizations": [],
    "decisions": ["Delay launch to March 15"],
    "action_items": [],
    "dates": ["March 15"],
    "topics": ["launch", "budget"]
  },
  "sentiment": "neutral",
  "importance": 4,
  "importance_reason": "Contains key launch decision",
  "links": [],
  "latency_ms": 2340
}`}</Code>
        <Params params={[
          { name: "content", type: "string", required: true, desc: "The text to remember" },
          { name: "source", type: "string", required: false, desc: "Source label: meeting, email, slack, note, etc." },
          { name: "metadata", type: "object", required: false, desc: "Additional metadata (key-value pairs)" },
        ]} />
      </Section>

      {/* Remember File */}
      <Section title="POST /v1/remember/file">
        <p className="text-sm text-[#6b5f7a] font-light mb-3">
          Upload a file (audio, PDF, image, DOCX, etc.). Rabbit processes it through the appropriate parser and then runs the full pipeline.
        </p>
        <Code>{`curl -X POST http://api.rabbit.reattend.ai:8000/v1/remember/file \\
  -H "Authorization: Bearer rab_test_YOUR_KEY" \\
  -F "file=@recording.mp3" \\
  -F "source=meeting"`}</Code>
        <p className="text-xs text-[#6b5f7a] mt-3 font-light">
          Supported: .mp3, .wav, .m4a, .pdf, .docx, .pptx, .png, .jpg, .html, .md, .eml, .ics, .py, .js, .ts, .go, .rs
        </p>
      </Section>

      {/* Ask */}
      <Section title="POST /v1/ask">
        <p className="text-sm text-[#6b5f7a] font-light mb-3">
          Ask a question over stored memories. Runs: intent classification, query expansion, hybrid search, graph walk, reranking, and answer generation.
        </p>
        <Code>{`curl -X POST http://api.rabbit.reattend.ai:8000/v1/ask \\
  -H "Authorization: Bearer rab_test_YOUR_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "question": "When is the launch?",
    "limit": 5,
    "reasoning": false,
    "stream": false
  }'`}</Code>
        <Params params={[
          { name: "question", type: "string", required: true, desc: "Natural language question" },
          { name: "limit", type: "integer", required: false, desc: "Max memories to use (default: 5)" },
          { name: "reasoning", type: "boolean", required: false, desc: "Route to 70B model for deep analysis (default: false)" },
          { name: "stream", type: "boolean", required: false, desc: "Enable SSE streaming (default: false)" },
        ]} />
      </Section>

      {/* Check */}
      <Section title="POST /v1/check">
        <p className="text-sm text-[#6b5f7a] font-light mb-3">
          Check for contradictions between current context and stored memories.
        </p>
        <Code>{`curl -X POST http://api.rabbit.reattend.ai:8000/v1/check \\
  -H "Authorization: Bearer rab_test_YOUR_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"context": "We are launching on March 1st"}'`}</Code>
      </Section>

      {/* Other endpoints */}
      <Section title="Other Endpoints">
        <div className="space-y-2">
          <Endpoint method="GET" path="/v1/memories" desc="List stored memories. Query params: limit, offset, source" />
          <Endpoint method="GET" path="/v1/memories/:id" desc="Get a specific memory by ID" />
          <Endpoint method="DELETE" path="/v1/memories/:id" desc="Delete a memory permanently" />
          <Endpoint method="GET" path="/v1/graph/:id" desc="Get a memory's knowledge graph connections. Query: hops (default: 2)" />
          <Endpoint method="POST" path="/v1/compile/:entity" desc="Compile a wiki page for a person, project, or topic" />
          <Endpoint method="POST" path="/v1/lint" desc="Run a health audit on stored memories" />
          <Endpoint method="GET" path="/v1/stats" desc="Get usage statistics and memory counts" />
          <Endpoint method="POST" path="/v1/feedback" desc="Submit thumbs up/down on an answer" />
          <Endpoint method="GET" path="/health" desc="Health check (no auth required)" />
        </div>
      </Section>

      {/* SDKs */}
      <Section title="SDKs">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white/50 border border-[#d4cade] rounded-xl p-4">
            <h4 className="font-semibold text-[#1d1d1d] text-sm mb-2">Python</h4>
            <Code>{`pip install rabbit-memory

from rabbit import Rabbit
rab = Rabbit("rab_test_YOUR_KEY")
rab.remember("...", source="meeting")
answer = rab.ask("What was decided?")
print(answer.text)`}</Code>
          </div>
          <div className="bg-white/50 border border-[#d4cade] rounded-xl p-4">
            <h4 className="font-semibold text-[#1d1d1d] text-sm mb-2">JavaScript / TypeScript</h4>
            <Code>{`npm install @reattend/rabbit

import { Rabbit } from '@reattend/rabbit';
const rab = new Rabbit('rab_test_YOUR_KEY');
await rab.remember('...', { source: 'meeting' });
const a = await rab.ask('What was decided?');`}</Code>
          </div>
        </div>
      </Section>

      {/* Rate limits */}
      <Section title="Rate Limits">
        <div className="bg-white/60 border border-[#d4cade] rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-[#d4cade]">
              <th className="text-left px-4 py-3 font-semibold text-[#6b5f7a] text-xs uppercase">Tier</th>
              <th className="text-left px-4 py-3 font-semibold text-[#6b5f7a] text-xs uppercase">Daily</th>
              <th className="text-left px-4 py-3 font-semibold text-[#6b5f7a] text-xs uppercase">Monthly</th>
              <th className="text-left px-4 py-3 font-semibold text-[#6b5f7a] text-xs uppercase">Memories</th>
            </tr></thead>
            <tbody className="text-[#6b5f7a]">
              <tr className="border-b border-[#d4cade]/50"><td className="px-4 py-2.5 font-medium text-[#1d1d1d]">rab_test_*</td><td className="px-4 py-2.5">100</td><td className="px-4 py-2.5">1,000</td><td className="px-4 py-2.5">1,000</td></tr>
              <tr><td className="px-4 py-2.5 font-medium text-[#1d1d1d]">rab_live_*</td><td className="px-4 py-2.5">10,000</td><td className="px-4 py-2.5">100,000</td><td className="px-4 py-2.5">1,000,000</td></tr>
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-semibold text-[#1d1d1d] mb-4 pb-2 border-b border-[#d4cade]">{title}</h2>
      {children}
    </div>
  );
}

function Code({ children }: { children: string }) {
  return <pre className="bg-[#1d1d1d] text-[#eee9f4] rounded-xl px-4 py-3 font-mono text-[13px] overflow-x-auto whitespace-pre-wrap">{children}</pre>;
}

function Params({ params }: { params: { name: string; type: string; required: boolean; desc: string }[] }) {
  return (
    <div className="mt-5">
      <h4 className="text-xs font-semibold text-[#6b5f7a] uppercase tracking-wider mb-2">Parameters</h4>
      <div className="bg-white/50 border border-[#d4cade] rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <tbody>
            {params.map(p => (
              <tr key={p.name} className="border-b border-[#d4cade]/50 last:border-0">
                <td className="px-4 py-2.5 font-mono text-[13px] text-[#1d1d1d]">{p.name}</td>
                <td className="px-4 py-2.5 text-xs text-[#8069af]">{p.type}</td>
                <td className="px-4 py-2.5 text-xs">{p.required ? <span className="text-red-500">required</span> : <span className="text-[#a89bb5]">optional</span>}</td>
                <td className="px-4 py-2.5 text-[#6b5f7a] font-light">{p.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Endpoint({ method, path, desc }: { method: string; path: string; desc: string }) {
  const c: Record<string, string> = { GET: "bg-green-50 text-green-700 border-green-200", POST: "bg-blue-50 text-blue-700 border-blue-200", DELETE: "bg-red-50 text-red-700 border-red-200" };
  return (
    <div className="flex items-center gap-3 py-2 border-b border-[#d4cade]/50 last:border-0">
      <span className={`font-mono text-[10px] px-2 py-0.5 rounded-md border ${c[method] || ""}`}>{method}</span>
      <code className="font-mono text-[13px] text-[#1d1d1d]">{path}</code>
      <span className="text-[#6b5f7a] ml-auto text-[13px] font-light">{desc}</span>
    </div>
  );
}

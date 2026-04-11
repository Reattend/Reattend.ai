import Link from "next/link";
import Image from "next/image";

export default function DevelopersPage() {
  return (
    <main className="flex-1 bg-[#eee9f4]">
      <Header current="Developers" />

      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-5">Developers</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#1d1d1d]">Build with Rabbit</h1>
        <p className="mt-6 text-lg text-[#6b5f7a] max-w-2xl mx-auto leading-relaxed font-light">
          Add memory intelligence to any application. Rabbit&apos;s API is OpenAI-compatible, so if
          you have used a chat completion endpoint before, you already know how to use this.
        </p>
        <div className="mt-8 flex gap-6 justify-center text-sm">
          <a href="#quickstart" className="text-[#8069af] font-medium hover:underline">Quickstart</a>
          <a href="#api" className="text-[#8069af] font-medium hover:underline">API Reference</a>
          <a href="#sdks" className="text-[#8069af] font-medium hover:underline">SDKs</a>
        </div>
      </section>

      {/* Quickstart */}
      <section id="quickstart" className="max-w-3xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-4 text-center">Quickstart</p>
        <h2 className="text-3xl font-bold text-center text-[#1d1d1d] mb-14">Three steps to your first extraction</h2>

        <div className="space-y-6">
          <StepBlock num="1" title="Get your API key" desc="Sign up at rabbit.reattend.ai. Your key starts with rab_test_">
            <Code>{`export RABBIT_API_KEY="rab_test_your_key_here"`}</Code>
          </StepBlock>

          <StepBlock num="2" title="Remember any content" desc="Send raw text to the remember endpoint. Get back structured entities, summary, sentiment, and more.">
            <Code>{`curl -X POST http://api.rabbit.reattend.ai:8000/v1/remember \\
  -H "Authorization: Bearer $RABBIT_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "content": "Met with Sarah from Acme. Budget confirmed at $45,000.",
    "source": "meeting"
  }'`}</Code>
          </StepBlock>

          <StepBlock num="3" title="Get structured output" desc="Every response returns clean JSON with extracted entities, decisions, action items, summary, sentiment, importance, and links.">
            <Code>{`{
  "id": "mem_abc123",
  "summary": "Meeting with Sarah from Acme. Budget confirmed at $45,000.",
  "extraction": {
    "people": ["Sarah"],
    "organizations": ["Acme"],
    "decisions": ["Budget confirmed at $45,000"]
  },
  "sentiment": "positive",
  "importance": 4,
  "links": [{"target_id": "mem_xyz", "kind": "same_topic"}]
}`}</Code>
          </StepBlock>
        </div>
      </section>

      {/* API Reference */}
      <section id="api" className="max-w-4xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-4 text-center">API Reference</p>
        <h2 className="text-3xl font-bold text-center text-[#1d1d1d] mb-14">Endpoints</h2>

        <div className="bg-white/60 border border-[#d4cade] rounded-2xl p-6 mb-8">
          <p className="text-sm text-[#6b5f7a] mb-4 font-light">
            All endpoints accept JSON and return JSON. Authentication via Bearer token.
            Base URL: <code className="font-mono text-[#8069af]">http://api.rabbit.reattend.ai:8000</code>
          </p>
          <div className="space-y-1">
            <Endpoint method="POST" path="/v1/remember" desc="Ingest text into memory" />
            <Endpoint method="POST" path="/v1/remember/file" desc="Ingest a file (audio, PDF, image, doc)" />
            <Endpoint method="POST" path="/v1/ask" desc="Ask a question across memories" />
            <Endpoint method="POST" path="/v1/check" desc="Detect contradictions" />
            <Endpoint method="GET" path="/v1/memories" desc="List stored memories" />
            <Endpoint method="GET" path="/v1/memories/:id" desc="Get a specific memory" />
            <Endpoint method="DELETE" path="/v1/memories/:id" desc="Delete a memory" />
            <Endpoint method="GET" path="/v1/graph/:id" desc="Knowledge graph connections" />
            <Endpoint method="POST" path="/v1/compile/:entity" desc="Compile wiki page" />
            <Endpoint method="POST" path="/v1/lint" desc="Run health audit" />
            <Endpoint method="GET" path="/v1/stats" desc="Usage statistics" />
            <Endpoint method="POST" path="/v1/feedback" desc="Submit thumbs up/down" />
          </div>
        </div>

        {/* Code examples side by side */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-mono text-[#8069af] mb-2">POST /v1/remember</p>
            <Code>{`{
  "content": "Met with Sarah from Acme.
  Budget confirmed at $45,000.",
  "source": "meeting"
}

// Response
{
  "id": "mem_abc123",
  "summary": "Meeting with Sarah...",
  "extraction": {
    "people": ["Sarah"],
    "organizations": ["Acme"],
    "decisions": ["Budget $45,000"]
  }
}`}</Code>
          </div>
          <div>
            <p className="text-xs font-mono text-[#8069af] mb-2">POST /v1/ask</p>
            <Code>{`{
  "question": "What did we decide
  about the Q2 launch?",
  "limit": 5,
  "reasoning": false
}

// Response
{
  "text": "The Q2 launch was confirmed
  for April 22 with a $45,000
  budget from Acme [1].",
  "sources": [...],
  "followups": [...]
}`}</Code>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-4 text-center">Rate Limits and Pricing</p>
        <h2 className="text-3xl font-bold text-center text-[#1d1d1d] mb-14">Start free. Scale as you grow.</h2>
        <div className="bg-white/60 border border-[#d4cade] rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-[#d4cade]">
              <th className="text-left px-6 py-4 font-semibold text-[#1d1d1d]">Plan</th>
              <th className="text-left px-6 py-4 font-semibold text-[#1d1d1d]">Rate limit</th>
              <th className="text-left px-6 py-4 font-semibold text-[#1d1d1d]">Signals</th>
              <th className="text-right px-6 py-4 font-semibold text-[#1d1d1d]">Price</th>
            </tr></thead>
            <tbody className="text-[#6b5f7a]">
              <tr className="border-b border-[#d4cade]/50"><td className="px-6 py-3 font-medium text-[#1d1d1d]">Beta (current)</td><td className="px-6 py-3">100 requests/day</td><td className="px-6 py-3">All 12 signals</td><td className="px-6 py-3 text-right text-[#8069af] font-medium">Free</td></tr>
              <tr className="border-b border-[#d4cade]/50"><td className="px-6 py-3 font-medium text-[#1d1d1d]">Developer</td><td className="px-6 py-3">10,000 requests/day</td><td className="px-6 py-3">All 12 signals</td><td className="px-6 py-3 text-right">Coming soon</td></tr>
              <tr className="border-b border-[#d4cade]/50"><td className="px-6 py-3 font-medium text-[#1d1d1d]">Team</td><td className="px-6 py-3">100,000 requests/day</td><td className="px-6 py-3">All + custom</td><td className="px-6 py-3 text-right">Coming soon</td></tr>
              <tr><td className="px-6 py-3 font-medium text-[#1d1d1d]">Enterprise</td><td className="px-6 py-3">Unlimited</td><td className="px-6 py-3">All + custom fine-tuning</td><td className="px-6 py-3 text-right"><Link href="/enterprise" className="text-[#8069af] font-medium">Contact us</Link></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SDKs */}
      <section id="sdks" className="max-w-4xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-4 text-center">SDKs and Libraries</p>
        <h2 className="text-3xl font-bold text-center text-[#1d1d1d] mb-14">Use Rabbit in your language</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <SDKCard lang="Python" cmd="pip install rabbit-memory" status="Available" />
          <SDKCard lang="Node.js" cmd="npm install @reattend/rabbit" status="Available" />
          <SDKCard lang="REST API" cmd="Works via curl" status="Available" />
          <SDKCard lang="OpenAI SDK" cmd="Compatible endpoint" status="Available" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-2xl font-bold text-[#1d1d1d] mb-3">Start building with Rabbit</h2>
        <p className="text-[#6b5f7a] mb-8 font-light">Get your API key and make your first extraction in under 5 minutes.</p>
        <Link href="/login" className="bg-[#1d1d1d] text-white px-7 py-3.5 rounded-xl font-medium hover:bg-[#333] transition">Get API key</Link>
      </section>

      <Footer />
    </main>
  );
}

function StepBlock({ num, title, desc, children }: { num: string; title: string; desc: string; children: React.ReactNode }) {
  return (<div className="bg-white/50 border border-[#d4cade] rounded-2xl p-6"><div className="flex items-start gap-4 mb-4"><span className="inline-block w-8 h-8 rounded-full bg-[#8069af] text-white text-sm font-semibold leading-8 text-center shrink-0">{num}</span><div><h3 className="font-semibold text-[#1d1d1d]">{title}</h3><p className="text-sm text-[#6b5f7a] font-light mt-1">{desc}</p></div></div>{children}</div>);
}
function Code({ children }: { children: string }) {
  return <pre className="bg-[#1d1d1d] text-[#eee9f4] rounded-xl px-4 py-3 font-mono text-[13px] overflow-x-auto whitespace-pre-wrap">{children}</pre>;
}
function Endpoint({ method, path, desc }: { method: string; path: string; desc: string }) {
  const c: Record<string, string> = { GET: "bg-green-50 text-green-700 border-green-200", POST: "bg-blue-50 text-blue-700 border-blue-200", DELETE: "bg-red-50 text-red-700 border-red-200" };
  return (<div className="flex items-center gap-3 py-2.5 border-b border-[#d4cade]/50 last:border-0"><span className={`font-mono text-[10px] px-2 py-0.5 rounded-md border ${c[method]||""}`}>{method}</span><code className="font-mono text-[#1d1d1d] text-[13px]">{path}</code><span className="text-[#6b5f7a] ml-auto text-[13px] font-light">{desc}</span></div>);
}
function SDKCard({ lang, cmd, status }: { lang: string; cmd: string; status: string }) {
  return (<div className="bg-white/50 border border-[#d4cade] rounded-2xl p-5"><h3 className="font-semibold text-[#1d1d1d] mb-1">{lang}</h3><code className="text-xs font-mono text-[#8069af]">{cmd}</code><p className="text-xs text-[#6b5f7a] mt-2">{status}</p></div>);
}
function Header({ current }: { current: string }) {
  const links = ["Home", "Research", "Product", "Enterprise", "Developers", "Individuals", "Future of Work"];
  const hrefs: Record<string, string> = { Home: "/", Research: "/research", Product: "/product", Enterprise: "/enterprise", Developers: "/developers", Individuals: "/individuals", "Future of Work": "/future" };
  return (<header className="px-6 py-5 flex items-center justify-between max-w-7xl mx-auto w-full"><div className="flex items-center gap-10"><Link href="/" className="flex items-center gap-2"><Image src="/logo.png" alt="Rabbit" width={28} height={28} /><span className="text-lg font-bold tracking-tight text-[#1d1d1d]">rabbit</span></Link><nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-[#6b5f7a]">{links.map(l => <Link key={l} href={hrefs[l]} className={l === current ? "text-[#1d1d1d]" : "hover:text-[#1d1d1d] transition"}>{l}</Link>)}</nav></div><div className="flex items-center gap-4 text-[13px]"><Link href="/login" className="bg-[#6d5a96] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#5c4a82] transition">Get API</Link><a href="https://reattend.ai" className="bg-[#1d1d1d] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#333] transition">Reattend</a></div></header>);
}
function Footer() {
  return (<footer className="bg-[#1d1d1d] text-white px-6 py-16"><div className="max-w-7xl mx-auto"><div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14"><div className="col-span-2 md:col-span-1"><div className="flex items-center gap-2 mb-4"><Image src="/logo.png" alt="Rabbit" width={24} height={24} className="brightness-0 invert" /><span className="font-bold">Rabbit</span></div><p className="text-sm text-neutral-400 leading-relaxed">AI research and products that put organizational memory at the core. Built by Reattend.</p></div><FCol title="Research" links={["Overview", "Training Log", "Benchmarks", "Data Ethics"]} /><FCol title="Product" links={["Model", "Signals", "Sandbox", "API Docs"]} /><FCol title="Enterprise" links={["Overview", "Deployment", "Compliance", "Contact Sales"]} /><FCol title="Company" links={["Reattend Platform", "Future of Work", "Contact"]} /></div><div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500"><span>2026 Reattend, Inc. All rights reserved.</span><div className="flex gap-6"><a href="#" className="hover:text-white transition">Privacy</a><a href="#" className="hover:text-white transition">Terms</a></div></div></div></footer>);
}
function FCol({ title, links }: { title: string; links: string[] }) {
  return (<div><h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4">{title}</h4><ul className="space-y-2.5">{links.map(l => <li key={l}><a href="#" className="text-sm text-neutral-400 hover:text-white transition">{l}</a></li>)}</ul></div>);
}

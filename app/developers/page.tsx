import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default function DevelopersPage() {
  return (
    <main className="flex-1 bg-[#eee9f4]">
      {/* ================================================================ */}
      {/* HEADER                                                           */}
      {/* ================================================================ */}
      <header className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="Rabbit" width={26} height={26} />
            <span className="text-[15px] font-bold tracking-tight text-[#1d1d1d]">rabbit</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-7 text-[12.5px] font-medium text-[#6b5f7a]">
            <Link href="/research" className="hover:text-[#1d1d1d] transition">Research</Link>
            <Link href="/product" className="hover:text-[#1d1d1d] transition">Model</Link>
            <Link href="/enterprise" className="hover:text-[#1d1d1d] transition">Enterprise</Link>
            <Link href="/developers" className="text-[#1d1d1d]">API</Link>
            <Link href="/future" className="hover:text-[#1d1d1d] transition">Vision</Link>
            <Link href="/contact" className="hover:text-[#1d1d1d] transition">Contact</Link>
          </nav>
        </div>
        <div className="flex items-center gap-3 text-[12.5px]">
          <Link href="/login" className="text-[#6b5f7a] hover:text-[#1d1d1d] font-medium transition">Log in</Link>
          <Link href="/login" className="bg-[#1d1d1d] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#333] transition">
            Get API Key
          </Link>
        </div>
      </header>

      {/* ================================================================ */}
      {/* HERO                                                             */}
      {/* ================================================================ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-10 left-1/4 w-[600px] h-[600px] rounded-full bg-[#8069af]/[0.07] blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-medium text-[#8069af] bg-white/60 border border-[#d4cade] px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8069af] animate-pulse-slow" />
                Rabbit API / v1 / Stable
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-bold tracking-tight leading-[1.02] text-[#1d1d1d]">
                An API for organizational memory.<br />
                <span className="text-[#8069af]">Ship in an afternoon.</span>
              </h1>
              <p className="mt-7 text-lg text-[#6b5f7a] max-w-xl leading-relaxed font-light">
                Store memories. Ask questions. Get cited answers. The Rabbit API
                is intentionally tiny. Three endpoints do 90% of the work.
                The other 10% is there when you need it.
              </p>
              <div className="mt-8 flex gap-3 flex-wrap">
                <Link href="/login" className="bg-[#1d1d1d] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#333] transition text-sm">
                  Get API Key
                </Link>
                <a href="#quickstart" className="bg-white/60 text-[#1d1d1d] border border-[#d4cade] px-6 py-3 rounded-xl font-medium hover:bg-white/80 transition text-sm">
                  Read Quickstart
                </a>
                <a href="#reference" className="bg-white/60 text-[#1d1d1d] border border-[#d4cade] px-6 py-3 rounded-xl font-medium hover:bg-white/80 transition text-sm">
                  API Reference
                </a>
              </div>
              <p className="mt-6 text-[11px] text-[#a89bb5] font-mono uppercase tracking-wider">
                Free tier included / No credit card / SOC 2 on day one
              </p>
            </div>

            {/* Right: terminal */}
            <div className="bg-[#1d1d1d] border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <span className="ml-3 text-neutral-500 text-[11px] font-sans">~/rabbit-demo</span>
                </div>
                <span className="text-[10px] font-mono text-neutral-600">zsh</span>
              </div>
              <pre className="px-5 py-5 text-[12.5px] leading-relaxed font-mono overflow-x-auto">
<span className="text-[#c2a6cf]">$</span> <span className="text-neutral-300">pip install rabbit-ai</span>{"\n"}
<span className="text-neutral-500"># Collecting rabbit-ai...</span>{"\n"}
<span className="text-neutral-500"># Successfully installed rabbit-ai-1.4.2</span>{"\n\n"}
<span className="text-[#c2a6cf]">$</span> <span className="text-neutral-300">python</span>{"\n"}
<span className="text-[#c2a6cf]">{`>>>`}</span> <span className="text-neutral-300">from rabbit import Rabbit</span>{"\n"}
<span className="text-[#c2a6cf]">{`>>>`}</span> <span className="text-neutral-300">client = Rabbit()</span>{"\n"}
<span className="text-[#c2a6cf]">{`>>>`}</span> <span className="text-neutral-300">client.remember(</span>{"\n"}
<span className="text-[#c2a6cf]">...</span> <span className="text-neutral-300">  {`"Board approved $2M for APAC expansion."`}</span>{"\n"}
<span className="text-[#c2a6cf]">...</span> <span className="text-neutral-300">)</span>{"\n"}
<span className="text-neutral-500">{`# Memory(id='mem_a7f2b1', confidence=0.98)`}</span>{"\n\n"}
<span className="text-[#c2a6cf]">{`>>>`}</span> <span className="text-neutral-300">{`client.ask("What is the APAC budget?")`}</span>{"\n"}
<span className="text-neutral-500">{`# "The board approved $2M for APAC`}</span>{"\n"}
<span className="text-neutral-500">{`#  expansion [1]."`}</span>{"\n"}
<span className="text-[#c2a6cf]">{`>>>`}</span> <span className="text-green-500 animate-pulse-slow">█</span>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* NUMBERS STRIP                                                    */}
      {/* ================================================================ */}
      <section className="border-y border-[#d4cade] bg-white/30">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
          <StripStat value="3" label="Endpoints for 90% of use cases" />
          <StripStat value="< 500ms" label="p50 query latency" />
          <StripStat value="99.9%" label="Uptime SLA" />
          <StripStat value="5 min" label="First successful call" />
          <StripStat value="6" label="Official SDKs" />
          <StripStat value="Stable" label="v1 since 2026" />
        </div>
      </section>

      {/* ================================================================ */}
      {/* QUICKSTART                                                       */}
      {/* ================================================================ */}
      <section id="quickstart" className="relative dot-bg">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
              Quickstart
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-4">
              Your first memory in three steps
            </h2>
            <p className="text-[15px] text-[#6b5f7a] max-w-2xl mx-auto font-light">
              If you have ever called an HTTP API, you already know how this works.
              There is no warm up, no config file, no orchestration glue.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            {/* Step 1 */}
            <StepCard
              num="01"
              title="Install the SDK"
              desc="Pick your language. The SDK is tiny, dependency-light, and ships with full types."
            >
              <TabBar tabs={["python", "node", "go"]} />
              <CodeArea>
{`pip install rabbit-ai

# node
npm i @rabbit/sdk

# go
go get github.com/rabbit-ai/sdk-go`}
              </CodeArea>
            </StepCard>

            {/* Step 2 */}
            <StepCard
              num="02"
              title="Store a memory"
              desc="Send any unstructured text. Rabbit extracts entities, decisions, actions, and timeline automatically."
            >
              <TabBar tabs={["python", "node", "curl"]} active={0} />
              <CodeArea>
{`from rabbit import Rabbit

client = Rabbit(
    api_key="rb_live_..."
)

client.remember(
    content="Board approved $2M
    APAC expansion. Sarah Chen
    leading, 6 month timeline.",
    source="board_meeting"
)`}
              </CodeArea>
            </StepCard>

            {/* Step 3 */}
            <StepCard
              num="03"
              title="Ask a question"
              desc="Natural language query. Cited answer. Zero prompt engineering."
            >
              <TabBar tabs={["python", "node", "curl"]} active={0} />
              <CodeArea>
{`answer = client.ask(
    "Who is leading APAC expansion
    and what is the budget?"
)

print(answer.text)
# "Sarah Chen is leading the
#  APAC expansion with a $2M
#  board-approved budget [1]."

print(answer.citations)
# [<Citation source='board_meeting'
#             confidence=0.97>]`}
              </CodeArea>
            </StepCard>
          </div>

          <div className="mt-10 bg-white/70 border border-[#d4cade] rounded-xl p-5 flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-[13px] font-semibold text-[#1d1d1d]">That is the whole quickstart.</p>
              <p className="text-[12px] text-[#6b5f7a] font-light">Three endpoints. Everything else is optional.</p>
            </div>
            <Link href="/login" className="bg-[#1d1d1d] text-white px-5 py-2.5 rounded-lg font-medium text-[13px] hover:bg-[#333] transition">
              Get API Key &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* API REFERENCE                                                    */}
      {/* ================================================================ */}
      <section id="reference" className="bg-[#1d1d1d] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(128,105,175,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(128,105,175,0.08) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <p className="text-[11px] font-semibold text-[#c2a6cf] tracking-[0.15em] uppercase mb-5">
              API Reference
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              One base URL. Twelve endpoints. Everything is JSON.
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto font-light">
              The complete surface area of the Rabbit API. Sorted by how often
              you will actually use them.
            </p>
          </div>

          <div className="bg-white/[0.04] border border-neutral-800 rounded-2xl p-6 mb-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">Base URL</span>
              <code className="text-[12px] font-mono text-[#c2a6cf] bg-white/[0.04] border border-neutral-800 px-3 py-1 rounded">
                https://api.rabbit.reattend.ai/v1
              </code>
            </div>

            <p className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mb-3">Core</p>
            <EndpointRow method="POST" path="/remember" desc="Ingest a memory. Returns extracted entities and graph links." />
            <EndpointRow method="POST" path="/ask" desc="Ask a natural language question. Returns a cited answer." />
            <EndpointRow method="POST" path="/check" desc="Detect contradictions across your memories for a given claim." />

            <p className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mb-3 mt-8">Memories</p>
            <EndpointRow method="GET" path="/memories" desc="List memories with filters, pagination, and temporal ranges." />
            <EndpointRow method="GET" path="/memories/:id" desc="Retrieve a single memory with extraction and links." />
            <EndpointRow method="DELETE" path="/memories/:id" desc="Delete a memory and propagate removal across the knowledge graph." />
            <EndpointRow method="POST" path="/remember/file" desc="Ingest files: audio, PDF, docx, images. Transcription included." />

            <p className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mb-3 mt-8">Intelligence</p>
            <EndpointRow method="GET" path="/graph/:id" desc="Return the knowledge graph connections for an entity or memory." />
            <EndpointRow method="POST" path="/compile/:entity" desc="Compile a living wiki page for an entity, person, or project." />
            <EndpointRow method="POST" path="/lint" desc="Run an ambient health audit. Surface stale, contradictory, or forgotten items." />

            <p className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mb-3 mt-8">Operations</p>
            <EndpointRow method="GET" path="/stats" desc="Usage and quota statistics for your organization." />
            <EndpointRow method="POST" path="/feedback" desc="Submit thumbs up or down on generated answers to improve calibration." />
          </div>

          {/* Request / response example */}
          <div className="grid lg:grid-cols-2 gap-5">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-mono text-[#c2a6cf] bg-[#c2a6cf]/10 px-2 py-0.5 rounded uppercase">Request</span>
                <code className="text-[11px] font-mono text-neutral-400">POST /v1/remember</code>
              </div>
              <DarkCode>
{`{
  "content": "Met with Sarah from Acme.
  Budget confirmed at $45,000.",
  "source": "meeting/apr-03",
  "timestamp": "2026-04-03T15:00:00Z",
  "actor": "user_12ab"
}`}
              </DarkCode>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-mono text-[#c2a6cf] bg-[#c2a6cf]/10 px-2 py-0.5 rounded uppercase">Response</span>
                <code className="text-[11px] font-mono text-neutral-400">200 OK</code>
              </div>
              <DarkCode>
{`{
  "id": "mem_a7f2b1",
  "summary": "Budget confirmed at $45K
              with Sarah from Acme.",
  "extraction": {
    "people": ["Sarah"],
    "organizations": ["Acme"],
    "decisions": ["$45,000 budget"],
    "amounts": [45000]
  },
  "links": [
    {"target": "mem_9c1d0", "kind": "follows_up"}
  ],
  "confidence": 0.96
}`}
              </DarkCode>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* USE CASES                                                        */}
      {/* ================================================================ */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
              What You Can Build
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-4">
              Things that were previously too hard to ship
            </h2>
            <p className="text-[15px] text-[#6b5f7a] max-w-2xl mx-auto font-light">
              These are the applications developers start with. Every one used to
              require a dedicated ML team. Now it takes an afternoon.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <UseCase
              tag="CHATBOT"
              title="Internal company chatbot"
              desc="Plug Rabbit into Slack or Teams. Your team asks questions and gets cited answers from meetings, emails, and documents. No retrieval pipeline to maintain."
              code={`client.ask(
  question=slack_message.text,
  user_id=slack_message.user
)`}
            />
            <UseCase
              tag="MEETINGS"
              title="Meeting intelligence"
              desc="Feed every meeting transcript to Rabbit. Extract decisions, action items, and owners. Surface follow-ups automatically. Contradictions flagged in real time."
              code={`client.remember(
  content=transcript,
  source="meeting",
  timestamp=meeting.ended_at
)`}
            />
            <UseCase
              tag="CUSTOMERS"
              title="Customer memory"
              desc="Ingest support tickets, calls, and account notes. Every AE and CSM gets instant context on every customer interaction across the full history."
              code={`client.compile(
  entity=f"customer/{account_id}"
)`}
            />
            <UseCase
              tag="ONBOARDING"
              title="New hire onboarding"
              desc="New employees ask 'why did we decide X?' and get cited answers from historical decisions. Institutional knowledge transfers automatically."
              code={`answer = client.ask(
  "Why did we choose Postgres?"
)`}
            />
            <UseCase
              tag="AUDIT"
              title="Compliance and audit"
              desc="Every decision traceable to its source. Right to be forgotten is one API call. Audit logs stream to your SIEM. Compliance becomes observable."
              code={`client.memories.delete(
  id=memory_id,
  reason="gdpr_article_17"
)`}
            />
            <UseCase
              tag="AGENTS"
              title="Agent long-term memory"
              desc="Give your agents persistent, contradiction-aware memory across sessions. Rabbit handles state, the agent handles reasoning. Best-of-both-worlds by design."
              code={`agent.memory = RabbitStore(
  namespace="agent/planner"
)`}
            />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FEATURES GRID                                                    */}
      {/* ================================================================ */}
      <section className="bg-[#f5f2f8] border-y border-[#d4cade]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
              Developer Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-4">
              Everything you expect from a modern API
            </h2>
            <p className="text-[15px] text-[#6b5f7a] max-w-2xl mx-auto font-light">
              We built the API we wanted to use. Every feature exists because we
              have been burned by the ones that did not have it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard icon="stream" title="Streaming responses" desc="Server-sent events for answers. Citations bind as tokens arrive. Feels native in any UI." />
            <FeatureCard icon="webhook" title="Webhooks" desc="Subscribe to ingestion events, contradiction detections, and ambient alerts. Zero polling." />
            <FeatureCard icon="batch" title="Batch ingestion" desc="Upload thousands of memories in a single call. Async processing with progress callbacks." />
            <FeatureCard icon="idempotency" title="Idempotency keys" desc="Safe retries by default. Every mutation accepts an idempotency header. No duplicates ever." />
            <FeatureCard icon="versioning" title="Versioned API" desc="Date-based versioning like Stripe. Pin a version, never get surprised by a breaking change." />
            <FeatureCard icon="types" title="Typed SDKs" desc="First-class TypeScript, Python, and Go types. Your editor autocompletes every response shape." />
            <FeatureCard icon="openapi" title="OpenAPI 3.1 spec" desc="Full OpenAPI spec published. Generate your own client, mock servers, or integration tests." />
            <FeatureCard icon="local" title="Local dev mode" desc="docker compose up gets you a full Rabbit stack on your laptop. No tunnels. No cloud accounts." />
            <FeatureCard icon="errors" title="Structured errors" desc="Every error has a stable code, a human message, a docs link, and a request ID. Debugging is fast." />
            <FeatureCard icon="retry" title="Automatic retries" desc="SDKs handle backoff, jitter, and circuit breaking. You call one function, the network does its thing." />
            <FeatureCard icon="audit" title="Full audit trail" desc="Every request logged with actor, source IP, and payload hash. Streamable to your SIEM." />
            <FeatureCard icon="keys" title="Scoped API keys" desc="Create keys restricted to specific projects, operations, or IP ranges. Revocable in one click." />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* ERROR HANDLING                                                   */}
      {/* ================================================================ */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
                Error Handling
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-6">
                Errors you can actually debug
              </h2>
              <p className="text-[15px] text-[#6b5f7a] font-light leading-relaxed mb-4">
                Every error response includes a stable error code, a human-readable
                message, a direct link to the relevant docs, and a unique request ID
                you can quote to support.
              </p>
              <p className="text-[15px] text-[#6b5f7a] font-light leading-relaxed mb-6">
                The SDK raises typed exceptions for every error class, so you can
                handle rate limits, validation errors, and server errors independently
                without parsing error strings.
              </p>
              <div className="space-y-2">
                <ErrorRow code="400" name="invalid_request" desc="Your payload failed validation" />
                <ErrorRow code="401" name="unauthorized" desc="API key missing or invalid" />
                <ErrorRow code="403" name="scope_denied" desc="Key does not have permission for this operation" />
                <ErrorRow code="404" name="not_found" desc="Resource does not exist" />
                <ErrorRow code="409" name="conflict" desc="Idempotency key reused with different payload" />
                <ErrorRow code="429" name="rate_limited" desc="Slow down. Retry-After header included." />
                <ErrorRow code="500" name="internal" desc="Our fault. Quote the request ID to support." />
              </div>
            </div>

            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="text-[10px] font-mono text-[#8069af] bg-[#8069af]/10 px-2 py-0.5 rounded uppercase">Example</span>
                <code className="text-[11px] font-mono text-[#6b5f7a]">400 Bad Request</code>
              </div>
              <div className="bg-[#1d1d1d] border border-neutral-800 rounded-2xl overflow-hidden">
                <div className="px-5 py-3 border-b border-neutral-800 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <span className="ml-3 text-neutral-500 text-[11px] font-sans">error-response.json</span>
                </div>
                <pre className="px-5 py-4 text-[12.5px] leading-relaxed font-mono overflow-x-auto text-neutral-300">{`{
  "error": {
    "code": "invalid_request",
    "type": "validation_error",
    "message": "Field 'content' must not exceed 32768 characters.",
    "param": "content",
    "docs_url": "https://rabbit.reattend.ai/errors/invalid_request",
    "request_id": "req_8f3a2c1b",
    "timestamp": "2026-04-12T18:23:09Z"
  }
}`}</pre>
              </div>

              <div className="mt-4 bg-white/60 border border-[#d4cade] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#8069af]">
                    <path d="M12 16v-4m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[13px] font-semibold text-[#1d1d1d]">Every error is debuggable in 30 seconds</p>
                </div>
                <p className="text-[12px] text-[#6b5f7a] font-light leading-relaxed">
                  Copy the request ID. Paste it to support. We have the full trace,
                  the payload, and the exact code path. No back-and-forth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SDKS GRID                                                        */}
      {/* ================================================================ */}
      <section className="bg-[#1d1d1d] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <p className="text-[11px] font-semibold text-[#c2a6cf] tracking-[0.15em] uppercase mb-5">
              Official SDKs
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              Use Rabbit in the language you already ship in
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto font-light">
              All SDKs are first-class citizens. Same feature set. Same release
              cadence. Same typed interfaces. No second-class bindings.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SdkCard lang="Python" cmd="pip install rabbit-ai" version="v1.4.2" status="stable" />
            <SdkCard lang="TypeScript / Node" cmd="npm i @rabbit/sdk" version="v1.4.2" status="stable" />
            <SdkCard lang="Go" cmd="go get github.com/rabbit-ai/sdk-go" version="v1.4.1" status="stable" />
            <SdkCard lang="Rust" cmd="cargo add rabbit-ai" version="v1.3.0" status="beta" />
            <SdkCard lang="Ruby" cmd="gem install rabbit-ai" version="v1.3.0" status="beta" />
            <SdkCard lang="Java / Kotlin" cmd="maven: ai.rabbit:sdk:1.3.0" version="v1.3.0" status="beta" />
          </div>

          <div className="mt-6 bg-white/[0.04] border border-neutral-800 rounded-xl p-5 text-center">
            <p className="text-[13px] text-neutral-400">
              Not in your language? The OpenAPI spec generates clients for 40+ languages.
              <a href="#" className="text-[#c2a6cf] font-medium hover:underline ml-2">View spec &rarr;</a>
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* RATE LIMITS AND PRICING                                          */}
      {/* ================================================================ */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
              Rate Limits and Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-4">
              Start free. Scale without surprises.
            </h2>
            <p className="text-[15px] text-[#6b5f7a] max-w-2xl mx-auto font-light">
              Pricing is request-based, not token-based. No surprise bills from
              a runaway loop. No guesswork about what a query will cost.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <PricingTier
              name="Free"
              price="$0"
              period="forever"
              tagline="For exploration and prototypes"
              features={[
                "1,000 requests / day",
                "All 12 signals",
                "Community support",
                "Rate-limited streaming",
              ]}
              cta="Start free"
              href="/login"
            />
            <PricingTier
              name="Developer"
              price="$49"
              period="per month"
              tagline="For side projects and MVPs"
              features={[
                "25,000 requests / day",
                "All 12 signals",
                "Email support",
                "Webhooks included",
                "Multi-project API keys",
              ]}
              cta="Upgrade"
              href="/login"
            />
            <PricingTier
              name="Team"
              price="$499"
              period="per month"
              tagline="For production workloads"
              highlight
              features={[
                "500,000 requests / day",
                "All 12 signals",
                "Priority support",
                "99.9% uptime SLA",
                "SSO and audit logs",
                "Private model option",
              ]}
              cta="Upgrade"
              href="/login"
            />
            <PricingTier
              name="Enterprise"
              price="Custom"
              period="annual contract"
              tagline="For regulated industries"
              features={[
                "Unlimited requests",
                "On-prem or air-gapped",
                "Named support engineer",
                "Custom SLAs",
                "BAA, DPA, MSA ready",
                "Domain adaptation",
              ]}
              cta="Contact sales"
              href="/enterprise"
            />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CHANGELOG                                                        */}
      {/* ================================================================ */}
      <section className="bg-[#f5f2f8] border-y border-[#d4cade]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
                Changelog
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-6">
                We ship. Often.
              </h2>
              <p className="text-[15px] text-[#6b5f7a] font-light leading-relaxed mb-6">
                Every improvement to the model, the API, and the SDKs is documented.
                Breaking changes get a deprecation window. Non-breaking improvements
                land continuously.
              </p>
              <Link href="#" className="text-[13px] font-medium text-[#8069af] hover:underline">
                View full changelog &rarr;
              </Link>
            </div>

            <div className="lg:col-span-2 space-y-3">
              <ChangelogEntry
                version="v1.4.2"
                date="Apr 2026"
                type="improvement"
                title="Streaming citations"
                desc="Citations now bind as tokens arrive in streamed answers. SSE response format updated to include delta citation events."
              />
              <ChangelogEntry
                version="v1.4.1"
                date="Apr 2026"
                type="fix"
                title="Entity resolution edge case"
                desc="Fixed a rare edge case where entities with identical names across different time periods were incorrectly merged."
              />
              <ChangelogEntry
                version="v1.4.0"
                date="Mar 2026"
                type="feature"
                title="Webhooks GA"
                desc="Webhooks are now generally available. Subscribe to ingestion, contradiction, and ambient alert events. HMAC-signed payloads."
              />
              <ChangelogEntry
                version="v1.3.5"
                date="Mar 2026"
                type="improvement"
                title="Faster /compile endpoint"
                desc="Compile endpoint is now 40% faster on large entity graphs. No API changes required."
              />
              <ChangelogEntry
                version="v1.3.0"
                date="Feb 2026"
                type="feature"
                title="Ambient intelligence"
                desc="The /lint endpoint surfaces forgotten commitments, stale decisions, and contradictions without being asked."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* STATUS + SUPPORT                                                 */}
      {/* ================================================================ */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
              Support
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-4">
              We sit next to you while you build
            </h2>
            <p className="text-[15px] text-[#6b5f7a] max-w-2xl mx-auto font-light">
              Docs, community, status, and direct engineering contact. Everything
              a developer needs to go from first call to production shipment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <SupportCard
              title="Status Page"
              value="All systems operational"
              desc="Real-time health of every endpoint and region. Historical incident log. RSS and webhook feeds."
              cta="View status"
              live
            />
            <SupportCard
              title="Discord Community"
              value="2,400+ developers"
              desc="Chat with other builders. Share patterns. Get unblocked fast. Our engineers hang out here too."
              cta="Join Discord"
            />
            <SupportCard
              title="GitHub"
              value="Open SDKs and examples"
              desc="All SDKs, example apps, and integration templates. Issues and PRs welcome on every repo."
              cta="View repos"
            />
            <SupportCard
              title="Direct Support"
              value="Engineers, not tickets"
              desc="Paid plans include direct support. Team and Enterprise get named contacts and private channels."
              cta="Contact support"
            />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FINAL CTA                                                        */}
      {/* ================================================================ */}
      <section className="bg-[#8069af] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold leading-[1.05] mb-6">
            The best time to add memory to your app was yesterday. The second best time is in the next 10 minutes.
          </h2>
          <p className="text-white/80 text-lg font-light max-w-2xl mx-auto mb-10">
            Grab a free API key. Install the SDK. Ship something you could not
            ship last year. We will be here when you need us.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/login" className="bg-white text-[#8069af] px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition text-sm">
              Get Free API Key
            </Link>
            <a href="#quickstart" className="bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-medium hover:bg-white/30 transition text-sm">
              Read Quickstart
            </a>
            <Link href="/enterprise" className="bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-medium hover:bg-white/30 transition text-sm">
              Enterprise Plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ====================================================================== */
/* COMPONENTS                                                              */
/* ====================================================================== */

function StripStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-xl font-bold text-[#1d1d1d]">{value}</p>
      <p className="text-[10.5px] text-[#6b5f7a] mt-0.5 leading-snug">{label}</p>
    </div>
  );
}

function StepCard({ num, title, desc, children }: { num: string; title: string; desc: string; children: React.ReactNode }) {
  return (
    <div className="bg-white/70 border border-[#d4cade] rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[11px] font-mono text-[#8069af] bg-[#8069af]/10 px-2 py-0.5 rounded">{num}</span>
        <h3 className="font-bold text-[#1d1d1d]">{title}</h3>
      </div>
      <p className="text-[13px] text-[#6b5f7a] font-light leading-relaxed mb-4">{desc}</p>
      {children}
    </div>
  );
}

function TabBar({ tabs, active = 0 }: { tabs: string[]; active?: number }) {
  return (
    <div className="flex items-center gap-1 border-b border-neutral-800 bg-[#1d1d1d] rounded-t-lg px-2 pt-2">
      {tabs.map((tab, i) => (
        <span
          key={tab}
          className={`text-[10px] font-mono px-2.5 py-1 rounded-t ${i === active ? "bg-[#0f0f0f] text-[#c2a6cf]" : "text-neutral-500"}`}
        >
          {tab}
        </span>
      ))}
    </div>
  );
}

function CodeArea({ children }: { children: string }) {
  return (
    <pre className="bg-[#0f0f0f] rounded-b-lg px-4 py-3 text-[11.5px] leading-relaxed text-neutral-300 font-mono overflow-x-auto"><code>{children}</code></pre>
  );
}

function EndpointRow({ method, path, desc }: { method: string; path: string; desc: string }) {
  const colors: Record<string, string> = {
    GET: "text-green-400 bg-green-400/10 border-green-400/20",
    POST: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    DELETE: "text-red-400 bg-red-400/10 border-red-400/20",
    PUT: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  };
  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-neutral-800/50 last:border-0 hover:bg-white/[0.02] px-2 rounded transition">
      <span className={`font-mono text-[10px] font-semibold px-2 py-0.5 rounded border w-14 text-center ${colors[method]}`}>{method}</span>
      <code className="font-mono text-neutral-200 text-[12.5px] min-w-[180px]">{path}</code>
      <span className="text-neutral-500 text-[12px] font-light flex-1">{desc}</span>
    </div>
  );
}

function DarkCode({ children }: { children: string }) {
  return (
    <div className="bg-[#0f0f0f] border border-neutral-800 rounded-xl p-5">
      <pre className="text-[12px] leading-relaxed text-neutral-300 font-mono overflow-x-auto"><code>{children}</code></pre>
    </div>
  );
}

function UseCase({ tag, title, desc, code }: { tag: string; title: string; desc: string; code: string }) {
  return (
    <div className="bg-white/60 border border-[#d4cade] rounded-2xl p-6 hover:bg-white/80 transition flex flex-col">
      <span className="text-[9px] font-mono text-[#8069af] bg-[#8069af]/10 px-2 py-0.5 rounded uppercase inline-block mb-3 self-start">
        {tag}
      </span>
      <h3 className="font-bold text-[#1d1d1d] text-[16px] mb-2">{title}</h3>
      <p className="text-[13px] text-[#6b5f7a] font-light leading-relaxed mb-4 flex-1">{desc}</p>
      <pre className="bg-[#1d1d1d] text-neutral-300 text-[11px] font-mono rounded-lg p-3 overflow-x-auto leading-relaxed"><code>{code}</code></pre>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  const icons: Record<string, React.ReactNode> = {
    stream: <path d="M3 12h4l3-9 4 18 3-9h4" />,
    webhook: <path d="M18 16l4-4-4-4M2 12l4 4m0-8L2 12m4 0h12" />,
    batch: <path d="M4 6h16M4 12h16M4 18h16" />,
    idempotency: <path d="M12 2v20m-5-5l5 5 5-5M17 7l-5-5-5 5" />,
    versioning: <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
    types: <path d="M16 18l6-6-6-6M8 6L2 12l6 6" />,
    openapi: <path d="M9 12h6m-3-3v6m-9 0a9 9 0 1118 0 9 9 0 01-18 0z" />,
    local: <path d="M4 4h16v6H4zm0 10h16v6H4zM8 7h.01M8 17h.01" />,
    errors: <path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    retry: <path d="M1 4v6h6M23 20v-6h-6M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" />,
    audit: <path d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
    keys: <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.78 7.78 5.5 5.5 0 017.78-7.78zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />,
  };
  return (
    <div className="bg-white/70 border border-[#d4cade] rounded-xl p-5">
      <div className="w-8 h-8 rounded-lg bg-[#8069af]/10 flex items-center justify-center mb-3">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#8069af]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {icons[icon]}
        </svg>
      </div>
      <h3 className="font-semibold text-[#1d1d1d] text-[14px] mb-1.5">{title}</h3>
      <p className="text-[12px] text-[#6b5f7a] font-light leading-relaxed">{desc}</p>
    </div>
  );
}

function ErrorRow({ code, name, desc }: { code: string; name: string; desc: string }) {
  return (
    <div className="flex items-center gap-3 py-2 border-b border-[#d4cade]/50 last:border-0">
      <span className="text-[11px] font-mono text-[#8069af] w-10">{code}</span>
      <code className="text-[12px] font-mono text-[#1d1d1d] min-w-[120px]">{name}</code>
      <span className="text-[12px] text-[#6b5f7a] font-light">{desc}</span>
    </div>
  );
}

function SdkCard({ lang, cmd, version, status }: { lang: string; cmd: string; version: string; status: string }) {
  const statusColor: Record<string, string> = {
    stable: "text-green-400 bg-green-400/10 border-green-400/20",
    beta: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  };
  return (
    <div className="bg-white/[0.04] border border-neutral-800 rounded-xl p-5 hover:bg-white/[0.07] transition">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-white text-[15px]">{lang}</h3>
        <span className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded border ${statusColor[status]}`}>{status}</span>
      </div>
      <code className="block text-[11px] font-mono text-[#c2a6cf] bg-white/[0.04] border border-neutral-800 px-3 py-2 rounded mb-3 overflow-x-auto">
        {cmd}
      </code>
      <p className="text-[10px] font-mono text-neutral-500">{version}</p>
    </div>
  );
}

function PricingTier({ name, price, period, tagline, features, cta, href, highlight }: { name: string; price: string; period: string; tagline: string; features: string[]; cta: string; href: string; highlight?: boolean }) {
  return (
    <div className={`border rounded-2xl p-7 flex flex-col ${highlight ? "bg-white border-[#8069af] shadow-sm" : "bg-white/60 border-[#d4cade]"}`}>
      {highlight && (
        <span className="text-[9px] font-semibold text-white bg-[#8069af] px-2 py-1 rounded uppercase tracking-wider self-start mb-3">
          Most Popular
        </span>
      )}
      <h3 className="text-lg font-bold text-[#1d1d1d]">{name}</h3>
      <p className="text-[12px] text-[#6b5f7a] font-light mb-4">{tagline}</p>
      <div className="flex items-baseline gap-1 mb-5 pb-5 border-b border-[#d4cade]">
        <span className="text-3xl font-bold text-[#1d1d1d]">{price}</span>
        <span className="text-[11px] text-[#a89bb5]">{period}</span>
      </div>
      <ul className="space-y-2 mb-6 flex-1">
        {features.map((f) => (
          <li key={f} className="text-[12px] text-[#1d1d1d] flex items-start gap-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-[#8069af] shrink-0 mt-0.5">
              <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <Link href={href} className={`block text-center px-4 py-2.5 rounded-lg font-medium text-[13px] transition ${highlight ? "bg-[#1d1d1d] text-white hover:bg-[#333]" : "bg-white border border-[#d4cade] text-[#1d1d1d] hover:bg-white/80"}`}>
        {cta}
      </Link>
    </div>
  );
}

function ChangelogEntry({ version, date, type, title, desc }: { version: string; date: string; type: string; title: string; desc: string }) {
  const typeColor: Record<string, string> = {
    feature: "bg-[#8069af] text-white",
    improvement: "bg-[#c2a6cf]/30 text-[#6d5a96]",
    fix: "bg-white border border-[#d4cade] text-[#6b5f7a]",
  };
  return (
    <div className="bg-white/70 border border-[#d4cade] rounded-xl p-5">
      <div className="flex items-center gap-3 mb-2">
        <code className="text-[11px] font-mono text-[#8069af] bg-[#8069af]/10 px-2 py-0.5 rounded">{version}</code>
        <span className="text-[10px] text-[#a89bb5] font-mono">{date}</span>
        <span className={`text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${typeColor[type]}`}>{type}</span>
      </div>
      <h4 className="font-semibold text-[#1d1d1d] text-[14px] mb-1">{title}</h4>
      <p className="text-[12px] text-[#6b5f7a] font-light leading-relaxed">{desc}</p>
    </div>
  );
}

function SupportCard({ title, value, desc, cta, live }: { title: string; value: string; desc: string; cta: string; live?: boolean }) {
  return (
    <div className="bg-white/60 border border-[#d4cade] rounded-2xl p-6">
      <p className="text-[11px] font-mono text-[#8069af] uppercase tracking-wider mb-2">{title}</p>
      <div className="flex items-center gap-2 mb-3">
        {live && <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-slow" />}
        <p className="font-bold text-[#1d1d1d] text-[15px]">{value}</p>
      </div>
      <p className="text-[12px] text-[#6b5f7a] font-light leading-relaxed mb-4">{desc}</p>
      <a href="#" className="text-[12px] font-medium text-[#8069af] hover:underline">{cta} &rarr;</a>
    </div>
  );
}

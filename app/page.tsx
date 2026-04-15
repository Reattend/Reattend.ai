import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/footer";
import { getUser } from "@/lib/auth";

export default async function Home() {
  const email = await getUser();
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
            <Link href="/developers" className="hover:text-[#1d1d1d] transition">API</Link>
            <Link href="/future" className="hover:text-[#1d1d1d] transition">Vision</Link>
            <Link href="/contact" className="hover:text-[#1d1d1d] transition">Contact</Link>
          </nav>
        </div>
        <div className="flex items-center gap-3 text-[12.5px]">
          <Link href={email ? "/dashboard" : "/login"} className="text-[#6b5f7a] hover:text-[#1d1d1d] font-medium transition">
            {email ? "Dashboard" : "Log in"}
          </Link>
          <Link href={email ? "/dashboard" : "/login"} className="bg-[#1d1d1d] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#333] transition">
            Get API Access
          </Link>
        </div>
      </header>

      {/* ================================================================ */}
      {/* HERO                                                             */}
      {/* ================================================================ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-[#8069af]/[0.06] blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#c2a6cf]/[0.08] blur-[80px]" />

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20">
          {/* Announcement pill */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="flex items-center gap-2 text-[11px] font-medium text-[#8069af] bg-white/60 border border-[#d4cade] px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8069af] animate-pulse-slow" />
              Now in private beta. Rabbit v1.4 is live.
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-bold tracking-tight leading-[1.04] text-[#1d1d1d] text-center max-w-5xl mx-auto animate-fade-in-up">
            The world loses $31.5 billion a year to organizational amnesia
          </h1>
          <p className="mt-7 text-lg sm:text-xl text-[#6b5f7a] max-w-2xl mx-auto leading-relaxed text-center font-light animate-fade-in-up delay-200">
            We are building the infrastructure to fix it. Rabbit is the first model
            in a family of AI systems designed to give every organization a permanent,
            queryable memory.
          </p>

          {/* CTA row */}
          <div className="mt-10 flex gap-3 justify-center flex-wrap animate-fade-in-up delay-300">
            <Link
              href="/login"
              className="bg-[#1d1d1d] text-white px-7 py-3.5 rounded-xl font-medium hover:bg-[#333] transition text-sm"
            >
              Request API Access
            </Link>
            <Link
              href="/future"
              className="bg-white/60 text-[#1d1d1d] border border-[#d4cade] px-7 py-3.5 rounded-xl font-medium hover:bg-white/80 transition text-sm"
            >
              Read the Vision
            </Link>
            <a
              href="https://cal.com/reattend/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#8069af] text-white px-7 py-3.5 rounded-xl font-medium hover:bg-[#6d5a96] transition text-sm"
            >
              Talk to Sales
            </a>
          </div>

          {/* Trust line */}
          <p className="mt-8 text-[11px] text-[#a89bb5] text-center font-medium tracking-wide animate-fade-in delay-500">
            SOC 2 COMPLIANT &nbsp;/&nbsp; HIPAA READY &nbsp;/&nbsp; GDPR COMPLIANT &nbsp;/&nbsp; ON-PREMISE AVAILABLE &nbsp;/&nbsp; AIR-GAPPED DEPLOYMENTS
          </p>
        </div>
      </section>

      {/* ================================================================ */}
      {/* METRICS STRIP                                                    */}
      {/* ================================================================ */}
      <section className="border-y border-[#d4cade] bg-white/30">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          <MetricCell value="$31.5B" label="Lost annually to knowledge silos" />
          <MetricCell value="5.3 hrs" label="Per employee, per week, searching" />
          <MetricCell value="70%" label="Of decisions get remade" />
          <MetricCell value="23%" label="Of knowledge retained after turnover" />
          <MetricCell value="97%" label="Rabbit extraction accuracy" />
          <MetricCell value="<500ms" label="End-to-end query latency" />
          <MetricCell value="12" label="Specialized intelligence signals" />
          <MetricCell value="82K+" label="Training examples" />
        </div>
      </section>

      {/* ================================================================ */}
      {/* THE PROBLEM - FULL WIDTH DENSE                                   */}
      {/* ================================================================ */}
      <section className="relative dot-bg">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: narrative */}
            <div>
              <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
                The Problem
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-6">
                Every organization on Earth has amnesia. Nobody is solving it.
              </h2>
              <div className="space-y-4 text-[15px] text-[#6b5f7a] leading-relaxed font-light">
                <p>
                  Your company makes thousands of decisions every week. In meetings, in Slack threads,
                  in emails, on calls. By next quarter, most of those decisions will be invisible.
                  Not deleted. Just unreachable.
                </p>
                <p>
                  When someone leaves, their context leaves with them. When a new hire joins, they
                  spend months rebuilding what already existed. When leadership asks "why did we
                  decide X?", nobody can answer with certainty.
                </p>
                <p>
                  This is not a search problem. Search finds documents. Organizations need to
                  remember decisions, relationships, and the reasoning behind them. That requires
                  a fundamentally different kind of intelligence.
                </p>
              </div>
              <div className="mt-8 flex gap-3">
                <Link href="/future" className="text-[13px] font-medium text-[#8069af] hover:underline">
                  Read the full thesis &rarr;
                </Link>
                <Link href="/research" className="text-[13px] font-medium text-[#6b5f7a] hover:underline ml-4">
                  See the research &rarr;
                </Link>
              </div>
            </div>

            {/* Right: cost calculator */}
            <div className="bg-white/70 border border-[#d4cade] rounded-2xl p-8">
              <h3 className="text-sm font-semibold text-[#1d1d1d] mb-1">The Cost of Forgetting</h3>
              <p className="text-xs text-[#a89bb5] mb-6">Annual impact for a 500-person organization</p>

              <div className="space-y-5">
                <CostRow
                  label="Knowledge search time"
                  formula="500 employees x 5.3 hrs/week x 52 weeks x $75/hr"
                  result="$10,335,000"
                  barWidth={85}
                />
                <CostRow
                  label="Duplicated decisions"
                  formula="70% redecision rate x 12 decisions/week x $2,400 avg cost"
                  result="$5,241,600"
                  barWidth={43}
                />
                <CostRow
                  label="Onboarding drag"
                  formula="20% turnover x 500 x 3.2 months ramp x $8,500/mo"
                  result="$2,720,000"
                  barWidth={22}
                />
                <CostRow
                  label="Context loss from attrition"
                  formula="77% knowledge loss per departure x 100 exits"
                  result="$4,850,000"
                  barWidth={40}
                />

                <div className="border-t border-[#d4cade] pt-4 mt-6">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-semibold text-[#1d1d1d]">Total annual cost</span>
                    <span className="text-2xl font-bold text-[#8069af]">$23,146,600</span>
                  </div>
                  <p className="text-[11px] text-[#a89bb5] mt-1">
                    Sources: IDC, McKinsey Global Institute, Deloitte Human Capital Trends
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WHAT RABBIT DOES                                                 */}
      {/* ================================================================ */}
      <section className="bg-[#1d1d1d] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 grid-bg" style={{ backgroundImage: "linear-gradient(rgba(128,105,175,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(128,105,175,0.08) 1px, transparent 1px)" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold text-[#c2a6cf] tracking-[0.15em] uppercase mb-5">
              The Solution
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              Rabbit turns raw organizational activity into structured, queryable knowledge
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto font-light">
              Not another RAG pipeline. Rabbit is a purpose-built model that understands organizational
              context: who said what, when, why it matters, and how it connects to everything else.
            </p>
          </div>

          {/* Pipeline */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            <PipelineCard
              step="01"
              title="Ingest"
              desc="Meetings, emails, Slack, documents, CRM notes. Rabbit accepts unstructured organizational data from any source through a single API endpoint."
              tag="INPUT"
            />
            <PipelineCard
              step="02"
              title="Process"
              desc="12 specialized signals extract entities, decisions, action items, relationships, sentiment, and contradictions. All in a single forward pass."
              tag="INTELLIGENCE"
            />
            <PipelineCard
              step="03"
              title="Structure"
              desc="Extracted knowledge is linked into a temporal knowledge graph. Entities are resolved. Relationships are weighted. Timelines are built automatically."
              tag="GRAPH"
            />
            <PipelineCard
              step="04"
              title="Recall"
              desc="Query with natural language. Get cited answers grounded in verified organizational facts. Every response traces back to its source."
              tag="OUTPUT"
            />
          </div>

          {/* Code example */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-[#151515] border border-neutral-800 rounded-xl p-6 font-mono text-[13px] leading-relaxed">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="ml-3 text-neutral-500 text-[11px] font-sans">remember.py</span>
              </div>
              <pre className="text-neutral-300 overflow-x-auto"><code>{`from rabbit import Rabbit

client = Rabbit(api_key="rb_live_...")

# Store organizational knowledge
client.remember(
    content="Q3 board meeting: approved $2M
    budget for APAC expansion. Timeline is
    6 months. Sarah Chen leading.",
    source="board_meeting",
    timestamp="2026-01-15T14:00:00Z"
)`}</code></pre>
            </div>
            <div className="bg-[#151515] border border-neutral-800 rounded-xl p-6 font-mono text-[13px] leading-relaxed">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="ml-3 text-neutral-500 text-[11px] font-sans">recall.py</span>
              </div>
              <pre className="text-neutral-300 overflow-x-auto"><code>{`# Query with natural language
response = client.ask(
    "What was the APAC expansion budget
    and who is leading it?"
)

# response.answer:
# "The board approved a $2M budget for
#  APAC expansion on Jan 15. Sarah Chen
#  is leading with a 6-month timeline."
#
# response.citations: [
#   { source: "board_meeting",
#     confidence: 0.97 }
# ]`}</code></pre>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* THE MODEL: 12 SIGNALS                                            */}
      {/* ================================================================ */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left info panel */}
            <div className="lg:col-span-2">
              <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
                The Model
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-6">
                12 signals.<br />One architecture.<br />One forward pass.
              </h2>
              <p className="text-[15px] text-[#6b5f7a] leading-relaxed font-light mb-6">
                Rabbit is not a wrapper around a general-purpose LLM. It is a single, specialized model
                trained from the ground up to handle the full memory lifecycle: understanding intent,
                extracting structured knowledge, detecting contradictions, and producing cited answers.
              </p>
              <p className="text-[15px] text-[#6b5f7a] leading-relaxed font-light mb-8">
                All 12 signals run in a single architecture. No chains. No orchestration overhead.
                No prompt engineering required.
              </p>

              {/* Comparison table */}
              <div className="bg-white/60 border border-[#d4cade] rounded-xl overflow-hidden text-[12px]">
                <div className="grid grid-cols-4 bg-[#f5f2f8] font-semibold text-[#1d1d1d]">
                  <div className="p-3" />
                  <div className="p-3 text-center">Rabbit</div>
                  <div className="p-3 text-center">General LLMs</div>
                  <div className="p-3 text-center">RAG Systems</div>
                </div>
                <CompareRow label="Extraction F1" rabbit="0.94" llm="0.71" rag="0.68" />
                <CompareRow label="Entity resolution" rabbit="Yes" llm="No" rag="Partial" />
                <CompareRow label="Contradiction detection" rabbit="Yes" llm="No" rag="No" />
                <CompareRow label="Temporal reasoning" rabbit="Yes" llm="Limited" rag="No" />
                <CompareRow label="Source citation" rabbit="Always" llm="Sometimes" rag="Sometimes" />
                <CompareRow label="Single-pass processing" rabbit="Yes" llm="N/A" rag="No" />
              </div>
            </div>

            {/* Right: signals grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <SignalCard
                  tag="INTENT"
                  name="Understand"
                  desc="Classifies what the user is asking for: a question, a memory storage request, or a search across existing knowledge."
                  score="F1: 0.96"
                />
                <SignalCard
                  tag="EXTRACT"
                  name="Extract"
                  desc="Pulls structured facts, entities, decisions, and action items from unstructured organizational text."
                  score="F1: 0.94"
                />
                <SignalCard
                  tag="TRIAGE"
                  name="Organize"
                  desc="Routes and categorizes information by domain, urgency, and organizational relevance."
                  score="F1: 0.93"
                />
                <SignalCard
                  tag="LINK"
                  name="Link"
                  desc="Connects new information to existing knowledge. Resolves entity references across time and context."
                  score="F1: 0.91"
                />
                <SignalCard
                  tag="EXPAND"
                  name="Reason"
                  desc="Infers implicit relationships and consequences. Surfaces connections humans would miss."
                  score="F1: 0.89"
                />
                <SignalCard
                  tag="COMPILE"
                  name="Compile"
                  desc="Aggregates related facts into coherent summaries. Builds narrative from scattered inputs."
                  score="F1: 0.92"
                />
                <SignalCard
                  tag="SUMMARIZE"
                  name="Synthesize"
                  desc="Generates concise, accurate summaries of complex organizational knowledge sets."
                  score="F1: 0.91"
                />
                <SignalCard
                  tag="ANSWER"
                  name="Recall"
                  desc="Produces cited, factually grounded answers. Every claim traces to a verified source."
                  score="F1: 0.97"
                />
                <SignalCard
                  tag="SENTIMENT"
                  name="Sentiment"
                  desc="Detects organizational mood, urgency, and emotional signals in communications."
                  score="F1: 0.90"
                />
                <SignalCard
                  tag="AMBIENT"
                  name="Ambient"
                  desc="Passively processes background information. Learns context without explicit instructions."
                  score="F1: 0.88"
                />
                <SignalCard
                  tag="MULTITURN"
                  name="Multi-turn"
                  desc="Maintains context across extended conversations. Handles follow-ups and clarifications naturally."
                  score="F1: 0.93"
                />
                <SignalCard
                  tag="DONTKNOW"
                  name="Boundaries"
                  desc="Knows when it does not know. Refuses to hallucinate. Returns confidence scores with every response."
                  score="F1: 0.95"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* RABBIT IS MODEL ONE                                              */}
      {/* ================================================================ */}
      <section className="bg-[#f5f2f8] border-y border-[#d4cade]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
                Our Roadmap
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-6">
                Rabbit is Model One. There will be more.
              </h2>
              <p className="text-[15px] text-[#6b5f7a] leading-relaxed font-light mb-4">
                We are not building a single product. We are building a research lab focused on
                organizational intelligence. Rabbit is the first model. It solves memory.
                The models that follow will solve planning, prediction, and coordination.
              </p>
              <p className="text-[15px] text-[#6b5f7a] leading-relaxed font-light">
                Our belief is simple: organizations are the most complex systems humans build.
                They deserve purpose-built AI, not repurposed chatbots. Every model we ship
                will target a specific failure mode in how organizations think, decide, and act.
              </p>
            </div>
            <div className="space-y-4">
              <RoadmapCard
                status="LIVE"
                name="Rabbit"
                desc="Organizational memory. Extract, link, and recall knowledge from unstructured data. 12 specialized signals. Single architecture."
                active
              />
              <RoadmapCard
                status="2026"
                name="Model Two"
                desc="Organizational planning. Turn knowledge into action plans. Detect gaps in execution. Surface what needs to happen next."
              />
              <RoadmapCard
                status="2027"
                name="Model Three"
                desc="Organizational prediction. Forecast outcomes based on historical patterns. Flag risks before they materialize."
              />
              <RoadmapCard
                status="BEYOND"
                name="Unified Intelligence"
                desc="A single system that remembers, plans, predicts, and coordinates. The complete organizational operating system."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* ENTERPRISE INFRASTRUCTURE                                        */}
      {/* ================================================================ */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
              Enterprise Infrastructure
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-4">
              Deploy anywhere. Your data never leaves your network.
            </h2>
            <p className="text-[15px] text-[#6b5f7a] max-w-2xl mx-auto font-light">
              Rabbit is built for organizations where data sovereignty is non-negotiable.
              Cloud API for speed. On-premise for control. Air-gapped for the most sensitive environments.
            </p>
          </div>

          {/* Deployment options */}
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            <DeployCard
              title="Cloud API"
              desc="Fastest path to production. Fully managed infrastructure. Pay per request. SOC 2 certified."
              items={["< 500ms latency", "99.9% uptime SLA", "Auto-scaling", "SDKs for Python, Node, Go"]}
              highlight={false}
            />
            <DeployCard
              title="On-Premise"
              desc="Full Rabbit deployment inside your infrastructure. Your hardware, your network, your rules."
              items={["Docker / Kubernetes", "GPU or CPU inference", "No external calls", "Full data sovereignty"]}
              highlight
            />
            <DeployCard
              title="Air-Gapped"
              desc="For defense, healthcare, and critical infrastructure. Zero internet dependency. Complete isolation."
              items={["Offline installation", "Manual update cycle", "Hardware security modules", "FIPS 140-2 compatible"]}
              highlight={false}
            />
          </div>

          {/* Compliance grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            <ComplianceBadge label="SOC 2 Type II" />
            <ComplianceBadge label="HIPAA" />
            <ComplianceBadge label="GDPR" />
            <ComplianceBadge label="CCPA" />
            <ComplianceBadge label="ISO 27001" />
            <ComplianceBadge label="FedRAMP (Pending)" />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* INDUSTRIES - DENSE GRID                                          */}
      {/* ================================================================ */}
      <section className="bg-[#1d1d1d] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold text-[#c2a6cf] tracking-[0.15em] uppercase mb-5">
              Industries
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              Every industry has institutional knowledge worth preserving
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto font-light">
              Rabbit works out of the box across any domain where decisions, relationships,
              and context matter. Here is where we see the most urgent need.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <IndustryCard
              title="Healthcare"
              stat="$19.5B"
              statLabel="lost to care coordination failures annually"
              desc="Patient history, treatment decisions, and compliance records connected across departments. HIPAA-ready on-premise deployment."
            />
            <IndustryCard
              title="Legal"
              stat="6.4 hrs"
              statLabel="per lawyer per week on knowledge retrieval"
              desc="Case history, precedents, and client matters linked and searchable. Full data sovereignty for privileged communications."
            />
            <IndustryCard
              title="Financial Services"
              stat="$2.4M"
              statLabel="average cost of a compliance failure"
              desc="Deal history, client relationships, and compliance trails. Complete audit trail of every interaction and decision."
            />
            <IndustryCard
              title="Defense and Government"
              stat="77%"
              statLabel="of institutional knowledge lost during transitions"
              desc="Mission-critical memory for agencies where continuity determines outcomes. Air-gapped deployment standard."
            />
            <IndustryCard
              title="Energy and Infrastructure"
              stat="40+"
              statLabel="years of maintenance logs per facility"
              desc="Safety protocols, maintenance history, and operational memory spanning decades. Searchable in seconds."
            />
            <IndustryCard
              title="Professional Services"
              stat="30%"
              statLabel="of billable time spent searching for prior work"
              desc="Client engagement history, methodology decisions, and project learnings accessible to every team member instantly."
            />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* REATTEND + RABBIT BUNDLE                                         */}
      {/* ================================================================ */}
      <section className="relative dot-bg">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
                Turnkey Solution
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-6">
                Reattend + Rabbit.<br />One box. Complete memory infrastructure.
              </h2>
              <p className="text-[15px] text-[#6b5f7a] leading-relaxed font-light mb-4">
                For organizations that want to solve amnesia without building anything.
                Reattend is our application layer. Rabbit is the intelligence engine.
                Together, they ship as a single deployable unit.
              </p>
              <p className="text-[15px] text-[#6b5f7a] leading-relaxed font-light mb-8">
                Install it on your server. Connect your tools. Watch your organizational
                knowledge form itself. No ML team required. No infrastructure complexity.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://reattend.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1d1d1d] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#333] transition text-sm"
                >
                  Try Reattend
                </a>
                <a
                  href="https://cal.com/reattend/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/60 text-[#1d1d1d] border border-[#d4cade] px-6 py-3 rounded-xl font-medium hover:bg-white/80 transition text-sm"
                >
                  Schedule a Demo
                </a>
              </div>
            </div>

            {/* Stack diagram */}
            <div className="space-y-3">
              <StackLayer
                label="Your Tools"
                items="Slack, Gmail, Calendar, Notion, CRM, custom sources"
                level="top"
              />
              <div className="flex justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#d4cade]">
                  <path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <StackLayer
                label="Reattend"
                items="Capture, organize, search, collaborate, share"
                level="mid"
              />
              <div className="flex justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#d4cade]">
                  <path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <StackLayer
                label="Rabbit Engine"
                items="Extract, link, reason, compile, recall, cite"
                level="core"
              />
              <div className="flex justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#d4cade]">
                  <path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <StackLayer
                label="Your Infrastructure"
                items="On-premise, private cloud, or air-gapped. Nothing leaves."
                level="base"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* BOLD STATEMENT                                                   */}
      {/* ================================================================ */}
      <section className="bg-[#8069af] text-white">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Organizations that remember will outperform those that do not. This is inevitable.
          </h2>
          <p className="text-white/70 text-lg font-light max-w-2xl mx-auto mb-10">
            The question is not whether organizational memory becomes infrastructure.
            The question is whether you build it or buy it. We built it.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/login"
              className="bg-white text-[#8069af] px-7 py-3.5 rounded-xl font-semibold hover:bg-white/90 transition text-sm"
            >
              Get API Access
            </Link>
            <a
              href="https://cal.com/reattend/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 text-white border border-white/30 px-7 py-3.5 rounded-xl font-medium hover:bg-white/30 transition text-sm"
            >
              Talk to Sales
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FINAL CTA                                                        */}
      {/* ================================================================ */}
      <section className="mesh-gradient">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Developers */}
            <div className="bg-white/60 border border-[#d4cade] rounded-2xl p-8">
              <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-3">
                For Developers
              </p>
              <h3 className="text-xl font-bold text-[#1d1d1d] mb-3">
                Start building in minutes
              </h3>
              <p className="text-sm text-[#6b5f7a] font-light mb-6 leading-relaxed">
                pip install rabbit-ai. Three lines of code to store a memory.
                Three lines to recall it. Full SDK documentation available.
              </p>
              <Link
                href="/login"
                className="inline-block bg-[#1d1d1d] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#333] transition text-[13px]"
              >
                Get API Key &rarr;
              </Link>
            </div>

            {/* Enterprise */}
            <div className="bg-white/60 border border-[#d4cade] rounded-2xl p-8">
              <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-3">
                For Enterprise
              </p>
              <h3 className="text-xl font-bold text-[#1d1d1d] mb-3">
                Deploy in your environment
              </h3>
              <p className="text-sm text-[#6b5f7a] font-light mb-6 leading-relaxed">
                On-premise, air-gapped, or private cloud. Your data never leaves your network.
                Dedicated support. Custom SLAs. Volume pricing.
              </p>
              <a
                href="https://cal.com/reattend/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#8069af] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#6d5a96] transition text-[13px]"
              >
                Schedule Demo &rarr;
              </a>
            </div>

            {/* Try Reattend */}
            <div className="bg-white/60 border border-[#d4cade] rounded-2xl p-8">
              <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-3">
                For Teams
              </p>
              <h3 className="text-xl font-bold text-[#1d1d1d] mb-3">
                Use Reattend today
              </h3>
              <p className="text-sm text-[#6b5f7a] font-light mb-6 leading-relaxed">
                Do not want to build? Reattend is the ready-made application powered by Rabbit.
                Connect your tools and start remembering in minutes.
              </p>
              <a
                href="https://reattend.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#1d1d1d] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#333] transition text-[13px]"
              >
                Try Reattend &rarr;
              </a>
            </div>
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

function MetricCell({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center py-1">
      <p className="text-xl font-bold text-[#1d1d1d]">{value}</p>
      <p className="text-[10.5px] text-[#6b5f7a] mt-0.5 leading-snug">{label}</p>
    </div>
  );
}

function CostRow({ label, formula, result, barWidth }: { label: string; formula: string; result: string; barWidth: number }) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-1">
        <span className="text-sm font-medium text-[#1d1d1d]">{label}</span>
        <span className="text-sm font-bold text-[#8069af]">{result}</span>
      </div>
      <div className="w-full h-1.5 bg-[#eee9f4] rounded-full mb-1">
        <div className="h-full bg-[#8069af]/40 rounded-full" style={{ width: `${barWidth}%` }} />
      </div>
      <p className="text-[10px] text-[#a89bb5] font-mono">{formula}</p>
    </div>
  );
}

function PipelineCard({ step, title, desc, tag }: { step: string; title: string; desc: string; tag: string }) {
  return (
    <div className="bg-white/[0.06] border border-neutral-800 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[11px] font-mono text-neutral-500">{step}</span>
        <span className="text-[10px] font-mono text-[#c2a6cf] bg-[#c2a6cf]/10 px-2 py-0.5 rounded">{tag}</span>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-neutral-400 leading-relaxed font-light">{desc}</p>
    </div>
  );
}

function SignalCard({ tag, name, desc, score }: { tag: string; name: string; desc: string; score: string }) {
  return (
    <div className="bg-white/50 border border-[#d4cade] rounded-xl p-4 hover:bg-white/70 transition">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[9px] font-mono text-[#8069af] bg-[#8069af]/10 px-2 py-0.5 rounded">{tag}</span>
        <span className="text-[10px] font-mono text-[#6b5f7a]">{score}</span>
      </div>
      <h3 className="font-semibold text-[#1d1d1d] text-sm mb-1">{name}</h3>
      <p className="text-[11.5px] text-[#6b5f7a] leading-relaxed font-light">{desc}</p>
    </div>
  );
}

function CompareRow({ label, rabbit, llm, rag }: { label: string; rabbit: string; llm: string; rag: string }) {
  return (
    <div className="grid grid-cols-4 border-t border-[#d4cade] text-[12px]">
      <div className="p-3 text-[#6b5f7a]">{label}</div>
      <div className="p-3 text-center font-semibold text-[#8069af]">{rabbit}</div>
      <div className="p-3 text-center text-[#a89bb5]">{llm}</div>
      <div className="p-3 text-center text-[#a89bb5]">{rag}</div>
    </div>
  );
}

function RoadmapCard({ status, name, desc, active }: { status: string; name: string; desc: string; active?: boolean }) {
  return (
    <div className={`border rounded-xl p-6 ${active ? "bg-white border-[#8069af] shadow-sm" : "bg-white/40 border-[#d4cade]"}`}>
      <div className="flex items-center gap-3 mb-3">
        <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${active ? "bg-[#8069af] text-white" : "bg-[#eee9f4] text-[#8069af]"}`}>
          {status}
        </span>
        <h3 className="font-semibold text-[#1d1d1d]">{name}</h3>
      </div>
      <p className="text-sm text-[#6b5f7a] font-light leading-relaxed">{desc}</p>
    </div>
  );
}

function DeployCard({ title, desc, items, highlight }: { title: string; desc: string; items: string[]; highlight: boolean }) {
  return (
    <div className={`border rounded-2xl p-7 ${highlight ? "bg-white border-[#8069af] shadow-sm" : "bg-white/50 border-[#d4cade]"}`}>
      {highlight && (
        <span className="text-[10px] font-semibold text-[#8069af] bg-[#8069af]/10 px-2.5 py-1 rounded-full mb-4 inline-block">
          Most Popular
        </span>
      )}
      <h3 className="text-lg font-bold text-[#1d1d1d] mb-2">{title}</h3>
      <p className="text-sm text-[#6b5f7a] font-light leading-relaxed mb-5">{desc}</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="text-[13px] text-[#1d1d1d] flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#8069af]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ComplianceBadge({ label }: { label: string }) {
  return (
    <div className="bg-white/50 border border-[#d4cade] rounded-lg px-4 py-3 text-center">
      <p className="text-[11px] font-semibold text-[#1d1d1d] tracking-wide">{label}</p>
    </div>
  );
}

function IndustryCard({ title, stat, statLabel, desc }: { title: string; stat: string; statLabel: string; desc: string }) {
  return (
    <div className="bg-white/[0.06] border border-neutral-800 rounded-xl p-6">
      <h3 className="font-semibold text-white mb-1">{title}</h3>
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-2xl font-bold text-[#c2a6cf]">{stat}</span>
        <span className="text-[11px] text-neutral-500">{statLabel}</span>
      </div>
      <p className="text-sm text-neutral-400 leading-relaxed font-light">{desc}</p>
    </div>
  );
}

function StackLayer({ label, items, level }: { label: string; items: string; level: string }) {
  const styles: Record<string, string> = {
    top: "bg-white/40 border-[#d4cade]",
    mid: "bg-white/60 border-[#d4cade]",
    core: "bg-[#8069af]/10 border-[#8069af]",
    base: "bg-[#1d1d1d] border-[#1d1d1d] text-white",
  };
  const isBase = level === "base";
  return (
    <div className={`border rounded-xl p-5 text-center ${styles[level]}`}>
      <h4 className={`font-semibold text-sm mb-1 ${isBase ? "text-white" : "text-[#1d1d1d]"}`}>{label}</h4>
      <p className={`text-[11px] font-light ${isBase ? "text-neutral-400" : "text-[#6b5f7a]"}`}>{items}</p>
    </div>
  );
}

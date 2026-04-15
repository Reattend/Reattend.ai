import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default function ProductPage() {
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
            <Link href="/product" className="text-[#1d1d1d]">Model</Link>
            <Link href="/enterprise" className="hover:text-[#1d1d1d] transition">Enterprise</Link>
            <Link href="/developers" className="hover:text-[#1d1d1d] transition">API</Link>
            <Link href="/future" className="hover:text-[#1d1d1d] transition">Vision</Link>
            <Link href="/contact" className="hover:text-[#1d1d1d] transition">Contact</Link>
          </nav>
        </div>
        <div className="flex items-center gap-3 text-[12.5px]">
          <Link href="/login" className="text-[#6b5f7a] hover:text-[#1d1d1d] font-medium transition">Log in</Link>
          <Link href="/login" className="bg-[#1d1d1d] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#333] transition">
            Get API Access
          </Link>
        </div>
      </header>

      {/* ================================================================ */}
      {/* HERO                                                             */}
      {/* ================================================================ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-10 left-1/4 w-[600px] h-[600px] rounded-full bg-[#8069af]/[0.08] blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#c2a6cf]/[0.1] blur-[100px]" />

        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-20">
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2 text-[11px] font-medium text-[#8069af] bg-white/60 border border-[#d4cade] px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8069af] animate-pulse-slow" />
              Rabbit Model / Proprietary / In-House / Single Architecture
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-bold tracking-tight leading-[1.02] text-[#1d1d1d] text-center max-w-5xl mx-auto">
            The only model on Earth built from scratch for organizational memory
          </h1>
          <p className="mt-7 text-lg sm:text-xl text-[#6b5f7a] max-w-3xl mx-auto leading-relaxed text-center font-light">
            Rabbit is not a fine-tune. Not a prompt chain. Not a RAG wrapper.
            It is a purpose-built, fully proprietary AI system designed for one job:
            giving your organization a memory that never forgets, contradicts itself,
            or loses context.
          </p>

          <div className="mt-10 flex gap-3 justify-center flex-wrap">
            <Link href="/login" className="bg-[#1d1d1d] text-white px-7 py-3.5 rounded-xl font-medium hover:bg-[#333] transition text-sm">
              Get API Access
            </Link>
            <a href="https://cal.com/reattend/30min" target="_blank" rel="noopener noreferrer" className="bg-[#8069af] text-white px-7 py-3.5 rounded-xl font-medium hover:bg-[#6d5a96] transition text-sm">
              Talk to Engineering
            </a>
            <Link href="/research" className="bg-white/60 text-[#1d1d1d] border border-[#d4cade] px-7 py-3.5 rounded-xl font-medium hover:bg-white/80 transition text-sm">
              Read the Research
            </Link>
          </div>

          {/* Inline stat bar */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <HeroStat value="100%" label="Proprietary architecture" />
            <HeroStat value="12" label="Specialized intelligence signals" />
            <HeroStat value="1" label="Unified forward pass" />
            <HeroStat value="0" label="Third-party model dependencies" />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WHAT MAKES IT DIFFERENT                                          */}
      {/* ================================================================ */}
      <section className="border-y border-[#d4cade] bg-white/30">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
                Architecture
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-6">
                Everyone else is wrapping GPT. We built our own.
              </h2>
              <div className="space-y-4 text-[15px] text-[#6b5f7a] leading-relaxed font-light">
                <p>
                  The market is full of memory layers that sit on top of someone else's
                  model. That approach works until the underlying model changes, or your
                  data needs to leave your network, or latency spikes at scale. Then it
                  stops working forever.
                </p>
                <p>
                  Rabbit is a different animal. It is a proprietary model family, designed,
                  trained, and shipped entirely by our research lab. Every weight is ours.
                  Every layer is purpose-built for organizational tasks. Every optimization
                  is tuned for one use case: understanding how humans work together.
                </p>
                <p>
                  That means Rabbit can do things general-purpose models physically cannot.
                  It reasons across time. It detects contradictions. It links entities
                  across months of history. It refuses to hallucinate. And it runs inside
                  your firewall without ever calling home.
                </p>
              </div>
            </div>

            {/* Comparison block */}
            <div className="bg-white/70 border border-[#d4cade] rounded-2xl p-7">
              <h3 className="text-sm font-semibold text-[#1d1d1d] mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8069af]" />
                Rabbit vs. The Rest
              </h3>
              <div className="space-y-3">
                <CompareBar label="Memory-specific training" rabbit={100} others={12} othersLabel="General LLM" />
                <CompareBar label="Entity resolution across time" rabbit={96} others={30} othersLabel="General LLM" />
                <CompareBar label="Contradiction detection" rabbit={94} others={8} othersLabel="RAG stacks" />
                <CompareBar label="Hallucination refusal" rabbit={97} others={35} othersLabel="General LLM" />
                <CompareBar label="Cited-answer reliability" rabbit={98} others={54} othersLabel="RAG stacks" />
                <CompareBar label="On-premise feasibility" rabbit={100} others={15} othersLabel="Frontier APIs" />
              </div>
              <p className="text-[10px] text-[#a89bb5] mt-5 font-mono">
                Internal benchmarks on enterprise memory evaluation sets. Higher is better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* AUTOMATIC SECTION                                                */}
      {/* ================================================================ */}
      <section className="relative dot-bg">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
              Fully Automatic
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#1d1d1d] leading-[1.05] mb-5 max-w-4xl mx-auto">
              You do not prompt Rabbit. You do not tune Rabbit. You do not orchestrate Rabbit.
            </h2>
            <p className="text-xl text-[#8069af] font-semibold max-w-2xl mx-auto">
              You connect your data. Rabbit does the rest.
            </p>
          </div>

          {/* Auto pipeline visual */}
          <div className="bg-white/70 border border-[#d4cade] rounded-2xl p-8 mb-16">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[11px] font-mono text-[#8069af] uppercase tracking-wider">Live Processing</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-slow" />
                <span className="text-[11px] font-mono text-[#6b5f7a]">Auto mode</span>
              </div>
            </div>
            <div className="grid md:grid-cols-7 gap-3 items-center">
              <AutoStage label="Ingest" detail="any source" color="#6b5f7a" />
              <Arrow />
              <AutoStage label="Understand" detail="intent + context" color="#8069af" />
              <Arrow />
              <AutoStage label="Structure" detail="graph + timeline" color="#8069af" />
              <Arrow />
              <AutoStage label="Recall" detail="cited answers" color="#1d1d1d" />
            </div>
            <div className="mt-6 pt-6 border-t border-[#d4cade] grid sm:grid-cols-4 gap-4 text-center">
              <AutoMetric label="Prompt engineering" value="Zero" />
              <AutoMetric label="Manual tagging" value="Zero" />
              <AutoMetric label="Orchestration code" value="Zero" />
              <AutoMetric label="Human review" value="Optional" />
            </div>
          </div>

          {/* What it handles automatically */}
          <div className="grid md:grid-cols-3 gap-5">
            <AutoCard
              title="Entity resolution"
              desc="'Sarah from marketing,' 'Sarah Chen,' 'SC' and 'the new head of growth' all resolve to the same person. Automatically. Across years of data."
            />
            <AutoCard
              title="Temporal reasoning"
              desc="Rabbit knows what was true last quarter versus what is true today. Old decisions are remembered. Superseded ones are flagged. Nothing is lost."
            />
            <AutoCard
              title="Contradiction detection"
              desc="When two sources disagree, Rabbit surfaces the conflict instead of silently picking one. Your team sees both perspectives with full citations."
            />
            <AutoCard
              title="Automatic compilation"
              desc="Living knowledge pages for every entity, project, and topic. They update themselves as new information arrives. No manual maintenance."
            />
            <AutoCard
              title="Ambient intelligence"
              desc="Rabbit surfaces forgotten commitments, stale decisions, and context you did not know you needed. Proactive by design."
            />
            <AutoCard
              title="Graceful refusal"
              desc="If the answer is not in your data, Rabbit says so. Explicitly. With a confidence score. It will never invent a plausible-sounding lie."
            />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* THE 12 SIGNALS                                                   */}
      {/* ================================================================ */}
      <section className="bg-[#1d1d1d] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(128,105,175,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(128,105,175,0.08) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <p className="text-[11px] font-semibold text-[#c2a6cf] tracking-[0.15em] uppercase mb-5">
                The 12 Signals
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
                Twelve specialized intelligences.<br />
                One unified model.<br />
                One forward pass.
              </h2>
              <p className="text-neutral-400 font-light leading-relaxed text-[15px] mb-4">
                Every signal runs inside the same architecture. No chaining.
                No orchestration. No brittle pipelines that break when one step
                misbehaves. You call one API. You get the full stack of organizational
                intelligence.
              </p>
              <p className="text-neutral-400 font-light leading-relaxed text-[15px]">
                This is what is impossible with general-purpose models, and
                what makes purpose-built intelligence feel like a different category
                of product entirely.
              </p>
            </div>

            <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <SignalTile num="01" tag="INTENT" title="Understand" desc="Classifies intent across factual, temporal, synthesis, aggregation, and historical query types." />
              <SignalTile num="02" tag="EXTRACT" title="Extract" desc="Pulls people, decisions, actions, dates, and topics from any unstructured source." />
              <SignalTile num="03" tag="TRIAGE" title="Organize" desc="Auto-classifies incoming information into types with summaries and routing." />
              <SignalTile num="04" tag="LINK" title="Link" desc="Detects relationships across seven link types. Builds the knowledge graph autonomously." />
              <SignalTile num="05" tag="EXPAND" title="Reason" desc="Multi-hop reasoning across thousands of memories. Connects dots humans miss." />
              <SignalTile num="06" tag="COMPILE" title="Compile" desc="Builds living knowledge pages that update as new information arrives." />
              <SignalTile num="07" tag="ANSWER" title="Recall" desc="Conversational answers with numbered source citations. Every claim verifiable." />
              <SignalTile num="08" tag="AMBIENT" title="Ambient" desc="Surfaces forgotten commitments and contradictions without being prompted." />
              <SignalTile num="09" tag="MULTITURN" title="Multi-turn" desc="Maintains conversational context across extended, evolving dialogues." />
              <SignalTile num="10" tag="SUMMARIZE" title="Synthesize" desc="Lossless summaries that preserve every decision, name, and action item." />
              <SignalTile num="11" tag="SENTIMENT" title="Sentiment" desc="Detects emotional tone in organizational communications across contexts." />
              <SignalTile num="12" tag="DONTKNOW" title="Boundaries" desc="Knows when to refuse. Trained explicitly to distinguish known from unknown." />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* LIVE EXAMPLE                                                     */}
      {/* ================================================================ */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
              How It Feels
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-4">
              A single question surfaces a month of hidden context
            </h2>
            <p className="text-[15px] text-[#6b5f7a] max-w-2xl mx-auto font-light">
              Watch Rabbit resolve a real organizational query. It pulls from meetings,
              emails, Slack, and documents. It cites every fact. It flags what it is not sure about.
            </p>
          </div>

          <div className="bg-white/70 border border-[#d4cade] rounded-2xl overflow-hidden max-w-4xl mx-auto">
            {/* Question */}
            <div className="p-6 border-b border-[#d4cade] flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#1d1d1d] text-white flex items-center justify-center text-xs font-bold shrink-0">Q</div>
              <div>
                <p className="text-[15px] font-semibold text-[#1d1d1d]">
                  Why did we decide to delay the APAC launch, and who signed off?
                </p>
                <p className="text-[11px] text-[#a89bb5] font-mono mt-1">Query received. 4 sources matched. Resolving entities.</p>
              </div>
            </div>

            {/* Answer */}
            <div className="p-6 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#8069af] text-white flex items-center justify-center text-xs font-bold shrink-0">R</div>
              <div className="flex-1">
                <div className="text-[14px] text-[#1d1d1d] leading-relaxed">
                  The APAC launch was delayed from Q2 to Q4 because of unresolved compliance
                  issues in Singapore <Cite n="1" />. Sarah Chen, VP of Strategy, made the
                  final call after a legal review flagged data residency concerns <Cite n="2" />.
                  The decision was communicated in the April 3 leadership sync and
                  countersigned by the CFO the following day <Cite n="3" />.
                  <br /><br />
                  Two earlier decisions from February, when the target was still Q2, have
                  been automatically superseded <Cite n="4" />. A dependent hiring plan is
                  now flagged for review because the original timeline no longer applies.
                </div>

                {/* Citations */}
                <div className="mt-5 pt-5 border-t border-[#d4cade] space-y-2">
                  <p className="text-[10px] font-mono text-[#8069af] uppercase tracking-wider mb-2">Sources</p>
                  <SourceRow n="1" src="meeting / leadership-sync / apr-03" confidence="0.97" />
                  <SourceRow n="2" src="slack / legal-review / apr-02" confidence="0.94" />
                  <SourceRow n="3" src="email / cfo-confirmation / apr-04" confidence="0.99" />
                  <SourceRow n="4" src="knowledge-graph / superseded-decisions" confidence="0.92" />
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-[11px] text-[#a89bb5] mt-5 font-mono">
            Zero prompts written. Zero retrieval logic configured. This is the default behavior.
          </p>
        </div>
      </section>

      {/* ================================================================ */}
      {/* DEVELOPER EXPERIENCE                                             */}
      {/* ================================================================ */}
      <section className="bg-[#f5f2f8] border-y border-[#d4cade]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
                Developer Experience
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-6">
                Three lines to remember.<br />
                Three lines to recall.
              </h2>
              <p className="text-[15px] text-[#6b5f7a] font-light leading-relaxed mb-6">
                The Rabbit SDK is deliberately tiny. There are no model names to choose,
                no temperatures to tune, no prompts to engineer, no chains to orchestrate.
                You store memories. You ask questions. The model handles everything in between.
              </p>
              <div className="space-y-3 mb-8">
                <DxBullet text="Drop-in SDKs for Python, Node, and Go" />
                <DxBullet text="Single endpoint for the entire memory lifecycle" />
                <DxBullet text="Synchronous for queries, async for large ingestion jobs" />
                <DxBullet text="Streaming responses with live citation binding" />
                <DxBullet text="Full OpenAPI spec and typed clients" />
                <DxBullet text="Local development with docker compose up" />
              </div>
              <div className="flex gap-3 flex-wrap">
                <Link href="/developers" className="bg-[#1d1d1d] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#333] transition text-sm">
                  Read the Docs
                </Link>
                <Link href="/login" className="bg-white text-[#1d1d1d] border border-[#d4cade] px-6 py-3 rounded-xl font-medium hover:bg-white/80 transition text-sm">
                  Get API Key
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <CodeBlock filename="install.sh" lang="bash">
{`pip install rabbit-ai
# or
npm install @rabbit/sdk`}
              </CodeBlock>
              <CodeBlock filename="remember.py" lang="python">
{`from rabbit import Rabbit
client = Rabbit(api_key="rb_live_...")

client.remember(
    content="Q3 board: approved $2M APAC expansion.
    Sarah Chen leading. 6 month timeline.",
    source="board_meeting",
)`}
              </CodeBlock>
              <CodeBlock filename="recall.py" lang="python">
{`answer = client.ask(
    "What was the APAC expansion budget?"
)

print(answer.text)
# "The board approved $2M for APAC expansion.
#  Sarah Chen is leading, with a 6 month timeline."

print(answer.citations)
# [{source: "board_meeting", confidence: 0.97}]`}
              </CodeBlock>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PERFORMANCE                                                      */}
      {/* ================================================================ */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
              Performance
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-4">
              Built for the speed that production demands
            </h2>
            <p className="text-[15px] text-[#6b5f7a] max-w-2xl mx-auto font-light">
              Rabbit is optimized end to end for low-latency organizational queries.
              No fallback layers. No cold starts. No surprise degradations when the
              upstream provider is having a bad day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <PerfCard
              metric="Under 500ms"
              label="End-to-end query latency"
              desc="From raw question to cited answer. Including multi-hop reasoning and source binding."
            />
            <PerfCard
              metric="99.9%"
              label="Uptime SLA"
              desc="Cloud API with multi-region failover. Status page publishes real-time health metrics."
            />
            <PerfCard
              metric="Linear"
              label="Scaling cost curve"
              desc="No per-token surprise bills. Fixed infrastructure pricing at enterprise volumes."
            />
            <PerfCard
              metric="Zero"
              label="External dependencies"
              desc="No upstream model APIs. If your network is up, Rabbit is up. Full stop."
            />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FOMO SECTION                                                     */}
      {/* ================================================================ */}
      <section className="bg-[#8069af] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <p className="text-[11px] font-semibold text-white/60 tracking-[0.15em] uppercase mb-6">
              What You Are Missing
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold leading-[1.05] mb-8">
              The teams that adopt memory infrastructure now will spend the next decade compounding on it
            </h2>
            <p className="text-white/80 text-lg font-light leading-relaxed max-w-3xl mb-10">
              Every week, your organization generates more context than any human can track.
              Every week, that context decays into noise. The companies that deploy
              purpose-built memory today will wake up in 2028 with an institutional
              advantage that cannot be replicated by throwing more humans at the problem.
            </p>

            <div className="grid sm:grid-cols-3 gap-5 mb-10">
              <FomoCard
                num="01"
                title="Compounding returns"
                desc="Every query refines the system. Every new source deepens the graph. Organizations that start now build a moat that widens by the day."
              />
              <FomoCard
                num="02"
                title="Unreplicable advantage"
                desc="A rival cannot buy your company's history. The team with memory infrastructure knows things that no competitor can ever catch up to."
              />
              <FomoCard
                num="03"
                title="Talent arbitrage"
                desc="Teams augmented with Rabbit ship faster, onboard faster, and lose less to turnover. The productivity gap is already visible in early deployments."
              />
            </div>

            <div className="flex gap-3 flex-wrap">
              <Link href="/login" className="bg-white text-[#8069af] px-7 py-3.5 rounded-xl font-semibold hover:bg-white/90 transition text-sm">
                Get API Access
              </Link>
              <a href="https://cal.com/reattend/30min" target="_blank" rel="noopener noreferrer" className="bg-white/20 text-white border border-white/30 px-7 py-3.5 rounded-xl font-medium hover:bg-white/30 transition text-sm">
                Schedule a Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FINAL CTA                                                        */}
      {/* ================================================================ */}
      <section className="mesh-gradient">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1d1d1d] leading-tight mb-5">
            Give your organization a memory it will never lose
          </h2>
          <p className="text-[15px] text-[#6b5f7a] max-w-2xl mx-auto font-light mb-10">
            The model is ready. The API is live. The deployment guides are written.
            Your organization is one integration away from remembering everything
            that matters.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/login" className="bg-[#1d1d1d] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#333] transition text-sm">
              Get API Access
            </Link>
            <a href="https://cal.com/reattend/30min" target="_blank" rel="noopener noreferrer" className="bg-[#8069af] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#6d5a96] transition text-sm">
              Talk to Sales
            </a>
            <Link href="/enterprise" className="bg-white/60 text-[#1d1d1d] border border-[#d4cade] px-8 py-4 rounded-xl font-medium hover:bg-white/80 transition text-sm">
              Enterprise Deployment
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

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white/50 border border-[#d4cade] rounded-xl p-5 text-center">
      <p className="text-2xl font-bold text-[#8069af]">{value}</p>
      <p className="text-[11px] text-[#6b5f7a] mt-1 font-light">{label}</p>
    </div>
  );
}

function CompareBar({ label, rabbit, others, othersLabel }: { label: string; rabbit: number; others: number; othersLabel: string }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-[12px] font-medium text-[#1d1d1d]">{label}</span>
      </div>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[10px] font-mono text-[#8069af] w-16">Rabbit</span>
        <div className="flex-1 h-2 bg-[#eee9f4] rounded-full overflow-hidden">
          <div className="h-full bg-[#8069af] rounded-full" style={{ width: `${rabbit}%` }} />
        </div>
        <span className="text-[10px] font-mono text-[#8069af] w-8 text-right">{rabbit}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-mono text-[#a89bb5] w-16 truncate">{othersLabel}</span>
        <div className="flex-1 h-2 bg-[#eee9f4] rounded-full overflow-hidden">
          <div className="h-full bg-[#d4cade] rounded-full" style={{ width: `${others}%` }} />
        </div>
        <span className="text-[10px] font-mono text-[#a89bb5] w-8 text-right">{others}</span>
      </div>
    </div>
  );
}

function AutoStage({ label, detail, color }: { label: string; detail: string; color: string }) {
  return (
    <div className="bg-[#f5f2f8] border border-[#d4cade] rounded-xl p-4 text-center">
      <p className="text-sm font-bold" style={{ color }}>{label}</p>
      <p className="text-[10px] text-[#6b5f7a] mt-1 font-mono">{detail}</p>
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex items-center justify-center text-[#8069af]">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function AutoMetric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-lg font-bold text-[#8069af]">{value}</p>
      <p className="text-[10px] text-[#6b5f7a] mt-0.5 uppercase tracking-wider">{label}</p>
    </div>
  );
}

function AutoCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white/60 border border-[#d4cade] rounded-2xl p-6 hover:bg-white/80 transition">
      <div className="flex items-center gap-2 mb-3">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#8069af]">
          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3 className="font-bold text-[#1d1d1d] text-[15px]">{title}</h3>
      </div>
      <p className="text-[13px] text-[#6b5f7a] font-light leading-relaxed">{desc}</p>
    </div>
  );
}

function SignalTile({ num, tag, title, desc }: { num: string; tag: string; title: string; desc: string }) {
  return (
    <div className="bg-white/[0.04] border border-neutral-800 rounded-xl p-4 hover:bg-white/[0.07] transition">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-mono text-neutral-500">{num}</span>
        <span className="text-[9px] font-mono text-[#c2a6cf] bg-[#c2a6cf]/10 px-1.5 py-0.5 rounded">{tag}</span>
      </div>
      <h3 className="font-semibold text-white text-[13px] mb-1">{title}</h3>
      <p className="text-[11px] text-neutral-400 font-light leading-relaxed">{desc}</p>
    </div>
  );
}

function Cite({ n }: { n: string }) {
  return (
    <sup className="inline-block ml-0.5">
      <span className="text-[10px] font-mono text-[#8069af] bg-[#8069af]/10 px-1.5 py-0.5 rounded">{n}</span>
    </sup>
  );
}

function SourceRow({ n, src, confidence }: { n: string; src: string; confidence: string }) {
  return (
    <div className="flex items-center justify-between text-[11px] font-mono">
      <div className="flex items-center gap-2">
        <span className="text-[#8069af] bg-[#8069af]/10 px-1.5 py-0.5 rounded">{n}</span>
        <span className="text-[#6b5f7a]">{src}</span>
      </div>
      <span className="text-[#a89bb5]">confidence {confidence}</span>
    </div>
  );
}

function DxBullet({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-[14px] text-[#1d1d1d]">
      <span className="w-1.5 h-1.5 rounded-full bg-[#8069af] shrink-0" />
      {text}
    </div>
  );
}

function CodeBlock({ filename, lang, children }: { filename: string; lang: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#1d1d1d] border border-neutral-800 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
          <span className="ml-3 text-neutral-500 text-[11px] font-sans">{filename}</span>
        </div>
        <span className="text-[10px] font-mono text-neutral-600 uppercase">{lang}</span>
      </div>
      <pre className="px-5 py-4 text-neutral-300 text-[12.5px] leading-relaxed overflow-x-auto font-mono"><code>{children}</code></pre>
    </div>
  );
}

function PerfCard({ metric, label, desc }: { metric: string; label: string; desc: string }) {
  return (
    <div className="bg-white/60 border border-[#d4cade] rounded-2xl p-6">
      <p className="text-2xl font-bold text-[#8069af] mb-1">{metric}</p>
      <p className="text-[12px] font-semibold text-[#1d1d1d] mb-2 uppercase tracking-wide">{label}</p>
      <p className="text-[12px] text-[#6b5f7a] font-light leading-relaxed">{desc}</p>
    </div>
  );
}

function FomoCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
      <span className="text-[11px] font-mono text-white/60 mb-3 block">{num}</span>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-[13px] text-white/70 font-light leading-relaxed">{desc}</p>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default function ProductPage() {
  return (
    <main className="flex-1 bg-[#eee9f4]">
      <Header current="Product" />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-5">Product</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#1d1d1d]">
          Twelve signals. One model. Complete memory intelligence.
        </h1>
        <p className="mt-6 text-lg text-[#6b5f7a] max-w-2xl mx-auto leading-relaxed font-light">
          Rabbit handles the entire memory lifecycle for your organization. From understanding what
          you are asking, to extracting structured facts, to detecting contradictions across months
          of data, to giving you cited answers grounded in what actually happened.
        </p>
        <p className="mt-4 text-[#6b5f7a] max-w-2xl mx-auto leading-relaxed font-light">
          Every signal runs on the same architecture. No chaining multiple APIs. No sending data
          to different providers. One model, trained for one purpose, running on infrastructure you control.
        </p>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <Link href="/login" className="bg-[#1d1d1d] text-white px-7 py-3.5 rounded-xl font-medium hover:bg-[#333] transition">
            Get API access
          </Link>
          <Link href="/research" className="bg-[#c2a6cf] text-[#1d1d1d] px-7 py-3.5 rounded-xl font-medium hover:bg-[#b396c2] transition">
            Read the research
          </Link>
        </div>
      </section>

      {/* 12 Signals */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-4 text-center">The 12 Signals</p>
        <h2 className="text-3xl font-bold text-center text-[#1d1d1d] mb-3">Everything an organization needs to remember</h2>
        <p className="text-[#6b5f7a] text-center max-w-2xl mx-auto mb-14 font-light">
          Each signal is a specialized capability trained into the same model. One API call, one
          architecture, twelve different ways to process organizational knowledge.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <SignalCard num="01" title="Understand" tag="INTENT" desc="Classifies natural language queries into precise intents so every question gets the right retrieval strategy. Factual, temporal, synthesis, entity, aggregation, actions, or history." />
          <SignalCard num="02" title="Extract" tag="EXTRACT" desc="Pulls people, organizations, decisions, action items, dates, and topics from any text. Meetings, emails, Slack threads, notes. Structured JSON output every time." />
          <SignalCard num="03" title="Organize" tag="TRIAGE" desc="Auto-triages incoming information into types (meeting, decision, task, insight) with summaries and tags. The first layer of turning noise into knowledge." />
          <SignalCard num="04" title="Link" tag="LINK" desc="Detects relationships between memories across 7 types: follows up, contradicts, supports, expands, references, supersedes, and relates to. Builds the knowledge graph automatically." />
          <SignalCard num="05" title="Reason" tag="EXPAND" desc="Multi-hop reasoning across thousands of memories. Chains lookups, resolves references, and connects dots that span different conversations, people, and timeframes." />
          <SignalCard num="06" title="Compile" tag="COMPILE" desc="Builds and maintains living knowledge pages for entities and topics. When new information arrives, existing pages update automatically." />
          <SignalCard num="07" title="Recall" tag="ANSWER" desc="Conversational answers grounded in your actual data, with numbered source citations. Not hallucinations. Verified facts from your organization's real history." />
          <SignalCard num="08" title="Ambient" tag="AMBIENT" desc="Surfaces forgotten commitments, contradictions, and stale information without being asked. Proactive intelligence that catches what humans miss." />
          <SignalCard num="09" title="Multi-turn" tag="MULTITURN" desc="Maintains conversation context across follow-up questions. 'Tell me more about that' and 'what about the budget?' work naturally." />
          <SignalCard num="10" title="Summarize" tag="SUMMARIZE" desc="Generates concise summaries of long content while preserving every decision, name, and action item. No lossy compression." />
          <SignalCard num="11" title="Sentiment" tag="SENTIMENT" desc="Detects emotional tone in organizational communications. Understands whether a meeting was tense, a decision was contentious, or feedback was positive." />
          <SignalCard num="12" title="Graceful Uncertainty" tag="DONTKNOW" desc="When the answer is not in the data, Rabbit says so clearly instead of making something up. Trained explicitly to distinguish known from unknown." />
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-4 text-center">How It Works</p>
        <h2 className="text-3xl font-bold text-center text-[#1d1d1d] mb-3">From scattered information to structured knowledge</h2>
        <p className="text-[#6b5f7a] text-center max-w-2xl mx-auto mb-14 font-light">
          One pipeline. No external dependencies. Your data stays inside your infrastructure from input to output.
        </p>
        <div className="grid sm:grid-cols-4 gap-4">
          <Step num="1" title="Raw Input" desc="Meetings, emails, Slack, notes" />
          <Step num="2" title="Rabbit" desc="Extract, classify, link, compile" />
          <Step num="3" title="Knowledge Graph" desc="Entities, relationships, timelines" />
          <Step num="4" title="Instant Recall" desc="Cited answers from real data" />
        </div>
      </section>

      {/* Comparison */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-4 text-center">Why Rabbit</p>
        <h2 className="text-3xl font-bold text-center text-[#1d1d1d] mb-14">General-purpose AI vs. memory intelligence</h2>
        <div className="bg-white/60 border border-[#d4cade] rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#d4cade]">
                <th className="text-left px-5 py-4 font-semibold text-[#1d1d1d]">Capability</th>
                <th className="text-center px-5 py-4 font-semibold text-[#8069af]">Rabbit</th>
                <th className="text-center px-5 py-4 font-semibold text-[#6b5f7a]">General LLMs</th>
                <th className="text-center px-5 py-4 font-semibold text-[#6b5f7a]">RAG Systems</th>
              </tr>
            </thead>
            <tbody className="text-[#6b5f7a]">
              <CompRow cap="Entity extraction from org data" r="Specialized, 92% F1" g="Generic, lower precision" rag="Not included" />
              <CompRow cap="Relationship detection" r="7 link types, automatic" g="Not available" rag="Not available" />
              <CompRow cap="Contradiction detection" r="Built-in signal" g="Not available" rag="Not available" />
              <CompRow cap="Knowledge compilation" r="Auto-updating pages" g="Re-derives every query" rag="Re-derives every query" />
              <CompRow cap="On-premise deployment" r="Full support" g="API only" rag="Depends on stack" />
              <CompRow cap="Per-token cost" r="$0 (fixed infra)" g="$0.15-15 per 1M tokens" rag="Depends on LLM" />
              <CompRow cap="Data sovereignty" r="Your infrastructure" g="Third-party servers" rag="Depends on LLM" />
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-2xl font-bold text-[#1d1d1d] mb-3">Ready to give your organization a memory?</h2>
        <p className="text-[#6b5f7a] mb-8 font-light">Get API access or talk to us about on-premise deployment.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/login" className="bg-[#1d1d1d] text-white px-7 py-3.5 rounded-xl font-medium hover:bg-[#333] transition">Get API access</Link>
          <Link href="/enterprise" className="bg-[#c2a6cf] text-[#1d1d1d] px-7 py-3.5 rounded-xl font-medium hover:bg-[#b396c2] transition">Contact sales</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function SignalCard({ num, title, tag, desc }: { num: string; title: string; tag: string; desc: string }) {
  return (
    <div className="bg-white/50 border border-[#d4cade] rounded-2xl p-6">
      <span className="text-xs font-bold text-[#c2a6cf]">{num}</span>
      <h3 className="font-semibold text-[#1d1d1d] mt-1 mb-1">{title}</h3>
      <span className="text-[10px] font-mono text-[#8069af]">[{tag}]</span>
      <p className="text-sm text-[#6b5f7a] leading-relaxed font-light mt-3">{desc}</p>
    </div>
  );
}

function Step({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="bg-white/60 border border-[#d4cade] rounded-2xl p-5 text-center">
      <span className="inline-block w-8 h-8 rounded-full bg-[#8069af] text-white text-sm font-semibold leading-8 mb-3">{num}</span>
      <h3 className="font-semibold text-[#1d1d1d] text-sm mb-1">{title}</h3>
      <p className="text-xs text-[#6b5f7a] font-light">{desc}</p>
    </div>
  );
}

function CompRow({ cap, r, g, rag }: { cap: string; r: string; g: string; rag: string }) {
  return (
    <tr className="border-b border-[#d4cade]/50 last:border-0">
      <td className="px-5 py-3 font-medium text-[#1d1d1d] text-[13px]">{cap}</td>
      <td className="px-5 py-3 text-center text-[#8069af] font-medium text-[13px]">{r}</td>
      <td className="px-5 py-3 text-center text-[13px]">{g}</td>
      <td className="px-5 py-3 text-center text-[13px]">{rag}</td>
    </tr>
  );
}

function Header({ current }: { current: string }) {
  const links = ["Home", "Research", "Product", "Enterprise", "Developers", "Individuals", "Future of Work"];
  const hrefs: Record<string, string> = { Home: "/", Research: "/research", Product: "/product", Enterprise: "/enterprise", Developers: "/developers", Individuals: "/individuals", "Future of Work": "/future" };
  return (
    <header className="px-6 py-5 flex items-center justify-between max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-10">
        <Link href="/" className="flex items-center gap-2"><Image src="/logo.png" alt="Rabbit" width={28} height={28} /><span className="text-lg font-bold tracking-tight text-[#1d1d1d]">rabbit</span></Link>
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-[#6b5f7a]">
          {links.map(l => <Link key={l} href={hrefs[l]} className={l === current ? "text-[#1d1d1d]" : "hover:text-[#1d1d1d] transition"}>{l}</Link>)}
        </nav>
      </div>
      <div className="flex items-center gap-4 text-[13px]">
        <Link href="/login" className="bg-[#6d5a96] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#5c4a82] transition">Get API</Link>
        <a href="https://reattend.ai" className="bg-[#1d1d1d] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#333] transition">Reattend</a>
      </div>
    </header>
  );
}

import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <main className="flex-1 bg-[#eee9f4]">
      {/* Header */}
      <header className="px-6 py-5 flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Rabbit" width={28} height={28} />
            <span className="text-lg font-bold tracking-tight text-[#1d1d1d]">rabbit</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-[#6b5f7a]">
            <Link href="/" className="text-[#1d1d1d]">Home</Link>
            <Link href="/research" className="hover:text-[#1d1d1d] transition">Research</Link>
            <Link href="/product" className="hover:text-[#1d1d1d] transition">Product</Link>
            <Link href="/enterprise" className="hover:text-[#1d1d1d] transition">Enterprise</Link>
            <Link href="/developers" className="hover:text-[#1d1d1d] transition">Developers</Link>
            <Link href="/individuals" className="hover:text-[#1d1d1d] transition">Individuals</Link>
            <Link href="/future" className="hover:text-[#1d1d1d] transition">Future of Work</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4 text-[13px]">
          <Link href="/login" className="bg-[#6d5a96] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#5c4a82] transition">
            Get API
          </Link>
          <a href="https://reattend.ai" className="bg-[#1d1d1d] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#333] transition">
            Reattend
          </a>
        </div>
      </header>

      {/* Announcement */}
      <div className="text-center py-3">
        <span className="text-xs font-medium text-[#8069af] bg-[#8069af]/10 px-4 py-1.5 rounded-full">
          v1.4 released
        </span>
      </div>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-bold tracking-tight leading-[1.06] text-[#1d1d1d]">
          AI research and products that put organizational memory at the core
        </h1>
        <p className="mt-8 text-lg text-[#6b5f7a] max-w-2xl mx-auto leading-relaxed font-light">
          We build the intelligence layer that helps organizations remember every decision,
          every context, every relationship. So nothing gets lost.
        </p>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <Link
            href="/future"
            className="bg-[#8069af] text-white px-7 py-3.5 rounded-xl font-medium hover:bg-[#6d5a96] transition"
          >
            Read our vision
          </Link>
          <Link
            href="/login"
            className="bg-[#1d1d1d] text-white px-7 py-3.5 rounded-xl font-medium hover:bg-[#333] transition"
          >
            Get API access
          </Link>
        </div>
      </section>

      {/* Stats bar */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <Stat number="97%" label="Accuracy" />
          <Stat number="<500ms" label="Latency" />
          <Stat number="12" label="Signals" />
          <Stat number="82K+" label="Training examples" />
        </div>
      </section>

      {/* The Problem */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-4 text-center">
          The Problem
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1d1d1d] mb-4">
          Organizational amnesia is the silent cost no one tracks
        </h2>
        <p className="text-[#6b5f7a] text-center max-w-2xl mx-auto mb-14 font-light leading-relaxed">
          Every day, decisions vanish into Slack threads. Meeting outcomes evaporate within hours.
          When someone leaves, years of context leave with them. The problem is not that organizations
          lack tools. They lack memory.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          <ProblemStat number="$31.5B" label="Lost to knowledge silos annually" />
          <ProblemStat number="5.3 hrs" label="Per week searching for known info" />
          <ProblemStat number="70%" label="Of decisions get remade" />
          <ProblemStat number="8+" label="Tools per team, unconnected" />
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          <ProblemCard
            title="Knowledge evaporates"
            desc="Meeting decisions, client conversations, and project context disappear across disconnected tools."
          />
          <ProblemCard
            title="Decisions get remade"
            desc="Without accessible history, teams repeat analysis and reverse decisions that were already settled."
          />
          <ProblemCard
            title="People leave, knowledge leaves"
            desc="When someone exits, their relationships, context, and institutional knowledge walk out the door permanently."
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-4 text-center">
          How It Works
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1d1d1d] mb-4">
          From scattered information to structured knowledge
        </h2>
        <p className="text-[#6b5f7a] text-center max-w-2xl mx-auto mb-14 font-light">
          Rabbit processes raw organizational activity and turns it into a living, queryable
          knowledge graph that gets smarter over time.
        </p>
        <div className="grid sm:grid-cols-4 gap-4">
          <PipelineStep step="1" title="Raw Input" desc="Meetings, emails, Slack, notes" />
          <PipelineStep step="2" title="Rabbit processes" desc="Extract, classify, link, compile" />
          <PipelineStep step="3" title="Knowledge Graph" desc="Entities, relationships, timelines" />
          <PipelineStep step="4" title="Instant Recall" desc="Cited answers from verified facts" />
        </div>
      </section>

      {/* The Model */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-4 text-center">
          The Model
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1d1d1d] mb-4">
          Twelve specialized signals. One architecture.
        </h2>
        <p className="text-[#6b5f7a] text-center max-w-2xl mx-auto mb-4 font-light">
          Rabbit handles the entire memory lifecycle. From understanding what you are asking,
          to extracting facts, to detecting contradictions, to giving you cited answers
          grounded in your actual data.
        </p>
        <div className="text-center mb-14">
          <Link href="/product" className="text-[#8069af] text-sm font-medium hover:underline">
            Learn more about the model
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          <Signal name="Understand" tag="INTENT" />
          <Signal name="Extract" tag="EXTRACT" />
          <Signal name="Organize" tag="TRIAGE" />
          <Signal name="Link" tag="LINK" />
          <Signal name="Reason" tag="EXPAND" />
          <Signal name="Compile" tag="COMPILE" />
          <Signal name="Expand" tag="SUMMARIZE" />
          <Signal name="Recall" tag="ANSWER" />
          <Signal name="Sentiment" tag="SENTIMENT" />
          <Signal name="Ambient" tag="AMBIENT" />
          <Signal name="Multi-turn" tag="MULTITURN" />
          <Signal name="Graceful limits" tag="DONTKNOW" />
        </div>
      </section>

      {/* Industries */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-4 text-center">
          Industries
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1d1d1d] mb-4">
          Memory intelligence across sectors
        </h2>
        <p className="text-[#6b5f7a] text-center max-w-2xl mx-auto mb-14 font-light">
          Every industry has institutional knowledge worth preserving. Rabbit works out of the box.
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          <IndustryCard title="Healthcare" desc="Patient history. Treatment decisions. Compliance. Track treatment plans and outcomes across departments. HIPAA-ready on-premise deployment." />
          <IndustryCard title="Legal" desc="Case history. Precedents. Client matters. Every case brief and client conversation linked and searchable. Full data sovereignty." />
          <IndustryCard title="Financial Services" desc="Deal history. Client relationships. Compliance trails. Complete audit trail of every interaction and decision across teams." />
          <IndustryCard title="Energy and Infrastructure" desc="Safety protocols. Maintenance logs. Operational memory. Decades of maintenance decisions and safety incidents, searchable in seconds." />
        </div>
      </section>

      {/* Deploy */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-4 text-center">
          Deploy and Forget
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1d1d1d] mb-4">
          Reattend + Rabbit. One box. Complete memory infrastructure.
        </h2>
        <p className="text-[#6b5f7a] text-center max-w-2xl mx-auto mb-14 font-light">
          For organizations that want to solve amnesia without building anything. We ship Reattend
          bundled with Rabbit as a single deployable unit. Install it on your server, connect your
          tools, and watch your organizational knowledge form itself.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <DeployItem title="Rabbit" desc="Memory intelligence engine" />
          <DeployItem title="Reattend Platform" desc="Capture, store, search, recall" />
          <DeployItem title="Integrations" desc="Slack, Gmail, Calendar, custom" />
          <DeployItem title="Your infrastructure" desc="Nothing leaves your network" />
        </div>
        <p className="text-center text-sm text-[#8069af] font-medium">
          Deploy once. Knowledge forms automatically.
        </p>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] mb-4">
          Give your organization a memory
        </h2>
        <p className="text-[#6b5f7a] mb-8 font-light">
          Join the private beta. Limited API access available now.
        </p>
        <div className="flex gap-3 justify-center items-center flex-wrap max-w-md mx-auto">
          <input
            type="email"
            placeholder="you@company.com"
            className="flex-1 min-w-[200px] bg-white border border-[#d4cade] rounded-xl px-4 py-3 text-[#1d1d1d] placeholder-[#a89bb5] focus:outline-none focus:border-[#8069af] text-sm"
          />
          <Link
            href="/login"
            className="bg-[#8069af] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#6d5a96] transition text-sm whitespace-nowrap"
          >
            Join Waitlist
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-[#8069af]">{number}</p>
      <p className="text-sm text-[#6b5f7a] mt-1">{label}</p>
    </div>
  );
}

function ProblemStat({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-white/60 border border-[#d4cade] rounded-2xl p-5 text-center">
      <p className="text-2xl font-bold text-[#1d1d1d]">{number}</p>
      <p className="text-xs text-[#6b5f7a] mt-1 leading-relaxed">{label}</p>
    </div>
  );
}

function ProblemCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white/40 border border-[#d4cade] rounded-2xl p-6">
      <h3 className="font-semibold text-[#1d1d1d] mb-2 text-[15px]">{title}</h3>
      <p className="text-sm text-[#6b5f7a] leading-relaxed font-light">{desc}</p>
    </div>
  );
}

function PipelineStep({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <div className="bg-white/60 border border-[#d4cade] rounded-2xl p-5 text-center">
      <span className="inline-block w-8 h-8 rounded-full bg-[#8069af] text-white text-sm font-semibold leading-8 mb-3">{step}</span>
      <h3 className="font-semibold text-[#1d1d1d] text-sm mb-1">{title}</h3>
      <p className="text-xs text-[#6b5f7a] font-light">{desc}</p>
    </div>
  );
}

function Signal({ name, tag }: { name: string; tag: string }) {
  return (
    <div className="bg-white/50 border border-[#d4cade] rounded-xl px-4 py-3">
      <p className="font-medium text-[#1d1d1d] text-sm">{name}</p>
      <p className="text-[10px] font-mono text-[#8069af] mt-0.5">[{tag}]</p>
    </div>
  );
}

function IndustryCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white/40 border border-[#d4cade] rounded-2xl p-7">
      <h3 className="font-semibold text-[#1d1d1d] mb-2">{title}</h3>
      <p className="text-sm text-[#6b5f7a] leading-relaxed font-light">{desc}</p>
    </div>
  );
}

function DeployItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white/50 border border-[#d4cade] rounded-xl p-5 text-center">
      <h3 className="font-semibold text-[#1d1d1d] text-sm mb-1">{title}</h3>
      <p className="text-xs text-[#6b5f7a] font-light">{desc}</p>
    </div>
  );
}


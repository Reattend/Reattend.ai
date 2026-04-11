import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default function FuturePage() {
  return (
    <main className="flex-1 bg-[#eee9f4]">
      <Header current="Future of Work" />

      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-5">Future of Work</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#1d1d1d]">
          The next era of work will be defined by what organizations remember
        </h1>
        <p className="mt-6 text-lg text-[#6b5f7a] max-w-2xl mx-auto leading-relaxed font-light">
          We are producing more information than ever and retaining less of it than ever.
          The tools are getting better. The memory is getting worse. This is our thesis on
          where work is headed and why organizational memory will become critical infrastructure.
        </p>
      </section>

      {/* Information Overload */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-[#1d1d1d] mb-6">The information overload crisis</h2>
        <p className="text-[#6b5f7a] leading-relaxed font-light mb-8">
          The average knowledge worker receives 121 emails per day, sits in 25.6 meetings per week,
          and uses 8 to 10 different applications to do their job. Slack alone processes over 1.5 billion
          messages per week across its platform. Every one of those messages contains a fragment of
          organizational knowledge: a decision, a commitment, a piece of context that someone will need later.
        </p>
        <p className="text-[#6b5f7a] leading-relaxed font-light mb-8">
          Almost none of it gets captured in a way that is searchable, structured, or connected to
          related information. It lives in threads that scroll past, in meeting recordings that nobody
          rewatches, in email chains that get buried.
        </p>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <StatCard value="121" label="Emails per day per worker" />
          <StatCard value="25.6" label="Meetings per week" />
          <StatCard value="8-10" label="Apps per person" />
        </div>
        <div className="bg-white/50 border border-[#d4cade] rounded-2xl p-6">
          <p className="text-[#6b5f7a] leading-relaxed font-light italic">
            This is not a productivity problem. Productivity tools are excellent. Slack is great for
            communication. Notion is great for documentation. Jira is great for tracking tasks.
            The problem is that no tool is responsible for remembering. The knowledge that flows
            between these tools evaporates.
          </p>
          <p className="text-[#1d1d1d] font-medium mt-4">
            The tools are getting better. The memory is getting worse.
          </p>
        </div>
      </section>

      {/* Fragmentation */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-[#1d1d1d] mb-6">The cross-tool fragmentation problem</h2>
        <p className="text-[#6b5f7a] leading-relaxed font-light mb-6">
          A decision gets made in a Zoom call. The action items go to Jira. The context lives in a
          Google Doc. The follow-up happens in Slack. The budget is in a spreadsheet. The client
          relationship is in the CRM.
        </p>
        <p className="text-[#6b5f7a] leading-relaxed font-light mb-6">
          Six tools. One decision. No single place that connects all of these fragments into a
          coherent picture of what happened, why, and what was supposed to happen next.
        </p>
        <p className="text-[#6b5f7a] leading-relaxed font-light mb-6">
          When someone new joins the team, or when a project resurfaces after six months, or when
          a client asks &quot;didn&apos;t we agree on something last quarter?&quot;... nobody knows where to look.
          The answer exists somewhere across those six tools, but finding it takes hours. Usually,
          it is faster to just redo the work.
        </p>
        <div className="bg-white/50 border border-[#d4cade] rounded-2xl p-6">
          <p className="text-[#1d1d1d] font-medium">
            70% of organizational decisions get remade because the original context is scattered
            across tools that do not talk to each other.
          </p>
        </div>
      </section>

      {/* Security */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-[#1d1d1d] mb-6">The security problem nobody talks about</h2>
        <p className="text-[#6b5f7a] leading-relaxed font-light mb-6">
          Every time an organization sends its meeting transcripts to an AI service for summarization,
          it is sending the most sensitive material it produces to a third party. Client names,
          financial figures, personnel decisions, legal strategy, competitive intelligence.
          All of it, flowing through someone else&apos;s servers.
        </p>
        <p className="text-[#6b5f7a] leading-relaxed font-light mb-6">
          Most organizations do not even realize this is happening. A well-meaning employee pastes
          a meeting transcript into ChatGPT to get action items. An entire quarter&apos;s worth of
          client strategy is now in a training dataset they do not control.
        </p>
        <div className="bg-white/50 border border-[#d4cade] rounded-2xl p-6">
          <p className="text-[#1d1d1d] font-medium">
            This is why we believe the intelligence layer for organizational memory must be
            self-contained. The model, the embeddings, the storage, the search, and the inference
            should all run on infrastructure the organization controls.
          </p>
        </div>
      </section>

      {/* Knowledge Graph Thesis */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-[#1d1d1d] mb-6">The knowledge graph thesis</h2>
        <p className="text-[#6b5f7a] leading-relaxed font-light mb-6">
          We believe every organization will eventually have a knowledge graph. Not a static org
          chart or a wiki that someone has to maintain. A living, continuously updated graph of
          entities, relationships, decisions, and events that builds itself from the organization&apos;s
          daily activity.
        </p>
        <p className="text-[#6b5f7a] leading-relaxed font-light">
          This graph will be the foundation for a new class of applications. Meeting preparation
          tools that brief you with full context from every prior interaction. Onboarding systems
          that compress six months of institutional knowledge into searchable summaries. Compliance
          tools that detect contradictions between what was decided and what was done. Executive
          dashboards that show not just metrics but the decisions and context behind them.
        </p>
        <div className="bg-white/50 border border-[#d4cade] rounded-2xl p-6 mt-6">
          <p className="text-[#1d1d1d] font-medium">
            Every organization will have a knowledge graph. The question is whether they build it
            manually or let AI compile it from their daily activity.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-4 text-center">Where We Are Headed</p>
        <div className="space-y-4">
          <TimelineItem period="Now" title="Capture and recall" desc="Rabbit extracts structured knowledge from meetings, emails, and messages. Teams can ask questions and get cited answers from their actual history." />
          <TimelineItem period="Next" title="Compiled knowledge" desc="Living entity pages and topic summaries that update automatically. Knowledge that compounds with every interaction instead of being re-derived every time." />
          <TimelineItem period="2027" title="Proactive intelligence" desc="Rabbit surfaces forgotten commitments, detects contradictions, and alerts teams before knowledge gaps become costly. The system anticipates what you need to know." />
          <TimelineItem period="2028" title="Memory as infrastructure" desc="Every application has access to organizational memory through the Rabbit API. CRMs, project tools, communication platforms, and custom apps all share a unified knowledge layer." />
          <TimelineItem period="Beyond" title="Institutional intelligence" desc="Organizations develop genuine institutional memory that persists across team changes, leadership transitions, and decades of operation. Knowledge becomes a durable asset." />
        </div>
      </section>

      {/* Why Now */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-[#1d1d1d] mb-6">Why this matters now</h2>
        <p className="text-[#6b5f7a] leading-relaxed font-light mb-6">
          The shift to remote and hybrid work accelerated the amnesia problem by an order of magnitude.
          When teams were co-located, institutional knowledge lived partly in hallway conversations,
          whiteboard sessions, and the ambient awareness of who was working on what. Remote work
          eliminated that ambient layer entirely.
        </p>
        <p className="text-[#6b5f7a] leading-relaxed font-light mb-8">
          At the same time, AI made it possible to process and structure organizational data at a
          scale that was never feasible before. These two trends together create both the urgency
          and the opportunity. Organizations are losing knowledge faster than ever, and for the
          first time, technology can capture it faster than it decays.
        </p>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <StatCard value="$31.5B" label="Lost to knowledge silos (Fortune 500)" />
          <StatCard value="23%" label="Of time spent searching" />
          <StatCard value="42%" label="Of knowledge is undocumented" />
        </div>
        <div className="bg-white/50 border border-[#d4cade] rounded-2xl p-6">
          <p className="text-[#1d1d1d] font-medium leading-relaxed">
            We are building Rabbit because we believe organizational memory will become as
            fundamental to how teams work as email, calendars, and chat. Not as another tool to
            check, but as the intelligence layer underneath all of them.
          </p>
          <p className="text-[#8069af] font-semibold mt-4">
            The organizations that remember will outperform those that do not. That is the future
            of work we are building toward.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-2xl font-bold text-[#1d1d1d] mb-3">Be part of the future</h2>
        <p className="text-[#6b5f7a] mb-8 font-light">Join the teams already building with Rabbit.</p>
        <Link href="/login" className="bg-[#8069af] text-white px-7 py-3.5 rounded-xl font-medium hover:bg-[#6d5a96] transition">Join the waitlist</Link>
      </section>

      <Footer />
    </main>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (<div className="bg-white/60 border border-[#d4cade] rounded-2xl p-5 text-center"><p className="text-2xl font-bold text-[#8069af]">{value}</p><p className="text-xs text-[#6b5f7a] mt-1">{label}</p></div>);
}
function TimelineItem({ period, title, desc }: { period: string; title: string; desc: string }) {
  return (<div className="bg-white/50 border border-[#d4cade] rounded-2xl p-6 flex gap-5"><div className="shrink-0 w-16 text-center"><span className="text-sm font-bold text-[#8069af]">{period}</span></div><div><h3 className="font-semibold text-[#1d1d1d] mb-1">{title}</h3><p className="text-sm text-[#6b5f7a] leading-relaxed font-light">{desc}</p></div></div>);
}
function Header({ current }: { current: string }) {
  const links = ["Home", "Research", "Product", "Enterprise", "Developers", "Individuals", "Future of Work"];
  const hrefs: Record<string, string> = { Home: "/", Research: "/research", Product: "/product", Enterprise: "/enterprise", Developers: "/developers", Individuals: "/individuals", "Future of Work": "/future" };
  return (<header className="px-6 py-5 flex items-center justify-between max-w-7xl mx-auto w-full"><div className="flex items-center gap-10"><Link href="/" className="flex items-center gap-2"><Image src="/logo.png" alt="Rabbit" width={28} height={28} /><span className="text-lg font-bold tracking-tight text-[#1d1d1d]">rabbit</span></Link><nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-[#6b5f7a]">{links.map(l => <Link key={l} href={hrefs[l]} className={l === current ? "text-[#1d1d1d]" : "hover:text-[#1d1d1d] transition"}>{l}</Link>)}</nav></div><div className="flex items-center gap-4 text-[13px]"><Link href="/login" className="bg-[#6d5a96] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#5c4a82] transition">Get API</Link><a href="https://reattend.ai" className="bg-[#1d1d1d] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#333] transition">Reattend</a></div></header>);
}

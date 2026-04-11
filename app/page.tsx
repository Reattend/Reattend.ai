import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Nav */}
      <nav className="border-b border-neutral-800 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">Rabbit</span>
          <span className="text-xs text-neutral-500 border border-neutral-700 rounded px-1.5 py-0.5">
            by Reattend
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/docs" className="text-neutral-400 hover:text-white transition">
            Docs
          </Link>
          <Link
            href="/login"
            className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-neutral-200 transition"
          >
            Get API Key
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
          Memory infrastructure
          <br />
          <span className="text-neutral-400">for the world</span>
        </h1>
        <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Two API calls. Feed Rabbit meetings, emails, notes, documents,
          recordings. It extracts decisions, detects contradictions, links
          context, and answers questions across your entire history.
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <Link
            href="/login"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 transition text-base"
          >
            Get Free API Key
          </Link>
          <Link
            href="/docs"
            className="border border-neutral-700 px-6 py-3 rounded-lg font-medium hover:border-neutral-500 transition text-base text-neutral-300"
          >
            Read Docs
          </Link>
        </div>
      </section>

      {/* Code Example */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-2 text-xs text-neutral-500">Python</span>
          </div>
          <pre className="p-6 text-sm leading-relaxed overflow-x-auto">
            <code className="text-neutral-300">
              <span className="text-blue-400">from</span>{" "}
              <span className="text-green-400">rabbit</span>{" "}
              <span className="text-blue-400">import</span> Rabbit{"\n\n"}
              rab = Rabbit(<span className="text-amber-300">&quot;rab_test_YOUR_KEY&quot;</span>){"\n\n"}
              <span className="text-neutral-500"># Remember anything</span>{"\n"}
              rab.remember(<span className="text-amber-300">&quot;Sarah delayed launch to March 15. Budget $50K.&quot;</span>,{" "}
              source=<span className="text-amber-300">&quot;meeting&quot;</span>){"\n"}
              rab.remember(<span className="text-amber-300">&quot;Q1 revenue hit $2.3M, 15% above target.&quot;</span>,{" "}
              source=<span className="text-amber-300">&quot;report&quot;</span>){"\n\n"}
              <span className="text-neutral-500"># Ask anything</span>{"\n"}
              answer = rab.ask(<span className="text-amber-300">&quot;What&apos;s the launch status?&quot;</span>){"\n"}
              print(answer.text){"\n"}
              <span className="text-neutral-500"># &quot;Sarah delayed the launch to March 15 [1]. Budget is confirmed</span>{"\n"}
              <span className="text-neutral-500">#  at $50K. Q1 revenue exceeded targets at $2.3M [2]...&quot;</span>
            </code>
          </pre>
        </div>
      </section>

      {/* What It Does */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          One call in, intelligence out
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card
            title="remember()"
            description="Feed it text, audio, PDF, images, email, code. Rabbit classifies, extracts entities, summarizes, scores importance, creates embeddings, and links to related memories."
            signals={["TRIAGE", "EXTRACT", "SUMMARIZE", "SENTIMENT", "IMPORTANCE", "LINK"]}
          />
          <Card
            title="ask()"
            description="Ask any question. Rabbit classifies intent, expands your query, searches with hybrid retrieval, walks the knowledge graph, reranks results, and generates a cited answer."
            signals={["INTENT", "EXPAND", "RETRIEVE", "RERANK", "GRAPH", "ANSWER"]}
          />
          <Card
            title="check()"
            description="Feed Rabbit your current context and it detects contradictions. 'You said $50K but the board approved $40K.'"
            signals={["AMBIENT"]}
          />
          <Card
            title="compile() + lint()"
            description="Auto-generate wiki pages for any person, project, or topic. Run health audits to find contradictions, stale info, and knowledge gaps."
            signals={["COMPILE", "LINT"]}
          />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Everything you need
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Feature title="12 AI Signals" desc="Triage, extract, summarize, sentiment, importance, link, ambient, and more." />
          <Feature title="10 File Types" desc="Text, audio, PDF, Office docs, images, markdown, HTML, email, calendar, code." />
          <Feature title="Hybrid Search" desc="Vector + BM25 + graph walk + importance + recency + Jina reranking." />
          <Feature title="Knowledge Graph" desc="Memories automatically linked. Walk connections to find hidden context." />
          <Feature title="Reasoning Mode" desc="Toggle deep analysis for strategic questions. Powered by 70B models." />
          <Feature title="Self-Healing KB" desc="Contradictions detected. Stale info flagged. Knowledge gaps surfaced." />
          <Feature title="Multi-Tenant" desc="Each API key gets isolated storage. Built for SaaS from day one." />
          <Feature title="Three Deploy Modes" desc="Hosted API, self-hosted, or fully local. Same SDK, zero code changes." />
          <Feature title="Training Flywheel" desc="Thumbs up/down feedback trains the next version. Gets smarter monthly." />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Start building with memory</h2>
        <p className="text-neutral-400 mb-8">
          Free tier. No credit card. 1,000 calls/month.
        </p>
        <Link
          href="/login"
          className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-neutral-200 transition text-base inline-block"
        >
          Get Free API Key
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <span>Rabbit by Reattend</span>
          <div className="flex gap-6">
            <Link href="/docs" className="hover:text-white transition">Docs</Link>
            <a href="https://github.com/reattend/rabbit" className="hover:text-white transition">GitHub</a>
            <a href="https://reattend.ai" className="hover:text-white transition">Reattend</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Card({
  title,
  description,
  signals,
}: {
  title: string;
  description: string;
  signals: string[];
}) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
      <h3 className="text-xl font-mono font-semibold text-white mb-3">{title}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {signals.map((s) => (
          <span
            key={s}
            className="text-xs font-mono bg-neutral-800 text-neutral-400 px-2 py-1 rounded"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-5 rounded-xl border border-neutral-800 hover:border-neutral-700 transition">
      <h3 className="font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-neutral-400 leading-relaxed">{desc}</p>
    </div>
  );
}

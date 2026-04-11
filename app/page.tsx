import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Header */}
      <header className="px-6 py-5 flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-10">
          <Link href="/" className="text-xl font-bold tracking-tight text-[#1d1d1d]">
            rabbit
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#6b5f7a]">
            <Link href="#research" className="hover:text-[#1d1d1d] transition">Research</Link>
            <Link href="#product" className="hover:text-[#1d1d1d] transition">Product</Link>
            <Link href="#enterprise" className="hover:text-[#1d1d1d] transition">Enterprise</Link>
            <Link href="#developers" className="hover:text-[#1d1d1d] transition">Developers</Link>
            <Link href="#individuals" className="hover:text-[#1d1d1d] transition">Individuals</Link>
            <Link href="#future" className="hover:text-[#1d1d1d] transition">Future of Work</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/login" className="text-[#6b5f7a] hover:text-[#1d1d1d] font-medium transition">
            Documentation
          </Link>
          <Link href="/login" className="text-[#6b5f7a] hover:text-[#1d1d1d] font-medium transition">
            Try Reattend
          </Link>
          <Link
            href="/login"
            className="bg-[#1d1d1d] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#333] transition text-sm"
          >
            Get API
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
        <p className="text-sm font-medium text-[#8069af] tracking-wide uppercase mb-6">
          Memory Infrastructure
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-[#1d1d1d]">
          The API for memory
        </h1>
        <p className="mt-8 text-lg text-[#6b5f7a] max-w-2xl mx-auto leading-relaxed font-light">
          A fine-tuned language model that extracts, links, and reasons over
          organizational knowledge. Two operations: <strong className="font-medium text-[#1d1d1d]">remember</strong> and{" "}
          <strong className="font-medium text-[#1d1d1d]">ask</strong>.
          On-premise capable. Privacy-first. Your data never leaves your control.
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <Link
            href="/login"
            className="bg-[#1d1d1d] text-white px-7 py-3.5 rounded-xl font-medium hover:bg-[#333] transition"
          >
            Start building
          </Link>
          <Link
            href="/login"
            className="bg-[#c2a6cf] text-[#1d1d1d] px-7 py-3.5 rounded-xl font-medium hover:bg-[#b396c2] transition"
          >
            Read documentation
          </Link>
        </div>
      </section>

      {/* Code */}
      <section className="max-w-3xl mx-auto px-6 pb-28">
        <div className="bg-[#1d1d1d] rounded-2xl overflow-hidden shadow-xl">
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[#333]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-xs text-[#888] font-mono">python</span>
          </div>
          <pre className="p-6 text-[13px] leading-7 overflow-x-auto font-mono">
            <code>
              <span className="text-[#c2a6cf]">from</span>{" "}
              <span className="text-[#e5def1]">rabbit</span>{" "}
              <span className="text-[#c2a6cf]">import</span>{" "}
              <span className="text-white">Rabbit</span>{"\n\n"}
              <span className="text-white">rab</span>{" = "}
              <span className="text-white">Rabbit</span>
              (<span className="text-[#a8d8a8]">&quot;rab_test_your_key&quot;</span>){"\n\n"}
              <span className="text-[#888]"># Ingest any content. Rabbit extracts, classifies, links.</span>{"\n"}
              <span className="text-white">rab</span>.remember({"\n"}
              {"    "}<span className="text-[#a8d8a8]">&quot;Board approved Series A at $2M. Sequoia leads. Close by May.&quot;</span>,{"\n"}
              {"    "}source=<span className="text-[#a8d8a8]">&quot;meeting&quot;</span>{"\n"}
              ){"\n\n"}
              <span className="text-[#888]"># Query across all memories. Cited, reasoned answers.</span>{"\n"}
              <span className="text-white">answer</span>{" = "}
              <span className="text-white">rab</span>.ask(<span className="text-[#a8d8a8]">&quot;What is our funding status?&quot;</span>){"\n"}
              <span className="text-white">print</span>(answer.text)
            </code>
          </pre>
        </div>
      </section>

      {/* What Rabbit Does */}
      <section id="product" className="max-w-5xl mx-auto px-6 pb-28">
        <p className="text-sm font-medium text-[#8069af] tracking-wide uppercase mb-4 text-center">
          How it works
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1d1d1d] mb-4">
          12 specialized signals. One model.
        </h2>
        <p className="text-[#6b5f7a] text-center max-w-2xl mx-auto mb-14 font-light">
          Rabbit is a fine-tuned 3.8B parameter model trained on 82,000+ memory-specific examples.
          It runs 12 specialized tasks that no general-purpose LLM is optimized for.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          <SignalCard
            title="Ingestion Pipeline"
            subtitle="remember()"
            description="Content enters Rabbit and is processed through 7 signals in sequence. What emerges is structured, summarized, scored, embedded, and linked to existing knowledge."
            signals={["TRIAGE", "EXTRACT", "SUMMARIZE", "SENTIMENT", "IMPORTANCE", "EMBED", "LINK"]}
          />
          <SignalCard
            title="Retrieval Pipeline"
            subtitle="ask()"
            description="Questions are classified, expanded, and matched against memories using hybrid search — vector similarity, keyword matching, graph traversal, and cross-encoder reranking."
            signals={["INTENT", "EXPAND", "RETRIEVE", "RERANK", "GRAPH WALK", "ANSWER"]}
          />
          <SignalCard
            title="Contradiction Detection"
            subtitle="check()"
            description="Feed Rabbit your current context. It compares against stored memories and surfaces contradictions, forgotten commitments, and critical context in real time."
            signals={["AMBIENT"]}
          />
          <SignalCard
            title="Self-Healing Knowledge Base"
            subtitle="compile() + lint()"
            description="Auto-generate wiki pages for any entity. Run health audits that find contradictions, stale decisions, and knowledge gaps across your entire memory."
            signals={["COMPILE", "LINT"]}
          />
        </div>
      </section>

      {/* Research */}
      <section id="research" className="bg-[#f0eaf5] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm font-medium text-[#8069af] tracking-wide uppercase mb-4 text-center">
            Research
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1d1d1d] mb-4">
            Purpose-built for organizational memory
          </h2>
          <p className="text-[#6b5f7a] text-center max-w-2xl mx-auto mb-14 font-light">
            General-purpose LLMs are designed for conversation. Rabbit is designed for memory —
            extraction, classification, linking, and retrieval over structured organizational knowledge.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <ResearchCard
              number="82,314"
              label="Training examples"
              detail="Curated, quality-filtered examples across 12 signal types. Universe-based synthetic generation with real-world distributions."
            />
            <ResearchCard
              number="3.8B"
              label="Parameters"
              detail="Fine-tuned Phi-3.5 Mini. Small enough for on-premise deployment. Specialized enough to outperform GPT-4 on memory tasks."
            />
            <ResearchCard
              number="240ms"
              label="Signal latency"
              detail="Classification signals (intent, sentiment, importance) run in under 300ms. Faster than any API call to a general-purpose model."
            />
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section id="enterprise" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm font-medium text-[#8069af] tracking-wide uppercase mb-4 text-center">
            Enterprise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1d1d1d] mb-4">
            Nothing leaves your firewall
          </h2>
          <p className="text-[#6b5f7a] text-center max-w-2xl mx-auto mb-14 font-light">
            Rabbit runs entirely on your infrastructure. The model, the storage, the search —
            everything operates within your network. No data is sent to external APIs.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            <FeatureCard title="On-Premise Deployment" desc="Single Docker container. GPU or CPU. Air-gapped capable. Your data stays on your servers." />
            <FeatureCard title="Tenant Isolation" desc="Each API key gets isolated vector storage, metadata database, and knowledge graph. No cross-contamination." />
            <FeatureCard title="Three Deployment Modes" desc="Hosted API, self-hosted on your cloud, or fully local on a laptop. Same SDK interface, zero code changes." />
            <FeatureCard title="Audit Trail" desc="Every ingestion, every query, every answer — logged with timestamps. Full compliance readiness." />
            <FeatureCard title="Custom Training" desc="Train Rabbit on your organization's data. Monthly retraining from user feedback. The model learns your domain." />
            <FeatureCard title="Knowledge Graph" desc="Memories are automatically linked — same topic, contradicts, depends on, continuation of. Walk connections to find hidden context." />
          </div>
        </div>
      </section>

      {/* Developers */}
      <section id="developers" className="bg-[#f0eaf5] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm font-medium text-[#8069af] tracking-wide uppercase mb-4 text-center">
            For Developers
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1d1d1d] mb-4">
            Replace your RAG pipeline with two API calls
          </h2>
          <p className="text-[#6b5f7a] text-center max-w-2xl mx-auto mb-14 font-light">
            Stop building extraction, embedding, chunking, retrieval, and reranking from scratch.
            Rabbit handles the entire memory stack. You handle the product.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <FeatureCard title="Python SDK" desc="pip install rabbit-memory. Three methods: remember(), ask(), check(). Full type hints." />
            <FeatureCard title="JavaScript SDK" desc="npm install @reattend/rabbit. TypeScript-first. Same interface as Python." />
            <FeatureCard title="10 File Types" desc="Text, audio, PDF, Office docs, images, markdown, HTML, email, calendar, code. One endpoint handles all." />
            <FeatureCard title="SSE Streaming" desc="Stream answers token by token. Pipeline events (intent, expand, retrieve) sent as the query progresses." />
            <FeatureCard title="Reasoning Mode" desc="Toggle deep analysis for complex questions. Rabbit handles retrieval, a 70B model handles reasoning. Seamless." />
            <FeatureCard title="Training Flywheel" desc="thumbs_up() and thumbs_down() feed the training pipeline. Your usage makes the model better. Monthly." />
          </div>
        </div>
      </section>

      {/* Individuals */}
      <section id="individuals" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm font-medium text-[#8069af] tracking-wide uppercase mb-4 text-center">
            For Individuals
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1d1d1d] mb-4">
            Your personal memory, searchable and intelligent
          </h2>
          <p className="text-[#6b5f7a] text-center max-w-2xl mx-auto mb-14 font-light">
            Sync your Obsidian vault, upload meeting recordings, save articles.
            Ask questions across everything you've ever captured.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            <FeatureCard title="Obsidian Sync" desc="rabbit sync --obsidian ~/vault. Your notes become queryable. Wiki-links preserved. Missing connections discovered." />
            <FeatureCard title="Meeting Memory" desc="Upload recordings. Rabbit transcribes, extracts decisions and action items, links to previous meetings on the same topic." />
            <FeatureCard title="Self-Healing Knowledge" desc="Contradictions detected. Stale action items flagged. Knowledge gaps surfaced. Your second brain maintains itself." />
          </div>
        </div>
      </section>

      {/* Future of Work */}
      <section id="future" className="bg-[#f0eaf5] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm font-medium text-[#8069af] tracking-wide uppercase mb-4 text-center">
            Future of Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1d1d1d] mb-4">
            Every AI system has amnesia. We&apos;re fixing that.
          </h2>
          <p className="text-[#6b5f7a] text-center max-w-2xl mx-auto mb-6 font-light">
            Organizations make thousands of decisions every month. Most are forgotten within weeks.
            The knowledge walks out the door when people leave. Institutional memory degrades with every
            team change, every quarter, every year.
          </p>
          <p className="text-[#6b5f7a] text-center max-w-2xl mx-auto mb-6 font-light">
            Rabbit is the infrastructure layer that captures, understands, links, and preserves
            organizational knowledge. Not as static documents. As a living, queryable, self-healing
            knowledge system that gets smarter with every interaction.
          </p>
          <p className="text-[#1d1d1d] text-center max-w-2xl mx-auto font-medium">
            We believe memory is the most important unsolved problem in AI.
            We&apos;re building the solution.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] mb-4">
          Start building with memory
        </h2>
        <p className="text-[#6b5f7a] mb-10 font-light">
          Free tier. No credit card. 1,000 calls per month.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/login"
            className="bg-[#1d1d1d] text-white px-8 py-3.5 rounded-xl font-medium hover:bg-[#333] transition"
          >
            Get API key
          </Link>
          <Link
            href="/login"
            className="bg-[#c2a6cf] text-[#1d1d1d] px-8 py-3.5 rounded-xl font-medium hover:bg-[#b396c2] transition"
          >
            Read documentation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#c2a6cf] px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-[#6b5f7a]">
          <div>
            <span className="font-bold text-[#1d1d1d]">rabbit</span>
            <span className="ml-2">by Reattend</span>
          </div>
          <div className="flex gap-8">
            <Link href="/login" className="hover:text-[#1d1d1d] transition">Documentation</Link>
            <Link href="/login" className="hover:text-[#1d1d1d] transition">API Reference</Link>
            <a href="https://reattend.ai" className="hover:text-[#1d1d1d] transition">Reattend</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SignalCard({
  title,
  subtitle,
  description,
  signals,
}: {
  title: string;
  subtitle: string;
  description: string;
  signals: string[];
}) {
  return (
    <div className="bg-[#f0eaf5] border border-[#d8cfe6] rounded-2xl p-7">
      <p className="text-xs font-mono text-[#8069af] mb-2">{subtitle}</p>
      <h3 className="text-lg font-semibold text-[#1d1d1d] mb-3">{title}</h3>
      <p className="text-[#6b5f7a] text-sm leading-relaxed mb-5 font-light">{description}</p>
      <div className="flex flex-wrap gap-2">
        {signals.map((s) => (
          <span
            key={s}
            className="text-xs font-mono bg-[#e5def1] text-[#8069af] px-2.5 py-1 rounded-lg border border-[#c2a6cf]"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white/50 border border-[#d8cfe6] rounded-2xl p-6 hover:border-[#8069af] transition">
      <h3 className="font-semibold text-[#1d1d1d] mb-2">{title}</h3>
      <p className="text-sm text-[#6b5f7a] leading-relaxed font-light">{desc}</p>
    </div>
  );
}

function ResearchCard({
  number,
  label,
  detail,
}: {
  number: string;
  label: string;
  detail: string;
}) {
  return (
    <div className="bg-white/50 border border-[#d8cfe6] rounded-2xl p-7 text-center">
      <p className="text-4xl font-bold text-[#8069af] mb-1">{number}</p>
      <p className="text-sm font-medium text-[#1d1d1d] mb-3">{label}</p>
      <p className="text-sm text-[#6b5f7a] leading-relaxed font-light">{detail}</p>
    </div>
  );
}

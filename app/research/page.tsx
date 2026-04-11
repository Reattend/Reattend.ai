import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default function ResearchPage() {
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
            <Link href="/" className="hover:text-[#1d1d1d] transition">Home</Link>
            <Link href="/research" className="text-[#1d1d1d]">Research</Link>
            <Link href="/product" className="hover:text-[#1d1d1d] transition">Product</Link>
            <Link href="/enterprise" className="hover:text-[#1d1d1d] transition">Enterprise</Link>
            <Link href="/developers" className="hover:text-[#1d1d1d] transition">Developers</Link>
            <Link href="/individuals" className="hover:text-[#1d1d1d] transition">Individuals</Link>
            <Link href="/future" className="hover:text-[#1d1d1d] transition">Future of Work</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4 text-[13px]">
          <Link href="/login" className="bg-[#6d5a96] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#5c4a82] transition">Get API</Link>
          <a href="https://reattend.ai" className="bg-[#1d1d1d] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#333] transition">Reattend</a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-5">Research</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#1d1d1d]">
          Building intelligence for organizational memory
        </h1>
        <p className="mt-6 text-lg text-[#6b5f7a] max-w-2xl mx-auto leading-relaxed font-light">
          We develop specialized AI models trained to understand how organizations create, lose, and
          recover knowledge. Our research focuses on memory extraction, relationship detection, and
          temporal reasoning across unstructured organizational data.
        </p>
      </section>

      {/* Philosophy */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-white/50 border border-[#d4cade] rounded-2xl p-8">
          <p className="text-[#6b5f7a] leading-relaxed font-light text-[15px]">
            Memory is sensitive. It contains decisions, relationships, and institutional context that
            should never leave an organization's control. That belief shapes everything we build.
            Rabbit's architecture, training pipeline, and inference stack are developed entirely
            in-house. We do not depend on external model providers for any part of the intelligence
            layer. When an organization deploys Rabbit, they deploy technology we built, on
            infrastructure they control.
          </p>
          <p className="text-[#6b5f7a] leading-relaxed font-light text-[15px] mt-4">
            All training data is ethically sourced. We use synthetic data generation to create diverse,
            representative training sets without exposing any real organizational data.
          </p>
        </div>
      </section>

      {/* Training Log */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-4 text-center">Training Log</p>
        <h2 className="text-3xl font-bold text-center text-[#1d1d1d] mb-3">Model evolution</h2>
        <p className="text-[#6b5f7a] text-center mb-14 font-light">
          Every training run documented. We believe in transparent research.
        </p>

        <div className="space-y-6">
          {/* v1.0 */}
          <TrainingEntry
            date="April 3, 2026"
            title="Initial release v1.0"
            description="First multi-signal model. Trained on 55,750 filtered examples across 8 specialized signals: intent classification, entity extraction, triage, query expansion, answer generation, summarization, sentiment analysis, and importance scoring."
            stats={[
              { value: "55,750", label: "examples" },
              { value: "8", label: "signals" },
              { value: "3", label: "epochs" },
              { value: "~6 hrs", label: "training" },
            ]}
            tags={["intent", "extract", "triage", "expand", "answer", "summarize", "sentiment", "importance"]}
          />

          {/* v1.1 */}
          <TrainingEntry
            date="April 5, 2026"
            title="Conversational quality v1.1"
            description="Major quality improvement in answer generation. Added conversational formatting with citations, multi-turn conversation support, and graceful uncertainty handling. Introduced reasoning phrases that make answers feel like a knowledgeable colleague."
            stats={[
              { value: "53,901", label: "examples" },
              { value: "10", label: "signals" },
              { value: "~2 hrs", label: "training" },
            ]}
            tags={["multiturn", "dontknow", "conversational answers", "reasoning phrases"]}
          />

          {/* v1.2 */}
          <TrainingEntry
            date="April 6, 2026"
            title="Relationship intelligence v1.2"
            description="Full 12-signal model with memory relationship detection (7 link types) and contradiction detection. Deployed to production on Google Cloud infrastructure."
            stats={[
              { value: "61,178", label: "examples" },
              { value: "12", label: "signals" },
              { value: "~8 hrs", label: "training" },
              { value: "21,795", label: "steps" },
            ]}
            tags={["link detection", "ambient intelligence", "contradiction detection", "7 relationship types"]}
          />

          {/* v1.4 */}
          <TrainingEntry
            date="April 9, 2026"
            title="Quality and faithfulness v1.4"
            description="Targeted quality improvements with 8,000 faithful extraction examples, 5,000 formatted answers, and 4,000 clean JSON examples. Fixes hallucination in entity extraction and ensures consistent output formatting across all signals."
            stats={[
              { value: "82,314", label: "examples" },
              { value: "12", label: "signals" },
              { value: "~10 hrs", label: "training" },
              { value: "29,325", label: "steps" },
            ]}
            tags={["faithful extraction", "formatted answers", "clean JSON", "post-processing"]}
            current
          />

          {/* v1.5 */}
          <TrainingEntry
            date="In Progress"
            title="Knowledge compilation v1.5"
            description="Introducing compile and lint capabilities with 18,000 new targeted examples. Focused on summary quality, reasoning depth, and retrieval accuracy. Incorporating user feedback from production deployment."
            stats={[
              { value: "~100,000", label: "target" },
              { value: "12+", label: "signals" },
              { value: "18,000", label: "new examples" },
            ]}
            tags={["compile", "lint", "reasoning", "faithful extraction", "DPO training"]}
            upcoming
          />
        </div>
      </section>

      {/* Benchmarks */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-4 text-center">Benchmarks</p>
        <h2 className="text-3xl font-bold text-center text-[#1d1d1d] mb-3">
          Evaluation on real organizational data
        </h2>
        <p className="text-[#6b5f7a] text-center mb-14 font-light">
          All benchmarks evaluated against meeting transcripts, email threads, Slack conversations, and project documents.
        </p>

        <div className="bg-white/60 border border-[#d4cade] rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#d4cade]">
                <th className="text-left px-6 py-4 font-semibold text-[#1d1d1d]">Signal</th>
                <th className="text-left px-6 py-4 font-semibold text-[#1d1d1d]">Description</th>
                <th className="text-right px-6 py-4 font-semibold text-[#1d1d1d]">Accuracy</th>
                <th className="text-right px-6 py-4 font-semibold text-[#1d1d1d]">Latency</th>
              </tr>
            </thead>
            <tbody className="text-[#6b5f7a]">
              <BenchmarkRow signal="Intent Classification" desc="Route queries to the right strategy" accuracy="97%" latency="270ms" />
              <BenchmarkRow signal="Memory Triage" desc="Auto-classify and summarize" accuracy="94%" latency="2.1s" />
              <BenchmarkRow signal="Entity Extraction" desc="People, orgs, decisions, actions" accuracy="92%" latency="1.8s" />
              <BenchmarkRow signal="Sentiment Analysis" desc="Emotional tone detection" accuracy="91%" latency="350ms" />
              <BenchmarkRow signal="Relationship Linking" desc="Cross-memory connections" accuracy="89%" latency="1.5s" />
              <BenchmarkRow signal="Query Expansion" desc="Enrich vague queries" accuracy="87%" latency="700ms" />
              <BenchmarkRow signal="Answer Generation" desc="Cited conversational answers" accuracy="85%" latency="4.2s" />
            </tbody>
          </table>
        </div>
      </section>

      {/* Data Ethics */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-4 text-center">Data Ethics</p>
        <h2 className="text-3xl font-bold text-center text-[#1d1d1d] mb-3">
          How we source and handle training data
        </h2>
        <p className="text-[#6b5f7a] text-center mb-14 font-light">
          We take data ethics seriously. No real user data is used for training.
        </p>
        <div className="grid sm:grid-cols-3 gap-5">
          <EthicsCard
            title="No real user data"
            desc="Trained entirely on synthetic data and ethically sourced public datasets. No customer data, no scraped content."
          />
          <EthicsCard
            title="Synthetic generation"
            desc="Seed-and-expand methodology: hand-crafted examples per signal expanded to thousands using controlled generation, then quality-filtered."
          />
          <EthicsCard
            title="Continuous evaluation"
            desc="Every version evaluated against held-out test sets with human review. All benchmarks and training parameters published transparently."
          />
        </div>
      </section>

      {/* Infrastructure */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-4 text-center">Infrastructure</p>
        <h2 className="text-3xl font-bold text-center text-[#1d1d1d] mb-3">What we use</h2>
        <p className="text-[#6b5f7a] text-center mb-14 font-light">
          The tools and services powering Rabbit's training, evaluation, and deployment.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <InfraCard letter="G" name="Google Cloud Platform" desc="Production inference and model serving." />
          <InfraCard letter="R" name="RunPod" desc="GPU compute for training. A100 instances with Unsloth." />
          <InfraCard letter="H" name="Hugging Face" desc="Model hosting and distribution." />
          <InfraCard letter="F" name="FastEmbed" desc="Local embedding model. Zero external calls." />
        </div>
      </section>

      {/* Open Evaluation */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-4 text-center">Open Evaluation</p>
        <h2 className="text-3xl font-bold text-center text-[#1d1d1d] mb-3">What we measure and why</h2>
        <p className="text-[#6b5f7a] text-center mb-14 font-light">
          Every capability is evaluated against specific quality criteria across model versions.
        </p>
        <div className="space-y-4">
          <EvalItem num="01" title="Faithfulness" desc="Does the model only state facts present in the source? v1.4 scores 92%. v1.5 targets 97%+." />
          <EvalItem num="02" title="Citation accuracy" desc="Does every claim point to the correct source? We measure source attribution precision across answer tasks." />
          <EvalItem num="03" title="Format compliance" desc="Does the model produce clean, structured JSON? v1.4 achieves 95%+ clean output with post-processing." />
          <EvalItem num="04" title="Graceful uncertainty" desc="When the answer is not in context, does the model say so? Trained with explicit don't-know signal data." />
          <EvalItem num="05" title="Human preference" desc="Side-by-side evaluation against baselines. v2.0 will introduce DPO from production preference pairs." />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-2xl font-bold text-[#1d1d1d] mb-3">Follow our research</h2>
        <p className="text-[#6b5f7a] mb-8 font-light">Get updates on new model releases and benchmark results.</p>
        <Link
          href="/login"
          className="bg-[#8069af] text-white px-7 py-3.5 rounded-xl font-medium hover:bg-[#6d5a96] transition"
        >
          Join the waitlist
        </Link>
      </section>

      <Footer />
    </main>
  );
}

/* --- Components --- */

function TrainingEntry({
  date, title, description, stats, tags, current, upcoming,
}: {
  date: string; title: string; description: string;
  stats: { value: string; label: string }[];
  tags: string[];
  current?: boolean; upcoming?: boolean;
}) {
  return (
    <div className={`border rounded-2xl p-7 ${current ? "bg-white/70 border-[#8069af]" : upcoming ? "bg-white/30 border-dashed border-[#c2a6cf]" : "bg-white/50 border-[#d4cade]"}`}>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs text-[#8069af] font-medium">{date}</span>
        {current && <span className="text-[10px] bg-[#8069af] text-white px-2 py-0.5 rounded-full font-medium">Current</span>}
        {upcoming && <span className="text-[10px] bg-[#c2a6cf] text-[#1d1d1d] px-2 py-0.5 rounded-full font-medium">In Progress</span>}
      </div>
      <h3 className="text-lg font-semibold text-[#1d1d1d] mb-2">{title}</h3>
      <p className="text-sm text-[#6b5f7a] leading-relaxed font-light mb-5">{description}</p>
      <div className="flex flex-wrap gap-4 mb-4">
        {stats.map((s) => (
          <div key={s.label}>
            <span className="text-lg font-bold text-[#1d1d1d]">{s.value}</span>
            <span className="text-xs text-[#6b5f7a] ml-1">{s.label}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-[11px] font-mono bg-[#eee9f4] text-[#8069af] px-2.5 py-1 rounded-lg border border-[#d4cade]">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function BenchmarkRow({ signal, desc, accuracy, latency }: { signal: string; desc: string; accuracy: string; latency: string }) {
  return (
    <tr className="border-b border-[#d4cade]/50 last:border-0">
      <td className="px-6 py-3.5 font-medium text-[#1d1d1d]">{signal}</td>
      <td className="px-6 py-3.5">{desc}</td>
      <td className="px-6 py-3.5 text-right font-semibold text-[#8069af]">{accuracy}</td>
      <td className="px-6 py-3.5 text-right font-mono text-[13px]">{latency}</td>
    </tr>
  );
}

function EthicsCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white/50 border border-[#d4cade] rounded-2xl p-6">
      <h3 className="font-semibold text-[#1d1d1d] mb-2 text-[15px]">{title}</h3>
      <p className="text-sm text-[#6b5f7a] leading-relaxed font-light">{desc}</p>
    </div>
  );
}

function InfraCard({ letter, name, desc }: { letter: string; name: string; desc: string }) {
  return (
    <div className="bg-white/50 border border-[#d4cade] rounded-2xl p-5">
      <div className="w-10 h-10 rounded-xl bg-[#8069af]/10 flex items-center justify-center mb-3">
        <span className="text-lg font-bold text-[#8069af]">{letter}</span>
      </div>
      <h3 className="font-semibold text-[#1d1d1d] text-sm mb-1">{name}</h3>
      <p className="text-xs text-[#6b5f7a] font-light">{desc}</p>
    </div>
  );
}

function EvalItem({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="bg-white/50 border border-[#d4cade] rounded-2xl p-6 flex gap-5">
      <span className="text-2xl font-bold text-[#c2a6cf] shrink-0">{num}</span>
      <div>
        <h3 className="font-semibold text-[#1d1d1d] mb-1">{title}</h3>
        <p className="text-sm text-[#6b5f7a] leading-relaxed font-light">{desc}</p>
      </div>
    </div>
  );
}


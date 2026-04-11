import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function BenchmarksPage() {
  return (
    <main className="flex-1 bg-[#eee9f4]">
      <Header current="Research" />
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-5">Research</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#1d1d1d]">Benchmarks</h1>
        <p className="mt-6 text-lg text-[#6b5f7a] max-w-2xl mx-auto leading-relaxed font-light">
          Evaluation on real organizational data. All benchmarks evaluated against meeting transcripts,
          email threads, Slack conversations, and project documents.
        </p>
      </section>
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-white/60 border border-[#d4cade] rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-[#d4cade]">
              <th className="text-left px-6 py-4 font-semibold text-[#1d1d1d]">Signal</th>
              <th className="text-left px-6 py-4 font-semibold text-[#1d1d1d]">Description</th>
              <th className="text-right px-6 py-4 font-semibold text-[#1d1d1d]">Accuracy</th>
              <th className="text-right px-6 py-4 font-semibold text-[#1d1d1d]">Latency</th>
            </tr></thead>
            <tbody className="text-[#6b5f7a]">
              <Row s="Intent Classification" d="Route queries to the right strategy" a="97%" l="270ms" />
              <Row s="Memory Triage" d="Auto-classify and summarize" a="94%" l="2.1s" />
              <Row s="Entity Extraction" d="People, orgs, decisions, actions" a="92%" l="1.8s" />
              <Row s="Sentiment Analysis" d="Emotional tone detection" a="91%" l="350ms" />
              <Row s="Relationship Linking" d="Cross-memory connections" a="89%" l="1.5s" />
              <Row s="Query Expansion" d="Enrich vague queries" a="87%" l="700ms" />
              <Row s="Answer Generation" d="Cited conversational answers" a="85%" l="4.2s" />
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[#6b5f7a] text-center mt-8 font-light">
          Benchmarks are run on each model version. v1.4 results shown. v1.5 targets 95%+ across all signals.
        </p>
      </section>
      <Footer />
    </main>
  );
}
function Row({ s, d, a, l }: { s: string; d: string; a: string; l: string }) {
  return (<tr className="border-b border-[#d4cade]/50 last:border-0"><td className="px-6 py-3.5 font-medium text-[#1d1d1d]">{s}</td><td className="px-6 py-3.5">{d}</td><td className="px-6 py-3.5 text-right font-semibold text-[#8069af]">{a}</td><td className="px-6 py-3.5 text-right font-mono text-[13px]">{l}</td></tr>);
}

import Link from "next/link";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function SignalsPage() {
  return (
    <main className="flex-1 bg-[#eee9f4]">
      <Header current="Product" />
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-5">Product</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#1d1d1d]">The 12 Signals</h1>
        <p className="mt-6 text-lg text-[#6b5f7a] max-w-2xl mx-auto leading-relaxed font-light">
          Each signal is a specialized capability trained into the same model.
          One architecture, twelve ways to process organizational knowledge.
        </p>
      </section>
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="space-y-4">
          <S num="01" name="Intent" tag="INTENT" desc="Classifies natural language queries into precise intents: factual, entity, temporal, synthesis, actions, history, or aggregation." latency="270ms" />
          <S num="02" name="Extract" tag="EXTRACT" desc="Pulls people, organizations, decisions, action items, dates, and topics from any text. Returns structured JSON." latency="1.8s" />
          <S num="03" name="Triage" tag="TRIAGE" desc="Auto-classifies incoming content into types (meeting, decision, task, insight) with summaries and tags." latency="2.1s" />
          <S num="04" name="Expand" tag="EXPAND" desc="Turns vague queries into precise, comprehensive search queries that capture the user's likely intent." latency="700ms" />
          <S num="05" name="Answer" tag="ANSWER" desc="Generates conversational answers with inline citations [1][2][3], sources section, and follow-up questions." latency="4.2s" />
          <S num="06" name="Summarize" tag="SUMMARIZE" desc="Produces rich 2-4 sentence standalone summaries preserving every decision, name, and action item." latency="400ms" />
          <S num="07" name="Sentiment" tag="SENTIMENT" desc="Classifies tone as positive, negative, neutral, tense, or urgent." latency="270ms" />
          <S num="08" name="Importance" tag="IMPORTANCE" desc="Scores content 1-5 with a reason explaining the score." latency="300ms" />
          <S num="09" name="Link" tag="LINK" desc="Detects relationships between memories across 7 types: same_topic, depends_on, contradicts, continuation_of, same_people, causes, temporal." latency="1.5s" />
          <S num="10" name="Ambient" tag="AMBIENT" desc="Detects contradictions and forgotten commitments by comparing current context against stored memories." latency="400ms" />
          <S num="11" name="Multi-turn" tag="MULTITURN" desc="Handles follow-up questions with context from the previous conversation turn." latency="4.2s" />
          <S num="12" name="Graceful Uncertainty" tag="DONTKNOW" desc="When the answer is not in the data, says so clearly and suggests where to find it." latency="4.2s" />
        </div>
      </section>
      <section className="py-16 text-center">
        <Link href="/developers" className="bg-[#1d1d1d] text-white px-7 py-3.5 rounded-xl font-medium hover:bg-[#333] transition">See the API docs</Link>
      </section>
      <Footer />
    </main>
  );
}
function S({ num, name, tag, desc, latency }: { num: string; name: string; tag: string; desc: string; latency: string }) {
  return (<div className="bg-white/50 border border-[#d4cade] rounded-2xl p-6 flex gap-5"><span className="text-xl font-bold text-[#c2a6cf] shrink-0 w-8">{num}</span><div className="flex-1"><div className="flex items-center gap-3 mb-2"><h3 className="font-semibold text-[#1d1d1d]">{name}</h3><span className="text-[10px] font-mono text-[#8069af] bg-[#8069af]/10 px-2 py-0.5 rounded-lg">[{tag}]</span></div><p className="text-sm text-[#6b5f7a] leading-relaxed font-light">{desc}</p></div><span className="text-xs font-mono text-[#6b5f7a] shrink-0">{latency}</span></div>);
}

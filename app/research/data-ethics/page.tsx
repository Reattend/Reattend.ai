import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function DataEthicsPage() {
  return (
    <main className="flex-1 bg-[#eee9f4]">
      <Header current="Research" />
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-5">Research</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#1d1d1d]">Data Ethics</h1>
        <p className="mt-6 text-lg text-[#6b5f7a] max-w-2xl mx-auto leading-relaxed font-light">
          How we source and handle training data. We take data ethics seriously.
          No real user data is used for training.
        </p>
      </section>
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="space-y-6">
          <Card title="No real user data" desc="Trained entirely on synthetic data and ethically sourced public datasets. No customer data, no scraped content. When organizations deploy Rabbit, their data stays on their infrastructure and is never used for model training." />
          <Card title="Synthetic generation methodology" desc="We use a seed-and-expand approach: hand-crafted examples per signal are expanded to thousands using controlled generation with Claude API, then quality-filtered through automated and human review. Each training example is verified for format compliance, factual consistency, and diversity." />
          <Card title="Continuous evaluation" desc="Every version is evaluated against held-out test sets with human review. All benchmarks, training parameters, and model versions are published transparently in our research log." />
          <Card title="No data sharing across tenants" desc="Each API key maps to an isolated storage namespace. Memories, embeddings, and knowledge graphs are strictly separated. No data from one tenant is ever accessible to another." />
          <Card title="Right to deletion" desc="Any user can delete their memories at any time through the API. Deletion is permanent and immediate across all storage layers including vector indices and the knowledge graph." />
        </div>
      </section>
      <Footer />
    </main>
  );
}
function Card({ title, desc }: { title: string; desc: string }) {
  return (<div className="bg-white/50 border border-[#d4cade] rounded-2xl p-7"><h3 className="font-semibold text-[#1d1d1d] mb-2">{title}</h3><p className="text-sm text-[#6b5f7a] leading-relaxed font-light">{desc}</p></div>);
}

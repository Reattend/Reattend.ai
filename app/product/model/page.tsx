import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function ModelPage() {
  return (
    <main className="flex-1 bg-[#eee9f4]">
      <Header current="Product" />
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-5">Product</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#1d1d1d]">The Model</h1>
        <p className="mt-6 text-lg text-[#6b5f7a] max-w-2xl mx-auto leading-relaxed font-light">
          Rabbit is a fine-tuned 3.8B parameter language model built specifically for organizational memory.
          Small enough for on-premise deployment. Specialized enough to outperform general-purpose models on memory tasks.
        </p>
      </section>
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          <Stat label="Base model" value="Phi-3.5 Mini Instruct" />
          <Stat label="Parameters" value="3.8 billion" />
          <Stat label="Training examples" value="82,314" />
          <Stat label="Quantization" value="4-bit (2.2GB)" />
          <Stat label="Signals" value="12 specialized tasks" />
          <Stat label="Fine-tuning" value="LoRA (r=16, alpha=16)" />
        </div>
        <div className="bg-white/50 border border-[#d4cade] rounded-2xl p-7">
          <h3 className="font-semibold text-[#1d1d1d] mb-3">Architecture decisions</h3>
          <p className="text-sm text-[#6b5f7a] leading-relaxed font-light mb-4">We chose Phi-3.5 Mini as our base for three reasons: it excels at structured output and instruction following, it is commercially usable under the MIT license, and at 3.8B parameters it fits on a single T4 GPU with room for embeddings and reranking models alongside it.</p>
          <p className="text-sm text-[#6b5f7a] leading-relaxed font-light">All 12 signals share the same weights. Signal routing happens through task-specific system prompts and prefix tokens at inference time. This means a single deployment serves all capabilities with no additional model loading.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
function Stat({ label, value }: { label: string; value: string }) {
  return (<div className="bg-white/50 border border-[#d4cade] rounded-2xl p-5"><p className="text-xs text-[#6b5f7a] mb-1">{label}</p><p className="text-lg font-semibold text-[#1d1d1d]">{value}</p></div>);
}

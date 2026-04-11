import Link from "next/link";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function SandboxPage() {
  return (
    <main className="flex-1 bg-[#eee9f4]">
      <Header current="Product" />
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-5">Product</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#1d1d1d]">Sandbox</h1>
        <p className="mt-6 text-lg text-[#6b5f7a] max-w-2xl mx-auto leading-relaxed font-light">
          Try Rabbit without signing up. Paste any text and see how Rabbit processes it in real time.
        </p>
      </section>
      <section className="max-w-3xl mx-auto px-6 pb-24 text-center">
        <div className="bg-white/50 border border-[#d4cade] rounded-2xl p-10">
          <p className="text-[#8069af] font-medium mb-2">Coming soon</p>
          <p className="text-sm text-[#6b5f7a] font-light mb-6">The interactive sandbox is under development. In the meantime, get an API key and try Rabbit directly.</p>
          <Link href="/login" className="bg-[#1d1d1d] text-white px-7 py-3.5 rounded-xl font-medium hover:bg-[#333] transition">Get API key</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default function IndividualsPage() {
  return (
    <main className="flex-1 bg-[#eee9f4]">
      <Header current="Individuals" />

      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-5">For Individuals</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#1d1d1d]">
          Your personal memory, searchable and intelligent
        </h1>
        <p className="mt-6 text-lg text-[#6b5f7a] max-w-2xl mx-auto leading-relaxed font-light">
          Sync your notes, upload meeting recordings, save articles. Ask questions across everything
          you have ever captured. Rabbit remembers so you do not have to.
        </p>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <Link href="/login" className="bg-[#1d1d1d] text-white px-7 py-3.5 rounded-xl font-medium hover:bg-[#333] transition">Get started free</Link>
          <Link href="/developers" className="bg-[#c2a6cf] text-[#1d1d1d] px-7 py-3.5 rounded-xl font-medium hover:bg-[#b396c2] transition">View API docs</Link>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-4 text-center">Use Cases</p>
        <h2 className="text-3xl font-bold text-center text-[#1d1d1d] mb-14">Six ways to use your personal memory</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          <UseCase title="Notes and Obsidian" desc="Sync your vault. Notes become queryable. Wiki-links preserved. Missing connections between notes discovered automatically." code="rabbit sync --obsidian ~/vault" />
          <UseCase title="Meeting memory" desc="Upload recordings. Rabbit transcribes, extracts decisions, action items, and who said what. Links to previous meetings on the same topic." code="rabbit remember --file standup.mp3" />
          <UseCase title="Research and reading" desc="Feed papers (PDF), articles (URL), highlights. Ask which papers discuss a topic. Compile literature reviews automatically." code="rabbit remember --file paper.pdf" />
          <UseCase title="Personal journal" desc="Daily voice memos transcribed and remembered. Ask what you were focused on this week. Sentiment tracking across months of entries." code="rabbit remember --file memo.m4a" />
          <UseCase title="Code and projects" desc="Feed commit messages, PR descriptions, READMEs. Ask why a decision was made. Codebase memory that persists across teams." code="rabbit sync --dir ~/project" />
          <UseCase title="Life admin" desc="Save emails, contracts, receipts, medical records. When does your lease expire? What did the doctor recommend? Everything searchable." code='rabbit remember "Lease expires June 2027"' />
        </div>
      </section>

      {/* How to Use */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-4 text-center">How It Works</p>
        <h2 className="text-3xl font-bold text-center text-[#1d1d1d] mb-14">Three steps to start remembering</h2>
        <div className="space-y-5">
          <StepCard num="1" title="Install" code="pip install rabbit-memory" />
          <StepCard num="2" title="Configure" code='rabbit config set key rab_test_your_key' />
          <StepCard num="3" title="Remember and ask" code={`rabbit remember "Board approved $2M Series A with Sequoia"
rabbit ask "What is our funding status?"
rabbit compile "Sequoia"
rabbit lint`} />
        </div>
      </section>

      {/* Three Ways */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-4 text-center">Three Ways to Use</p>
        <div className="grid sm:grid-cols-3 gap-5">
          <WayCard title="Command Line" desc="rabbit remember, rabbit ask, rabbit sync. Fast, scriptable, works in your terminal." items={["rabbit remember '...'", "rabbit ask '...'", "rabbit sync --obsidian ~/vault", "rabbit lint"]} />
          <WayCard title="Python SDK" desc="Import and use in any Python project. Scripts, notebooks, automations." items={["from rabbit import Rabbit", "rab = Rabbit('key')", "rab.remember('...')", "rab.ask('...')"]} />
          <WayCard title="Reattend App" desc="Full UI with dashboard, knowledge graph, daily digest. Coming soon." items={["Visual memory timeline", "Knowledge graph explorer", "Daily digest email", "Mobile app"]} />
        </div>
      </section>

      {/* Privacy */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-4 text-center">Your Data Stays Yours</p>
        <h2 className="text-3xl font-bold text-center text-[#1d1d1d] mb-6">Fully local mode available</h2>
        <p className="text-[#6b5f7a] text-center max-w-2xl mx-auto mb-8 font-light">
          Rabbit.local() runs everything on your machine. The model, the storage, the search.
          Nothing is sent to any server. Your memories stay on your laptop.
        </p>
        <div className="bg-[#1d1d1d] rounded-xl px-5 py-4 font-mono text-[13px] text-[#eee9f4] overflow-x-auto">
          <pre>{`from rabbit import Rabbit

# Everything runs locally. Zero network calls.
rab = Rabbit.local(storage_path="~/.rabbit/my-memories")
rab.remember("Private note...", source="journal")
answer = rab.ask("What did I write about this?")`}</pre>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-4 text-center">Pricing</p>
        <div className="grid sm:grid-cols-3 gap-5">
          <PriceCard plan="Free" price="$0" items={["500 memories", "20 asks per day", "CLI + SDK access", "Community support"]} cta="Get started" />
          <PriceCard plan="Pro" price="$15/mo" items={["Unlimited memories", "Unlimited asks", "Reasoning mode", "Priority support"]} cta="Coming soon" featured />
          <PriceCard plan="Self-hosted" price="Free" items={["Run on your machine", "Unlimited everything", "Full privacy", "No server needed"]} cta="Learn more" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-2xl font-bold text-[#1d1d1d] mb-3">Start remembering</h2>
        <p className="text-[#6b5f7a] mb-8 font-light">Free tier. No credit card. Works in 2 minutes.</p>
        <Link href="/login" className="bg-[#1d1d1d] text-white px-7 py-3.5 rounded-xl font-medium hover:bg-[#333] transition">Get free API key</Link>
      </section>

      <Footer />
    </main>
  );
}

function UseCase({ title, desc, code }: { title: string; desc: string; code: string }) {
  return (<div className="bg-white/50 border border-[#d4cade] rounded-2xl p-6"><h3 className="font-semibold text-[#1d1d1d] mb-2">{title}</h3><p className="text-sm text-[#6b5f7a] leading-relaxed font-light mb-4">{desc}</p><code className="block bg-[#1d1d1d] text-[#eee9f4] rounded-lg px-3 py-2 font-mono text-[11px] overflow-x-auto">{code}</code></div>);
}
function StepCard({ num, title, code }: { num: string; title: string; code: string }) {
  return (<div className="bg-white/50 border border-[#d4cade] rounded-2xl p-6"><div className="flex items-center gap-3 mb-3"><span className="inline-block w-7 h-7 rounded-full bg-[#8069af] text-white text-xs font-semibold leading-7 text-center">{num}</span><h3 className="font-semibold text-[#1d1d1d]">{title}</h3></div><pre className="bg-[#1d1d1d] text-[#eee9f4] rounded-xl px-4 py-3 font-mono text-[13px] overflow-x-auto whitespace-pre-wrap">{code}</pre></div>);
}
function WayCard({ title, desc, items }: { title: string; desc: string; items: string[] }) {
  return (<div className="bg-white/50 border border-[#d4cade] rounded-2xl p-6"><h3 className="font-semibold text-[#1d1d1d] mb-1">{title}</h3><p className="text-sm text-[#6b5f7a] font-light mb-4">{desc}</p><ul className="space-y-1.5">{items.map(i => <li key={i} className="text-xs font-mono text-[#8069af]">{i}</li>)}</ul></div>);
}
function PriceCard({ plan, price, items, cta, featured }: { plan: string; price: string; items: string[]; cta: string; featured?: boolean }) {
  return (<div className={`border rounded-2xl p-6 ${featured ? "bg-white/70 border-[#8069af]" : "bg-white/50 border-[#d4cade]"}`}><h3 className="font-semibold text-[#1d1d1d] mb-1">{plan}</h3><p className="text-3xl font-bold text-[#8069af] mb-4">{price}</p><ul className="space-y-2 mb-6">{items.map(i => <li key={i} className="text-sm text-[#6b5f7a] flex items-start gap-2"><span className="text-[#8069af] mt-0.5">&#x2713;</span>{i}</li>)}</ul><Link href="/login" className={`block text-center py-2.5 rounded-xl font-medium text-sm transition ${featured ? "bg-[#8069af] text-white hover:bg-[#6d5a96]" : "bg-[#1d1d1d] text-white hover:bg-[#333]"}`}>{cta}</Link></div>);
}
function Header({ current }: { current: string }) {
  const links = ["Home", "Research", "Product", "Enterprise", "Developers", "Individuals", "Future of Work"];
  const hrefs: Record<string, string> = { Home: "/", Research: "/research", Product: "/product", Enterprise: "/enterprise", Developers: "/developers", Individuals: "/individuals", "Future of Work": "/future" };
  return (<header className="px-6 py-5 flex items-center justify-between max-w-7xl mx-auto w-full"><div className="flex items-center gap-10"><Link href="/" className="flex items-center gap-2"><Image src="/logo.png" alt="Rabbit" width={28} height={28} /><span className="text-lg font-bold tracking-tight text-[#1d1d1d]">rabbit</span></Link><nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-[#6b5f7a]">{links.map(l => <Link key={l} href={hrefs[l]} className={l === current ? "text-[#1d1d1d]" : "hover:text-[#1d1d1d] transition"}>{l}</Link>)}</nav></div><div className="flex items-center gap-4 text-[13px]"><Link href="/login" className="bg-[#6d5a96] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#5c4a82] transition">Get API</Link><a href="https://reattend.ai" className="bg-[#1d1d1d] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#333] transition">Reattend</a></div></header>);
}

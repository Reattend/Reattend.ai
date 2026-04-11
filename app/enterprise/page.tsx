import Link from "next/link";
import Image from "next/image";

export default function EnterprisePage() {
  return (
    <main className="flex-1 bg-[#eee9f4]">
      <Header current="Enterprise" />

      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-5">Enterprise</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#1d1d1d]">
          Your data. Your infrastructure. Your model.
        </h1>
        <p className="mt-6 text-lg text-[#6b5f7a] max-w-2xl mx-auto leading-relaxed font-light">
          Organizations that handle sensitive information need more than an API promise.
          They need memory intelligence that runs entirely within their own walls. Rabbit deploys
          on your hardware, processes data that never leaves your network, and can be fine-tuned to your domain.
        </p>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <Link href="/login" className="bg-[#1d1d1d] text-white px-7 py-3.5 rounded-xl font-medium hover:bg-[#333] transition">Talk to sales</Link>
          <Link href="/product" className="bg-[#c2a6cf] text-[#1d1d1d] px-7 py-3.5 rounded-xl font-medium hover:bg-[#b396c2] transition">See the product</Link>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-3 gap-5">
          <StatCard value="0" label="External API calls" />
          <StatCard value="0" label="Data leaves your network" />
          <StatCard value="100%" label="Code you can audit" />
        </div>
      </section>

      {/* Why Enterprise */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-4 text-center">Why Enterprise Teams Choose Rabbit</p>
        <h2 className="text-3xl font-bold text-center text-[#1d1d1d] mb-14">Built for organizations where data sensitivity is non-negotiable</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          <Card title="Complete data sovereignty" desc="Every byte of your organizational data stays inside your network. No external API calls. No third-party processors. No data residency surprises." />
          <Card title="Air-gapped deployment" desc="Rabbit runs fully offline. No internet connection required after initial setup. Designed for classified environments, secure facilities, and regulated industries." />
          <Card title="Predictable cost at scale" desc="Fixed annual license per deployment. No per-token billing, no usage spikes, no surprise invoices. The more your team uses it, the cheaper it gets per query." />
        </div>
      </section>

      {/* Deployment Options */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-4 text-center">Deployment</p>
        <h2 className="text-3xl font-bold text-center text-[#1d1d1d] mb-14">Three ways to deploy Rabbit</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          <DeployCard title="Cloud API" desc="Managed by us. Fastest way to get started." items={["OpenAI-compatible endpoint", "99.9% uptime SLA", "Auto-scaling", "SOC 2 compliant", "Single-tenant option available"]} />
          <DeployCard title="On-Premise" desc="Rabbit runs on your GPU servers. Your team manages the infrastructure." items={["Docker / Kubernetes", "Air-gapped capable", "Custom fine-tuning included", "HIPAA / GDPR / SOC 2 ready", "Full audit logging", "Dedicated support engineer"]} />
          <DeployCard title="Embedded" desc="Rabbit inside your product. White-label memory intelligence." items={["White-label API", "Dedicated model instance", "Custom fine-tuning", "Volume pricing", "Priority SLA"]} />
        </div>
      </section>

      {/* Turnkey */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-4 text-center">Turnkey Deployment</p>
        <h2 className="text-3xl font-bold text-center text-[#1d1d1d] mb-3">Reattend + Rabbit. One box. Nothing to build.</h2>
        <p className="text-[#6b5f7a] text-center max-w-2xl mx-auto mb-14 font-light">
          For teams that want to solve organizational amnesia without building a single integration.
          Install it on your server, connect your Slack, email, and calendar, and watch your organizational
          knowledge build itself. The entire intelligence stack is technology we built.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <BundleItem title="Rabbit v1.4" desc="12-signal memory intelligence engine" />
          <BundleItem title="Reattend Platform" desc="Web app, search, recall" />
          <BundleItem title="Pre-built integrations" desc="Slack, Gmail, Google Calendar, custom API" />
          <BundleItem title="Local embedding model" desc="Zero external calls" />
        </div>
        <p className="text-center text-sm text-[#8069af] font-medium">Deploy once. Knowledge forms automatically.</p>
      </section>

      {/* Security */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-4 text-center">Security and Compliance</p>
        <h2 className="text-3xl font-bold text-center text-[#1d1d1d] mb-14">Enterprise-grade security at every layer</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          <Card title="End-to-end encryption" desc="Data encrypted at rest (AES-256) and in transit (TLS 1.3). Encryption keys managed by your team, not ours." />
          <Card title="Role-based access control" desc="Granular permissions for who can query, who can ingest, who can administer. Integrated with your existing identity provider (SAML, OIDC)." />
          <Card title="Full audit trail" desc="Every query, every ingest, every access logged with timestamp, user, and action. Exportable for compliance review." />
          <Card title="Data retention policies" desc="Configure automatic data expiry, right-to-delete, and retention schedules. Meet GDPR Article 17 and industry-specific requirements." />
          <Card title="Network isolation" desc="On-premise deployments run in complete network isolation. No outbound connections required. VPC peering available for cloud deployments." />
          <Card title="Compliance frameworks" desc="Architecture designed for HIPAA, GDPR, SOC 2 Type II, ISO 27001, and FedRAMP. Compliance documentation available on request." />
        </div>
      </section>

      {/* Process */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-4 text-center">How It Works</p>
        <h2 className="text-3xl font-bold text-center text-[#1d1d1d] mb-14">From first call to deployment in two weeks</h2>
        <div className="space-y-4">
          <ProcessStep num="1" title="Discovery call" desc="We learn about your team, your data sources, your compliance requirements, and what organizational knowledge you are losing today. 30 minutes." />
          <ProcessStep num="2" title="Architecture review" desc="Our engineering team designs a deployment plan that fits your infrastructure: cloud provider, GPU requirements, network topology, identity integration." />
          <ProcessStep num="3" title="Pilot deployment" desc="Rabbit is deployed on your infrastructure with a representative dataset. Your team tests query quality, latency, and integration with existing tools." />
          <ProcessStep num="4" title="Domain fine-tuning" desc="If needed, we fine-tune Rabbit on your industry vocabulary and organizational patterns. Legal, medical, financial, or engineering terminology." />
          <ProcessStep num="5" title="Production rollout" desc="Full deployment with monitoring, alerting, and a dedicated support engineer. Ongoing model updates and retraining as your knowledge base grows." />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-2xl font-bold text-[#1d1d1d] mb-3">Let&apos;s talk about your organization&apos;s memory</h2>
        <p className="text-[#6b5f7a] mb-8 font-light">Typical response time: same day. Typical deployment: 2 weeks.</p>
        <Link href="/login" className="bg-[#1d1d1d] text-white px-7 py-3.5 rounded-xl font-medium hover:bg-[#333] transition">Talk to us</Link>
      </section>

      <Footer />
    </main>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (<div className="bg-white/60 border border-[#d4cade] rounded-2xl p-6 text-center"><p className="text-4xl font-bold text-[#8069af]">{value}</p><p className="text-sm text-[#6b5f7a] mt-1">{label}</p></div>);
}
function Card({ title, desc }: { title: string; desc: string }) {
  return (<div className="bg-white/50 border border-[#d4cade] rounded-2xl p-6"><h3 className="font-semibold text-[#1d1d1d] mb-2 text-[15px]">{title}</h3><p className="text-sm text-[#6b5f7a] leading-relaxed font-light">{desc}</p></div>);
}
function DeployCard({ title, desc, items }: { title: string; desc: string; items: string[] }) {
  return (<div className="bg-white/50 border border-[#d4cade] rounded-2xl p-6"><h3 className="font-semibold text-[#1d1d1d] mb-1">{title}</h3><p className="text-sm text-[#6b5f7a] font-light mb-4">{desc}</p><ul className="space-y-1.5">{items.map(i => <li key={i} className="text-sm text-[#6b5f7a] flex items-start gap-2"><span className="text-[#8069af] mt-0.5">&#x2713;</span>{i}</li>)}</ul></div>);
}
function BundleItem({ title, desc }: { title: string; desc: string }) {
  return (<div className="bg-white/50 border border-[#d4cade] rounded-xl p-5 text-center"><h3 className="font-semibold text-[#1d1d1d] text-sm mb-1">{title}</h3><p className="text-xs text-[#6b5f7a] font-light">{desc}</p></div>);
}
function ProcessStep({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (<div className="bg-white/50 border border-[#d4cade] rounded-2xl p-6 flex gap-5"><span className="text-2xl font-bold text-[#c2a6cf] shrink-0">{num}</span><div><h3 className="font-semibold text-[#1d1d1d] mb-1">{title}</h3><p className="text-sm text-[#6b5f7a] leading-relaxed font-light">{desc}</p></div></div>);
}
function Header({ current }: { current: string }) {
  const links = ["Home", "Research", "Product", "Enterprise", "Developers", "Individuals", "Future of Work"];
  const hrefs: Record<string, string> = { Home: "/", Research: "/research", Product: "/product", Enterprise: "/enterprise", Developers: "/developers", Individuals: "/individuals", "Future of Work": "/future" };
  return (<header className="px-6 py-5 flex items-center justify-between max-w-7xl mx-auto w-full"><div className="flex items-center gap-10"><Link href="/" className="flex items-center gap-2"><Image src="/logo.png" alt="Rabbit" width={28} height={28} /><span className="text-lg font-bold tracking-tight text-[#1d1d1d]">rabbit</span></Link><nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-[#6b5f7a]">{links.map(l => <Link key={l} href={hrefs[l]} className={l === current ? "text-[#1d1d1d]" : "hover:text-[#1d1d1d] transition"}>{l}</Link>)}</nav></div><div className="flex items-center gap-4 text-[13px]"><Link href="/login" className="bg-[#6d5a96] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#5c4a82] transition">Get API</Link><a href="https://reattend.ai" className="bg-[#1d1d1d] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#333] transition">Reattend</a></div></header>);
}
function Footer() {
  return (<footer className="bg-[#1d1d1d] text-white px-6 py-16"><div className="max-w-7xl mx-auto"><div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14"><div className="col-span-2 md:col-span-1"><div className="flex items-center gap-2 mb-4"><Image src="/logo.png" alt="Rabbit" width={24} height={24} className="brightness-0 invert" /><span className="font-bold">Rabbit</span></div><p className="text-sm text-neutral-400 leading-relaxed">AI research and products that put organizational memory at the core. Built by Reattend.</p></div><FCol title="Research" links={["Overview", "Training Log", "Benchmarks", "Data Ethics"]} /><FCol title="Product" links={["Model", "Signals", "Sandbox", "API Docs"]} /><FCol title="Enterprise" links={["Overview", "Deployment", "Compliance", "Contact Sales"]} /><FCol title="Company" links={["Reattend Platform", "Future of Work", "Contact"]} /></div><div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500"><span>2026 Reattend, Inc. All rights reserved.</span><div className="flex gap-6"><a href="#" className="hover:text-white transition">Privacy</a><a href="#" className="hover:text-white transition">Terms</a></div></div></div></footer>);
}
function FCol({ title, links }: { title: string; links: string[] }) {
  return (<div><h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4">{title}</h4><ul className="space-y-2.5">{links.map(l => <li key={l}><a href="#" className="text-sm text-neutral-400 hover:text-white transition">{l}</a></li>)}</ul></div>);
}

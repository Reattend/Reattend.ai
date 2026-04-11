import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function DeploymentPage() {
  return (
    <main className="flex-1 bg-[#eee9f4]">
      <Header current="Enterprise" />
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-5">Enterprise</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#1d1d1d]">Deployment</h1>
        <p className="mt-6 text-lg text-[#6b5f7a] max-w-2xl mx-auto leading-relaxed font-light">
          Three ways to deploy Rabbit. Choose the model that fits your security posture and team structure.
        </p>
      </section>
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="space-y-6">
          <Card title="Cloud API" desc="Managed by us. Fastest way to get started. Your data is processed on isolated infrastructure and never shared across tenants." items={["OpenAI-compatible endpoint", "99.9% uptime SLA", "Auto-scaling", "Single-tenant option available"]} />
          <Card title="On-Premise" desc="Rabbit runs on your GPU servers. Your team manages the infrastructure. Data never touches an external network." items={["Docker / Kubernetes", "Air-gapped capable", "Custom fine-tuning included", "HIPAA / GDPR / SOC 2 ready", "Full audit logging"]} />
          <Card title="Embedded" desc="Rabbit inside your product. White-label memory intelligence for your customers under your own brand." items={["White-label API", "Dedicated model instance", "Custom fine-tuning", "Volume pricing"]} />
        </div>
        <div className="text-center mt-12">
          <a href="https://cal.com/reattend/30min" target="_blank" rel="noopener noreferrer" className="bg-[#1d1d1d] text-white px-7 py-3.5 rounded-xl font-medium hover:bg-[#333] transition">Schedule a deployment call</a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
function Card({ title, desc, items }: { title: string; desc: string; items: string[] }) {
  return (<div className="bg-white/50 border border-[#d4cade] rounded-2xl p-7"><h3 className="font-semibold text-[#1d1d1d] mb-2 text-lg">{title}</h3><p className="text-sm text-[#6b5f7a] font-light mb-4">{desc}</p><ul className="space-y-1.5">{items.map(i => <li key={i} className="text-sm text-[#6b5f7a] flex items-start gap-2"><span className="text-[#8069af] mt-0.5">&#x2713;</span>{i}</li>)}</ul></div>);
}

import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function CompliancePage() {
  return (
    <main className="flex-1 bg-[#eee9f4]">
      <Header current="Enterprise" />
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-xs font-semibold text-[#8069af] tracking-widest uppercase mb-5">Enterprise</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#1d1d1d]">Compliance</h1>
        <p className="mt-6 text-lg text-[#6b5f7a] max-w-2xl mx-auto leading-relaxed font-light">
          Enterprise-grade security at every layer. Built for industries where a data breach is not an inconvenience but an existential risk.
        </p>
      </section>
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 gap-5">
          <Card title="End-to-end encryption" desc="Data encrypted at rest (AES-256) and in transit (TLS 1.3). Encryption keys managed by your team." />
          <Card title="Role-based access control" desc="Granular permissions for who can query, ingest, and administer. Integrated with SAML and OIDC providers." />
          <Card title="Full audit trail" desc="Every query, every ingestion, every access logged with timestamp, user, and action. Exportable for compliance review." />
          <Card title="Data retention policies" desc="Configure automatic data expiry, right-to-delete, and retention schedules. GDPR Article 17 compliant." />
          <Card title="Network isolation" desc="On-premise deployments run in complete network isolation. No outbound connections required." />
          <Card title="Framework support" desc="Architecture designed for HIPAA, GDPR, SOC 2 Type II, ISO 27001, and FedRAMP. Documentation available on request." />
        </div>
        <div className="text-center mt-12">
          <a href="https://cal.com/reattend/30min" target="_blank" rel="noopener noreferrer" className="bg-[#1d1d1d] text-white px-7 py-3.5 rounded-xl font-medium hover:bg-[#333] transition">Talk to us about compliance</a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
function Card({ title, desc }: { title: string; desc: string }) {
  return (<div className="bg-white/50 border border-[#d4cade] rounded-2xl p-6"><h3 className="font-semibold text-[#1d1d1d] mb-2">{title}</h3><p className="text-sm text-[#6b5f7a] leading-relaxed font-light">{desc}</p></div>);
}

import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default function EnterprisePage() {
  return (
    <main className="flex-1 bg-[#eee9f4]">
      {/* ================================================================ */}
      {/* HEADER                                                           */}
      {/* ================================================================ */}
      <header className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="Rabbit" width={26} height={26} />
            <span className="text-[15px] font-bold tracking-tight text-[#1d1d1d]">rabbit</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-7 text-[12.5px] font-medium text-[#6b5f7a]">
            <Link href="/research" className="hover:text-[#1d1d1d] transition">Research</Link>
            <Link href="/product" className="hover:text-[#1d1d1d] transition">Model</Link>
            <Link href="/enterprise" className="text-[#1d1d1d]">Enterprise</Link>
            <Link href="/developers" className="hover:text-[#1d1d1d] transition">API</Link>
            <Link href="/future" className="hover:text-[#1d1d1d] transition">Vision</Link>
            <Link href="/contact" className="hover:text-[#1d1d1d] transition">Contact</Link>
          </nav>
        </div>
        <div className="flex items-center gap-3 text-[12.5px]">
          <Link href="/login" className="text-[#6b5f7a] hover:text-[#1d1d1d] font-medium transition">Log in</Link>
          <a href="https://cal.com/reattend/30min" target="_blank" rel="noopener noreferrer" className="bg-[#1d1d1d] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#333] transition">
            Talk to Sales
          </a>
        </div>
      </header>

      {/* ================================================================ */}
      {/* HERO                                                             */}
      {/* ================================================================ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-10 left-1/4 w-[600px] h-[600px] rounded-full bg-[#8069af]/[0.07] blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#c2a6cf]/[0.08] blur-[100px]" />

        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-20">
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2 text-[11px] font-medium text-[#8069af] bg-white/60 border border-[#d4cade] px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8069af] animate-pulse-slow" />
              Enterprise Platform / Deployable in Your Environment
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-bold tracking-tight leading-[1.04] text-[#1d1d1d] text-center max-w-5xl mx-auto">
            Organizational memory infrastructure your security team will actually approve
          </h1>
          <p className="mt-7 text-lg sm:text-xl text-[#6b5f7a] max-w-3xl mx-auto leading-relaxed text-center font-light">
            Rabbit runs entirely inside your network. No data leaves. No external model calls.
            No surprise dependencies. Deployable on your GPUs, your Kubernetes cluster, or fully
            air-gapped behind a firewall that has never seen the public internet.
          </p>

          <div className="mt-10 flex gap-3 justify-center flex-wrap">
            <a href="https://cal.com/reattend/30min" target="_blank" rel="noopener noreferrer" className="bg-[#1d1d1d] text-white px-7 py-3.5 rounded-xl font-medium hover:bg-[#333] transition text-sm">
              Schedule Architecture Review
            </a>
            <Link href="/contact" className="bg-[#8069af] text-white px-7 py-3.5 rounded-xl font-medium hover:bg-[#6d5a96] transition text-sm">
              Request Security Packet
            </Link>
            <a href="#tco" className="bg-white/60 text-[#1d1d1d] border border-[#d4cade] px-7 py-3.5 rounded-xl font-medium hover:bg-white/80 transition text-sm">
              Estimate TCO
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <HeroStat value="0" label="External API calls" />
            <HeroStat value="0" label="Bytes that leave your network" />
            <HeroStat value="100%" label="Code you can audit" />
            <HeroStat value="14 days" label="Median time to pilot" />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SOCIAL PROOF / LOGO BAR                                          */}
      {/* ================================================================ */}
      <section className="border-y border-[#d4cade] bg-white/30">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <p className="text-center text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-6">
            Built for organizations where the downside of getting it wrong is catastrophic
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            <VerticalTag label="Healthcare" />
            <VerticalTag label="Legal" />
            <VerticalTag label="Financial Services" />
            <VerticalTag label="Defense" />
            <VerticalTag label="Government" />
            <VerticalTag label="Energy" />
            <VerticalTag label="Pharma" />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* THE CTO PROBLEM                                                  */}
      {/* ================================================================ */}
      <section className="relative dot-bg">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-5 gap-14">
            <div className="lg:col-span-2">
              <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
                For CTOs
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-6">
                You are being asked to add AI without losing control of your data
              </h2>
              <p className="text-[15px] text-[#6b5f7a] font-light leading-relaxed mb-4">
                Every executive in your company wants AI-powered knowledge search.
                Every security review blocks it. Every procurement cycle gets stuck
                on data residency, model provenance, or third-party processor risk.
              </p>
              <p className="text-[15px] text-[#6b5f7a] font-light leading-relaxed">
                Rabbit was built for this exact situation. It ships as a self-contained
                system you deploy inside your perimeter. No external API calls. No
                phone-home telemetry. No third-party model weights. Your security team
                gets a straightforward review. Your executives get their AI. You get
                to keep your job.
              </p>
            </div>

            <div className="lg:col-span-3 space-y-3">
              <ObjectionRow
                objection="What about data residency?"
                answer="Your data never leaves the region you deploy into. Period. Rabbit has no concept of sending information anywhere it was not explicitly configured to send it."
              />
              <ObjectionRow
                objection="Who owns the model weights?"
                answer="Our research lab owns them. You license them. You deploy them in your environment. There is no upstream provider that can change the terms, deprecate a version, or read your queries."
              />
              <ObjectionRow
                objection="What is the blast radius if something breaks?"
                answer="Your deployment. Your environment. Nothing outside of it. There is no shared tenancy, no shared inference stack, no cross-customer data path that could ever exist."
              />
              <ObjectionRow
                objection="How do we handle the right to be forgotten?"
                answer="The architecture supports provable deletion down to individual entities and source documents. GDPR Article 17 is not an afterthought. It is a first-class operation in the API."
              />
              <ObjectionRow
                objection="What if we need to audit every query?"
                answer="Every ingest, query, and access event is logged with actor, timestamp, and full payload. Logs can be streamed to your existing SIEM in real time."
              />
              <ObjectionRow
                objection="Will this pass procurement?"
                answer="MSA, DPA, BAA, and standard security questionnaires ready on day one. We have a legal packet you can hand directly to your procurement team."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* DEPLOYMENT OPTIONS                                               */}
      {/* ================================================================ */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
              Deployment Models
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-4">
              Four ways to deploy. All of them are yours.
            </h2>
            <p className="text-[15px] text-[#6b5f7a] max-w-2xl mx-auto font-light">
              From managed cloud to fully air-gapped. Every option keeps your
              data sovereign. Every option lets you sleep at night.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <DeployCard
              title="Cloud API"
              badge="Fastest Start"
              desc="Fully managed deployment on our infrastructure. Single-tenant option available. Best for teams that want to move quickly without giving up control."
              features={[
                "99.9% uptime SLA",
                "Multi-region failover",
                "Dedicated inference pool",
                "SOC 2 Type II",
                "Private VPC peering",
              ]}
            />
            <DeployCard
              title="Private Cloud"
              badge="Most Popular"
              highlight
              desc="Rabbit deployed inside your AWS, GCP, Azure, or OCI account. You own the infrastructure. We manage the model. Data never leaves your cloud."
              features={[
                "Your cloud, your keys",
                "Kubernetes or VM",
                "Infrastructure-as-code",
                "Customer-managed keys",
                "VPC isolation",
              ]}
            />
            <DeployCard
              title="On-Premise"
              badge="Regulated Industries"
              desc="Full Rabbit deployment on your own hardware, inside your own data center. For healthcare, legal, financial, and government customers where sovereignty is absolute."
              features={[
                "Bare-metal or VMware",
                "GPU or CPU inference",
                "Hardware security modules",
                "HSM key management",
                "Offline updates",
              ]}
            />
            <DeployCard
              title="Air-Gapped"
              badge="Maximum Isolation"
              desc="For classified environments, defense contractors, and facilities with zero inbound or outbound internet. Rabbit ships as a signed, verifiable media set."
              features={[
                "No network required",
                "Manual update cycle",
                "FIPS 140-2 compatible",
                "Signed media delivery",
                "Integrity attestation",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* REFERENCE ARCHITECTURE                                           */}
      {/* ================================================================ */}
      <section className="bg-[#1d1d1d] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <p className="text-[11px] font-semibold text-[#c2a6cf] tracking-[0.15em] uppercase mb-5">
              Reference Architecture
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              What a Rabbit deployment actually looks like
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto font-light">
              A simplified view of a production on-premise deployment. Every layer
              lives inside your network perimeter. There are no arrows pointing out.
            </p>
          </div>

          <div className="bg-white/[0.04] border border-neutral-800 rounded-2xl p-8">
            {/* Layer 1: Your Perimeter */}
            <div className="border border-dashed border-neutral-700 rounded-xl p-6 mb-0">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono text-[#c2a6cf] uppercase tracking-wider">Your Network Perimeter</span>
                <span className="text-[10px] font-mono text-neutral-500">ingress / egress controlled by you</span>
              </div>

              {/* Data sources */}
              <ArchLayer
                label="Data Sources"
                items={["Slack", "Email", "Calendar", "Notion", "Confluence", "CRM", "Custom"]}
                muted
              />
              <ArchArrow />

              {/* Identity */}
              <ArchLayer
                label="Identity / Access"
                items={["SAML", "OIDC", "Okta", "Azure AD", "Ping", "Audit Logging"]}
                muted
              />
              <ArchArrow />

              {/* Rabbit core */}
              <div className="border-2 border-[#8069af] bg-[#8069af]/10 rounded-xl p-5 mb-3">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[10px] font-mono text-[#c2a6cf] uppercase tracking-wider mb-1">Rabbit Core</p>
                    <p className="text-sm font-semibold text-white">The intelligence layer, fully isolated inside your network</p>
                  </div>
                  <span className="text-[10px] font-mono text-[#c2a6cf] bg-[#c2a6cf]/20 px-2 py-0.5 rounded">PROPRIETARY</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <CoreBlock label="Inference" sub="12 signals" />
                  <CoreBlock label="Knowledge Graph" sub="temporal store" />
                  <CoreBlock label="Embeddings" sub="local model" />
                  <CoreBlock label="Orchestrator" sub="query planner" />
                </div>
              </div>
              <ArchArrow />

              {/* Storage */}
              <ArchLayer
                label="Storage Layer"
                items={["Encrypted at rest (AES-256)", "Your KMS", "Your backups", "Your retention rules"]}
                muted
              />
              <ArchArrow />

              {/* Apps */}
              <ArchLayer
                label="Applications"
                items={["Reattend", "Your App", "Chat Interface", "Webhook Consumers"]}
                muted
              />
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <ArchStat label="External calls" value="0" sub="Zero. By design." />
            <ArchStat label="Outbound endpoints" value="0" sub="None to configure." />
            <ArchStat label="Third-party processors" value="0" sub="None in the data path." />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECURITY DEEP DIVE                                               */}
      {/* ================================================================ */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
              Security at Every Layer
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-4">
              Built the way your security team would build it
            </h2>
            <p className="text-[15px] text-[#6b5f7a] max-w-2xl mx-auto font-light">
              Every design decision starts from a threat model, not a feature request.
              Here is what that looks like in practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SecurityCard
              title="Encryption everywhere"
              desc="AES-256 at rest. TLS 1.3 in transit. Customer-managed keys supported from day one. Rotation and re-keying without downtime."
            />
            <SecurityCard
              title="Identity integration"
              desc="SAML 2.0, OIDC, SCIM provisioning. Works with Okta, Azure AD, Ping, OneLogin, and any IdP that speaks standard protocols."
            />
            <SecurityCard
              title="Granular RBAC"
              desc="Permissions at the user, group, project, and document level. Queries are scoped to what the caller is allowed to see. Enforced at the model, not the UI."
            />
            <SecurityCard
              title="Full audit trail"
              desc="Every query, ingest, and admin action logged with actor, timestamp, payload, and resulting state. Stream directly to Splunk, Datadog, or your SIEM."
            />
            <SecurityCard
              title="Provable deletion"
              desc="When a user or document is removed, the deletion is observable end to end. No orphaned embeddings. No forgotten caches. Compliance teams get a receipt."
            />
            <SecurityCard
              title="Secret management"
              desc="Integration with HashiCorp Vault, AWS Secrets Manager, GCP Secret Manager, and hardware security modules. No credentials in config files."
            />
            <SecurityCard
              title="Supply chain integrity"
              desc="Every binary signed. Every container image attested. SBOM provided for every release. Zero untracked dependencies in the inference path."
            />
            <SecurityCard
              title="Network isolation"
              desc="Ingress-only deployments. No outbound required. Egress filtering enforced at the application layer for defense in depth."
            />
            <SecurityCard
              title="Incident response"
              desc="Dedicated security contact. 24-hour disclosure commitment. Coordinated vulnerability handling. Penetration test reports available under NDA."
            />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* COMPLIANCE MATRIX                                                */}
      {/* ================================================================ */}
      <section className="bg-[#f5f2f8] border-y border-[#d4cade]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-3 gap-14">
            <div className="lg:col-span-1">
              <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
                Compliance
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-6">
                Every framework your legal team cares about
              </h2>
              <p className="text-[15px] text-[#6b5f7a] font-light leading-relaxed mb-6">
                Rabbit was architected against the major compliance frameworks
                from day one. Documentation, control mappings, and auditor-ready
                evidence are available under NDA to evaluating customers.
              </p>
              <Link href="/contact" className="inline-block text-[13px] font-medium text-[#8069af] hover:underline">
                Request compliance packet &rarr;
              </Link>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
              <ComplianceRow framework="SOC 2 Type II" status="Certified" desc="Annual audit. Latest report available under NDA." />
              <ComplianceRow framework="HIPAA" status="Compliant" desc="BAA available. Architecture meets all Technical Safeguards." />
              <ComplianceRow framework="GDPR" status="Compliant" desc="DPA available. Full Article 17 support for right to be forgotten." />
              <ComplianceRow framework="CCPA" status="Compliant" desc="Data subject request workflows built into the platform." />
              <ComplianceRow framework="ISO 27001" status="Aligned" desc="Controls mapped. Certification in progress." />
              <ComplianceRow framework="FedRAMP" status="In Process" desc="Moderate baseline. Targeting High. Timeline available on request." />
              <ComplianceRow framework="NIST 800-53" status="Aligned" desc="Control mappings available for federal and defense reviewers." />
              <ComplianceRow framework="PCI DSS" status="Available" desc="For deployments that process cardholder data in adjacent systems." />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* TCO CALCULATOR                                                   */}
      {/* ================================================================ */}
      <section id="tco" className="relative dot-bg">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
              Total Cost of Ownership
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-4">
              What it costs to build this yourself
            </h2>
            <p className="text-[15px] text-[#6b5f7a] max-w-2xl mx-auto font-light">
              A realistic estimate for a mid-size enterprise building an equivalent
              organizational memory system in-house. Numbers reflect industry-standard
              salaries, GPU leasing rates, and vendor contracts.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Build in-house */}
            <div className="bg-white/70 border border-[#d4cade] rounded-2xl p-8">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-[#1d1d1d]">Build In-House</h3>
                <span className="text-[10px] font-mono text-[#6b5f7a] bg-[#eee9f4] px-2 py-0.5 rounded">12-18 MONTHS</span>
              </div>
              <div className="space-y-4">
                <TcoLine label="ML engineering team" formula="4 engineers x 18 months x $240K fully loaded" value="$1,440,000" width={60} />
                <TcoLine label="Infrastructure engineering" formula="2 engineers x 12 months x $220K" value="$440,000" width={18} />
                <TcoLine label="GPU training compute" formula="Cluster leasing + training runs" value="$680,000" width={28} />
                <TcoLine label="GPU inference compute" formula="Production serving, 12 months" value="$420,000" width={18} />
                <TcoLine label="Third-party model licenses" formula="Frontier API usage during development" value="$280,000" width={12} />
                <TcoLine label="Security and compliance" formula="SOC 2 audit, pen tests, DPO time" value="$190,000" width={8} />
                <TcoLine label="Opportunity cost" formula="Delayed roadmap, stalled initiatives" value="$1,200,000" width={50} />
              </div>
              <div className="border-t border-[#d4cade] pt-4 mt-6">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-semibold text-[#1d1d1d]">Year one estimate</span>
                  <span className="text-3xl font-bold text-[#1d1d1d]">$4,650,000</span>
                </div>
                <p className="text-[11px] text-[#a89bb5] mt-2">
                  And you still do not have a model as capable as Rabbit at the end of it.
                </p>
              </div>
            </div>

            {/* Rabbit */}
            <div className="bg-[#1d1d1d] text-white border border-[#8069af] rounded-2xl p-8">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold">Deploy Rabbit</h3>
                <span className="text-[10px] font-mono text-[#c2a6cf] bg-[#c2a6cf]/10 px-2 py-0.5 rounded">14 DAYS</span>
              </div>
              <div className="space-y-4">
                <TcoLineDark label="Annual license" formula="Fixed. Negotiated per deployment." value="Included" />
                <TcoLineDark label="Implementation" formula="Dedicated engineer for pilot through production" value="Included" />
                <TcoLineDark label="Model updates" formula="New versions delivered throughout the year" value="Included" />
                <TcoLineDark label="Support and SLA" formula="24/7 production support with named contacts" value="Included" />
                <TcoLineDark label="Security reviews" formula="Documentation, audits, pen test reports" value="Included" />
                <TcoLineDark label="Infrastructure" formula="Your existing hardware or cloud" value="Your cost" />
              </div>
              <div className="border-t border-neutral-800 pt-4 mt-6">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-semibold">Year one, typical enterprise</span>
                  <span className="text-3xl font-bold text-[#c2a6cf]">From $340K</span>
                </div>
                <p className="text-[11px] text-neutral-500 mt-2 font-mono">
                  Actual pricing negotiated per deployment. Volume discounts available.
                </p>
              </div>

              <div className="mt-6 flex gap-2">
                <a href="https://cal.com/reattend/30min" target="_blank" rel="noopener noreferrer" className="flex-1 bg-white text-[#1d1d1d] px-4 py-2.5 rounded-lg font-semibold text-[13px] text-center hover:bg-neutral-100 transition">
                  Request Pricing
                </a>
                <Link href="/contact" className="flex-1 bg-[#8069af] text-white px-4 py-2.5 rounded-lg font-medium text-[13px] text-center hover:bg-[#6d5a96] transition">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-[#8069af]/10 border border-[#8069af]/30 rounded-xl p-5 text-center">
            <p className="text-[15px] font-semibold text-[#1d1d1d]">
              Estimated savings: <span className="text-[#8069af]">$4.3M in year one</span> and <span className="text-[#8069af]">12 to 18 months</span> of engineering time
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* DEPLOYMENT TIMELINE                                              */}
      {/* ================================================================ */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
              Implementation
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-4">
              From first call to production in two weeks
            </h2>
            <p className="text-[15px] text-[#6b5f7a] max-w-2xl mx-auto font-light">
              A dedicated engineer leads every deployment. Not a sales engineer
              running a demo. An actual engineer who will be answering your
              questions at 2 AM if you need them to.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-3">
            <PhaseCard
              day="Day 0"
              title="Discovery"
              desc="30-minute call. We learn your data sources, compliance posture, and success criteria."
            />
            <PhaseCard
              day="Day 1-3"
              title="Architecture"
              desc="Joint design session. Network topology, identity integration, GPU capacity planning."
            />
            <PhaseCard
              day="Day 3-7"
              title="Pilot"
              desc="Rabbit deployed to your environment. Connected to a pilot dataset. Your team validates queries."
              highlight
            />
            <PhaseCard
              day="Day 7-12"
              title="Integration"
              desc="Identity provider, SIEM, backup systems, and production data sources connected."
            />
            <PhaseCard
              day="Day 14"
              title="Production"
              desc="Rollout to full user base. Dedicated support engineer on call. Monitoring active."
            />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SUPPORT AND SLA                                                  */}
      {/* ================================================================ */}
      <section className="bg-[#1d1d1d] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-[11px] font-semibold text-[#c2a6cf] tracking-[0.15em] uppercase mb-5">
                Support and SLA
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
                Named humans. Signed SLAs. Zero ticket queues.
              </h2>
              <p className="text-neutral-400 font-light leading-relaxed text-[15px] mb-4">
                Enterprise Rabbit deployments come with a named engineering contact,
                a signed SLA, and a direct Slack or Teams channel to our team. No
                chatbots. No tier-one triage. When you have a question, an engineer
                who worked on Rabbit answers it.
              </p>
              <p className="text-neutral-400 font-light leading-relaxed text-[15px]">
                We staff for the worst case, not the average case. Your production
                incidents become our production incidents.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <SlaCard value="99.9%" label="Uptime SLA" sub="Managed deployments" />
              <SlaCard value="< 1 hr" label="P1 response" sub="24/7 for production" />
              <SlaCard value="< 4 hr" label="P2 response" sub="Business hours" />
              <SlaCard value="Named" label="Engineering contact" sub="Direct Slack or Teams" />
              <SlaCard value="Quarterly" label="Architecture reviews" sub="Included in enterprise" />
              <SlaCard value="24 hr" label="Security disclosure" sub="Coordinated response" />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FAQ                                                              */}
      {/* ================================================================ */}
      <section className="relative">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
              Enterprise FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight">
              Answers to the questions procurement always asks
            </h2>
          </div>

          <div className="space-y-3">
            <FaqItem
              q="Can we deploy Rabbit entirely offline?"
              a="Yes. Air-gapped deployments are a first-class option. Rabbit ships as a signed media set with manual update cycles. No network connectivity is required at any point after installation."
            />
            <FaqItem
              q="Does Rabbit call any external services at runtime?"
              a="No. There are no external model providers, no phone-home telemetry, no analytics beacons. Your deployment has zero external dependencies by design, and this is verifiable through network inspection."
            />
            <FaqItem
              q="Who owns the data Rabbit ingests and the answers it produces?"
              a="You do. Fully. Rabbit does not claim any rights to your data, your queries, or any derivative artifacts. Our license explicitly disclaims ownership of customer content."
            />
            <FaqItem
              q="Can we use our own encryption keys?"
              a="Yes. Customer-managed keys are supported on day one. Integration with AWS KMS, GCP KMS, Azure Key Vault, HashiCorp Vault, and HSMs."
            />
            <FaqItem
              q="What happens if a user requests deletion under GDPR Article 17?"
              a="The deletion propagates through the full system. Raw source documents, extracted entities, graph edges, and embeddings are all removed. Compliance logs prove the deletion occurred."
            />
            <FaqItem
              q="Do you offer a BAA for HIPAA-covered entities?"
              a="Yes. BAA is standard for healthcare customers. Our architecture meets all HIPAA Technical Safeguards for PHI processing."
            />
            <FaqItem
              q="Can we fine-tune Rabbit on our own data or vocabulary?"
              a="Yes. Domain adaptation is available for enterprise deployments. We work with your team to incorporate industry-specific vocabulary, terminology, and patterns without compromising the base model capabilities."
            />
            <FaqItem
              q="What happens if we want to stop using Rabbit?"
              a="Full data export is provided in open formats. Your knowledge graph, sources, and history are portable. No vendor lock-in by design."
            />
            <FaqItem
              q="What does procurement actually need from us?"
              a="MSA, DPA, BAA (if applicable), security questionnaire responses, SOC 2 report, pen test summary, compliance packet, insurance certificates. We have a pre-assembled legal packet ready to send."
            />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FINAL CTA                                                        */}
      {/* ================================================================ */}
      <section className="bg-[#8069af] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold leading-[1.05] mb-6">
            Your organization is already paying the cost of amnesia. The only question is who you pay to fix it.
          </h2>
          <p className="text-white/80 text-lg font-light max-w-2xl mx-auto mb-10">
            Schedule a 30-minute architecture review. Our engineering team will
            walk through your environment, your requirements, and whether Rabbit
            is the right fit. Same-day response on enterprise inquiries.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="https://cal.com/reattend/30min" target="_blank" rel="noopener noreferrer" className="bg-white text-[#8069af] px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition text-sm">
              Schedule Architecture Review
            </a>
            <Link href="/contact" className="bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-medium hover:bg-white/30 transition text-sm">
              Request Security Packet
            </Link>
          </div>
          <p className="text-[11px] text-white/60 mt-8 font-mono uppercase tracking-wider">
            Typical response: same day / Typical pilot: 14 days / Typical production: under 30 days
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ====================================================================== */
/* COMPONENTS                                                              */
/* ====================================================================== */

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white/50 border border-[#d4cade] rounded-xl p-5 text-center">
      <p className="text-2xl font-bold text-[#8069af]">{value}</p>
      <p className="text-[11px] text-[#6b5f7a] mt-1 font-light">{label}</p>
    </div>
  );
}

function VerticalTag({ label }: { label: string }) {
  return (
    <div className="bg-white/60 border border-[#d4cade] rounded-lg py-3 text-center">
      <p className="text-[12px] font-semibold text-[#1d1d1d] tracking-wide">{label}</p>
    </div>
  );
}

function ObjectionRow({ objection, answer }: { objection: string; answer: string }) {
  return (
    <div className="bg-white/70 border border-[#d4cade] rounded-xl p-5">
      <p className="text-[14px] font-semibold text-[#1d1d1d] mb-1.5 flex items-start gap-2">
        <span className="text-[#8069af] font-mono text-xs mt-1">Q.</span>
        {objection}
      </p>
      <p className="text-[13px] text-[#6b5f7a] font-light leading-relaxed pl-5">{answer}</p>
    </div>
  );
}

function DeployCard({ title, badge, desc, features, highlight }: { title: string; badge: string; desc: string; features: string[]; highlight?: boolean }) {
  return (
    <div className={`border rounded-2xl p-6 ${highlight ? "bg-white border-[#8069af] shadow-sm" : "bg-white/60 border-[#d4cade]"}`}>
      <span className={`text-[9px] font-semibold uppercase tracking-wider px-2 py-1 rounded inline-block mb-4 ${highlight ? "bg-[#8069af] text-white" : "bg-[#eee9f4] text-[#8069af]"}`}>
        {badge}
      </span>
      <h3 className="text-lg font-bold text-[#1d1d1d] mb-2">{title}</h3>
      <p className="text-[13px] text-[#6b5f7a] font-light leading-relaxed mb-5">{desc}</p>
      <ul className="space-y-2 pt-4 border-t border-[#d4cade]">
        {features.map((f) => (
          <li key={f} className="text-[12px] text-[#1d1d1d] flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-[#8069af] shrink-0">
              <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ArchLayer({ label, items, muted }: { label: string; items: string[]; muted?: boolean }) {
  return (
    <div className={`border rounded-lg p-4 mb-3 ${muted ? "bg-white/[0.03] border-neutral-800" : "bg-[#8069af]/10 border-[#8069af]/40"}`}>
      <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-2">{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span key={item} className="text-[11px] font-mono text-neutral-300 bg-white/[0.05] border border-neutral-800 px-2 py-0.5 rounded">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ArchArrow() {
  return (
    <div className="flex justify-center py-1">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-neutral-600">
        <path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function CoreBlock({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="bg-[#1d1d1d] border border-[#8069af]/30 rounded-lg p-3 text-center">
      <p className="text-[12px] font-semibold text-white">{label}</p>
      <p className="text-[10px] text-[#c2a6cf] mt-0.5 font-mono">{sub}</p>
    </div>
  );
}

function ArchStat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="bg-white/[0.04] border border-neutral-800 rounded-xl p-5 text-center">
      <p className="text-3xl font-bold text-[#c2a6cf]">{value}</p>
      <p className="text-[12px] font-semibold text-white mt-1">{label}</p>
      <p className="text-[10px] text-neutral-500 mt-1 font-mono">{sub}</p>
    </div>
  );
}

function SecurityCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white/60 border border-[#d4cade] rounded-xl p-6">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-7 h-7 rounded-lg bg-[#8069af]/10 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#8069af]">
            <path d="M12 2l9 4v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V6l9-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-semibold text-[#1d1d1d] text-[14px]">{title}</h3>
      </div>
      <p className="text-[13px] text-[#6b5f7a] font-light leading-relaxed">{desc}</p>
    </div>
  );
}

function ComplianceRow({ framework, status, desc }: { framework: string; status: string; desc: string }) {
  const statusColor: Record<string, string> = {
    Certified: "bg-[#8069af] text-white",
    Compliant: "bg-[#8069af] text-white",
    Aligned: "bg-[#c2a6cf]/30 text-[#6d5a96]",
    "In Process": "bg-white border border-[#d4cade] text-[#6b5f7a]",
    Available: "bg-white border border-[#d4cade] text-[#6b5f7a]",
  };
  return (
    <div className="bg-white/70 border border-[#d4cade] rounded-xl p-4">
      <div className="flex items-center justify-between mb-1.5">
        <h4 className="font-bold text-[#1d1d1d] text-[14px]">{framework}</h4>
        <span className={`text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${statusColor[status]}`}>
          {status}
        </span>
      </div>
      <p className="text-[12px] text-[#6b5f7a] font-light leading-relaxed">{desc}</p>
    </div>
  );
}

function TcoLine({ label, formula, value, width }: { label: string; formula: string; value: string; width: number }) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-1">
        <span className="text-[13px] font-medium text-[#1d1d1d]">{label}</span>
        <span className="text-[13px] font-bold text-[#1d1d1d]">{value}</span>
      </div>
      <div className="w-full h-1.5 bg-[#eee9f4] rounded-full mb-1">
        <div className="h-full bg-[#1d1d1d]/40 rounded-full" style={{ width: `${width}%` }} />
      </div>
      <p className="text-[10px] text-[#a89bb5] font-mono">{formula}</p>
    </div>
  );
}

function TcoLineDark({ label, formula, value }: { label: string; formula: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 pb-3 border-b border-neutral-800 last:border-0">
      <div>
        <p className="text-[13px] font-medium text-white">{label}</p>
        <p className="text-[10px] text-neutral-500 font-mono mt-0.5">{formula}</p>
      </div>
      <span className="text-[12px] font-mono text-[#c2a6cf] shrink-0">{value}</span>
    </div>
  );
}

function PhaseCard({ day, title, desc, highlight }: { day: string; title: string; desc: string; highlight?: boolean }) {
  return (
    <div className={`border rounded-xl p-5 ${highlight ? "bg-white border-[#8069af] shadow-sm" : "bg-white/60 border-[#d4cade]"}`}>
      <span className="text-[10px] font-mono text-[#8069af] bg-[#8069af]/10 px-2 py-0.5 rounded inline-block mb-3">{day}</span>
      <h3 className="font-bold text-[#1d1d1d] text-[14px] mb-2">{title}</h3>
      <p className="text-[12px] text-[#6b5f7a] font-light leading-relaxed">{desc}</p>
    </div>
  );
}

function SlaCard({ value, label, sub }: { value: string; label: string; sub: string }) {
  return (
    <div className="bg-white/[0.04] border border-neutral-800 rounded-xl p-5">
      <p className="text-2xl font-bold text-[#c2a6cf]">{value}</p>
      <p className="text-[13px] font-semibold text-white mt-1">{label}</p>
      <p className="text-[11px] text-neutral-500 mt-0.5 font-light">{sub}</p>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="bg-white/60 border border-[#d4cade] rounded-xl p-5 group">
      <summary className="cursor-pointer flex items-start justify-between gap-4 list-none">
        <span className="text-[15px] font-semibold text-[#1d1d1d] flex-1">{q}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#8069af] shrink-0 transition-transform group-open:rotate-45">
          <path d="M12 5v14m-7-7h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </summary>
      <p className="text-[13px] text-[#6b5f7a] font-light leading-relaxed mt-3 pt-3 border-t border-[#d4cade]">{a}</p>
    </details>
  );
}

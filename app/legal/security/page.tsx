import LegalLayout, { LegalSection, LegalList, Callout } from "../LegalLayout";
import Link from "next/link";

export const metadata = {
  title: "Security - Rabbit",
  description: "How Rabbit protects your data, your infrastructure, and your organization.",
};

export default function SecurityPage() {
  return (
    <LegalLayout
      title="Security"
      subtitle="Security is not a feature we add to Rabbit. It is the foundation we build everything else on top of. Here is exactly how we approach it."
      updated="April 1, 2026"
      current="security"
    >
      {/* Compliance badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        <SecurityBadge label="SOC 2 Type II" status="Certified" />
        <SecurityBadge label="HIPAA" status="Compliant" />
        <SecurityBadge label="GDPR" status="Compliant" />
        <SecurityBadge label="ISO 27001" status="Aligned" />
      </div>

      <LegalSection id="philosophy" title="1. Our Security Philosophy">
        <p>
          Rabbit processes some of the most sensitive information an
          organization owns: decisions, relationships, deliberations, and
          institutional context. We treat that responsibility seriously.
        </p>
        <p>
          Our approach is built on three principles. First, the data path
          should be auditable end to end. Second, customers should always be
          able to deploy Rabbit in a way where their data never leaves their
          control. Third, every design decision starts from a threat model,
          not a feature request.
        </p>
        <Callout>
          <strong>Customers using on-premise or air-gapped deployments
          process zero data through Rabbit infrastructure.</strong> Their
          deployment runs entirely inside their own perimeter, with no
          external connectivity required at any point.
        </Callout>
      </LegalSection>

      <LegalSection id="encryption" title="2. Encryption">
        <p>All data is encrypted in transit and at rest.</p>
        <LegalList
          items={[
            "TLS 1.3 for all data in transit, with modern cipher suites and HSTS enforced",
            "AES-256 for all data at rest, including primary storage, backups, and snapshots",
            "Customer-managed encryption keys supported for enterprise deployments via AWS KMS, GCP KMS, Azure Key Vault, HashiCorp Vault, and dedicated hardware security modules",
            "Key rotation supported without downtime, with automatic re-encryption of stored data",
          ]}
        />
      </LegalSection>

      <LegalSection id="access" title="3. Access Controls">
        <p>
          Access to systems and data is governed by the principle of least
          privilege. Production access is restricted to a small set of
          engineers and is logged, reviewed, and time-bound.
        </p>
        <LegalList
          items={[
            "Role-based access control (RBAC) at the user, group, project, and document level",
            "Single sign-on via SAML 2.0 and OIDC, with support for Okta, Azure AD, Ping, OneLogin, and other major identity providers",
            "SCIM provisioning for automated user lifecycle management",
            "Multi-factor authentication required for all administrative access",
            "Quarterly access reviews and immediate revocation upon role changes",
          ]}
        />
      </LegalSection>

      <LegalSection id="infrastructure" title="4. Infrastructure">
        <p>
          Our managed infrastructure runs on hardened cloud environments with
          multi-region failover, automated backups, and continuous monitoring.
        </p>
        <LegalList
          items={[
            "Network segmentation and private subnets for sensitive workloads",
            "Web application firewalls and DDoS protection at the edge",
            "Vulnerability scanning of container images, dependencies, and infrastructure-as-code",
            "Immutable infrastructure with no in-place modifications to production systems",
            "Automated patching of operating systems and runtime dependencies",
            "Geographic data residency for customers with regional requirements",
          ]}
        />
      </LegalSection>

      <LegalSection id="application" title="5. Application Security">
        <p>
          Application security is built into our development process from
          the first line of code, not added at the end.
        </p>
        <LegalList
          items={[
            "Mandatory peer code review for all changes to production systems",
            "Static analysis and dependency scanning on every pull request",
            "Secret scanning in source repositories and CI pipelines",
            "Software bill of materials (SBOM) published with every release",
            "Signed binaries and attested container images",
            "Regular third-party penetration testing with reports available to enterprise customers under NDA",
          ]}
        />
      </LegalSection>

      <LegalSection id="audit" title="6. Audit and Logging">
        <p>
          Every meaningful action in Rabbit is logged. Customers have full
          visibility into how their deployment is being used and by whom.
        </p>
        <LegalList
          items={[
            "Every API request logged with actor, timestamp, source IP, and request ID",
            "Administrative actions logged with full payload and resulting state",
            "Logs streamable directly to customer SIEM systems including Splunk, Datadog, Elastic, and Sumo Logic",
            "Tamper-evident log storage with cryptographic integrity verification",
            "Default 12-month retention with longer retention available for enterprise customers",
          ]}
        />
      </LegalSection>

      <LegalSection id="deletion" title="7. Data Deletion and Right to Be Forgotten">
        <p>
          When customer data needs to be removed, the deletion is observable
          and provable. There are no orphaned embeddings, no forgotten caches,
          no copies that survive the request.
        </p>
        <LegalList
          items={[
            "Deletion propagates through raw sources, extracted entities, graph edges, and embeddings",
            "GDPR Article 17 requests are first-class operations in the API, not manual processes",
            "Compliance teams receive a verifiable receipt confirming deletion completion",
            "Backups containing deleted data are purged within 30 days",
          ]}
        />
      </LegalSection>

      <LegalSection id="incident" title="8. Incident Response">
        <p>
          We maintain a written incident response plan, tested regularly,
          with clear escalation paths and customer communication protocols.
        </p>
        <LegalList
          items={[
            "24/7 on-call engineering and security coverage",
            "Defined severity classifications with corresponding response times",
            "Customer notification within 24 hours of confirmed security incidents that impact customer data",
            "Coordinated disclosure for vulnerabilities reported through our responsible disclosure program",
            "Post-incident reviews shared with affected customers",
          ]}
        />
      </LegalSection>

      <LegalSection id="ai-safety" title="9. AI Safety and Model Integrity">
        <p>
          Rabbit is built on a proprietary model trained by our research lab.
          We maintain strict integrity controls over the model itself.
        </p>
        <LegalList
          items={[
            "Model weights are signed and verified at deployment time",
            "Trained to refuse hallucination when answers cannot be grounded in source data",
            "Confidence scores returned with every response for downstream verification",
            "Customer content is never used to train, fine-tune, or evaluate the base model",
            "Tenant isolation prevents any cross-customer data access in shared deployments",
          ]}
        />
      </LegalSection>

      <LegalSection id="compliance" title="10. Compliance and Certifications">
        <p>
          Rabbit is architected against major compliance frameworks. We maintain
          documentation, control mappings, and auditor-ready evidence available
          to evaluating customers under NDA.
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mt-4">
          <ComplianceItem name="SOC 2 Type II" detail="Annual audit by an accredited firm. Latest report available under NDA." />
          <ComplianceItem name="HIPAA" detail="Business Associate Agreements available for healthcare customers." />
          <ComplianceItem name="GDPR" detail="Data Processing Addendum available. Article 17 supported natively." />
          <ComplianceItem name="ISO 27001" detail="Aligned with controls. Certification in progress." />
          <ComplianceItem name="FedRAMP" detail="Moderate baseline in process. Targeting High." />
          <ComplianceItem name="NIST 800-53" detail="Control mappings available for federal and defense reviewers." />
        </div>
      </LegalSection>

      <LegalSection id="vendor" title="11. Subprocessors and Vendors">
        <p>
          We maintain a current list of subprocessors used to operate the
          Services. Customers are notified of material changes to this list
          before they take effect. The list is provided to enterprise customers
          under NDA upon request.
        </p>
        <p>
          For on-premise and air-gapped deployments, no subprocessors are
          involved in the data path. Customers run Rabbit entirely inside
          their own infrastructure.
        </p>
      </LegalSection>

      <LegalSection id="disclosure" title="12. Responsible Disclosure">
        <p>
          We welcome reports from security researchers. If you believe you
          have found a vulnerability in Rabbit, please contact our security
          team directly. We commit to acknowledging reports within 48 hours
          and working with researchers in good faith.
        </p>
        <div className="bg-white/70 border border-[#d4cade] rounded-xl p-5 mt-4">
          <p className="text-[13px] text-[#1d1d1d] font-semibold mb-2">Security Contact</p>
          <p className="text-[13px] text-[#6b5f7a] font-light">
            Email:{" "}
            <a href="mailto:security@reattend.ai" className="text-[#8069af] hover:underline">
              security@reattend.ai
            </a>
            <br />
            PGP key available on request.
          </p>
        </div>
      </LegalSection>

      <LegalSection id="more" title="13. Want More Detail?">
        <p>
          Enterprise prospects can request our full security packet, including
          our SOC 2 report, penetration test summaries, vendor risk
          questionnaire responses, and architecture diagrams.
        </p>
        <div className="mt-4 flex gap-3 flex-wrap">
          <Link href="/contact" className="bg-[#1d1d1d] text-white px-5 py-2.5 rounded-lg font-medium text-[13px] hover:bg-[#333] transition">
            Request security packet
          </Link>
          <Link href="/enterprise" className="bg-white border border-[#d4cade] text-[#1d1d1d] px-5 py-2.5 rounded-lg font-medium text-[13px] hover:bg-white/80 transition">
            Enterprise overview
          </Link>
        </div>
      </LegalSection>
    </LegalLayout>
  );
}

function SecurityBadge({ label, status }: { label: string; status: string }) {
  return (
    <div className="bg-white/70 border border-[#d4cade] rounded-xl p-4 text-center">
      <p className="text-[13px] font-bold text-[#1d1d1d]">{label}</p>
      <p className="text-[10px] font-mono text-[#8069af] uppercase tracking-wider mt-1">{status}</p>
    </div>
  );
}

function ComplianceItem({ name, detail }: { name: string; detail: string }) {
  return (
    <div className="bg-white/70 border border-[#d4cade] rounded-lg p-4">
      <p className="text-[13px] font-bold text-[#1d1d1d] mb-1">{name}</p>
      <p className="text-[12px] text-[#6b5f7a] font-light leading-relaxed">{detail}</p>
    </div>
  );
}

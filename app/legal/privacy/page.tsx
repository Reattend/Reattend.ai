import LegalLayout, { LegalSection, LegalList, Callout } from "../LegalLayout";

export const metadata = {
  title: "Privacy Policy - Rabbit",
  description: "How Rabbit collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect information when you interact with Rabbit, our API, and the Reattend platform."
      updated="April 1, 2026"
      current="privacy"
    >
      <LegalSection id="overview" title="1. Overview">
        <p>
          Reattend, Inc. (&quot;Rabbit,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;) operates the Rabbit API, the Reattend platform, and
          related research products. This Privacy Policy describes how we
          collect, use, and share information in connection with those services.
        </p>
        <p>
          We believe privacy is a core part of building memory infrastructure.
          Our architecture and contractual commitments are designed around the
          principle that organizational memory belongs to the organization that
          owns it, not to us.
        </p>
      </LegalSection>

      <LegalSection id="scope" title="2. Scope">
        <p>This policy applies to:</p>
        <LegalList
          items={[
            "Visitors to rabbit.reattend.ai and related web properties",
            "Developers using the Rabbit API and SDKs",
            "Customers deploying Rabbit in their own infrastructure",
            "Users of the Reattend platform",
            "Research partners and collaborators",
          ]}
        />
        <p>
          When Rabbit is deployed inside a customer environment (on-premise,
          private cloud, or air-gapped), the customer is the data controller
          for content processed by that deployment. We do not access that
          content and have no operational visibility into it.
        </p>
      </LegalSection>

      <LegalSection id="what-we-collect" title="3. Information We Collect">
        <p className="font-semibold text-[#1d1d1d]">Information you provide directly</p>
        <LegalList
          items={[
            "Account information: name, work email, organization, role",
            "Billing information: payment method, billing address (processed by our payment provider, not stored on our servers)",
            "Communications: messages you send to our team via email, chat, or support channels",
            "Content you submit to the API when using our managed cloud service",
          ]}
        />
        <p className="font-semibold text-[#1d1d1d] mt-5">Information collected automatically</p>
        <LegalList
          items={[
            "Device and browser information when you visit our public websites",
            "API usage metadata: request counts, response times, error codes, SDK version",
            "Security logs: IP addresses, authentication events, and audit trails tied to API keys",
          ]}
        />
        <Callout>
          <strong>We do not collect API request or response bodies for
          on-premise or air-gapped deployments.</strong> Those deployments run
          entirely inside customer infrastructure and never transmit content
          to Rabbit servers under any circumstances.
        </Callout>
      </LegalSection>

      <LegalSection id="how-we-use" title="4. How We Use Information">
        <p>We use information to:</p>
        <LegalList
          items={[
            "Provide, operate, and maintain the Rabbit API and Reattend platform",
            "Authenticate users and enforce scoped API keys",
            "Monitor performance, detect abuse, and investigate security incidents",
            "Communicate with you about your account, product updates, and important service notices",
            "Improve our documentation, SDKs, and developer experience",
            "Comply with legal obligations and enforce our terms of service",
          ]}
        />
        <p>
          We do not use customer content to train or fine-tune our models.
          Our research models are trained on internal datasets that do not
          include customer-submitted data.
        </p>
      </LegalSection>

      <LegalSection id="legal-bases" title="5. Legal Bases for Processing">
        <p>
          For individuals in the European Economic Area and the United Kingdom,
          our legal bases for processing personal information include:
        </p>
        <LegalList
          items={[
            "Performance of a contract when providing the Rabbit API and Reattend services",
            "Legitimate interests in operating, improving, and securing our services",
            "Consent where required, for example for marketing communications",
            "Compliance with legal obligations",
          ]}
        />
      </LegalSection>

      <LegalSection id="sharing" title="6. How We Share Information">
        <p>
          We do not sell personal information. We share information only in
          the following limited circumstances:
        </p>
        <LegalList
          items={[
            "With service providers who support our infrastructure (hosting, monitoring, email delivery) under strict confidentiality obligations",
            "With your organization's administrators, if you use Rabbit through an enterprise account",
            "When required by law, legal process, or to protect the rights and safety of our users",
            "In connection with a merger, acquisition, or sale of assets, subject to the commitments in this policy",
          ]}
        />
        <p>
          We maintain a current list of subprocessors and will provide it to
          customers upon request under NDA.
        </p>
      </LegalSection>

      <LegalSection id="security" title="7. Data Security">
        <p>
          Security is a first-class design requirement for Rabbit. Our
          technical and organizational measures include:
        </p>
        <LegalList
          items={[
            "Encryption at rest using AES-256 and in transit using TLS 1.3",
            "Customer-managed key support for enterprise deployments",
            "Role-based access controls, least-privilege permissions, and regular access reviews",
            "24/7 security monitoring, anomaly detection, and incident response",
            "SOC 2 Type II certification, with annual audits",
            "Vulnerability scanning, third-party penetration testing, and a responsible disclosure program",
          ]}
        />
        <p>
          For a detailed description of our security posture, see our{" "}
          <a href="/legal/security" className="text-[#8069af] font-medium hover:underline">
            Security page
          </a>.
        </p>
      </LegalSection>

      <LegalSection id="retention" title="8. Data Retention">
        <p>
          We retain personal information only as long as necessary to provide
          our services, comply with legal obligations, resolve disputes, and
          enforce our agreements.
        </p>
        <LegalList
          items={[
            "Account information is retained while your account is active and for 30 days after deletion",
            "Billing records are retained for seven years to meet tax and accounting requirements",
            "Security and audit logs are retained for 12 months",
            "API request metadata is retained for 90 days by default",
          ]}
        />
      </LegalSection>

      <LegalSection id="your-rights" title="9. Your Rights">
        <p>
          Depending on your jurisdiction, you may have the following rights
          over your personal information:
        </p>
        <LegalList
          items={[
            "Right to access the personal information we hold about you",
            "Right to correct inaccurate personal information",
            "Right to deletion, subject to legal retention obligations",
            "Right to restrict or object to certain processing",
            "Right to data portability in a structured, machine-readable format",
            "Right to withdraw consent where processing is based on consent",
          ]}
        />
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:privacy@reattend.ai" className="text-[#8069af] font-medium hover:underline">
            privacy@reattend.ai
          </a>
          . We will respond within 30 days.
        </p>
      </LegalSection>

      <LegalSection id="international" title="10. International Data Transfers">
        <p>
          Rabbit operates globally. When information is transferred across
          borders, we rely on Standard Contractual Clauses and similar
          mechanisms to ensure appropriate protection. Enterprise customers
          can request region-locked deployments to avoid cross-border
          transfers entirely.
        </p>
      </LegalSection>

      <LegalSection id="children" title="11. Children">
        <p>
          Rabbit is not directed to individuals under 16. We do not knowingly
          collect personal information from children. If you believe we have
          collected such information, please contact us so we can delete it.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="12. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Material
          changes will be announced through our website and, for customers,
          via direct communication. The &quot;Last updated&quot; date at the
          top of this page reflects the most recent revision.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="13. Contact">
        <p>
          Reattend, Inc. is the controller of personal information covered
          by this policy. For questions, requests, or complaints, contact us:
        </p>
        <div className="bg-white/70 border border-[#d4cade] rounded-xl p-5 mt-4">
          <p className="text-[13px] text-[#1d1d1d] font-semibold mb-2">Reattend, Inc.</p>
          <p className="text-[13px] text-[#6b5f7a] font-light">
            Email:{" "}
            <a href="mailto:privacy@reattend.ai" className="text-[#8069af] hover:underline">
              privacy@reattend.ai
            </a>
            <br />
            General inquiries:{" "}
            <a href="mailto:hello@reattend.ai" className="text-[#8069af] hover:underline">
              hello@reattend.ai
            </a>
          </p>
        </div>
      </LegalSection>
    </LegalLayout>
  );
}

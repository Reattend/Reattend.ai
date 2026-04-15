import LegalLayout, { LegalSection, LegalList, Callout } from "../LegalLayout";

export const metadata = {
  title: "Terms of Service - Rabbit",
  description: "The terms governing your use of Rabbit and the Reattend platform.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="The agreement between you and Reattend, Inc. governing access to and use of the Rabbit API, SDKs, documentation, and the Reattend platform."
      updated="April 1, 2026"
      current="terms"
    >
      <LegalSection id="acceptance" title="1. Acceptance of Terms">
        <p>
          These Terms of Service (&quot;Terms&quot;) form a binding agreement
          between you and Reattend, Inc. (&quot;Rabbit,&quot; &quot;we,&quot;
          or &quot;us&quot;). By accessing or using the Rabbit API, the
          Reattend platform, or any related software, documentation, or
          services (collectively, the &quot;Services&quot;), you agree to be
          bound by these Terms.
        </p>
        <p>
          If you are entering into these Terms on behalf of an organization,
          you represent that you have the authority to bind that organization,
          and &quot;you&quot; refers to that organization.
        </p>
      </LegalSection>

      <LegalSection id="accounts" title="2. Accounts">
        <p>
          You must create an account to access most parts of the Services.
          You agree to:
        </p>
        <LegalList
          items={[
            "Provide accurate, current, and complete information when registering",
            "Maintain the security of your credentials and API keys",
            "Promptly notify us of any unauthorized access or suspected breach",
            "Take responsibility for all activity that occurs under your account",
          ]}
        />
      </LegalSection>

      <LegalSection id="api-use" title="3. Use of the API">
        <p>You may use the Rabbit API to build applications that:</p>
        <LegalList
          items={[
            "Store and retrieve organizational memory on behalf of your users or your own organization",
            "Process unstructured information into structured knowledge graphs",
            "Generate cited responses grounded in your organization's data",
          ]}
        />
        <p className="mt-4">You may not use the Services to:</p>
        <LegalList
          items={[
            "Violate any applicable law or regulation",
            "Infringe the intellectual property or privacy rights of others",
            "Reverse engineer, decompile, or attempt to extract the underlying model weights",
            "Submit content that you do not have the right to submit",
            "Use the Services to develop a competing memory intelligence model",
            "Bypass rate limits, abuse free tiers, or interfere with the integrity of the Services",
            "Conduct security testing without prior written authorization",
          ]}
        />
      </LegalSection>

      <LegalSection id="customer-content" title="4. Customer Content and Ownership">
        <p>
          You retain all rights to the content you submit to the Services
          (&quot;Customer Content&quot;). We claim no ownership over Customer
          Content. You grant us a limited, worldwide, non-exclusive license
          to host, process, and transmit Customer Content solely as necessary
          to provide the Services to you.
        </p>
        <Callout>
          <strong>We do not use Customer Content to train our models.</strong>{" "}
          Our research models are trained on internal datasets that do not
          include data submitted by customers under any tier.
        </Callout>
        <p>
          You are responsible for ensuring you have the legal right to submit
          Customer Content and that doing so does not violate any obligations
          you owe to third parties.
        </p>
      </LegalSection>

      <LegalSection id="ip" title="5. Intellectual Property">
        <p>
          The Services, including the Rabbit model, the Reattend platform,
          documentation, SDKs, and all related materials, are owned by
          Reattend, Inc. and protected by intellectual property laws. We grant
          you a limited, non-exclusive, non-transferable license to use the
          Services in accordance with these Terms.
        </p>
        <p>
          Our trademarks, logos, and brand elements may not be used without
          our prior written permission.
        </p>
      </LegalSection>

      <LegalSection id="fees" title="6. Fees and Payment">
        <p>
          Pricing for paid plans is published on our website and may be
          updated from time to time with reasonable notice. By subscribing to
          a paid plan, you authorize us to charge your designated payment
          method on a recurring basis until you cancel.
        </p>
        <LegalList
          items={[
            "Fees are non-refundable except where required by law",
            "Free tiers may be subject to usage limits and may be modified at our discretion",
            "Enterprise pricing is governed by a separate signed Order Form",
            "Late payments may result in suspension or termination of the Services",
          ]}
        />
      </LegalSection>

      <LegalSection id="enterprise" title="7. Enterprise Agreements">
        <p>
          Enterprise customers operating Rabbit on-premise, in private cloud,
          or in air-gapped environments are governed by a separate Master
          Services Agreement (MSA), Data Processing Addendum (DPA), and
          where applicable, a Business Associate Agreement (BAA). In the
          event of a conflict between these Terms and a signed enterprise
          agreement, the enterprise agreement controls.
        </p>
      </LegalSection>

      <LegalSection id="warranties" title="8. Disclaimers">
        <p>
          The Services are provided &quot;as is&quot; and &quot;as
          available&quot; without warranties of any kind, whether express or
          implied. We do not warrant that the Services will be uninterrupted,
          error-free, or that the outputs will be accurate, complete, or
          suitable for your specific purposes.
        </p>
        <p>
          Rabbit is designed to refuse to hallucinate when answers cannot be
          grounded in source data, but no AI system is perfect. You are
          responsible for evaluating the outputs before relying on them in
          consequential decisions.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="9. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, Reattend, Inc. and its
          affiliates, officers, employees, agents, and licensors will not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages, or any loss of profits, revenue, data, or goodwill,
          arising from or in connection with your use of the Services.
        </p>
        <p>
          Our total aggregate liability under these Terms will not exceed the
          greater of one hundred dollars (USD 100) or the amount you paid us
          in the twelve months preceding the claim.
        </p>
      </LegalSection>

      <LegalSection id="indemnification" title="10. Indemnification">
        <p>
          You agree to indemnify, defend, and hold harmless Reattend, Inc.
          from any claims, damages, liabilities, costs, and expenses arising
          from your use of the Services, your Customer Content, or your
          violation of these Terms.
        </p>
      </LegalSection>

      <LegalSection id="termination" title="11. Termination">
        <p>
          You may stop using the Services at any time. We may suspend or
          terminate your access to the Services if you violate these Terms or
          if we are required to do so by law. Upon termination:
        </p>
        <LegalList
          items={[
            "Your right to use the Services ends immediately",
            "We will provide a reasonable window to export your Customer Content",
            "Sections of these Terms that by their nature should survive will continue to apply",
          ]}
        />
      </LegalSection>

      <LegalSection id="modifications" title="12. Modifications">
        <p>
          We may update these Terms from time to time. Material changes will
          be communicated through our website or by direct notice. Your
          continued use of the Services after the effective date of any
          changes constitutes acceptance of the updated Terms.
        </p>
      </LegalSection>

      <LegalSection id="governing-law" title="13. Governing Law">
        <p>
          These Terms are governed by the laws of the State of Delaware,
          without regard to its conflict of laws principles. Any disputes
          arising from these Terms will be resolved in the state or federal
          courts located in Delaware, except where otherwise required by law.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="14. Contact">
        <p>For questions about these Terms, contact us:</p>
        <div className="bg-white/70 border border-[#d4cade] rounded-xl p-5 mt-4">
          <p className="text-[13px] text-[#1d1d1d] font-semibold mb-2">Reattend, Inc.</p>
          <p className="text-[13px] text-[#6b5f7a] font-light">
            Legal:{" "}
            <a href="mailto:legal@reattend.ai" className="text-[#8069af] hover:underline">
              legal@reattend.ai
            </a>
            <br />
            General:{" "}
            <a href="mailto:hello@reattend.ai" className="text-[#8069af] hover:underline">
              hello@reattend.ai
            </a>
          </p>
        </div>
      </LegalSection>
    </LegalLayout>
  );
}

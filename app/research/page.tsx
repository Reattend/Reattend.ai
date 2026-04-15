import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default function ResearchPage() {
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
            <Link href="/research" className="text-[#1d1d1d]">Research</Link>
            <Link href="/product" className="hover:text-[#1d1d1d] transition">Model</Link>
            <Link href="/enterprise" className="hover:text-[#1d1d1d] transition">Enterprise</Link>
            <Link href="/developers" className="hover:text-[#1d1d1d] transition">API</Link>
            <Link href="/future" className="hover:text-[#1d1d1d] transition">Vision</Link>
            <Link href="/contact" className="hover:text-[#1d1d1d] transition">Contact</Link>
          </nav>
        </div>
        <div className="flex items-center gap-3 text-[12.5px]">
          <Link href="/login" className="text-[#6b5f7a] hover:text-[#1d1d1d] font-medium transition">Log in</Link>
          <Link href="/login" className="bg-[#1d1d1d] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#333] transition">
            Get API Access
          </Link>
        </div>
      </header>

      {/* ================================================================ */}
      {/* HERO                                                             */}
      {/* ================================================================ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-20 left-1/3 w-[500px] h-[500px] rounded-full bg-[#8069af]/[0.06] blur-[100px]" />

        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16">
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2 text-[11px] font-medium text-[#8069af] bg-white/60 border border-[#d4cade] px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8069af] animate-pulse-slow" />
              Rabbit Research Lab
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-bold tracking-tight leading-[1.04] text-[#1d1d1d] text-center max-w-5xl mx-auto">
            A research lab dedicated to the science of organizational intelligence
          </h1>
          <p className="mt-7 text-lg sm:text-xl text-[#6b5f7a] max-w-3xl mx-auto leading-relaxed text-center font-light">
            We are studying how knowledge forms, flows, and disappears inside organizations.
            Our work sits at the intersection of machine learning, cognitive science, and
            organizational theory. The goal is ambitious: give every institution on Earth
            a memory that does not fade.
          </p>

          <div className="mt-10 flex gap-3 justify-center flex-wrap">
            <a href="#pillars" className="bg-[#1d1d1d] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#333] transition text-sm">
              Research Pillars
            </a>
            <a href="#papers" className="bg-white/60 text-[#1d1d1d] border border-[#d4cade] px-6 py-3 rounded-xl font-medium hover:bg-white/80 transition text-sm">
              Working Papers
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* STATEMENT STRIP                                                  */}
      {/* ================================================================ */}
      <section className="border-y border-[#d4cade] bg-white/30">
        <div className="max-w-7xl mx-auto px-6 py-8 grid sm:grid-cols-3 gap-8">
          <StripItem
            label="Research Focus"
            value="Organizational Intelligence"
            desc="The study of how collective knowledge is created, retained, and recalled"
          />
          <StripItem
            label="Methodology"
            value="Applied + Theoretical"
            desc="Publishing foundational work while shipping models that operate in production"
          />
          <StripItem
            label="Commitment"
            value="Open Science"
            desc="Working papers, evaluations, and negative results published for the community"
          />
        </div>
      </section>

      {/* ================================================================ */}
      {/* RESEARCH STATEMENT                                               */}
      {/* ================================================================ */}
      <section className="relative dot-bg">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-5 gap-14">
            <div className="lg:col-span-2">
              <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
                Research Statement
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight">
                We believe organizational intelligence is the next frontier of applied AI
              </h2>
            </div>
            <div className="lg:col-span-3 space-y-5 text-[15px] text-[#6b5f7a] leading-relaxed font-light">
              <p>
                General-purpose language models have taught the world what machines can do
                with language. But organizations are not language. They are systems of
                decisions, relationships, obligations, and institutional habits that evolve
                across time. Understanding them requires a different kind of intelligence.
              </p>
              <p>
                Our lab exists to build that intelligence. We study the structure of
                collective cognition. We investigate how teams remember, how institutions
                forget, and how knowledge moves through human systems. Then we translate
                those findings into working systems that make organizations measurably
                smarter.
              </p>
              <p>
                This is long-horizon work. Rabbit is the first public artifact of our
                research. It will not be the last. Every system we ship is a hypothesis
                about how organizations can think, and every deployment is an experiment
                that sharpens what comes next.
              </p>
              <div className="pt-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-[#d4cade]" />
                <p className="text-[11px] font-mono text-[#8069af] tracking-wider uppercase">
                  Rabbit Research Lab, 2026
                </p>
                <div className="h-px flex-1 bg-[#d4cade]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* RESEARCH PILLARS                                                 */}
      {/* ================================================================ */}
      <section id="pillars" className="relative">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
              Research Pillars
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-4">
              Six directions we are actively investigating
            </h2>
            <p className="text-[15px] text-[#6b5f7a] max-w-2xl mx-auto font-light">
              Each pillar represents an open question in how machines can augment
              the way organizations think. Some are near-term engineering. Others
              are decade-long scientific bets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <PillarCard
              num="01"
              title="Structured Memory"
              desc="How do we transform unstructured human communication into durable, queryable knowledge without losing nuance or context? Our current systems represent the first generation of answers."
              status="Active"
            />
            <PillarCard
              num="02"
              title="Temporal Reasoning"
              desc="Organizations exist in time. Decisions made last quarter reshape what is possible today. We are researching models that reason natively across months and years of institutional history."
              status="Active"
            />
            <PillarCard
              num="03"
              title="Collective Cognition"
              desc="When many people contribute fragments of knowledge, how should a machine reconcile contradictions, surface consensus, and preserve dissenting perspectives? This is our most active research area."
              status="Active"
            />
            <PillarCard
              num="04"
              title="Adaptive Recall"
              desc="The right answer depends on who is asking, what they already know, and what they are trying to do. We are studying recall as a personalized, context-sensitive phenomenon rather than a static retrieval problem."
              status="Exploratory"
            />
            <PillarCard
              num="05"
              title="Organizational Planning"
              desc="Memory is only the first step. The next frontier is machines that translate institutional knowledge into forward-looking plans, anticipate coordination failures, and surface latent risks before they surface themselves."
              status="Early"
            />
            <PillarCard
              num="06"
              title="Institutional Prediction"
              desc="Can a system trained on the history of an organization forecast its future behavior? We believe the answer is yes, and we are building the theoretical and empirical foundations to prove it."
              status="Early"
            />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WORKING PAPERS                                                   */}
      {/* ================================================================ */}
      <section id="papers" className="bg-[#1d1d1d] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-4">
            <div>
              <p className="text-[11px] font-semibold text-[#c2a6cf] tracking-[0.15em] uppercase mb-5">
                Working Papers
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight max-w-2xl">
                Selected work from our research group
              </h2>
            </div>
            <p className="text-neutral-400 text-sm max-w-md font-light">
              A rolling list of papers, technical notes, and internal reports. Full
              texts are released as our review process completes. Preprints are shared
              with research partners on request.
            </p>
          </div>

          <div className="space-y-3">
            <PaperRow
              id="RR-2026-01"
              title="A Framework for Evaluating Organizational Memory Systems"
              authors="Rabbit Research Lab"
              date="Feb 2026"
              tags={["evaluation", "benchmarks", "methodology"]}
              status="Under Review"
            />
            <PaperRow
              id="RR-2026-02"
              title="Contradiction as a First-Class Signal in Collective Knowledge"
              authors="Rabbit Research Lab"
              date="Feb 2026"
              tags={["contradiction", "collective cognition"]}
              status="Preprint"
            />
            <PaperRow
              id="RR-2026-03"
              title="On the Temporal Structure of Institutional Decisions"
              authors="Rabbit Research Lab"
              date="Mar 2026"
              tags={["temporal reasoning", "decision theory"]}
              status="Working Draft"
            />
            <PaperRow
              id="RR-2026-04"
              title="Cited Generation: Grounding Organizational Answers in Verified Sources"
              authors="Rabbit Research Lab"
              date="Mar 2026"
              tags={["generation", "citation", "faithfulness"]}
              status="Preprint"
            />
            <PaperRow
              id="RR-2026-05"
              title="Entity Resolution Across Long Organizational Histories"
              authors="Rabbit Research Lab"
              date="Mar 2026"
              tags={["entity resolution", "knowledge graphs"]}
              status="Working Draft"
            />
            <PaperRow
              id="RR-2026-06"
              title="The Economics of Forgetting: A Quantitative Model of Institutional Amnesia"
              authors="Rabbit Research Lab"
              date="Apr 2026"
              tags={["economics", "organizational theory"]}
              status="Working Draft"
            />
            <PaperRow
              id="RR-2026-07"
              title="Beyond Retrieval: Toward Adaptive Recall in Personalized Knowledge Systems"
              authors="Rabbit Research Lab"
              date="Apr 2026"
              tags={["recall", "personalization"]}
              status="In Progress"
            />
            <PaperRow
              id="RR-2026-08"
              title="Graceful Uncertainty: Teaching Models When Not to Answer"
              authors="Rabbit Research Lab"
              date="Apr 2026"
              tags={["calibration", "uncertainty"]}
              status="In Progress"
            />
          </div>

          <div className="mt-10 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xs text-neutral-500 font-mono">
              Preprints available to research partners. Production papers released upon peer review.
            </p>
            <Link href="/contact" className="text-[13px] font-medium text-[#c2a6cf] hover:text-white transition">
              Request preprint access &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PRINCIPLES                                                       */}
      {/* ================================================================ */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
              Research Principles
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-4">
              How we do our work
            </h2>
            <p className="text-[15px] text-[#6b5f7a] max-w-2xl mx-auto font-light">
              These are the commitments that shape every experiment, every evaluation,
              and every model we release into the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <PrincipleCard
              num="I"
              title="Science before demos"
              desc="We value repeatable results over impressive demonstrations. If a capability does not survive rigorous evaluation, it does not ship. If an evaluation is gameable, we rebuild it."
            />
            <PrincipleCard
              num="II"
              title="Organizations are the unit of study"
              desc="We reject the framing of AI as individual assistance. The interesting questions live at the level of groups, teams, and institutions. Every experiment targets collective behavior, not isolated tasks."
            />
            <PrincipleCard
              num="III"
              title="Memory is sacred"
              desc="Institutional memory contains decisions, relationships, and context that must never leak. Our entire stack is built in-house so that sensitive data can remain inside the organizations that own it."
            />
            <PrincipleCard
              num="IV"
              title="Research in the open where possible"
              desc="We publish methodology, evaluation frameworks, and negative results. We believe the field of organizational intelligence should be built together, not locked behind proprietary walls."
            />
            <PrincipleCard
              num="V"
              title="Long horizons over short wins"
              desc="We are willing to spend years on questions that have no immediate commercial payoff. The most valuable research problems are the ones that look intractable until they are suddenly solved."
            />
            <PrincipleCard
              num="VI"
              title="Humility about what we do not know"
              desc="Every capability we build ships with explicit uncertainty bounds. Models that hallucinate have failed our review process. Knowing what we cannot answer is as important as answering well."
            />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FRONTIER / OPEN PROBLEMS                                         */}
      {/* ================================================================ */}
      <section className="bg-[#f5f2f8] border-y border-[#d4cade]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-5 gap-14">
            <div className="lg:col-span-2">
              <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
                The Frontier
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-6">
                Open problems we are actively working on
              </h2>
              <p className="text-[15px] text-[#6b5f7a] font-light leading-relaxed">
                These are the questions keeping our researchers up at night. Some
                will be answered by systems we ship this year. Others may take a
                decade. All of them matter.
              </p>
              <div className="mt-8 bg-white/70 border border-[#d4cade] rounded-xl p-5">
                <p className="text-[11px] font-mono text-[#8069af] uppercase tracking-wider mb-2">
                  Collaborate with us
                </p>
                <p className="text-sm text-[#6b5f7a] font-light leading-relaxed mb-4">
                  We welcome collaboration from academic labs, domain experts, and
                  enterprise research partners working on adjacent problems.
                </p>
                <Link href="/contact" className="text-[13px] font-medium text-[#8069af] hover:underline">
                  Get in touch &rarr;
                </Link>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-4">
              <OpenProblem
                q="How does an organization remember without violating the privacy of the people inside it?"
                body="The deepest open question in our field. A memory that captures everything is a surveillance system. A memory that captures nothing is useless. The answer lives somewhere in the middle, and we do not yet know where."
              />
              <OpenProblem
                q="What is the right representation for institutional knowledge?"
                body="Graphs, embeddings, documents, narratives. Each captures something. None captures everything. We are researching hybrid representations that degrade gracefully when any single modality is insufficient."
              />
              <OpenProblem
                q="When should a system say 'I do not know'?"
                body="Confidence calibration is an old problem. In organizational settings it becomes existential: a wrong answer about a legal matter or a patient record is not just incorrect, it is dangerous. We are studying the theory and practice of principled refusal."
              />
              <OpenProblem
                q="Can machines learn organizational culture?"
                body="Every organization has an invisible set of norms that shape how decisions happen. These norms are rarely written down. We are investigating whether they can be learned from behavioral traces, and whether they should be."
              />
              <OpenProblem
                q="What does it mean for a system to understand an organization it has never seen before?"
                body="Transfer is the hardest problem in applied ML. Organizational transfer is harder still, because every institution is a unique system with its own vocabulary, hierarchy, and history."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* TIMELINE                                                         */}
      {/* ================================================================ */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
              Research Timeline
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-4">
              Where we are and where we are going
            </h2>
            <p className="text-[15px] text-[#6b5f7a] max-w-2xl mx-auto font-light">
              A rough map of the next several years of work. Ambitious by design.
              We will miss some dates and be early on others. The direction is what matters.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-[#d4cade] md:left-1/2 md:-ml-px" />

            <TimelineRow
              year="2026"
              side="left"
              title="First Model Released"
              desc="Our earliest research artifact enters production. Memory extraction, linking, and cited recall become available through a public API and on-premise deployment. First working papers published."
              status="current"
            />
            <TimelineRow
              year="2026"
              side="right"
              title="Temporal and Contradiction Benchmarks"
              desc="Release of open evaluation frameworks for measuring temporal reasoning and contradiction detection in organizational contexts. Inviting the field to beat our numbers."
            />
            <TimelineRow
              year="2027"
              side="left"
              title="Adaptive Recall Systems"
              desc="Second-generation research prototypes that personalize recall based on who is asking. Early partners deploy in healthcare and legal environments."
            />
            <TimelineRow
              year="2027"
              side="right"
              title="Organizational Planning Preview"
              desc="First public demonstrations of systems that translate institutional memory into forward-looking plans. Closed research partnerships with select enterprise customers."
            />
            <TimelineRow
              year="2028"
              side="left"
              title="Institutional Prediction"
              desc="Early-stage work on systems that forecast organizational outcomes from institutional history. Academic partnerships deepen. First external validation studies begin."
            />
            <TimelineRow
              year="Beyond"
              side="right"
              title="Unified Organizational Intelligence"
              desc="A long-horizon research program toward systems that remember, reason, plan, and predict as a coherent whole. This is the work our lab exists to make possible."
            />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PARTNERSHIPS                                                     */}
      {/* ================================================================ */}
      <section className="bg-[#1d1d1d] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <p className="text-[11px] font-semibold text-[#c2a6cf] tracking-[0.15em] uppercase mb-5">
              Research Partnerships
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4 max-w-3xl mx-auto">
              We collaborate with universities, enterprise research groups, and independent scholars
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto font-light">
              Our partnerships are structured around shared research questions, not
              deliverables. Partners contribute expertise, domain knowledge, and
              real-world data environments. We contribute engineering, infrastructure, and
              novel models.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            <PartnerCard
              type="Academic"
              title="University Labs"
              desc="Joint research with labs working on cognitive science, information retrieval, and theoretical machine learning. Currently collaborating with groups in North America and Europe."
            />
            <PartnerCard
              type="Enterprise"
              title="Domain Partners"
              desc="Research agreements with organizations in healthcare, legal, defense, and financial services. Partners provide deidentified environments for applied research and evaluation."
            />
            <PartnerCard
              type="Independent"
              title="Visiting Researchers"
              desc="Short-term residencies for PhD students and independent researchers working on adjacent problems. Full access to infrastructure and co-authorship on resulting papers."
            />
            <PartnerCard
              type="Open Source"
              title="Evaluation Frameworks"
              desc="We release evaluation suites as open source. The research community is invited to contribute new tasks, benchmark datasets, and critical reviews of our methodology."
            />
            <PartnerCard
              type="Advisory"
              title="Research Advisors"
              desc="A rotating group of senior researchers and practitioners who review our methodology, challenge our assumptions, and help us avoid the mistakes of adjacent fields."
            />
            <PartnerCard
              type="Compute"
              title="Infrastructure Partners"
              desc="We work with several infrastructure providers to ensure our research has the compute it needs without compromising on data sovereignty or experimental reproducibility."
            />
          </div>

          <div className="bg-white/[0.04] border border-neutral-800 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h4 className="font-semibold text-white mb-1">Interested in collaborating?</h4>
              <p className="text-sm text-neutral-400 font-light">
                We are always looking for partners working on hard problems in organizational intelligence.
              </p>
            </div>
            <Link href="/contact" className="bg-[#c2a6cf] text-[#1d1d1d] px-5 py-2.5 rounded-lg font-semibold text-[13px] hover:bg-white transition whitespace-nowrap">
              Propose a partnership &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* ETHICS                                                           */}
      {/* ================================================================ */}
      <section className="relative dot-bg">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
                Research Ethics
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-6">
                We study memory. Which means we take it seriously.
              </h2>
              <p className="text-[15px] text-[#6b5f7a] font-light leading-relaxed mb-4">
                Institutional memory is not a commodity. It contains the private
                deliberations of real people making real decisions about real
                consequences. A research lab that works with this material has
                obligations that go beyond standard ML ethics.
              </p>
              <p className="text-[15px] text-[#6b5f7a] font-light leading-relaxed">
                Every experiment we run is reviewed against a set of commitments
                that predate any specific project. These commitments are not
                optional, and they are not negotiable with customers or partners.
              </p>
            </div>

            <div className="space-y-4">
              <EthicsPrinciple
                title="Consent and transparency"
                desc="Any data used in research is provided with explicit consent from the organizations that own it. Our methodology is documented. Our evaluation environments are auditable."
              />
              <EthicsPrinciple
                title="No aggregation across customers"
                desc="We never combine data across organizations. Every deployment is an island. What a system learns from one customer never leaks into what it knows about another."
              />
              <EthicsPrinciple
                title="Right to be forgotten"
                desc="Individuals inside customer organizations can request deletion. Our architecture is designed so that removal is provable, not just promised."
              />
              <EthicsPrinciple
                title="Human review on hard calls"
                desc="Any research direction that touches sensitive domains, surveillance-adjacent questions, or dual-use capabilities goes through an internal review process before it begins."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CTA                                                              */}
      {/* ================================================================ */}
      <section className="mesh-gradient">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
            Join Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-5">
            Good science is a collective act
          </h2>
          <p className="text-[15px] text-[#6b5f7a] max-w-2xl mx-auto font-light leading-relaxed mb-10">
            If you are a researcher, a practitioner, or an organization that believes
            institutional memory deserves rigorous study, we would like to hear from you.
            Our lab is small by design. Our ambitions are not.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact" className="bg-[#1d1d1d] text-white px-7 py-3.5 rounded-xl font-medium hover:bg-[#333] transition text-sm">
              Contact the lab
            </Link>
            <a href="https://cal.com/reattend/30min" target="_blank" rel="noopener noreferrer" className="bg-[#8069af] text-white px-7 py-3.5 rounded-xl font-medium hover:bg-[#6d5a96] transition text-sm">
              Schedule a conversation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ====================================================================== */
/* COMPONENTS                                                              */
/* ====================================================================== */

function StripItem({ label, value, desc }: { label: string; value: string; desc: string }) {
  return (
    <div>
      <p className="text-[10px] font-mono text-[#8069af] tracking-wider uppercase mb-1">{label}</p>
      <p className="text-lg font-bold text-[#1d1d1d] mb-1">{value}</p>
      <p className="text-xs text-[#6b5f7a] font-light leading-relaxed">{desc}</p>
    </div>
  );
}

function PillarCard({ num, title, desc, status }: { num: string; title: string; desc: string; status: string }) {
  const statusColor: Record<string, string> = {
    Active: "bg-[#8069af] text-white",
    Exploratory: "bg-[#c2a6cf]/30 text-[#6d5a96]",
    Early: "bg-white border border-[#d4cade] text-[#6b5f7a]",
  };
  return (
    <div className="bg-white/60 border border-[#d4cade] rounded-2xl p-7 hover:bg-white/80 transition">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[11px] font-mono text-[#8069af]">{num}</span>
        <span className={`text-[9px] font-semibold px-2 py-0.5 rounded uppercase tracking-wide ${statusColor[status]}`}>
          {status}
        </span>
      </div>
      <h3 className="text-lg font-bold text-[#1d1d1d] mb-3">{title}</h3>
      <p className="text-[13px] text-[#6b5f7a] font-light leading-relaxed">{desc}</p>
    </div>
  );
}

function PaperRow({ id, title, authors, date, tags, status }: { id: string; title: string; authors: string; date: string; tags: string[]; status: string }) {
  return (
    <div className="bg-white/[0.04] border border-neutral-800 rounded-xl p-5 hover:bg-white/[0.07] transition grid lg:grid-cols-[auto_1fr_auto] gap-4 lg:gap-6 lg:items-center">
      <div className="flex items-center gap-4 lg:w-36">
        <span className="text-[10px] font-mono text-neutral-500">{id}</span>
      </div>
      <div>
        <h3 className="text-[15px] font-semibold text-white mb-1.5 leading-snug">{title}</h3>
        <p className="text-[11px] text-neutral-500 font-mono mb-2">{authors} &middot; {date}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span key={t} className="text-[10px] font-mono text-[#c2a6cf] bg-[#c2a6cf]/10 px-2 py-0.5 rounded">{t}</span>
          ))}
        </div>
      </div>
      <div className="text-left lg:text-right">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 bg-white/[0.05] border border-neutral-800 px-2.5 py-1 rounded">
          {status}
        </span>
      </div>
    </div>
  );
}

function PrincipleCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="bg-white/60 border border-[#d4cade] rounded-2xl p-7 flex gap-5">
      <span className="text-2xl font-bold text-[#c2a6cf] shrink-0 font-mono">{num}</span>
      <div>
        <h3 className="font-bold text-[#1d1d1d] mb-2">{title}</h3>
        <p className="text-[14px] text-[#6b5f7a] leading-relaxed font-light">{desc}</p>
      </div>
    </div>
  );
}

function OpenProblem({ q, body }: { q: string; body: string }) {
  return (
    <div className="bg-white/70 border border-[#d4cade] rounded-xl p-6">
      <p className="text-[#1d1d1d] font-semibold text-[15px] mb-3 leading-snug">
        <span className="text-[#8069af] font-mono text-xs mr-2">Q.</span>
        {q}
      </p>
      <p className="text-[13px] text-[#6b5f7a] font-light leading-relaxed">{body}</p>
    </div>
  );
}

function TimelineRow({ year, side, title, desc, status }: { year: string; side: "left" | "right"; title: string; desc: string; status?: string }) {
  const isLeft = side === "left";
  return (
    <div className="relative mb-8 md:mb-10">
      <div className={`md:grid md:grid-cols-2 md:gap-10 ${isLeft ? "" : "md:[&>div:first-child]:col-start-2"}`}>
        <div className={`pl-12 md:pl-0 ${isLeft ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
          <div className={`bg-white/70 border ${status === "current" ? "border-[#8069af] shadow-sm" : "border-[#d4cade]"} rounded-xl p-6`}>
            <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:justify-end" : ""}`}>
              <span className="text-[10px] font-mono text-[#8069af] bg-[#8069af]/10 px-2 py-0.5 rounded">{year}</span>
              {status === "current" && (
                <span className="text-[10px] font-semibold text-white bg-[#8069af] px-2 py-0.5 rounded uppercase">Now</span>
              )}
            </div>
            <h3 className="text-lg font-bold text-[#1d1d1d] mb-2">{title}</h3>
            <p className="text-[13px] text-[#6b5f7a] font-light leading-relaxed">{desc}</p>
          </div>
        </div>
      </div>
      {/* Dot */}
      <div className="absolute left-4 top-6 w-2 h-2 rounded-full bg-[#8069af] border-2 border-[#eee9f4] md:left-1/2 md:-ml-1" />
    </div>
  );
}

function PartnerCard({ type, title, desc }: { type: string; title: string; desc: string }) {
  return (
    <div className="bg-white/[0.04] border border-neutral-800 rounded-xl p-6">
      <span className="text-[10px] font-mono text-[#c2a6cf] bg-[#c2a6cf]/10 px-2 py-0.5 rounded uppercase mb-3 inline-block">{type}</span>
      <h3 className="font-semibold text-white text-[15px] mb-2">{title}</h3>
      <p className="text-[13px] text-neutral-400 font-light leading-relaxed">{desc}</p>
    </div>
  );
}

function EthicsPrinciple({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white/70 border border-[#d4cade] rounded-xl p-5">
      <h4 className="font-semibold text-[#1d1d1d] text-[14px] mb-1.5">{title}</h4>
      <p className="text-[13px] text-[#6b5f7a] font-light leading-relaxed">{desc}</p>
    </div>
  );
}

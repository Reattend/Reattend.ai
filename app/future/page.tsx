import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default function FuturePage() {
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
            <Link href="/enterprise" className="hover:text-[#1d1d1d] transition">Enterprise</Link>
            <Link href="/developers" className="hover:text-[#1d1d1d] transition">API</Link>
            <Link href="/future" className="text-[#1d1d1d]">Vision</Link>
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
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full bg-[#8069af]/[0.08] blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#1d1d1d]/[0.04] blur-[100px]" />

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20">
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2 text-[11px] font-medium text-[#8069af] bg-white/60 border border-[#d4cade] px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8069af] animate-pulse-slow" />
              A Manifesto / Rabbit Research Lab / 2026
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[84px] font-bold tracking-tight leading-[0.98] text-[#1d1d1d] text-center max-w-5xl mx-auto">
            Every organization on Earth is slowly forgetting itself
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-[#6b5f7a] max-w-3xl mx-auto leading-relaxed text-center font-light">
            This is the defining crisis of modern work. It is not a crisis that
            makes headlines. It does not set off alarms. It does not show up
            on any dashboard. It is slow, silent, and catastrophic. And it is
            already costing the world more than any single technological failure
            in recorded history.
          </p>
          <p className="mt-6 text-center text-[13px] text-[#8069af] font-mono tracking-wider">
            Read time: 12 minutes / Written in the long shadow of the information age
          </p>
        </div>
      </section>

      {/* ================================================================ */}
      {/* OPENING STATEMENT                                                */}
      {/* ================================================================ */}
      <section className="border-y border-[#d4cade] bg-[#1d1d1d] text-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-[11px] font-mono text-[#c2a6cf] tracking-[0.15em] uppercase mb-8 text-center">
            Opening Statement
          </p>
          <p className="text-2xl sm:text-3xl font-bold leading-[1.25] text-center">
            You are working for an institution that cannot remember what it did last Tuesday,
            cannot recall why it made decisions that shape its present, and cannot tell you
            what its most experienced people knew before they walked out the door.
          </p>
          <p className="text-lg text-neutral-400 font-light leading-relaxed text-center mt-8 max-w-2xl mx-auto">
            This is true of almost every organization on the planet. It is true
            of the company you work at. It is true of the government agency that
            governs your life. It is true of the hospital that treats your children.
          </p>
          <p className="text-lg text-white font-semibold text-center mt-6">
            It has been true for a long time. It is about to get much worse.
          </p>
        </div>
      </section>

      {/* ================================================================ */}
      {/* THE THESIS                                                       */}
      {/* ================================================================ */}
      <section className="relative dot-bg">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-5 gap-14">
            <div className="lg:col-span-2">
              <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
                The Thesis
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight">
                The twenty-first century will be defined by who remembers and who forgets
              </h2>
            </div>
            <div className="lg:col-span-3 space-y-5 text-[16px] text-[#6b5f7a] leading-relaxed font-light">
              <p>
                Every generation has a defining bottleneck. In the twentieth century it
                was communication. Organizations that could move information faster than
                their competitors won. Fax machines, email, Slack, Zoom. Each new layer
                compressed the distance between thought and action.
              </p>
              <p>
                That bottleneck is gone. Information now moves at the speed of light
                through every organization, in quantities no human can track. The
                limiting resource is no longer how quickly information travels.
                It is how much of it any institution can hold onto.
              </p>
              <p>
                We are building AI systems that can compose symphonies, write code,
                and pass the bar exam. And yet the average enterprise cannot tell you
                why it made a pricing decision six months ago, or whether a commitment
                made in a meeting last March was ever honored. The intelligence revolution
                is happening on top of an institutional amnesia that is older than any
                of the technology that runs on it.
              </p>
              <p className="text-[#1d1d1d] font-semibold text-[17px] border-l-2 border-[#8069af] pl-5">
                The organizations that solve memory in the next decade will compound
                in ways that look supernatural to everyone else. The ones that do not
                will be left behind so quickly they will not realize what happened.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* THE SILENT CATASTROPHE                                           */}
      {/* ================================================================ */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
              The Silent Catastrophe
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#1d1d1d] leading-[1.05] mb-5 max-w-4xl mx-auto">
              The numbers are worse than you think
            </h2>
            <p className="text-[15px] text-[#6b5f7a] max-w-2xl mx-auto font-light">
              Every one of these numbers represents an institutional failure so
              routine it has become invisible. Read them slowly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <ScaryStat big="$31.5B" label="Lost annually to knowledge silos" source="IDC" />
            <ScaryStat big="5.3 hrs" label="Per employee, per week, searching for information that already exists" source="McKinsey" />
            <ScaryStat big="77%" label="Of institutional knowledge walks out the door with each departing employee" source="Deloitte" />
            <ScaryStat big="70%" label="Of decisions get silently remade because the original decision cannot be found" source="Gartner" />
            <ScaryStat big="121" label="Emails received per knowledge worker per day. None of them indexed institutionally." source="Radicati Group" />
            <ScaryStat big="25.6" label="Meetings per week for the average white-collar worker. Almost none remembered." source="Harvard Business Review" />
            <ScaryStat big="1.5B" label="Slack messages per week across the platform. Each one a fragment of context, lost by Friday." source="Slack" />
            <ScaryStat big="$47K" label="Average cost to replace a knowledge worker, driven largely by context loss" source="Work Institute" />
          </div>

          <div className="bg-[#1d1d1d] text-white rounded-2xl p-10 text-center">
            <p className="text-xl sm:text-2xl font-semibold leading-relaxed max-w-3xl mx-auto">
              If you multiply these numbers across every organization on Earth,
              you arrive at the largest invisible cost in the history of capitalism.
            </p>
            <p className="text-[#c2a6cf] font-mono text-sm mt-6 tracking-wider uppercase">
              And not one dashboard anywhere is tracking it.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WHAT YOU ARE LOSING                                              */}
      {/* ================================================================ */}
      <section className="bg-[#f5f2f8] border-y border-[#d4cade]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
              What Is Actually Disappearing
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-4">
              Six kinds of knowledge your organization is losing right now
            </h2>
            <p className="text-[15px] text-[#6b5f7a] max-w-2xl mx-auto font-light">
              These are not theoretical categories. They are the specific ways
              institutional memory decays, quietly, every single week.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <LossCard
              num="01"
              title="Decision rationales"
              desc="Why something was chosen over something else. The context that was considered. The alternatives that were rejected. These reasons die in meeting rooms, and your future self will spend days rebuilding them badly."
            />
            <LossCard
              num="02"
              title="Relationship context"
              desc="Who did what for whom. Which vendor is trusted. Which customer was promised what. When your best AE leaves, the relationship map leaves with them, and every warm introduction becomes cold again."
            />
            <LossCard
              num="03"
              title="Failed experiments"
              desc="The thing that did not work last year. The approach that almost worked but was dropped for reasons nobody remembers. Teams repeat these failures because the institutional memory of trying was never recorded."
            />
            <LossCard
              num="04"
              title="Tacit expertise"
              desc="The shortcut your most senior engineer takes without thinking. The intuition your head of product uses to kill bad ideas. This knowledge is never written down, and it is not recoverable from documentation."
            />
            <LossCard
              num="05"
              title="Commitments in flight"
              desc="Promises made in passing, during meetings, in hallway conversations. The contract that will be signed. The favor that will be returned. These commitments rot into the silence of unmet expectations."
            />
            <LossCard
              num="06"
              title="The why behind the what"
              desc="Your codebase has every answer to 'what does this do?' and almost no answer to 'why was it built this way?' Multiply that across every artifact your organization produces."
            />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* THE ACCELERATION                                                 */}
      {/* ================================================================ */}
      <section className="bg-[#1d1d1d] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(128,105,175,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(128,105,175,0.1) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold text-[#c2a6cf] tracking-[0.15em] uppercase mb-5">
              The Acceleration
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold leading-[1.05] mb-5 max-w-4xl mx-auto">
              AI is about to make this problem exponentially worse
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto font-light text-[15px]">
              The intuition most people have is backwards. They think AI will solve
              organizational amnesia. It will do the opposite, faster than anyone expects.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-5 mb-10">
            <AccelCard
              title="More context, not less"
              desc="AI agents are going to generate ten, a hundred, a thousand times more artifacts than humans ever could. Every agent run is a decision, every decision is a context, every context is knowledge that will be needed later or lost forever."
            />
            <AccelCard
              title="Invisible decisions"
              desc="When humans make a decision, at least one person remembers making it. When an agent makes one, no one remembers at all. The next generation of work will have entire categories of decisions that nobody can reconstruct."
            />
            <AccelCard
              title="Speed without grounding"
              desc="AI makes execution faster. It does not make wisdom faster. Organizations that sprint forward with AI but without memory will compound their own confusion at machine speed. The mistakes will come faster than the learning."
            />
          </div>

          <div className="bg-white/[0.04] border border-neutral-800 rounded-2xl p-10 text-center">
            <p className="text-xl sm:text-2xl font-semibold leading-relaxed max-w-3xl mx-auto">
              Every organization that deploys AI without memory infrastructure is
              building a factory that produces more context than it can absorb
              and more decisions than it can trace.
            </p>
            <p className="text-[#c2a6cf] font-mono text-sm mt-6 tracking-wider uppercase">
              We are headed for the most forgetful decade in institutional history.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* THE BIFURCATION                                                  */}
      {/* ================================================================ */}
      <section className="relative dot-bg">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
              The Bifurcation
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-4">
              Two futures are forming right now. You are living in one of them.
            </h2>
            <p className="text-[15px] text-[#6b5f7a] max-w-2xl mx-auto font-light">
              A decade from now, the organizations of the world will be divided
              into two groups. The gap between them will be wider than any gap we
              have seen in the history of business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Path A */}
            <div className="bg-white/70 border border-[#d4cade] rounded-2xl p-8">
              <span className="text-[10px] font-mono text-[#8069af] bg-[#8069af]/10 px-2 py-0.5 rounded uppercase tracking-wider mb-5 inline-block">
                Path A / Memory
              </span>
              <h3 className="text-2xl font-bold text-[#1d1d1d] mb-5">The organizations that remember</h3>
              <ul className="space-y-4">
                <FuturePoint good text="Every decision is traceable to its reasoning, its alternatives, and its outcome." />
                <FuturePoint good text="New hires reach full context in days instead of months. Onboarding becomes a solved problem." />
                <FuturePoint good text="AI agents inherit the full history of every project, every constraint, every scar." />
                <FuturePoint good text="Leadership transitions stop erasing institutional knowledge. Continuity becomes the default." />
                <FuturePoint good text="Errors are made once. The organization learns at the speed of its memory, not the speed of retirement." />
                <FuturePoint good text="Compounding advantage that cannot be replicated by hiring more people or buying more compute." />
              </ul>
            </div>

            {/* Path B */}
            <div className="bg-[#1d1d1d] text-white rounded-2xl p-8">
              <span className="text-[10px] font-mono text-red-400 bg-red-400/10 px-2 py-0.5 rounded uppercase tracking-wider mb-5 inline-block">
                Path B / Amnesia
              </span>
              <h3 className="text-2xl font-bold mb-5">The organizations that forget</h3>
              <ul className="space-y-4">
                <FuturePoint text="Decisions get made, remade, and reversed. Nobody knows why the policy changed. Nobody can tell you what the original intent was." />
                <FuturePoint text="New hires spend their first six months learning what the organization already knew. Productivity burns in the onboarding gap." />
                <FuturePoint text="AI agents work without history, produce confident wrong answers, and quietly erode the institution from inside." />
                <FuturePoint text="Every leadership change restarts the organization from scratch. Strategy becomes circular. Progress becomes performative." />
                <FuturePoint text="The same mistakes get made every three years. The institution is physically incapable of learning." />
                <FuturePoint text="Extinction-level disadvantage that nobody notices until it is too late." />
              </ul>
            </div>
          </div>

          <p className="text-center mt-10 text-[15px] text-[#6b5f7a] font-light max-w-2xl mx-auto">
            There will not be a middle path. Organizations that hesitate will not
            find a comfortable compromise. They will drift into Path B by default.
          </p>
        </div>
      </section>

      {/* ================================================================ */}
      {/* THE TIMELINE                                                     */}
      {/* ================================================================ */}
      <section className="bg-[#8069af] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold text-white/70 tracking-[0.15em] uppercase mb-5">
              The Timeline
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              Here is what the next decade looks like if we do nothing
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto font-light text-[15px]">
              This is not a forecast. This is extrapolation from trends that are
              already visible. The only variable is how prepared your organization will be.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            <TimelineEra
              year="2026"
              title="The warning year"
              body="AI agents become table stakes. Organizations scramble to deploy them. The first quiet disasters happen when agents make decisions nobody can reconstruct. Nobody connects the dots yet."
            />
            <TimelineEra
              year="2027"
              title="The acceleration"
              body="Context production outpaces human comprehension by ten to one. Knowledge workers report feeling lost inside their own workflows. The first industry studies show productivity gains stalling despite heavy AI investment."
            />
            <TimelineEra
              year="2028"
              title="The crisis of trust"
              body="High-profile failures surface where organizations discover they cannot explain, trace, or defend major decisions. Regulators begin asking hard questions about algorithmic accountability."
            />
            <TimelineEra
              year="2029"
              title="The great divide"
              body="The gap between organizations with memory infrastructure and organizations without becomes visible. The leaders are moving at a pace the laggards cannot match. Talent flows one direction."
            />
            <TimelineEra
              year="2030"
              title="The unrecoverable gap"
              body="A decade of context compounded inside memory-enabled organizations creates a moat that cannot be crossed by hiring, buying, or copying. The rest of the market plays permanent catch-up."
            />
            <TimelineEra
              year="2032"
              title="The new normal"
              body="Memory infrastructure is as fundamental as cloud computing. Organizations without it are considered unserious, the way companies without websites were considered unserious in 2005."
              highlight
            />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WHAT HAS TO BE BUILT                                             */}
      {/* ================================================================ */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
              What Has To Be Built
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-4">
              Memory is infrastructure. Someone has to build it.
            </h2>
            <p className="text-[15px] text-[#6b5f7a] max-w-2xl mx-auto font-light">
              Every era has a piece of infrastructure that defines it. The railroads.
              The internet. The cloud. The next one is already taking shape, and almost
              nobody is paying attention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <InfraCard
              num="01"
              title="Purpose-built models"
              desc="General-purpose language models will not solve this. Organizational memory is a different problem with a different shape. It requires models trained specifically for it."
            />
            <InfraCard
              num="02"
              title="Knowledge graphs that age"
              desc="Static graphs are a museum. Memory is alive. It updates, contradicts itself, supersedes old decisions. The data structures of the future must remember time."
            />
            <InfraCard
              num="03"
              title="Sovereign deployment"
              desc="Institutional memory is the most sensitive data on Earth. It cannot live in someone else's cloud. The future is running entirely inside organizations that own it."
            />
            <InfraCard
              num="04"
              title="Memory as a right"
              desc="Individuals inside organizations deserve the same memory benefits as the institutions themselves. Memory must be personal, portable, and protective."
            />
          </div>

          <div className="mt-10 bg-white/70 border border-[#d4cade] rounded-2xl p-8 text-center">
            <p className="text-lg text-[#1d1d1d] font-semibold leading-relaxed max-w-3xl mx-auto">
              This is the infrastructure we are building. Not because it is easy.
              Because somebody has to, and the window to do it well is closing.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WHY US                                                           */}
      {/* ================================================================ */}
      <section className="bg-[#f5f2f8] border-y border-[#d4cade]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-5 gap-14">
            <div className="lg:col-span-2">
              <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
                Why Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-tight mb-6">
                We are a small lab with an unreasonable ambition
              </h2>
              <p className="text-[15px] text-[#6b5f7a] font-light leading-relaxed mb-6">
                Rabbit is a research lab first. A product company second. We
                believe the memory problem is too important to leave to
                repurposed chatbots, and too hard to solve without decades of
                focused work.
              </p>
              <p className="text-[15px] text-[#6b5f7a] font-light leading-relaxed">
                Our first model is live. More are coming. We are willing to
                spend the next ten years on this because we believe it is
                the single highest-leverage problem in applied intelligence
                that nobody is taking seriously enough.
              </p>
            </div>
            <div className="lg:col-span-3 space-y-4">
              <BeliefItem
                num="I"
                title="Memory is as important as thought"
                body="The future of AI will not be defined by reasoning alone. It will be defined by the systems that remember what has already been reasoned about."
              />
              <BeliefItem
                num="II"
                title="Organizations are the unit of change"
                body="Individual productivity matters. But the compound effects happen at the institutional level. That is where our work is aimed."
              />
              <BeliefItem
                num="III"
                title="Sovereignty is non-negotiable"
                body="An organization's memory must belong to the organization, not to an upstream provider that can change the terms at any moment."
              />
              <BeliefItem
                num="IV"
                title="Speed and care are compatible"
                body="We move quickly because the problem is urgent. We move carefully because the mistakes in this domain cost too much. Both, at the same time, forever."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* THE CALL                                                         */}
      {/* ================================================================ */}
      <section className="bg-[#1d1d1d] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(194,166,207,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(194,166,207,0.08) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-5xl mx-auto px-6 py-24">
          <p className="text-[11px] font-semibold text-[#c2a6cf] tracking-[0.15em] uppercase mb-8 text-center">
            The Call
          </p>
          <h2 className="text-4xl sm:text-6xl font-bold leading-[1.02] text-center mb-10">
            If you are reading this and you run an organization, you already know
          </h2>
          <div className="space-y-6 text-[17px] text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto">
            <p>
              You already know that decisions get made twice. You already know
              that your best people carry knowledge no document will ever capture.
              You already know that the gap between what your organization knows
              and what it can recall is growing, not shrinking.
            </p>
            <p>
              You know this because you live it. Every day. In every meeting you
              have sat in where someone re-explained what was already settled.
              In every conversation where a senior person said "we tried that once,
              it did not work, I cannot remember why." In every onboarding you
              watched take six months when it should have taken six days.
            </p>
            <p className="text-white font-semibold text-[19px]">
              The question is not whether your organization needs memory infrastructure.
              The question is whether you will be the one to bring it, or whether
              you will watch someone else in your industry bring it first, and then
              spend the next five years explaining to your board why you are behind.
            </p>
          </div>
          <div className="mt-12 flex gap-3 justify-center flex-wrap">
            <Link href="/login" className="bg-white text-[#1d1d1d] px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition text-sm">
              Get API Access
            </Link>
            <a href="https://cal.com/reattend/30min" target="_blank" rel="noopener noreferrer" className="bg-[#8069af] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#6d5a96] transition text-sm">
              Talk to Us
            </a>
            <Link href="/enterprise" className="bg-white/10 text-white border border-white/30 px-8 py-4 rounded-xl font-medium hover:bg-white/20 transition text-sm">
              Enterprise Deployment
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CLOSING                                                          */}
      {/* ================================================================ */}
      <section className="mesh-gradient">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-8">
            Closing
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-[#1d1d1d] leading-[1.25] mb-8">
            The organizations of the future will not be defined by how fast they move.
            They will be defined by what they refuse to forget.
          </p>
          <p className="text-[15px] text-[#6b5f7a] font-light leading-relaxed max-w-2xl mx-auto mb-10">
            We are building toward that future. If it resonates with you, we would
            like to hear from you. Whether you are a researcher, a builder, a CTO,
            or simply someone who has felt this problem and is tired of the silence
            around it.
          </p>
          <div className="flex items-center justify-center gap-4 text-[11px] text-[#8069af] font-mono tracking-wider uppercase">
            <div className="h-px w-16 bg-[#8069af]/40" />
            <span>Rabbit Research Lab</span>
            <div className="h-px w-16 bg-[#8069af]/40" />
          </div>
          <p className="text-[11px] text-[#a89bb5] mt-4 font-mono">
            2026 / An ongoing manifesto
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

function ScaryStat({ big, label, source }: { big: string; label: string; source: string }) {
  return (
    <div className="bg-white/70 border border-[#d4cade] rounded-2xl p-6">
      <p className="text-3xl sm:text-4xl font-bold text-[#1d1d1d] leading-none mb-3">{big}</p>
      <p className="text-[12px] text-[#6b5f7a] font-light leading-relaxed mb-3">{label}</p>
      <p className="text-[9px] font-mono text-[#a89bb5] uppercase tracking-wider">Source: {source}</p>
    </div>
  );
}

function LossCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="bg-white/70 border border-[#d4cade] rounded-2xl p-7">
      <span className="text-[11px] font-mono text-[#8069af] bg-[#8069af]/10 px-2 py-0.5 rounded inline-block mb-3">{num}</span>
      <h3 className="text-lg font-bold text-[#1d1d1d] mb-3">{title}</h3>
      <p className="text-[13px] text-[#6b5f7a] font-light leading-relaxed">{desc}</p>
    </div>
  );
}

function AccelCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white/[0.04] border border-neutral-800 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-3">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-red-400">
          <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3 className="font-bold text-white text-[15px]">{title}</h3>
      </div>
      <p className="text-[13px] text-neutral-400 font-light leading-relaxed">{desc}</p>
    </div>
  );
}

function FuturePoint({ text, good }: { text: string; good?: boolean }) {
  return (
    <li className="flex items-start gap-3">
      {good ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#8069af] shrink-0 mt-0.5">
          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-red-400 shrink-0 mt-0.5">
          <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      <span className={`text-[14px] leading-relaxed ${good ? "text-[#1d1d1d] font-light" : "text-neutral-300 font-light"}`}>
        {text}
      </span>
    </li>
  );
}

function TimelineEra({ year, title, body, highlight }: { year: string; title: string; body: string; highlight?: boolean }) {
  return (
    <div className={`border rounded-xl p-6 flex gap-6 ${highlight ? "bg-white/20 border-white" : "bg-white/10 border-white/20"}`}>
      <div className="shrink-0">
        <p className="text-3xl font-bold text-white">{year}</p>
      </div>
      <div>
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-[13px] text-white/80 font-light leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

function InfraCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="bg-white/60 border border-[#d4cade] rounded-2xl p-6">
      <span className="text-[11px] font-mono text-[#8069af] bg-[#8069af]/10 px-2 py-0.5 rounded inline-block mb-3">{num}</span>
      <h3 className="font-bold text-[#1d1d1d] text-[15px] mb-2">{title}</h3>
      <p className="text-[12px] text-[#6b5f7a] font-light leading-relaxed">{desc}</p>
    </div>
  );
}

function BeliefItem({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div className="bg-white/70 border border-[#d4cade] rounded-xl p-6 flex gap-5">
      <span className="text-2xl font-bold text-[#c2a6cf] shrink-0 font-mono">{num}</span>
      <div>
        <h3 className="font-bold text-[#1d1d1d] text-[15px] mb-1.5">{title}</h3>
        <p className="text-[13px] text-[#6b5f7a] font-light leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function ReattendHome() {
  return (
    <div className="min-h-screen bg-white text-[#111827]">
      {/* Header */}
      <header className="border-b border-gray-200 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-8">
          <Link href="/r" className="text-xl font-bold tracking-tight">Reattend</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-500">
            <a href="#features" className="hover:text-[#111827] transition">Features</a>
            <a href="#how" className="hover:text-[#111827] transition">How it works</a>
            <a href="#pricing" className="hover:text-[#111827] transition">Pricing</a>
          </nav>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/r/login" className="text-gray-500 hover:text-[#111827] transition font-medium">
            Log in
          </Link>
          <Link href="/r/login" className="bg-[#111827] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-black transition">
            Get started free
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-28 pb-20 text-center">
        <p className="text-sm font-medium text-gray-400 mb-4">Your AI memory</p>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.08]">
          Remember everything.
          <br />
          <span className="text-gray-400">Forget nothing.</span>
        </h1>
        <p className="mt-6 text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
          Reattend captures your meetings, emails, notes, and documents.
          Then answers any question across your entire history. With citations.
        </p>
        <div className="mt-10 flex gap-3 justify-center">
          <Link href="/r/login" className="bg-[#111827] text-white px-7 py-3.5 rounded-lg font-medium hover:bg-black transition">
            Start for free
          </Link>
          <a href="#how" className="border border-gray-300 text-[#111827] px-7 py-3.5 rounded-lg font-medium hover:bg-gray-50 transition">
            See how it works
          </a>
        </div>
      </section>

      {/* Chat preview */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
          <div className="px-5 py-4 border-b border-gray-200 bg-white">
            <p className="text-sm text-gray-400">Ask me anything about your memories...</p>
          </div>
          <div className="p-5 space-y-4">
            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-full bg-[#111827] flex items-center justify-center text-white text-xs font-bold shrink-0">P</div>
              <div className="bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm">
                What did we decide about the Q2 launch?
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-bold shrink-0">R</div>
              <div className="bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-600 leading-relaxed">
                Based on your meeting on April 3 <span className="text-gray-400">[1]</span>, Sarah delayed the launch to March 15 due to Tom&apos;s security concerns about the auth module <span className="text-gray-400">[2]</span>. The budget was confirmed at $50K.
                <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-400">
                  Sources: [1] Q2 Planning Meeting, Apr 3 &middot; [2] Security Review, Apr 5
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-4xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-center mb-12">Everything you need to never forget</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          <Feature title="Capture anything" desc="Text, PDF, audio recordings, images, emails, calendar events. Paste, upload, or auto-sync." />
          <Feature title="Ask anything" desc="Natural language questions across all your memories. Cited answers grounded in your actual data." />
          <Feature title="Knowledge graph" desc="See how your memories connect. Explore relationships, find patterns, brainstorm on a visual board." />
          <Feature title="Auto-extract" desc="People, decisions, action items, dates, topics. Automatically pulled from every memory." />
          <Feature title="Contradictions" desc="Reattend detects when new information conflicts with what you already know." />
          <Feature title="Projects" desc="Organize memories into projects. Each project has its own timeline, graph, and search." />
          <Feature title="Team memory" desc="Shared projects for your team. Everyone's knowledge in one searchable place." />
          <Feature title="100+ integrations" desc="Gmail, Slack, Calendar, Notion, GitHub, and more. Your tools, connected." />
          <Feature title="Privacy first" desc="Choose where your data lives. Your memories never leave your chosen region." />
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-12">How it works</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <Step num="1" title="Add memories" desc="Type, upload, or connect your tools. Reattend processes everything automatically." />
            <Step num="2" title="Knowledge builds" desc="Entities are extracted, relationships are mapped, contradictions are flagged. Your knowledge graph grows." />
            <Step num="3" title="Ask and recall" desc="Ask any question in natural language. Get cited, accurate answers from your entire history." />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-3xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-bold text-center mb-12">Simple pricing</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          <PriceCard
            plan="Free"
            price="$0"
            period="forever"
            features={["500 memories", "20 asks per day", "3 projects", "Text + file upload"]}
            cta="Get started"
            href="/r/login"
          />
          <PriceCard
            plan="Pro"
            price="$15"
            period="/month"
            features={["Unlimited memories", "Unlimited asks", "Unlimited projects", "All integrations", "Team sharing", "Priority support"]}
            cta="Start free trial"
            href="/r/login"
            featured
          />
          <PriceCard
            plan="Enterprise"
            price="Custom"
            period=""
            features={["On-premise deployment", "Custom integrations", "SSO / SAML", "Dedicated support", "Custom model training"]}
            cta="Contact us"
            href="https://cal.com/reattend/30min"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Start remembering</h2>
        <p className="text-gray-500 mb-8">Free forever. No credit card required.</p>
        <Link href="/r/login" className="bg-[#111827] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-black transition">
          Get started free
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span className="font-medium text-[#111827]">Reattend</span>
          <div className="flex gap-6">
            <a href="https://rabbit.reattend.ai" className="hover:text-[#111827] transition">Rabbit API</a>
            <a href="https://cal.com/reattend/30min" className="hover:text-[#111827] transition">Contact</a>
            <a href="#" className="hover:text-[#111827] transition">Privacy</a>
            <a href="#" className="hover:text-[#111827] transition">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition">
      <h3 className="font-semibold text-[#111827] mb-1.5 text-[15px]">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function Step({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="text-center">
      <div className="w-10 h-10 rounded-full bg-[#111827] text-white text-sm font-bold flex items-center justify-center mx-auto mb-4">{num}</div>
      <h3 className="font-semibold text-[#111827] mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function PriceCard({ plan, price, period, features, cta, href, featured }: {
  plan: string; price: string; period: string; features: string[]; cta: string; href: string; featured?: boolean;
}) {
  return (
    <div className={`rounded-xl p-6 ${featured ? "border-2 border-[#111827] bg-white" : "border border-gray-200"}`}>
      <h3 className="font-semibold text-[#111827] mb-1">{plan}</h3>
      <p className="mb-4"><span className="text-3xl font-bold">{price}</span><span className="text-gray-400 text-sm">{period}</span></p>
      <ul className="space-y-2 mb-6">
        {features.map(f => (
          <li key={f} className="text-sm text-gray-500 flex items-start gap-2">
            <span className="text-gray-400 mt-0.5">&#x2713;</span>{f}
          </li>
        ))}
      </ul>
      <a href={href} className={`block text-center py-2.5 rounded-lg font-medium text-sm transition ${
        featured ? "bg-[#111827] text-white hover:bg-black" : "border border-gray-300 text-[#111827] hover:bg-gray-50"
      }`}>{cta}</a>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1d1d1d] text-white px-6 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">
        {/* Top: tagline */}
        <div className="mb-16">
          <div className="flex items-center gap-2.5 mb-4">
            <Image src="/logo.png" alt="Rabbit" width={22} height={22} className="brightness-0 invert" />
            <span className="font-bold text-sm">rabbit</span>
          </div>
          <p className="text-neutral-500 text-sm max-w-md leading-relaxed">
            AI research and products that put organizational memory at the core.
            Rabbit is the first model. Built by the team at Reattend.
          </p>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mb-16">
          <div>
            <h4 className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-4">Research</h4>
            <ul className="space-y-2.5">
              <li><Link href="/research" className="text-[13px] text-neutral-400 hover:text-white transition">Overview</Link></li>
              <li><Link href="/research/benchmarks" className="text-[13px] text-neutral-400 hover:text-white transition">Benchmarks</Link></li>
              <li><Link href="/research/data-ethics" className="text-[13px] text-neutral-400 hover:text-white transition">Data Ethics</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2.5">
              <li><Link href="/product" className="text-[13px] text-neutral-400 hover:text-white transition">Model</Link></li>
              <li><Link href="/product" className="text-[13px] text-neutral-400 hover:text-white transition">Signals</Link></li>
              <li><Link href="/developers" className="text-[13px] text-neutral-400 hover:text-white transition">API Docs</Link></li>
              <li><Link href="/login" className="text-[13px] text-neutral-400 hover:text-white transition">Playground</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-4">Enterprise</h4>
            <ul className="space-y-2.5">
              <li><Link href="/enterprise" className="text-[13px] text-neutral-400 hover:text-white transition">Overview</Link></li>
              <li><Link href="/enterprise" className="text-[13px] text-neutral-400 hover:text-white transition">Deployment</Link></li>
              <li><Link href="/enterprise" className="text-[13px] text-neutral-400 hover:text-white transition">Compliance</Link></li>
              <li><a href="https://cal.com/reattend/30min" target="_blank" rel="noopener noreferrer" className="text-[13px] text-neutral-400 hover:text-white transition">Contact Sales</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-4">Platform</h4>
            <ul className="space-y-2.5">
              <li><a href="https://reattend.ai" target="_blank" rel="noopener noreferrer" className="text-[13px] text-neutral-400 hover:text-white transition">Reattend</a></li>
              <li><Link href="/login" className="text-[13px] text-neutral-400 hover:text-white transition">Dashboard</Link></li>
              <li><Link href="/login" className="text-[13px] text-neutral-400 hover:text-white transition">API Keys</Link></li>
              <li><Link href="/login" className="text-[13px] text-neutral-400 hover:text-white transition">Usage</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link href="/future" className="text-[13px] text-neutral-400 hover:text-white transition">Vision</Link></li>
              <li><Link href="/contact" className="text-[13px] text-neutral-400 hover:text-white transition">Contact</Link></li>
              <li><a href="https://cal.com/reattend/30min" target="_blank" rel="noopener noreferrer" className="text-[13px] text-neutral-400 hover:text-white transition">Book a Call</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li><Link href="/legal/privacy" className="text-[13px] text-neutral-400 hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="text-[13px] text-neutral-400 hover:text-white transition">Terms of Service</Link></li>
              <li><Link href="/legal/security" className="text-[13px] text-neutral-400 hover:text-white transition">Security</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-600">
          <span>&copy; 2026 Reattend, Inc. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span>SOC 2</span>
            <span className="text-neutral-700">/</span>
            <span>HIPAA</span>
            <span className="text-neutral-700">/</span>
            <span>GDPR</span>
            <span className="text-neutral-700">/</span>
            <span>ISO 27001</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

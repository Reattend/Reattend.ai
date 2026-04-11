import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1d1d1d] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Rabbit" width={24} height={24} className="brightness-0 invert" />
              <span className="font-bold">Rabbit</span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              AI research and products that put organizational memory at the core. Built by Reattend.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4">Research</h4>
            <ul className="space-y-2.5">
              <li><Link href="/research" className="text-sm text-neutral-400 hover:text-white transition">Overview</Link></li>
              <li><Link href="/research/benchmarks" className="text-sm text-neutral-400 hover:text-white transition">Benchmarks</Link></li>
              <li><Link href="/research/data-ethics" className="text-sm text-neutral-400 hover:text-white transition">Data Ethics</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2.5">
              <li><Link href="/product/model" className="text-sm text-neutral-400 hover:text-white transition">Model</Link></li>
              <li><Link href="/product/signals" className="text-sm text-neutral-400 hover:text-white transition">Signals</Link></li>
              <li><Link href="/product/sandbox" className="text-sm text-neutral-400 hover:text-white transition">Sandbox</Link></li>
              <li><Link href="/product/api-docs" className="text-sm text-neutral-400 hover:text-white transition">API Docs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4">Enterprise</h4>
            <ul className="space-y-2.5">
              <li><Link href="/enterprise/overview" className="text-sm text-neutral-400 hover:text-white transition">Overview</Link></li>
              <li><Link href="/enterprise/deployment" className="text-sm text-neutral-400 hover:text-white transition">Deployment</Link></li>
              <li><Link href="/enterprise/compliance" className="text-sm text-neutral-400 hover:text-white transition">Compliance</Link></li>
              <li><a href="https://cal.com/reattend/30min" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-400 hover:text-white transition">Contact Sales</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><a href="https://reattend.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-400 hover:text-white transition">Reattend Platform</a></li>
              <li><Link href="/future" className="text-sm text-neutral-400 hover:text-white transition">Future of Work</Link></li>
              <li><a href="https://cal.com/reattend/30min" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <span>2026 Reattend, Inc. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

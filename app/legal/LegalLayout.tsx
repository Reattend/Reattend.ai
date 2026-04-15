import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default function LegalLayout({
  title,
  subtitle,
  updated,
  current,
  children,
}: {
  title: string;
  subtitle: string;
  updated: string;
  current: "privacy" | "terms" | "security";
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1 bg-[#eee9f4]">
      {/* Header */}
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

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#d4cade]">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-4xl mx-auto px-6 pt-16 pb-12">
          <p className="text-[11px] font-semibold text-[#8069af] tracking-[0.15em] uppercase mb-5">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05] text-[#1d1d1d] mb-5">
            {title}
          </h1>
          <p className="text-[15px] text-[#6b5f7a] font-light leading-relaxed max-w-2xl">
            {subtitle}
          </p>
          <p className="mt-6 text-[11px] font-mono text-[#a89bb5] uppercase tracking-wider">
            Last updated {updated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-[220px_1fr] gap-12">
          {/* Sidebar nav */}
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <p className="text-[10px] font-mono text-[#8069af] tracking-wider uppercase mb-3">Legal</p>
            <nav className="flex flex-col gap-1">
              <LegalNavLink href="/legal/privacy" label="Privacy Policy" active={current === "privacy"} />
              <LegalNavLink href="/legal/terms" label="Terms of Service" active={current === "terms"} />
              <LegalNavLink href="/legal/security" label="Security" active={current === "security"} />
            </nav>
            <div className="mt-8 bg-white/60 border border-[#d4cade] rounded-xl p-4">
              <p className="text-[11px] font-semibold text-[#1d1d1d] mb-1">Questions?</p>
              <p className="text-[11px] text-[#6b5f7a] font-light leading-relaxed mb-3">
                Legal inquiries go to our compliance team.
              </p>
              <Link href="/contact" className="text-[11px] font-medium text-[#8069af] hover:underline">
                Contact us &rarr;
              </Link>
            </div>
          </aside>

          {/* Article */}
          <article className="legal-content">
            {children}
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function LegalNavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`text-[13px] px-3 py-2 rounded-lg transition ${
        active
          ? "bg-[#8069af] text-white font-semibold"
          : "text-[#6b5f7a] hover:bg-white/60 hover:text-[#1d1d1d]"
      }`}
    >
      {label}
    </Link>
  );
}

/* Shared building blocks for legal content */

export function LegalSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-10 scroll-mt-8">
      <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1d] mb-4 pb-3 border-b border-[#d4cade]">{title}</h2>
      <div className="space-y-4 text-[14.5px] text-[#3d3540] font-light leading-relaxed">{children}</div>
    </section>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-5">
      {items.map((item, i) => (
        <li key={i} className="relative text-[14px] text-[#3d3540] font-light leading-relaxed before:content-[''] before:absolute before:-left-4 before:top-[10px] before:w-1 before:h-1 before:rounded-full before:bg-[#8069af]">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white/70 border-l-2 border-[#8069af] rounded-r-lg px-5 py-4 my-4">
      <p className="text-[13.5px] text-[#3d3540] font-light leading-relaxed">{children}</p>
    </div>
  );
}

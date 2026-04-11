import Link from "next/link";
import Image from "next/image";

export default function Header({ current }: { current: string }) {
  const links = ["Home", "Research", "Product", "Enterprise", "Developers", "Individuals", "Future of Work"];
  const hrefs: Record<string, string> = {
    Home: "/", Research: "/research", Product: "/product", Enterprise: "/enterprise",
    Developers: "/developers", Individuals: "/individuals", "Future of Work": "/future",
  };
  return (
    <header className="px-6 py-5 flex items-center justify-between max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-10">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Rabbit" width={28} height={28} />
          <span className="text-lg font-bold tracking-tight text-[#1d1d1d]">rabbit</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-[#6b5f7a]">
          {links.map(l => (
            <Link key={l} href={hrefs[l]} className={l === current ? "text-[#1d1d1d]" : "hover:text-[#1d1d1d] transition"}>
              {l}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-4 text-[13px]">
        <Link href="/login" className="bg-[#6d5a96] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#5c4a82] transition">
          Get API
        </Link>
        <a href="https://reattend.ai" className="bg-[#1d1d1d] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#333] transition">
          Reattend
        </a>
      </div>
    </header>
  );
}

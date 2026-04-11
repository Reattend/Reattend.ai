"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  {
    section: "Overview",
    items: [
      { name: "Overview", href: "/dashboard", icon: "home" },
      { name: "Usage", href: "/dashboard/usage", icon: "chart" },
    ],
  },
  {
    section: "API",
    items: [
      { name: "API keys", href: "/dashboard/keys", icon: "key" },
      { name: "Logs", href: "/dashboard/logs", icon: "list" },
    ],
  },
  {
    section: "Resources",
    items: [
      { name: "Documentation", href: "/dashboard/docs", icon: "book" },
    ],
  },
];

const icons: Record<string, React.ReactNode> = {
  home: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>,
  chart: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
  key: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" /></svg>,
  list: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>,
  book: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>,
};

export default function Sidebar({ email }: { email: string }) {
  const pathname = usePathname();

  return (
    <aside className="w-56 border-r border-[#d4cade] bg-[#f5f2f8] flex flex-col">
      {/* Logo */}
      <div className="px-4 py-4 border-b border-[#d4cade]">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Rabbit" width={24} height={24} />
          <span className="text-base font-bold tracking-tight text-[#1d1d1d]">rabbit</span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        {navItems.map((section) => (
          <div key={section.section} className="mb-5">
            <p className="px-2 text-[10px] font-semibold text-[#a89bb5] uppercase tracking-widest mb-2">
              {section.section}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[13px] transition ${
                        isActive
                          ? "bg-[#8069af]/10 text-[#8069af] font-medium"
                          : "text-[#6b5f7a] hover:bg-[#8069af]/5 hover:text-[#1d1d1d]"
                      }`}
                    >
                      <span className={isActive ? "text-[#8069af]" : "text-[#a89bb5]"}>
                        {icons[item.icon]}
                      </span>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Bottom */}
      <div className="px-4 py-3 border-t border-[#d4cade] text-[11px] text-[#a89bb5]">
        <p className="truncate">{email}</p>
        <p className="mt-0.5">Rabbit v1.4</p>
      </div>
    </aside>
  );
}

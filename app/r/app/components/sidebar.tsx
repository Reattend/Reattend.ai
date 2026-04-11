"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const navItems = [
  { name: "Explore", href: "/r/app", icon: "compass" },
  { name: "Projects", href: "/r/app/projects", icon: "folder" },
  { name: "Memories", href: "/r/app/memories", icon: "brain" },
  { name: "Board", href: "/r/app/board", icon: "grid" },
];

const bottomItems = [
  { name: "Integrations", href: "/r/app/integrations", icon: "plug", badge: "99+" },
  { name: "Settings", href: "/r/app/settings", icon: "gear" },
];

const icons: Record<string, React.ReactNode> = {
  compass: <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>,
  folder: <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /></svg>,
  brain: <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>,
  grid: <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>,
  plug: <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>,
  gear: <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
};

export default function ReattendSidebar({ email }: { email: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/r");
    router.refresh();
  }

  return (
    <aside className="w-60 border-r border-gray-200 flex flex-col bg-white">
      {/* Top */}
      <div className="px-4 py-4 border-b border-gray-200">
        <Link href="/r/app" className="text-lg font-bold tracking-tight text-[#111827]">Reattend</Link>
      </div>

      {/* New Chat + Memories */}
      <div className="px-3 py-3 space-y-1.5">
        <Link href="/r/app" className="flex items-center justify-center gap-2 bg-[#111827] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-black transition">
          + New Chat
        </Link>
        <Link href="/r/app/memories/new" className="flex items-center justify-center gap-2 border border-gray-300 text-[#111827] py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
          + Memories
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-2 overflow-y-auto">
        <ul className="space-y-0.5">
          {navItems.map(item => {
            const isActive = pathname === item.href || (item.href !== "/r/app" && pathname.startsWith(item.href));
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${
                    isActive ? "bg-gray-100 text-[#111827] font-medium" : "text-gray-500 hover:bg-gray-50 hover:text-[#111827]"
                  }`}
                >
                  <span className={isActive ? "text-[#111827]" : "text-gray-400"}>{icons[item.icon]}</span>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Recent chats placeholder */}
        <div className="mt-6">
          <p className="px-3 text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2">Recent chats</p>
          <p className="px-3 text-xs text-gray-400">No conversations yet</p>
        </div>
      </nav>

      {/* Bottom */}
      <div className="border-t border-gray-200 px-3 py-2 space-y-0.5">
        {bottomItems.map(item => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${
                isActive ? "bg-gray-100 text-[#111827] font-medium" : "text-gray-500 hover:bg-gray-50 hover:text-[#111827]"
              }`}
            >
              <span className={isActive ? "text-[#111827]" : "text-gray-400"}>{icons[item.icon]}</span>
              {item.name}
              {item.badge && (
                <span className="ml-auto text-[10px] bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded-full font-medium">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* User */}
      <div className="relative border-t border-gray-200 px-3 py-3">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-gray-50 transition text-left"
        >
          <div className="w-8 h-8 rounded-full bg-[#111827] flex items-center justify-center text-white text-xs font-semibold">
            {email[0].toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-[#111827] truncate">{email}</p>
          </div>
        </button>

        {showMenu && (
          <div className="absolute bottom-full left-3 right-3 mb-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition"
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}

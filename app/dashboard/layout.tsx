import { redirect } from "next/navigation";
import { getUser } from "@/lib/auth";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "./components/sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const email = await getUser();
  if (!email) redirect("/login");

  return (
    <div className="flex h-screen bg-[#eee9f4]">
      {/* Sidebar */}
      <Sidebar email={email} />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="border-b border-[#d4cade] px-6 py-3 flex items-center justify-between bg-[#eee9f4]">
          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="text-sm font-medium text-[#1d1d1d]">Dashboard</Link>
            <Link href="/dashboard/docs" className="text-sm font-medium text-[#6b5f7a] hover:text-[#1d1d1d] transition">API Docs</Link>
          </div>
          <div className="flex items-center gap-4 text-[13px]">
            <span className="text-[#6b5f7a]">{email}</span>
            <Link href="/" className="text-[#6b5f7a] hover:text-[#1d1d1d] transition">
              <Image src="/logo.png" alt="Rabbit" width={20} height={20} />
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

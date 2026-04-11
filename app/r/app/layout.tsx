import { redirect } from "next/navigation";
import { getUser } from "@/lib/auth";
import ReattendSidebar from "./components/sidebar";

export default async function ReattendAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const email = await getUser();
  if (!email) redirect("/r/login");

  return (
    <div className="flex h-screen bg-white">
      <ReattendSidebar email={email} />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

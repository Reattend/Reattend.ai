import { redirect } from "next/navigation";
import { getUser } from "@/lib/auth";

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const email = await getUser();
  if (email) redirect("/dashboard");
  return <>{children}</>;
}

import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const hostname = req.headers.get("host") || "";
  const pathname = req.nextUrl.pathname;

  // reattend.ai domain (not rabbit.reattend.ai, not api.rabbit.reattend.ai)
  const isReattend = hostname.includes("reattend.ai") && !hostname.includes("rabbit.reattend.ai") && !hostname.includes("api.rabbit");

  if (isReattend) {
    // Don't rewrite API routes, static assets, or already-prefixed routes
    if (
      pathname.startsWith("/api/") ||
      pathname.startsWith("/_next/") ||
      pathname.startsWith("/r/") ||
      pathname.startsWith("/logo") ||
      pathname === "/favicon.ico" ||
      pathname === "/icon.png" ||
      pathname === "/apple-icon.png"
    ) {
      return NextResponse.next();
    }

    // Rewrite: reattend.ai/ → /r, reattend.ai/login → /r/login, reattend.ai/app → /r/app
    const url = req.nextUrl.clone();
    url.pathname = `/r${pathname === "/" ? "" : pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|logo).*)"],
};

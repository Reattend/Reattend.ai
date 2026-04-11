import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const hostname = req.headers.get("host") || "";
  const pathname = req.nextUrl.pathname;

  // reattend.ai domain → serve from /(reattend) route group
  if (hostname.includes("reattend.ai") && !hostname.includes("rabbit.reattend.ai") && !hostname.includes("api.rabbit")) {
    // Don't rewrite API routes or static assets
    if (pathname.startsWith("/api/") || pathname.startsWith("/_next/") || pathname.startsWith("/logo") || pathname === "/favicon.ico") {
      return NextResponse.next();
    }

    // Rewrite to the (reattend) route group
    // / → /(reattend)/page.tsx
    // /login → /(reattend)/login/page.tsx
    // /app → /(reattend)/app/page.tsx
    // /app/anything → /(reattend)/app/anything/page.tsx
    const url = req.nextUrl.clone();
    url.pathname = `/r${pathname === "/" ? "" : pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|logo).*)"],
};

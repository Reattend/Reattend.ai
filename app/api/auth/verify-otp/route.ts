import { NextRequest, NextResponse } from "next/server";
import { verifyOTP } from "@/lib/otp-store";
import { createToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const { email, code } = await req.json();

  if (!email || !code) {
    return NextResponse.json({ error: "Email and code required" }, { status: 400 });
  }

  if (!verifyOTP(email, code)) {
    return NextResponse.json({ error: "Invalid or expired code" }, { status: 401 });
  }

  // Create auth token
  const token = createToken(email);

  const response = NextResponse.json({ success: true });
  response.cookies.set("rabbit_token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    path: "/",
  });

  return response;
}

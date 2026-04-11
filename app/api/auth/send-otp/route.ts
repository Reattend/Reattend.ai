import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { storeOTP } from "@/lib/otp-store";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  // Generate 6-digit OTP
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  storeOTP(email, code);

  // Send via Resend
  try {
    await resend.emails.send({
      from: "Rabbit <pb@reattend.ai>",
      to: email,
      subject: `${code} is your Rabbit verification code`,
      html: `
        <div style="font-family: sans-serif; max-width: 400px; margin: 0 auto; padding: 40px 20px;">
          <h2 style="margin-bottom: 8px;">Rabbit</h2>
          <p style="color: #666; margin-bottom: 24px;">Your verification code:</p>
          <div style="font-size: 32px; font-weight: bold; letter-spacing: 8px; padding: 16px; background: #f5f5f5; border-radius: 8px; text-align: center; margin-bottom: 24px;">
            ${code}
          </div>
          <p style="color: #999; font-size: 14px;">This code expires in 10 minutes. If you didn't request this, ignore this email.</p>
        </div>
      `,
    });

    return NextResponse.json({ sent: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

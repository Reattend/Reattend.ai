"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"email" | "code">("email");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function sendOTP() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send code");
      }
      setStep("code");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function verifyOTP() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Invalid code");
      }
      router.push("/dashboard");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex-1 flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <Link href="/" className="text-xl font-bold tracking-tight block text-center mb-10 text-[#1d1d1d]">
          rabbit
        </Link>

        {step === "email" ? (
          <div>
            <h2 className="text-2xl font-semibold text-center mb-2 text-[#1d1d1d]">Get your API key</h2>
            <p className="text-[#6b5f7a] text-center mb-8 text-sm font-light">
              Enter your email to get started. No password needed.
            </p>
            <input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && email && sendOTP()}
              className="w-full bg-[#f0eaf5] border border-[#c2a6cf] rounded-xl px-4 py-3 text-[#1d1d1d] placeholder-[#a89bb5] focus:outline-none focus:border-[#8069af] mb-4"
              autoFocus
            />
            <button
              onClick={sendOTP}
              disabled={!email || loading}
              className="w-full bg-[#1d1d1d] text-white py-3 rounded-xl font-medium hover:bg-[#333] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send verification code"}
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold text-center mb-2 text-[#1d1d1d]">Check your email</h2>
            <p className="text-[#6b5f7a] text-center mb-8 text-sm font-light">
              We sent a 6-digit code to <strong className="font-medium text-[#1d1d1d]">{email}</strong>
            </p>
            <input
              type="text"
              placeholder="123456"
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
              onKeyDown={(e) => e.key === "Enter" && code.length === 6 && verifyOTP()}
              className="w-full bg-[#f0eaf5] border border-[#c2a6cf] rounded-xl px-4 py-3 text-[#1d1d1d] text-center text-2xl tracking-[0.5em] font-mono placeholder-[#a89bb5] focus:outline-none focus:border-[#8069af] mb-4"
              autoFocus
              maxLength={6}
            />
            <button
              onClick={verifyOTP}
              disabled={code.length !== 6 || loading}
              className="w-full bg-[#1d1d1d] text-white py-3 rounded-xl font-medium hover:bg-[#333] transition disabled:opacity-50 disabled:cursor-not-allowed mb-4"
            >
              {loading ? "Verifying..." : "Verify"}
            </button>
            <button
              onClick={() => { setStep("email"); setCode(""); setError(""); }}
              className="w-full text-[#6b5f7a] text-sm hover:text-[#1d1d1d] transition"
            >
              Use a different email
            </button>
          </div>
        )}

        {error && (
          <p className="mt-4 text-red-600 text-sm text-center">{error}</p>
        )}
      </div>
    </main>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ReattendLoginPage() {
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
      router.push("/app");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <Link href="/" className="text-xl font-bold tracking-tight block text-center mb-10 text-[#111827]">
          Reattend
        </Link>

        {step === "email" ? (
          <div>
            <h2 className="text-2xl font-semibold text-center mb-2 text-[#111827]">Welcome back</h2>
            <p className="text-gray-500 text-center mb-8 text-sm">
              Enter your email to sign in. No password needed.
            </p>
            <input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && email && sendOTP()}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#111827] text-sm placeholder-gray-400 focus:outline-none focus:border-[#111827] focus:ring-1 focus:ring-[#111827] mb-4"
              autoFocus
            />
            <button
              onClick={sendOTP}
              disabled={!email || loading}
              className="w-full bg-[#111827] text-white py-3 rounded-lg font-medium hover:bg-black transition disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              {loading ? "Sending..." : "Continue with email"}
            </button>
            <p className="text-xs text-gray-400 text-center mt-6">
              By continuing, you agree to our Terms and Privacy Policy.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold text-center mb-2 text-[#111827]">Check your email</h2>
            <p className="text-gray-500 text-center mb-8 text-sm">
              We sent a 6-digit code to <strong className="text-[#111827]">{email}</strong>
            </p>
            <input
              type="text"
              placeholder="000000"
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
              onKeyDown={(e) => e.key === "Enter" && code.length === 6 && verifyOTP()}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#111827] text-center text-2xl tracking-[0.5em] font-mono placeholder-gray-300 focus:outline-none focus:border-[#111827] focus:ring-1 focus:ring-[#111827] mb-4"
              autoFocus
              maxLength={6}
            />
            <button
              onClick={verifyOTP}
              disabled={code.length !== 6 || loading}
              className="w-full bg-[#111827] text-white py-3 rounded-lg font-medium hover:bg-black transition disabled:opacity-50 disabled:cursor-not-allowed mb-4 text-sm"
            >
              {loading ? "Verifying..." : "Verify"}
            </button>
            <button
              onClick={() => { setStep("email"); setCode(""); setError(""); }}
              className="w-full text-gray-400 text-sm hover:text-[#111827] transition"
            >
              Use a different email
            </button>
          </div>
        )}

        {error && (
          <p className="mt-4 text-red-600 text-sm text-center">{error}</p>
        )}
      </div>
    </div>
  );
}

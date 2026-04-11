// In-memory OTP store. Good enough for a single-server setup.
// For multi-server, use Redis.

const otpStore = new Map<string, { code: string; expires: number }>();

export function storeOTP(email: string, code: string) {
  otpStore.set(email, {
    code,
    expires: Date.now() + 10 * 60 * 1000, // 10 minutes
  });
}

export function verifyOTP(email: string, code: string): boolean {
  const entry = otpStore.get(email);
  if (!entry) return false;
  if (Date.now() > entry.expires) {
    otpStore.delete(email);
    return false;
  }
  if (entry.code !== code) return false;
  otpStore.delete(email); // One-time use
  return true;
}

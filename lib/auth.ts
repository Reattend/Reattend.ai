import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "change-me";

// Simple token: base64(email:timestamp:hash)
// Good enough for MVP. Replace with proper JWT later.

export function createToken(email: string): string {
  const payload = `${email}:${Date.now()}`;
  const hash = Buffer.from(payload + JWT_SECRET).toString("base64url");
  return Buffer.from(`${payload}:${hash}`).toString("base64url");
}

export function verifyToken(token: string): string | null {
  try {
    const decoded = Buffer.from(token, "base64url").toString();
    const parts = decoded.split(":");
    if (parts.length < 3) return null;
    const email = parts[0];
    const timestamp = parseInt(parts[1]);
    const hash = parts.slice(2).join(":");

    // Check hash
    const expectedPayload = `${email}:${timestamp}`;
    const expectedHash = Buffer.from(expectedPayload + JWT_SECRET).toString("base64url");
    if (hash !== expectedHash) return null;

    // Token valid for 30 days
    if (Date.now() - timestamp > 30 * 24 * 60 * 60 * 1000) return null;

    return email;
  } catch {
    return null;
  }
}

export async function getUser(): Promise<string | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("rabbit_token")?.value;
  if (!token) return null;
  return verifyToken(token);
}

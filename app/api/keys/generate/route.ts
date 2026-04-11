import { NextRequest, NextResponse } from "next/server";
import { getUser } from "@/lib/auth";

const RABBIT_API_URL = process.env.RABBIT_API_URL || "http://api.rabbit.reattend.ai:8000";

export async function POST(req: NextRequest) {
  const email = await getUser();
  if (!email) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  // Call the Rabbit API to generate a key
  try {
    const resp = await fetch(`${RABBIT_API_URL}/v1/keys/generate?tier=test`, {
      method: "POST",
    });

    if (!resp.ok) {
      return NextResponse.json({ error: "Failed to generate key" }, { status: 500 });
    }

    const data = await resp.json();

    return NextResponse.json({
      key: data.key,
      tier: data.tier,
      limits: data.limits,
    });
  } catch (error) {
    console.error("Rabbit API error:", error);
    return NextResponse.json({ error: "Could not reach Rabbit API" }, { status: 502 });
  }
}

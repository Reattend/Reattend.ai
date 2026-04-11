import { NextRequest, NextResponse } from "next/server";
import { getUser } from "@/lib/auth";

const RABBIT_API_URL = process.env.RABBIT_API_URL || "http://api.rabbit.reattend.ai:8000";
const RABBIT_INTERNAL_KEY = process.env.RABBIT_INTERNAL_KEY || "";

export async function POST(req: NextRequest) {
  const email = await getUser();
  if (!email) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { question } = await req.json();
  if (!question) {
    return NextResponse.json({ error: "Question required" }, { status: 400 });
  }

  try {
    const resp = await fetch(`${RABBIT_API_URL}/v1/ask`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RABBIT_INTERNAL_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question, limit: 5 }),
    });

    if (!resp.ok) {
      return NextResponse.json({ error: "Failed to get answer" }, { status: 500 });
    }

    const data = await resp.json();
    return NextResponse.json({
      text: data.text,
      sources: data.sources,
      followups: data.followups,
      intent: data.intent,
      memories_used: data.memories_used,
      latency_ms: data.latency_ms,
    });
  } catch (error) {
    console.error("Rabbit API error:", error);
    return NextResponse.json({ error: "Could not reach memory service" }, { status: 502 });
  }
}

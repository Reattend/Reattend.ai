import { NextRequest, NextResponse } from "next/server";
import { getUser } from "@/lib/auth";

const RABBIT_API_URL = process.env.RABBIT_API_URL || "http://api.rabbit.reattend.ai:8000";
const RABBIT_INTERNAL_KEY = process.env.RABBIT_INTERNAL_KEY || "";

export async function POST(req: NextRequest) {
  const email = await getUser();
  if (!email) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { content, source } = await req.json();
  if (!content) {
    return NextResponse.json({ error: "Content required" }, { status: 400 });
  }

  try {
    const resp = await fetch(`${RABBIT_API_URL}/v1/remember`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RABBIT_INTERNAL_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content, source: source || "note", metadata: { user: email } }),
    });

    if (!resp.ok) {
      return NextResponse.json({ error: "Failed to save memory" }, { status: 500 });
    }

    return NextResponse.json(await resp.json());
  } catch (error) {
    console.error("Rabbit API error:", error);
    return NextResponse.json({ error: "Could not reach memory service" }, { status: 502 });
  }
}

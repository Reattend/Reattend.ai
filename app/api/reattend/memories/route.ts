import { NextRequest, NextResponse } from "next/server";
import { getUser } from "@/lib/auth";

const RABBIT_API_URL = process.env.RABBIT_API_URL || "http://api.rabbit.reattend.ai:8000";
const RABBIT_INTERNAL_KEY = process.env.RABBIT_INTERNAL_KEY || "";

export async function GET(req: NextRequest) {
  const email = await getUser();
  if (!email) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const limit = req.nextUrl.searchParams.get("limit") || "50";
  const source = req.nextUrl.searchParams.get("source") || "";

  try {
    const params = new URLSearchParams({ limit });
    if (source) params.set("source", source);

    const resp = await fetch(`${RABBIT_API_URL}/v1/memories?${params}`, {
      headers: { "Authorization": `Bearer ${RABBIT_INTERNAL_KEY}` },
    });

    if (!resp.ok) {
      return NextResponse.json({ error: "Failed to fetch memories" }, { status: 500 });
    }

    return NextResponse.json(await resp.json());
  } catch (error) {
    console.error("Rabbit API error:", error);
    return NextResponse.json({ error: "Could not reach memory service" }, { status: 502 });
  }
}

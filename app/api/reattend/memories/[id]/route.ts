import { NextRequest, NextResponse } from "next/server";
import { getUser } from "@/lib/auth";

const RABBIT_API_URL = process.env.RABBIT_API_URL || "http://api.rabbit.reattend.ai:8000";
const RABBIT_INTERNAL_KEY = process.env.RABBIT_INTERNAL_KEY || "";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const email = await getUser();
  if (!email) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const { id } = await params;

  try {
    // Get memory detail
    const memResp = await fetch(`${RABBIT_API_URL}/v1/memories/${id}`, {
      headers: { "Authorization": `Bearer ${RABBIT_INTERNAL_KEY}` },
    });
    if (!memResp.ok) return NextResponse.json({ error: "Memory not found" }, { status: 404 });
    const memory = await memResp.json();

    // Get graph connections
    let connections: unknown[] = [];
    try {
      const graphResp = await fetch(`${RABBIT_API_URL}/v1/graph/${id}?hops=1`, {
        headers: { "Authorization": `Bearer ${RABBIT_INTERNAL_KEY}` },
      });
      if (graphResp.ok) {
        const graphData = await graphResp.json();
        connections = graphData.connections || [];
      }
    } catch { /* ignore graph errors */ }

    return NextResponse.json({ memory, connections });
  } catch (error) {
    console.error("Rabbit API error:", error);
    return NextResponse.json({ error: "Could not reach memory service" }, { status: 502 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const email = await getUser();
  if (!email) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const { id } = await params;

  try {
    const resp = await fetch(`${RABBIT_API_URL}/v1/memories/${id}`, {
      method: "DELETE",
      headers: { "Authorization": `Bearer ${RABBIT_INTERNAL_KEY}` },
    });
    if (!resp.ok) return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
    return NextResponse.json({ deleted: true });
  } catch {
    return NextResponse.json({ error: "Could not reach memory service" }, { status: 502 });
  }
}

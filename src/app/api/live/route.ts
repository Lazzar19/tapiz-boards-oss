import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 * Liveness probe for Render. Must stay free of database and other I/O:
 * Render accepts only a 2xx/3xx response within five seconds, and a cold
 * Aiven connection often takes longer than that. Database status stays on
 * GET /api/health.
 */
export function GET() {
  return NextResponse.json({ service: "tapiz-boards", status: "live" });
}

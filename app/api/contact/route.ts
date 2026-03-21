import { NextResponse } from "next/server";
import { Resend } from "resend";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const resend = new Resend(process.env.RESEND_API_KEY);

// Serverless-safe rate limiter: 3 submissions per IP per 10 minutes.
// Uses Upstash Redis so the counter persists across cold starts.
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, "10 m"),
  analytics: false,
  prefix: "portfolio_contact",
});

// Field length caps
const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 2000;

// Basic email format check — server-side guard; browser `type="email"` is not enough
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ── 1. Honeypot ──────────────────────────────────────────────────────────
    // Bots autofill a hidden `_hp` field that real users never see.
    // Return a convincing 200 so the bot thinks it succeeded.
    if (body._hp) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // ── 2. Rate limiting ─────────────────────────────────────────────────────
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "anonymous";
    const { success, reset } = await ratelimit.limit(ip);

    if (!success) {
      const retryAfterSec = Math.ceil((reset - Date.now()) / 1000);
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: { "Retry-After": String(retryAfterSec) },
        }
      );
    }

    // ── 3. Validation ────────────────────────────────────────────────────────
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }
    if (name.length > MAX_NAME) {
      return NextResponse.json(
        { error: "Name must be 100 characters or fewer." },
        { status: 400 }
      );
    }
    if (!EMAIL_RE.test(email) || email.length > MAX_EMAIL) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }
    if (message.length > MAX_MESSAGE) {
      return NextResponse.json(
        { error: `Message must be ${MAX_MESSAGE} characters or fewer.` },
        { status: 400 }
      );
    }

    // ── 4. Send email ────────────────────────────────────────────────────────
    const data = await resend.emails.send({
      from: "Ammar Portfolio <contact@ammarbabaset.dev>",
      to: "babaset99@gmail.com",
      subject: `New Portfolio Message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

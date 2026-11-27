import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { z } from "zod";

const DEFAULT_TO_EMAIL = "tafseelsatairsami@gmail.com";
const DEFAULT_FROM_EMAIL = "Tafseel Satair Sami <onboarding@resend.dev>";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z
    .string()
    .trim()
    .min(7)
    .max(25)
    .refine((val) => {
      const digits = val.replace(/\D/g, "");
      return digits.length >= 8 && digits.length <= 15;
    }, "Invalid phone number"),
  email: z.string().trim().email().max(160),
  service: z.string().trim().min(2).max(120),
  message: z.string().trim().min(10).max(2000),
  locale: z.enum(["ar", "en"]).default("ar"),
  website: z.string().optional(),
  formLoadedAt: z.number().optional(),
});

// In-memory sliding window rate limit & duplicate-submission cooldown per worker/process
const RATE_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const DUPLICATE_COOLDOWN_MS = 2 * 60 * 1000;

const ipHits = new Map<string, number[]>();
const recentPayloads = new Map<string, number>();

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getClientIp(request: Request): string {
  const cfIp = request.headers.get("cf-connecting-ip");
  if (cfIp) return cfIp.trim();
  const xff = request.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return "unknown";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const hits = (ipHits.get(ip) ?? []).filter((ts) => now - ts < RATE_WINDOW_MS);
  if (hits.length >= MAX_REQUESTS_PER_WINDOW) {
    ipHits.set(ip, hits);
    return false;
  }
  hits.push(now);
  ipHits.set(ip, hits);
  return true;
}

function checkDuplicatePayload(email: string, phone: string, message: string): boolean {
  const now = Date.now();
  for (const [k, ts] of recentPayloads.entries()) {
    if (now - ts > DUPLICATE_COOLDOWN_MS) {
      recentPayloads.delete(k);
    }
  }
  const key = `${email.toLowerCase()}|${phone.replace(/\D/g, "")}|${message.trim().slice(0, 120)}`;
  const prev = recentPayloads.get(key);
  if (prev !== undefined && now - prev < DUPLICATE_COOLDOWN_MS) {
    return true;
  }
  recentPayloads.set(key, now);
  return false;
}

function getEnvVar(name: string): string | undefined {
  if (typeof process !== "undefined" && process.env) {
    const val = process.env[name];
    if (typeof val === "string" && val.trim().length > 0) {
      return val.trim();
    }
  }
  return undefined;
}

function jsonResponse(body: Record<string, unknown>, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let raw: unknown;
        try {
          raw = await request.json();
        } catch {
          return jsonResponse({ ok: false, code: "INVALID_JSON", error: "Invalid request payload." }, 400);
        }

        const parsedResult = contactSchema.safeParse(raw);
        if (!parsedResult.success) {
          return jsonResponse(
            {
              ok: false,
              code: "VALIDATION_ERROR",
              error: "Please check all required fields and try again.",
              issues: parsedResult.error.flatten().fieldErrors,
            },
            400,
          );
        }

        const data = parsedResult.data;

        // Honeypot anti-spam check
        if (data.website && data.website.trim().length > 0) {
          return jsonResponse({ ok: false, code: "SPAM_REJECTED", error: "Submission rejected." }, 400);
        }

        // Minimum interaction timing check against instant bot posts
        if (typeof data.formLoadedAt === "number" && Date.now() - data.formLoadedAt < 1200) {
          return jsonResponse({ ok: false, code: "SPAM_REJECTED", error: "Submission rejected." }, 400);
        }

        const ip = getClientIp(request);
        if (!checkRateLimit(ip)) {
          return jsonResponse(
            {
              ok: false,
              code: "RATE_LIMITED",
              error: "Too many enquiries submitted recently. Please try again in a few minutes or contact us on WhatsApp.",
            },
            429,
          );
        }

        if (checkDuplicatePayload(data.email, data.phone, data.message)) {
          return jsonResponse(
            {
              ok: false,
              code: "DUPLICATE_SUBMISSION",
              error: "This enquiry was already submitted. Please wait before resending.",
            },
            429,
          );
        }

        const resendApiKey = getEnvVar("RESEND_API_KEY");
        if (!resendApiKey) {
          console.error("[contact-api] RESEND_API_KEY is not configured in environment variables.");
          return jsonResponse(
            {
              ok: false,
              code: "EMAIL_NOT_CONFIGURED",
              error: "Email service is not configured yet. Please contact us via WhatsApp or phone.",
            },
            503,
          );
        }

        const toEmail = getEnvVar("CONTACT_TO_EMAIL") || DEFAULT_TO_EMAIL;
        const fromEmail = getEnvVar("CONTACT_FROM_EMAIL") || DEFAULT_FROM_EMAIL;
        const submissionId =
          typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
            ? `lead_${crypto.randomUUID()}`
            : `lead_${Date.now()}`;

        const isArabic = data.locale === "ar";
        const subject = isArabic
          ? `طلب جديد (${data.service}) — ${data.name}`
          : `New Website Enquiry (${data.service}) — ${data.name}`;

        const safeName = escapeHtml(data.name);
        const safePhone = escapeHtml(data.phone);
        const safeEmail = escapeHtml(data.email);
        const safeService = escapeHtml(data.service);
        const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br />");

        const html = `
          <div dir="${isArabic ? "rtl" : "ltr"}" style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 24px; color: #1f1f1f; border: 1px solid #e5e0d8; border-radius: 12px;">
            <h2 style="margin: 0 0 16px; color: #9f7d3a;">Tafseel Satair Sami — ${isArabic ? "طلب تواصل جديد من الموقع" : "New Website Enquiry"}</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
              <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">${isArabic ? "الاسم:" : "Name:"}</td><td style="padding: 8px 0;">${safeName}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">${isArabic ? "رقم الجوال:" : "Phone:"}</td><td style="padding: 8px 0;" dir="ltr">${safePhone}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">${isArabic ? "البريد الإلكتروني:" : "Email:"}</td><td style="padding: 8px 0;" dir="ltr">${safeEmail}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">${isArabic ? "الخدمة:" : "Service:"}</td><td style="padding: 8px 0;">${safeService}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">${isArabic ? "اللغة:" : "Language:"}</td><td style="padding: 8px 0;">${data.locale.toUpperCase()}</td></tr>
            </table>
            <div style="padding: 16px; background: #fafaf8; border-radius: 8px; border: 1px solid #e5e0d8;">
              <div style="font-weight: bold; margin-bottom: 8px;">${isArabic ? "الرسالة:" : "Message:"}</div>
              <div style="line-height: 1.6;">${safeMessage}</div>
            </div>
            <p style="margin-top: 16px; font-size: 12px; color: #666;">Reference ID: ${submissionId} · majlisatelier.com</p>
          </div>
        `;

        const text = [
          `New Enquiry — Tafseel Satair Sami (majlisatelier.com)`,
          `Reference: ${submissionId}`,
          `Language: ${data.locale}`,
          `Name: ${data.name}`,
          `Phone: ${data.phone}`,
          `Email: ${data.email}`,
          `Service: ${data.service}`,
          ``,
          `Message:`,
          data.message,
        ].join("\n");

        try {
          const resendResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${resendApiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: fromEmail,
              to: [toEmail],
              reply_to: data.email,
              subject,
              html,
              text,
            }),
          });

          if (!resendResponse.ok) {
            const errText = await resendResponse.text();
            console.error("[contact-api] Resend API error:", resendResponse.status, errText);
            return jsonResponse(
              {
                ok: false,
                code: "EMAIL_DELIVERY_FAILED",
                error: "Could not deliver your enquiry at the moment. Please reach us via WhatsApp or phone.",
              },
              502,
            );
          }

          const resendResult = (await resendResponse.json()) as { id?: string };
          return jsonResponse(
            {
              ok: true,
              id: resendResult.id ?? null,
              submissionId,
            },
            200,
          );
        } catch (err) {
          console.error("[contact-api] Unexpected error calling email provider:", err);
          return jsonResponse(
            {
              ok: false,
              code: "EMAIL_DELIVERY_FAILED",
              error: "Network error while sending enquiry. Please try again or contact us on WhatsApp.",
            },
            502,
          );
        }
      },
    },
  },
});

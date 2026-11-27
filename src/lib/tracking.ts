export const GTM_CONTAINER_ID = "GTM-W74JF7S2";
export const GOOGLE_ADS_ID = "AW-18592865391";

export const GOOGLE_ADS_LABELS = {
  whatsapp: (import.meta.env.VITE_GADS_LABEL_WHATSAPP ?? "").trim(),
  phone: (import.meta.env.VITE_GADS_LABEL_PHONE ?? "").trim(),
  contactForm: (import.meta.env.VITE_GADS_LABEL_FORM ?? "").trim(),
} as const;

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown> | IArguments>;
    gtag?: (...args: unknown[]) => void;
    __tafseelTrackInit?: boolean;
  }
}

const RECENT_EVENT_TIMESTAMPS = new Map<string, number>();
const COMPLETED_SUBMISSIONS = new Set<string>();
const DEDUPE_WINDOW_MS = 1500;

export function generateEventId(prefix: string): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return `${prefix}_${crypto.randomUUID()}`;
  }
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

function isDuplicateRecent(key: string): boolean {
  const now = Date.now();
  const prev = RECENT_EVENT_TIMESTAMPS.get(key);
  if (prev !== undefined && now - prev < DEDUPE_WINDOW_MS) {
    return true;
  }
  RECENT_EVENT_TIMESTAMPS.set(key, now);
  return false;
}

function pushDataLayer(payload: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

function fireGoogleAdsConversion(label: string, transactionId: string): void {
  if (typeof window === "undefined" || !label || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${label}`,
    transaction_id: transactionId,
  });
}

/**
 * Push an informational virtual page view for GTM on SPA route changes.
 * Never counts page visits as conversions.
 */
export function trackPageView(pathname: string, locale: string): void {
  if (typeof window === "undefined") return;
  pushDataLayer({
    event: "virtual_page_view",
    page_path: pathname,
    page_location: window.location.href,
    page_title: document.title,
    language: locale,
  });
}

/**
 * Track verified WhatsApp CTA clicks with deduplication and a unique event_id.
 */
export function trackWhatsAppClick(source: string, item?: string): void {
  if (typeof window === "undefined") return;
  const dedupeKey = `whatsapp:${source}:${item ?? ""}`;
  if (isDuplicateRecent(dedupeKey)) return;

  const eventId = generateEventId("wa");
  pushDataLayer({
    event: "whatsapp_click",
    event_id: eventId,
    event_category: "lead",
    event_label: item ? `${source}:${item}` : source,
    source,
    item_name: item,
    page_path: window.location.pathname,
    google_ads_id: GOOGLE_ADS_ID,
  });

  fireGoogleAdsConversion(GOOGLE_ADS_LABELS.whatsapp, eventId);
}

/**
 * Track verified tel: phone link clicks with deduplication and a unique event_id.
 */
export function trackPhoneClick(source: string): void {
  if (typeof window === "undefined") return;
  const dedupeKey = `phone:${source}`;
  if (isDuplicateRecent(dedupeKey)) return;

  const eventId = generateEventId("tel");
  pushDataLayer({
    event: "phone_click",
    event_id: eventId,
    event_category: "lead",
    event_label: source,
    source,
    phone_number: "+966548473140",
    page_path: window.location.pathname,
    google_ads_id: GOOGLE_ADS_ID,
  });

  fireGoogleAdsConversion(GOOGLE_ADS_LABELS.phone, eventId);
}

/**
 * Track contact form conversion ONLY after the backend confirms email delivery.
 * Protected by submissionId so a submission can never fire more than once.
 */
export function trackFormSubmissionSuccess(params: {
  service: string;
  locale: string;
  submissionId: string;
}): void {
  if (typeof window === "undefined") return;
  if (!params.submissionId || COMPLETED_SUBMISSIONS.has(params.submissionId)) {
    return;
  }
  COMPLETED_SUBMISSIONS.add(params.submissionId);

  pushDataLayer({
    event: "contact_form_submit",
    event_id: params.submissionId,
    event_category: "lead",
    event_label: params.service,
    service: params.service,
    language: params.locale,
    page_path: window.location.pathname,
    google_ads_id: GOOGLE_ADS_ID,
  });

  fireGoogleAdsConversion(GOOGLE_ADS_LABELS.contactForm, params.submissionId);
}

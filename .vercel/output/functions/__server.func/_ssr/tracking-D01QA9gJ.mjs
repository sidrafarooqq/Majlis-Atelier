//#region node_modules/.nitro/vite/services/ssr/assets/tracking-D01QA9gJ.js
var GTM_CONTAINER_ID = "GTM-W74JF7S2";
var GOOGLE_ADS_ID = "AW-18592865391";
var GOOGLE_ADS_LABELS = {
	whatsapp: "".trim(),
	phone: "".trim(),
	contactForm: "".trim()
};
var RECENT_EVENT_TIMESTAMPS = /* @__PURE__ */ new Map();
var COMPLETED_SUBMISSIONS = /* @__PURE__ */ new Set();
var DEDUPE_WINDOW_MS = 1500;
function generateEventId(prefix) {
	if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") return `${prefix}_${crypto.randomUUID()}`;
	return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}
function isDuplicateRecent(key) {
	const now = Date.now();
	const prev = RECENT_EVENT_TIMESTAMPS.get(key);
	if (prev !== void 0 && now - prev < DEDUPE_WINDOW_MS) return true;
	RECENT_EVENT_TIMESTAMPS.set(key, now);
	return false;
}
function pushDataLayer(payload) {
	if (typeof window === "undefined") return;
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push(payload);
}
function fireGoogleAdsConversion(label, transactionId) {
	if (typeof window === "undefined" || !label || typeof window.gtag !== "function") return;
	window.gtag("event", "conversion", {
		send_to: `${GOOGLE_ADS_ID}/${label}`,
		transaction_id: transactionId
	});
}
/**
* Push an informational virtual page view for GTM on SPA route changes.
* Never counts page visits as conversions.
*/
function trackPageView(pathname, locale) {
	if (typeof window === "undefined") return;
	pushDataLayer({
		event: "virtual_page_view",
		page_path: pathname,
		page_location: window.location.href,
		page_title: document.title,
		language: locale
	});
}
/**
* Track verified WhatsApp CTA clicks with deduplication and a unique event_id.
*/
function trackWhatsAppClick(source, item) {
	if (typeof window === "undefined") return;
	if (isDuplicateRecent(`whatsapp:${source}:${item ?? ""}`)) return;
	const eventId = generateEventId("wa");
	pushDataLayer({
		event: "whatsapp_click",
		event_id: eventId,
		event_category: "lead",
		event_label: item ? `${source}:${item}` : source,
		source,
		item_name: item,
		page_path: window.location.pathname,
		google_ads_id: GOOGLE_ADS_ID
	});
	fireGoogleAdsConversion(GOOGLE_ADS_LABELS.whatsapp, eventId);
}
/**
* Track verified tel: phone link clicks with deduplication and a unique event_id.
*/
function trackPhoneClick(source) {
	if (typeof window === "undefined") return;
	if (isDuplicateRecent(`phone:${source}`)) return;
	const eventId = generateEventId("tel");
	pushDataLayer({
		event: "phone_click",
		event_id: eventId,
		event_category: "lead",
		event_label: source,
		source,
		phone_number: "+966548473140",
		page_path: window.location.pathname,
		google_ads_id: GOOGLE_ADS_ID
	});
	fireGoogleAdsConversion(GOOGLE_ADS_LABELS.phone, eventId);
}
/**
* Track contact form conversion ONLY after the backend confirms email delivery.
* Protected by submissionId so a submission can never fire more than once.
*/
function trackFormSubmissionSuccess(params) {
	if (typeof window === "undefined") return;
	if (!params.submissionId || COMPLETED_SUBMISSIONS.has(params.submissionId)) return;
	COMPLETED_SUBMISSIONS.add(params.submissionId);
	pushDataLayer({
		event: "contact_form_submit",
		event_id: params.submissionId,
		event_category: "lead",
		event_label: params.service,
		service: params.service,
		language: params.locale,
		page_path: window.location.pathname,
		google_ads_id: GOOGLE_ADS_ID
	});
	fireGoogleAdsConversion(GOOGLE_ADS_LABELS.contactForm, params.submissionId);
}
//#endregion
export { trackPhoneClick as a, trackPageView as i, GTM_CONTAINER_ID as n, trackWhatsAppClick as o, trackFormSubmissionSuccess as r, GOOGLE_ADS_ID as t };

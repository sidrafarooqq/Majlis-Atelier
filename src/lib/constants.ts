import type { Locale } from "./translations";

export const SITE_URL = "https://majlisatelier.com";

export const BRAND = {
  name_en: "Tafseel Satair Sami",
  name_ar: "تفصيل ستائر سامي",
  shortMark: "TS",
  tagline_en: "Custom Curtains • Blinds • Sofa Upholstery in Riyadh",
  tagline_ar: "تفصيل ستائر • بليندات • تنجيد كنب بالرياض",
} as const;

export const CONTACT = {
  phone: "+966 54 847 3140",
  phoneRaw: "+966548473140",
<<<<<<< HEAD
  whatsappBase: "https://wa.me/966548473140",
  whatsapp:
    "https://wa.me/966548473140?text=" +
    encodeURIComponent(
      "السلام عليكم تفصيل ستائر سامي، أود الاستفسار عن تفصيل الستائر وحجز موعد قياس مجاني في الرياض.",
    ),
=======
  whatsapp: "https://wa.me/966548473140",
>>>>>>> 4ea8b9c48b6aef4d2aa53cf50ffa125d6192e1df
  email: "tafseelsatairsami@gmail.com",
  address_ar: "الرياض، المملكة العربية السعودية",
  address_en: "Riyadh, Saudi Arabia",
  facebook: "https://www.facebook.com/profile.php?id=61590666845757",
  instagram: "https://www.instagram.com/al_fakhama_curtains_786?igsh=c21od2R0cmZzYnk=",
} as const;

/**
 * Build a WhatsApp conversation URL with a professional prefilled enquiry message
 * tailored to the active language and optional product/service context.
 */
export function getWhatsAppUrl(locale: Locale, context?: string): string {
  const message =
    locale === "ar"
      ? context
        ? `السلام عليكم تفصيل ستائر سامي، أود الاستفسار وطلب عرض سعر لخدمة: ${context} في الرياض.`
        : "السلام عليكم تفصيل ستائر سامي، أود الاستفسار عن تفصيل الستائر والبليندات وحجز موعد قياس مجاني في الرياض."
      : context
        ? `Hello Tafseel Satair Sami, I would like to request a quote for ${context} in Riyadh.`
        : "Hello Tafseel Satair Sami, I would like to inquire about custom curtains and blinds and book a free measurement in Riyadh.";

  return `${CONTACT.whatsappBase}?text=${encodeURIComponent(message)}`;
}

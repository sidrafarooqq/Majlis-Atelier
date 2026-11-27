import { BRAND, CONTACT, SITE_URL } from "./constants";
import type { Locale } from "./translations";

export const OG_IMAGE_URL = `${SITE_URL}/images/tafseel-satair-sami-curtains-riyadh.jpg`;

export interface RouteSeoMeta {
  ar: { title: string; description: string };
  en: { title: string; description: string };
}

export const ROUTE_LOCALIZED_SEO: Record<string, RouteSeoMeta> = {
  "/": {
    ar: {
      title: "تفصيل ستائر سامي | تفصيل وتركيب ستائر وبليندات بالرياض",
      description:
        "محل تفصيل ستائر بالرياض — تفصيل ستائر حسب المقاس، ستائر فاخرة وعصرية، ستائر رول وزيبرا وبلاك أوت وتركيب احترافي في الرياض مع قياس مجاني.",
    },
    en: {
      title: "Tafseel Satair Sami | Custom Curtains & Blinds in Riyadh",
      description:
        "Curtains in Riyadh tailored to measure — custom curtains, luxury & modern curtains, roller & zebra blinds, blackout curtains, and professional installation in Riyadh.",
    },
  },
  "/curtains": {
    ar: {
      title: "مجموعة الستائر — تفصيل ستائر فاخرة وعصرية بالرياض | تفصيل ستائر سامي",
      description:
        "تفصيل ستائر بالرياض حسب المقاس: ستائر بلاك أوت، شيفون، مخمل، كتّان، ستائر عصرية وكلاسيكية وكهربائية مع قياس مجاني وتركيب في الرياض.",
    },
    en: {
      title: "Custom Curtains Riyadh — Blackout, Sheer, Velvet & Modern | Tafseel Satair Sami",
      description:
        "Made to measure curtains in Riyadh: luxury curtains, modern ripple-fold window curtains, blackout, sheer, velvet, linen and motorized curtains with free measuring.",
    },
  },
  "/blinds": {
    ar: {
      title: "ستائر رول وزيبرا ورومانية بالرياض | تفصيل ستائر سامي",
      description:
        "تفصيل وتركيب ستائر رول الرياض، ستائر زيبرا الرياض، ستائر رومانية وخشبية وكهربائية ذكية بمقاسات دقيقة في الرياض.",
    },
    en: {
      title: "Roller & Zebra Blinds Riyadh — Roman & Wooden Blinds | Tafseel Satair Sami",
      description:
        "Roller blinds Riyadh, zebra blinds Riyadh, Roman, wooden, and motorized blinds custom-fitted and installed across Riyadh.",
    },
  },
  "/services": {
    ar: {
      title: "خدماتنا — تفصيل وتركيب الستائر وتنجيد الكنب بالرياض | تفصيل ستائر سامي",
      description:
        "خدمات تفصيل ستائر حسب المقاس، تركيب ستائر بالرياض، تنجيد الكنب وتفصيل الكنب المخصص في الرياض بجودة عالية.",
    },
    en: {
      title: "Services — Curtain Tailoring, Installation & Upholstery Riyadh | Tafseel Satair Sami",
      description:
        "Curtain tailoring Riyadh, curtain installation Riyadh, sofa upholstery, and custom sofa making across Riyadh, Saudi Arabia.",
    },
  },
  "/portfolio": {
    ar: {
      title: "أعمالنا — مشاريع تفصيل ستائر بالرياض | تفصيل ستائر سامي",
      description:
        "تصفح نماذج من أعمالنا في تفصيل ستائر المجالس، ستائر عصرية، ستائر بلاك أوت، وتنجيد وتفصيل الكنب في الرياض.",
    },
    en: {
      title: "Portfolio — Custom Curtains & Majlis Projects Riyadh | Tafseel Satair Sami",
      description:
        "Explore real curtain installation, window curtains, blackout drapery, and bespoke sofa projects delivered in Riyadh.",
    },
  },
  "/about": {
    ar: {
      title: "من نحن — محل ستائر بالرياض | تفصيل ستائر سامي",
      description:
        "تعرّف على تفصيل ستائر سامي في الرياض — تفصيل ستائر حسب المقاس، خامات أصلية، وتركيب ستائر احترافي للمنازل والمجالس والمكاتب.",
    },
    en: {
      title: "About Us — Riyadh Curtain Tailoring Atelier | Tafseel Satair Sami",
      description:
        "Learn about Tafseel Satair Sami in Riyadh — made-to-measure curtains, blinds, and sofa upholstery crafted with attention to detail.",
    },
  },
  "/contact": {
    ar: {
      title: "اتصل بنا — حجز قياس مجاني بالرياض | تفصيل ستائر سامي",
      description:
        "تواصل مع تفصيل ستائر سامي بالرياض عبر نموذج التواصل أو واتساب أو الاتصال لحجز قياس مجاني وعرض سعر للستائر والبليندات.",
    },
    en: {
      title: "Contact Us — Free Curtain Measurement in Riyadh | Tafseel Satair Sami",
      description:
        "Contact Tafseel Satair Sami in Riyadh by form, WhatsApp (+966 54 847 3140), or phone to book a free on-site curtain measurement.",
    },
  },
};

export function getLocalizedTitleAndDescription(pathname: string, locale: Locale) {
  const entry = ROUTE_LOCALIZED_SEO[pathname] ?? ROUTE_LOCALIZED_SEO["/"];
  return entry[locale];
}

export function buildOrganizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BRAND.name_en,
    alternateName: BRAND.name_ar,
    url: SITE_URL,
    email: CONTACT.email,
    telephone: CONTACT.phoneRaw,
    logo: OG_IMAGE_URL,
    sameAs: [CONTACT.facebook, CONTACT.instagram],
  };
}

export function buildLocalBusinessJsonLd() {
  return {
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: BRAND.name_en,
    alternateName: BRAND.name_ar,
    description:
      "Custom curtains, curtain tailoring, curtain installation, roller blinds, zebra blinds, and sofa upholstery in Riyadh, Saudi Arabia.",
    url: SITE_URL,
    image: OG_IMAGE_URL,
    telephone: CONTACT.phoneRaw,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Riyadh",
      addressRegion: "Riyadh Province",
      addressCountry: "SA",
    },
    areaServed: {
      "@type": "City",
      name: "Riyadh",
    },
    sameAs: [CONTACT.facebook, CONTACT.instagram],
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: BRAND.name_en,
    alternateName: BRAND.name_ar,
    url: SITE_URL,
    inLanguage: ["ar", "en"],
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function buildBreadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function buildServiceJsonLd(params: {
  name: string;
  description: string;
  path: string;
  serviceTypes: string[];
}) {
  return {
    "@type": "Service",
    name: params.name,
    description: params.description,
    url: `${SITE_URL}${params.path}`,
    serviceType: params.serviceTypes,
    provider: { "@id": `${SITE_URL}/#localbusiness` },
    areaServed: {
      "@type": "City",
      name: "Riyadh",
    },
  };
}

export function buildRouteHead(options: {
  path: string;
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  breadcrumbName?: string;
  includeBusinessGraph?: boolean;
  service?: {
    name: string;
    description: string;
    serviceTypes: string[];
  };
}) {
  const canonicalUrl = `${SITE_URL}${options.path}`;
  const graph: Array<Record<string, unknown>> = [];

  if (options.includeBusinessGraph) {
    graph.push(buildOrganizationJsonLd(), buildLocalBusinessJsonLd(), buildWebSiteJsonLd());
  }

  if (options.breadcrumbName) {
    graph.push(
      buildBreadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: options.breadcrumbName, path: options.path },
      ]),
    );
  } else {
    graph.push(buildBreadcrumbJsonLd([{ name: "Home", path: "/" }]));
  }

  if (options.service) {
    graph.push(
      buildServiceJsonLd({
        name: options.service.name,
        description: options.service.description,
        path: options.path,
        serviceTypes: options.service.serviceTypes,
      }),
    );
  }

  return {
    meta: [
      { title: options.title },
      { name: "description", content: options.description },
      { name: "keywords", content: options.keywords },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: options.ogTitle },
      { property: "og:description", content: options.ogDescription },
      { property: "og:url", content: canonicalUrl },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: BRAND.name_en },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: options.ogTitle },
      { name: "twitter:description", content: options.ogDescription },
      { name: "twitter:image", content: OG_IMAGE_URL },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      },
    ],
  };
}

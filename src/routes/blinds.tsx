import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { CONTACT, getWhatsAppUrl } from "@/lib/constants";
import { COPY, BLIND_CATEGORIES, IMAGES } from "@/lib/catalog";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CatalogGrid } from "@/components/catalog/CatalogGrid";
import { buildRouteHead } from "@/lib/seo";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/tracking";

export const Route = createFileRoute("/blinds")({
  head: () =>
    buildRouteHead({
      path: "/blinds",
      title: "ستائر رول وزيبرا ورومانية بالرياض | Roller & Zebra Blinds Riyadh | Tafseel Satair Sami",
      description:
        "ستائر رول الرياض، ستائر زيبرا الرياض، ستائر رومانية وخشبية وكهربائية ذكية مع قياس مجاني وتركيب احترافي في الرياض. Roller blinds Riyadh, zebra blinds Riyadh, Roman, wooden & motorized blinds.",
      keywords:
        "ستائر رول الرياض, ستائر زيبرا الرياض, تفصيل ستائر بالرياض, تركيب ستائر بالرياض, Roller Blinds Riyadh, Zebra Blinds Riyadh, Roman Blinds Riyadh, Window Curtains Riyadh",
      ogTitle: "Roller & Zebra Blinds Riyadh — Roman & Wooden | Tafseel Satair Sami",
      ogDescription:
        "Roller blinds, zebra blinds, Roman, wooden and motorized blinds, custom-measured and installed in Riyadh.",
      breadcrumbName: "Blinds",
      service: {
        name: "Roller, Zebra & Motorized Blinds in Riyadh",
        description:
          "Custom roller blinds, zebra blinds, Roman blinds, wooden blinds and motorized window blinds with free measuring and installation in Riyadh.",
        serviceTypes: [
          "Roller Blinds Riyadh",
          "Zebra Blinds Riyadh",
          "Roman Blinds Riyadh",
          "Motorized Blinds Riyadh",
        ],
      },
    }),
  component: BlindsPage,
});

function BlindsPage() {
  const { locale } = useI18n();
  const c = COPY[locale];
  const whatsappUrl = getWhatsAppUrl(locale, locale === "ar" ? "ستائر الرول والزيبرا" : "Roller & Zebra Blinds");

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border py-24 md:py-32">
        <img
          src={IMAGES.wooden}
          alt={locale === "ar" ? "ستائر خشبية وبليندات بالرياض" : "Wooden blinds and custom window treatments in Riyadh"}
          width={1200}
          height={900}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/55 to-black/75" />
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <div className="section-label justify-center text-gold">
            <span className="h-px w-8 bg-gold/60" /> {c.blinds_page.eyebrow}
          </div>
          <h1 className="mt-3 text-4xl font-extrabold text-white md:text-6xl">{c.blinds_page.title}</h1>
          <p className="mt-4 text-white/80">{c.blinds_page.subtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("blinds_hero")}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-luxury transition hover:bg-gold-dark"
            >
              <MessageCircle size={16} /> {c.quoteWhats}
            </a>
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              dir="ltr"
              onClick={() => trackPhoneClick("blinds_hero")}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <Phone size={16} /> {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle eyebrow={c.blinds_page.eyebrow} title={c.blinds_page.title} subtitle={c.blinds_page.subtitle} />
          <div className="mt-14">
            <CatalogGrid items={BLIND_CATEGORIES} />
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3 text-center">
            <Link
              to="/curtains"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition hover:bg-gold hover:text-primary-foreground"
            >
              {c.collection.all} <ArrowRight size={14} className="rtl:rotate-180" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-gold px-6 py-3 text-sm font-semibold text-gold transition hover:bg-gold hover:text-primary-foreground"
            >
              {locale === "ar" ? "اطلب قياس مجاني" : "Book Free Measurement"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

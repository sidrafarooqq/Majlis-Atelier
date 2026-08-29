import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { CONTACT } from "@/lib/constants";
import { COPY, BLIND_CATEGORIES, IMAGES } from "@/lib/catalog";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CatalogGrid } from "@/components/catalog/CatalogGrid";

export const Route = createFileRoute("/blinds")({
  head: () => ({
    meta: [
      { title: "Blinds — Roman, Roller, Zebra & Wooden Blinds Riyadh | البليندات" },
      {
        name: "description",
        content:
          "ستائر رومانية ورول وزيبرا وخشبية وكهربائية بالرياض مع قياس مجاني وتركيب احترافي. Roman, roller, zebra, wooden and motorized blinds in Riyadh with free measuring and expert installation.",
      },
      { property: "og:title", content: "Blinds Collection — Majlis Atelier Riyadh" },
      {
        property: "og:description",
        content: "Roman, roller, zebra, wooden and motorized blinds, made to measure in Riyadh.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://plush-threads-studio.lovable.app/blinds" },
    ],
    links: [{ rel: "canonical", href: "https://plush-threads-studio.lovable.app/blinds" }],
  }),
  component: BlindsPage,
});

function BlindsPage() {
  const { locale } = useI18n();
  const c = COPY[locale];

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border py-24 md:py-32">
        <img
          src={IMAGES.wooden}
          alt={locale === "ar" ? "ستائر خشبية في غرفة مكتب" : "Wooden blinds in a study room"}
          width={1200}
          height={900}
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
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-luxury transition hover:bg-gold-dark"
            >
              <MessageCircle size={16} /> {c.quoteWhats}
            </a>
            <a
              href={`tel:${CONTACT.phoneRaw}`}
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
          <div className="mt-12 text-center">
            <Link
              to="/curtains"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition hover:bg-gold hover:text-primary-foreground"
            >
              {c.collection.all} <ArrowRight size={14} className="rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

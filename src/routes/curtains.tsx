import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { CONTACT } from "@/lib/constants";
import { COPY, CURTAIN_CATEGORIES, IMAGES } from "@/lib/catalog";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CatalogGrid } from "@/components/catalog/CatalogGrid";

export const Route = createFileRoute("/curtains")({
  head: () => ({
    meta: [
      { title: "Curtain Collection — Blackout, Sheer & Velvet Curtains Riyadh | مجموعة الستائر" },
      {
        name: "description",
        content:
          "كتالوج ستائر مفصّلة بالرياض: بلاك أوت، شيفون، مخمل، كتّان، ستائر كهربائية وتفصيل حسب الطلب. Made-to-measure curtain collection in Riyadh: blackout, sheer, velvet, linen and motorized curtains.",
      },
      { property: "og:title", content: "Curtain Collection — Majlis Atelier Riyadh" },
      {
        property: "og:description",
        content: "Blackout, sheer, velvet, linen, classic, modern and motorized custom curtains in Riyadh.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://plush-threads-studio.lovable.app/curtains" },
    ],
    links: [{ rel: "canonical", href: "https://plush-threads-studio.lovable.app/curtains" }],
  }),
  component: CurtainsPage,
});

function CurtainsPage() {
  const { locale } = useI18n();
  const c = COPY[locale];

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border py-24 md:py-32">
        <img
          src={IMAGES.luxury}
          alt={locale === "ar" ? "ستائر فاخرة في صالة راقية" : "Luxury curtains in an elegant living room"}
          width={1200}
          height={900}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/55 to-black/75" />
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <div className="section-label justify-center text-gold">
            <span className="h-px w-8 bg-gold/60" /> {c.curtains_page.eyebrow}
          </div>
          <h1 className="mt-3 text-4xl font-extrabold text-white md:text-6xl">{c.curtains_page.title}</h1>
          <p className="mt-4 text-white/80">{c.curtains_page.subtitle}</p>
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
              dir="ltr"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <Phone size={16} /> {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle eyebrow={c.collection.eyebrow} title={c.collection.title} subtitle={c.collection.subtitle} />
          <div className="mt-14">
            <CatalogGrid items={CURTAIN_CATEGORIES} />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
          <div className="overflow-hidden rounded-2xl shadow-luxury">
            <img
              src={IMAGES.fabric}
              alt={locale === "ar" ? "عيّنات أقمشة ستائر فاخرة" : "Luxury curtain fabric swatches"}
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <SectionTitle eyebrow={c.install.eyebrow} title={c.install.title} align="start" />
            <ol className="mt-8 space-y-5">
              {c.install.steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link
              to="/blinds"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold px-5 py-2.5 text-sm font-semibold text-gold transition hover:bg-gold hover:text-primary-foreground"
            >
              {c.nav.blinds} <ArrowRight size={14} className="rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

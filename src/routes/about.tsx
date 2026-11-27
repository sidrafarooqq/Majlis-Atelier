import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { IMAGES } from "@/lib/catalog";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { buildRouteHead } from "@/lib/seo";
import { trackWhatsAppClick } from "@/lib/tracking";

export const Route = createFileRoute("/about")({
  head: () =>
    buildRouteHead({
      path: "/about",
      title: "من نحن — تفصيل ستائر سامي بالرياض | Tafseel Satair Sami",
      description:
        "تعرّف على تفصيل ستائر سامي — محل ستائر بالرياض متخصص في تفصيل ستائر حسب المقاس، ستائر فاخرة وعصرية، ستائر رول وزيبرا وتركيب ستائر بالرياض. About Tafseel Satair Sami in Riyadh.",
      keywords:
        "تفصيل ستائر سامي, محل ستائر بالرياض, تفصيل ستائر بالرياض, تركيب ستائر بالرياض, Tafseel Satair Sami, Curtains in Riyadh, Curtain Tailoring Riyadh",
      ogTitle: "About Tafseel Satair Sami — Riyadh Custom Curtains & Upholstery",
      ogDescription: "Made-to-measure curtains, blinds, and sofa upholstery crafted in Riyadh, Saudi Arabia.",
      breadcrumbName: "About",
      includeBusinessGraph: true,
    }),
  component: AboutPage,
});

function AboutPage() {
  const { t, locale } = useI18n();
  const a = t.about_page;
  const whatsappUrl = getWhatsAppUrl(locale);

  return (
    <>
      <PageHero
        brandName={locale === "ar" ? BRAND.name_ar : BRAND.name_en}
        title={a.title}
        subtitle={t.about.body}
      />

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
          <div className="relative">
            <img
              src={IMAGES.custom}
              alt={
                locale === "ar"
                  ? "مشغل تفصيل ستائر حسب المقاس في الرياض"
                  : "Custom made-to-measure curtain tailoring in Riyadh"
              }
              width={1200}
              height={1500}
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-luxury"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute -bottom-4 -start-4 flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-semibold tracking-wider text-primary-foreground uppercase shadow-luxury">
              <Award size={14} /> {t.common.since}
            </div>
          </div>
          <div>
            <SectionTitle eyebrow={t.about.eyebrow} title={a.story_title} align="start" />
            <p className="mt-5 leading-relaxed text-muted-foreground">{a.story_body}</p>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle eyebrow={t.about.eyebrow} title={a.values_title} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { title: t.about.vision, body: t.about.vision_body },
              { title: t.about.mission, body: t.about.mission_body },
              { title: t.about.different, body: t.about.different_body },
            ].map((x) => (
              <div
                key={x.title}
                className="rounded-2xl border border-border bg-card p-7 shadow-md transition hover:-translate-y-1 hover:border-gold hover:shadow-luxury"
              >
                <div className="grid h-12 w-12 place-items-center rounded-full bg-accent text-gold">
                  <Award size={20} />
                </div>
                <h3 className="mt-4 text-lg font-bold">{x.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionTitle eyebrow={t.about.eyebrow} title={a.pillars_title} />
          <ol className="relative mt-12 border-s-2 border-gold/40 ps-6">
            {a.pillars.map((item) => (
              <li key={item.step} className="relative mb-8 last:mb-0">
                <span className="absolute -start-[34px] grid h-6 w-6 place-items-center rounded-full bg-gold text-xs font-bold text-primary-foreground">
                  •
                </span>
                <div className="text-xl font-extrabold text-gold">{item.step}</div>
                <div className="mt-1 text-sm text-foreground">{item.text}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border bg-muted/40 py-20 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-2xl font-bold md:text-3xl">{t.final_cta.title}</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition hover:bg-gold hover:text-primary-foreground"
            >
              {t.nav.contact}
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("about_cta")}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-luxury hover:bg-gold-dark"
            >
              <MessageCircle size={16} /> {t.common.whatsapp}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function PageHero({
  brandName,
  title,
  subtitle,
}: {
  brandName: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-secondary py-24 text-secondary-foreground md:py-32">
      <img
        src={IMAGES.majlis}
        alt=""
        aria-hidden="true"
        width={1200}
        height={900}
        loading="eager"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 to-black/60" />
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <div className="section-label justify-center text-gold">
          <span className="h-px w-8 bg-gold/60" /> {brandName}
        </div>
        <h1 className="mt-3 text-4xl font-extrabold text-white md:text-6xl">{title}</h1>
        {subtitle && <p className="mt-4 text-white/75">{subtitle}</p>}
      </div>
    </section>
  );
}

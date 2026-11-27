import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Sparkles,
  Eye,
  Target,
  Award,
  ChevronDown,
  ArrowRight,
  Scissors,
  Sofa,
  Hammer,
} from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { CONTACT, getWhatsAppUrl } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { COPY, CURTAIN_CATEGORIES, BLIND_CATEGORIES, IMAGES } from "@/lib/catalog";
import { CatalogGrid } from "@/components/catalog/CatalogGrid";
import { buildRouteHead } from "@/lib/seo";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/tracking";

export const Route = createFileRoute("/")({
  head: () =>
    buildRouteHead({
      path: "/",
      title: "تفصيل ستائر سامي | تفصيل وتركيب ستائر وبليندات بالرياض | Tafseel Satair Sami",
      description:
        "محل تفصيل ستائر بالرياض — تفصيل ستائر حسب المقاس، ستائر فاخرة وعصرية، ستائر رول وزيبرا وبلاك أوت، تركيب ستائر بالرياض وتنجيد كنب مع قياس مجاني. Custom curtains, roller & zebra blinds and curtain installation in Riyadh.",
      keywords:
        "تفصيل ستائر بالرياض, ستائر الرياض, محل ستائر بالرياض, تركيب ستائر بالرياض, ستائر فاخرة بالرياض, ستائر عصرية بالرياض, تفصيل ستائر حسب المقاس, ستائر رول الرياض, ستائر زيبرا الرياض, Curtains in Riyadh, Custom Curtains Riyadh, Curtain Tailoring Riyadh, Curtain Installation Riyadh, Luxury Curtains Riyadh, Modern Curtains Riyadh, Roller Blinds Riyadh, Zebra Blinds Riyadh, Window Curtains Riyadh, Made to Measure Curtains Riyadh",
      ogTitle: "Tafseel Satair Sami — Custom Curtains & Blinds in Riyadh | تفصيل ستائر سامي",
      ogDescription:
        "Made to measure curtains, roller & zebra blinds, and professional curtain installation in Riyadh, Saudi Arabia.",
      includeBusinessGraph: true,
      service: {
        name: "Custom Curtains, Blinds & Upholstery in Riyadh",
        description:
          "Made-to-measure curtain tailoring, luxury and modern window curtains, roller blinds, zebra blinds, curtain installation, and sofa upholstery in Riyadh.",
        serviceTypes: [
          "Custom Curtains Riyadh",
          "Curtain Tailoring Riyadh",
          "Curtain Installation Riyadh",
          "Roller Blinds Riyadh",
          "Zebra Blinds Riyadh",
          "Sofa Upholstery Riyadh",
        ],
      },
<<<<<<< HEAD
    }),
=======
      { name: "keywords", content: "تفصيل ستائر, تنجيد كنب, الرياض, curtain tailoring, sofa upholstery, Riyadh" },
      { property: "og:title", content: "Majlis Atelier — Custom Curtains & Sofa Upholstery Riyadh" },
      { property: "og:description", content: "Premium custom curtains, sofas and upholstery in Riyadh since 2009." },
      { property: "og:url", content: "https://plush-threads-studio.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://plush-threads-studio.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Majlis Atelier",
          alternateName: "مجلس أتيليه",
          description: "Custom curtain tailoring and sofa upholstery atelier in Riyadh, Saudi Arabia.",
          email: CONTACT.email,
          telephone: "+966548473140",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Riyadh",
            addressCountry: "SA",
          },
          areaServed: "Riyadh, Saudi Arabia",
          priceRange: "$$",
          openingHours: "Sa-Th 09:00-22:00",
        }),
      },
    ],
  }),
>>>>>>> 4ea8b9c48b6aef4d2aa53cf50ffa125d6192e1df
  component: HomePage,
});

const IMG = {
  hero: IMAGES.hero,
  about1: IMAGES.majlis,
  about2: IMAGES.fabric,
  service1: IMAGES.double,
  service2: IMAGES.velvet,
  service3: IMAGES.custom,
  cta: IMAGES.hotel,
  portfolio: [
    {
      src: IMAGES.bedroom,
      ar: "تفصيل ستائر غرف نوم بلاك أوت بالرياض",
      en: "Custom blackout bedroom curtains tailored in Riyadh",
    },
    {
      src: IMAGES.sheer,
      ar: "ستائر شيفون عصرية بالرياض",
      en: "Modern sheer window curtains in Riyadh",
    },
    {
      src: "/images/sand-majlis-curtains-sofa-riyadh.jpg",
      ar: "تفصيل ستائر وكنب مجلس بالرياض",
      en: "Custom beige majlis curtains and sofa set in Riyadh",
    },
    {
      src: IMAGES.office,
      ar: "ستائر مكاتب وبليندات بالرياض",
      en: "Custom office window blinds and curtains in Riyadh",
    },
    {
      src: IMAGES.blackout,
      ar: "ستائر بلاك أوت عازلة للضوء والحرارة بالرياض",
      en: "Blackout curtains for light and heat control in Riyadh",
    },
    {
      src: "/images/grey-ripple-fold-curtains-riyadh.jpg",
      ar: "تركيب ستائر ويفي عصرية على سكة سقف بالرياض",
      en: "Modern ripple-fold curtains installed on ceiling track in Riyadh",
    },
  ],
};

function HomePage() {
  const { t, locale } = useI18n();
  const c = COPY[locale];
  const whatsappUrl = getWhatsAppUrl(locale);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={IMG.hero}
          alt={
            locale === "ar"
              ? "مجلس فاخر مع تفصيل ستائر بالرياض"
              : "Luxury Riyadh majlis with custom tailored curtains"
          }
          width={1600}
          height={1067}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/45 to-black/75" />
        <div className="mx-auto flex min-h-[84vh] max-w-7xl flex-col items-start justify-center px-4 py-24 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="section-label text-gold">
              <Sparkles size={14} /> {t.hero.eyebrow}
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.12] text-white md:text-6xl lg:text-7xl">
              {t.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/80 md:text-lg">
              {t.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                onClick={() => trackPhoneClick("home_hero")}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-luxury transition hover:bg-gold-dark"
              >
                <Phone size={16} /> {t.common.callNow}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("home_hero")}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                <MessageCircle size={16} /> {t.common.whatsapp}
              </a>
              <Link
                to="/curtains"
                className="inline-flex items-center gap-2 rounded-full border border-gold/70 px-6 py-3 text-sm font-semibold text-gold transition hover:bg-gold hover:text-primary-foreground"
              >
                {c.explore} <ArrowRight size={14} className="rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60" aria-hidden="true">
          <ChevronDown className="animate-bounce" size={22} />
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
          <div className="relative">
            <img
              src={IMG.about1}
              alt={
                locale === "ar"
                  ? "ستائر فاخرة مفصّلة لمجلس في الرياض"
                  : "Luxury custom curtains tailored for a Riyadh majlis"
              }
              width={1200}
              height={1500}
              className="aspect-[4/5] w-4/5 rounded-2xl object-cover shadow-luxury"
              loading="lazy"
              decoding="async"
            />
            <img
              src={IMG.about2}
              alt={
                locale === "ar"
                  ? "عينات أقمشة تفصيل ستائر حسب المقاس"
                  : "Curated fabric swatches for made-to-measure curtains"
              }
              width={800}
              height={800}
              className="absolute bottom-0 end-0 hidden aspect-square w-1/2 rounded-2xl border-8 border-background object-cover shadow-luxury md:block"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute -bottom-4 start-4 flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-semibold tracking-wider text-primary-foreground uppercase shadow-luxury">
              <Award size={14} /> {t.common.since}
            </div>
          </div>

          <div>
            <SectionTitle eyebrow={t.about.eyebrow} title={t.about.title} align="start" />
            <p className="mt-5 text-muted-foreground leading-relaxed">{t.about.body}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Eye, title: t.about.vision, body: t.about.vision_body },
                { icon: Target, title: t.about.mission, body: t.about.mission_body },
                { icon: Sparkles, title: t.about.different, body: t.about.different_body },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-2xl border border-border bg-card p-5">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-accent text-gold">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-3 text-sm font-bold">{title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold px-5 py-2.5 text-sm font-semibold text-gold transition hover:bg-gold hover:text-primary-foreground"
            >
              {t.common.learnMore} <ArrowRight size={14} className="rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-border bg-muted/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle eyebrow={t.services.eyebrow} title={t.services.title} />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { img: IMG.service1, icon: Scissors, title: t.services.curtain_title, body: t.services.curtain_body, to: "/curtains" as const },
              { img: IMG.service2, icon: Sofa, title: t.services.sofa_up_title, body: t.services.sofa_up_body, to: "/services" as const },
              { img: IMG.service3, icon: Hammer, title: t.services.sofa_make_title, body: t.services.sofa_make_body, to: "/services" as const },
            ].map(({ img, icon: Icon, title, body, to }) => (
              <motion.div
                key={title}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-md transition hover:border-gold hover:shadow-luxury"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-accent text-gold">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    <a
                      href={getWhatsAppUrl(locale, title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick("home_service_card", title)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
                    >
                      <MessageCircle size={14} /> {t.common.whatsapp}
                    </a>
                    <Link
                      to={to}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-foreground/75 transition hover:text-gold"
                    >
                      {t.common.learnMore} <ArrowRight size={12} className="rtl:rotate-180" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CURTAIN COLLECTION */}
      <section className="border-y border-border bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow={c.collection.eyebrow}
            title={c.collection.title}
            subtitle={c.collection.subtitle}
          />
          <div className="mt-14">
            <CatalogGrid items={CURTAIN_CATEGORIES.slice(0, 6)} />
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/curtains"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-luxury transition hover:bg-gold-dark"
            >
              {c.collection.all} <ArrowRight size={14} className="rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* BLINDS */}
      <section className="bg-muted/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle eyebrow={c.blinds_page.eyebrow} title={c.blinds_page.title} subtitle={c.blinds_page.subtitle} />
          <div className="mt-14">
            <CatalogGrid items={BLIND_CATEGORIES.slice(0, 3)} />
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/blinds"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition hover:bg-gold hover:text-primary-foreground"
            >
              {c.nav.blinds} <ArrowRight size={14} className="rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="border-y border-border bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle eyebrow={c.why.eyebrow} title={c.why.title} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.why.items.map((w, i) => (
              <div key={w.title} className="rounded-2xl border border-border bg-card p-6 transition hover:border-gold">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-accent text-sm font-bold text-gold">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-base font-bold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPACES */}
      <section className="bg-muted/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle eyebrow={c.spaces.eyebrow} title={c.spaces.title} />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[IMAGES.bedroom, IMAGES.majlis, IMAGES.office, IMAGES.hotel].map((img, i) => (
              <article key={c.spaces.items[i].title} className="group relative overflow-hidden rounded-2xl">
                <img
                  src={img}
                  alt={c.spaces.items[i].title}
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-lg font-bold">{c.spaces.items[i].title}</h3>
                  <p className="mt-1 text-xs text-white/80">{c.spaces.items[i].body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INSTALLATION */}
      <section className="border-y border-border bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
          <div className="overflow-hidden rounded-2xl shadow-luxury">
            <img
              src={IMAGES.installation}
              alt={locale === "ar" ? "فني يركّب ستائر في شقة فاخرة بالرياض" : "Technician installing curtains in a Riyadh apartment"}
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
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
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("home_installation")}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-luxury transition hover:bg-gold-dark"
            >
              <MessageCircle size={16} /> {c.quoteWhats}
            </a>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative isolate overflow-hidden bg-secondary py-16 text-secondary-foreground">
        <div className="absolute inset-0 -z-10 opacity-20">
          <img src={IMG.cta} alt="" aria-hidden="true" className="h-full w-full object-cover" loading="lazy" decoding="async" />
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 md:grid-cols-[1fr_auto] md:px-6">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">{t.cta_banner.title}</h2>
            <p className="mt-2 text-sm opacity-80">{t.cta_banner.subtitle}</p>
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              dir="ltr"
              onClick={() => trackPhoneClick("home_cta_banner")}
              className="mt-4 inline-block text-3xl font-extrabold text-gold md:text-4xl"
            >
              {CONTACT.phone}
            </a>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("home_cta_banner")}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-luxury transition hover:bg-gold-dark"
          >
            <MessageCircle size={16} /> {t.common.whatsapp}
          </a>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle eyebrow={t.portfolio.eyebrow} title={t.portfolio.title} subtitle={t.portfolio.subtitle} />
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {IMG.portfolio.map((item, i) => (
              <Link
                key={item.src}
                to="/portfolio"
                className={`group relative overflow-hidden rounded-2xl ${
                  i === 0 || i === 4 ? "md:row-span-2 aspect-[3/4] md:aspect-[3/5]" : "aspect-square"
                }`}
              >
                <img
                  src={item.src}
                  alt={locale === "ar" ? item.ar : item.en}
                  width={900}
                  height={900}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gold/0 transition group-hover:bg-gold/35" />
                <div className="absolute inset-0 grid place-items-center opacity-0 transition group-hover:opacity-100">
                  <span className="rounded-full border border-white bg-black/30 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
                    {t.portfolio.view}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition hover:bg-gold hover:text-primary-foreground"
            >
              {t.common.viewAll} <ArrowRight size={14} className="rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-muted/40 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <SectionTitle eyebrow={t.faq.eyebrow} title={t.faq.title} />
          <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
            {t.faq.items.map((it, i) => (
              <FaqItem key={it.q} q={it.q} a={it.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden py-24">
        <img
          src={IMG.hero}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 -z-10 bg-black/70" />
        <div className="mx-auto max-w-3xl px-4 text-center text-white md:px-6">
          <h2 className="text-3xl font-extrabold md:text-5xl">{t.final_cta.title}</h2>
          <p className="mt-4 text-white/75">{t.final_cta.subtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("home_final_cta")}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-luxury transition hover:bg-gold-dark"
            >
              <MessageCircle size={18} /> {t.common.whatsapp}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-start text-sm font-semibold transition hover:text-gold md:text-base"
      >
        <span>{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-gold transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid overflow-hidden px-5 transition-[grid-template-rows] duration-300 ${
          open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden text-sm leading-relaxed text-muted-foreground">{a}</div>
      </div>
    </div>
  );
}

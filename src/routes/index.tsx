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
  Star,
  ArrowRight,
  Scissors,
  Sofa,
  Hammer,
} from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { CONTACT, STATS } from "@/lib/constants";
import { CountUp } from "@/components/ui/CountUp";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Majlis Atelier — تفصيل ستائر وتنجيد كنب بالرياض | Custom Curtains & Sofa Upholstery Riyadh" },
      {
        name: "description",
        content:
          "تفصيل ستائر وتنجيد كنب فاخر بالرياض منذ 2009. خامات أصلية، تصاميم مخصصة، استشارة مجانية. Premium custom curtains and sofa upholstery in Riyadh — original materials, bespoke designs, free consultation.",
      },
      { name: "keywords", content: "تفصيل ستائر, تنجيد كنب, الرياض, curtain tailoring, sofa upholstery, Riyadh" },
      { property: "og:title", content: "Majlis Atelier — Custom Curtains & Sofa Upholstery Riyadh" },
      { property: "og:description", content: "Premium custom curtains, sofas and upholstery in Riyadh since 2009." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Majlis Atelier",
          alternateName: "مجلس أتيليه",
          description: "Custom curtain tailoring and sofa upholstery atelier in Riyadh, Saudi Arabia.",
          telephone: "+966549238418",
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
  component: HomePage,
});

const IMG = {
  hero: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1900&q=80",
  about1: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=80",
  about2: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80",
  service1: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&w=900&q=80",
  service2: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80",
  service3: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=900&q=80",
  cta: "https://images.unsplash.com/photo-1616627781537-1be4e08a4f0a?auto=format&fit=crop&w=1600&q=80",
  portfolio: [
    "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1616137148650-4aa14651b02a?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1583845112203-29329902332e?auto=format&fit=crop&w=800&q=80",
  ],
  blog: [
    "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1618219740975-d40978bb7378?auto=format&fit=crop&w=800&q=80",
  ],
};

function HomePage() {
  const { t, locale } = useI18n();

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={IMG.hero}
          alt={locale === "ar" ? "مجلس فاخر مع ستائر مفصّلة" : "Luxury majlis with bespoke curtains"}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/45 to-black/75" />
        <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col items-start justify-center px-4 py-24 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="section-label text-gold">
              <Sparkles size={14} /> {t.hero.eyebrow}
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] text-white md:text-6xl lg:text-7xl">
              {t.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/80 md:text-lg">
              {t.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-luxury transition hover:bg-gold-dark"
              >
                <Phone size={16} /> {t.common.callNow}
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                <MessageCircle size={16} /> {t.common.whatsapp}
              </a>
            </div>
          </motion.div>

          {/* Hero stats */}
          <div className="mt-14 grid w-full grid-cols-3 gap-4 border-t border-white/15 pt-8 md:max-w-2xl">
            {STATS.slice(0, 3).map((s) => (
              <div key={s.label_en} className="text-white">
                <div className="text-3xl font-bold text-gold md:text-4xl">
                  <CountUp value={s.number} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs text-white/70 md:text-sm">
                  {locale === "ar" ? s.label_ar : s.label_en}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60">
          <ChevronDown className="animate-bounce" size={22} />
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
          <div className="relative">
            <img
              src={IMG.about1}
              alt=""
              className="aspect-[4/5] w-4/5 rounded-2xl object-cover shadow-luxury"
              loading="lazy"
            />
            <img
              src={IMG.about2}
              alt=""
              className="absolute bottom-0 end-0 hidden aspect-square w-1/2 rounded-2xl border-8 border-background object-cover shadow-luxury md:block"
              loading="lazy"
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

      {/* PARTNERS STRIP */}
      <section className="border-y border-border bg-muted/50 py-8">
        <div className="overflow-hidden">
          <div className="marquee flex w-max items-center gap-16 whitespace-nowrap px-8">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex items-center gap-16">
                {["VELOUR", "MAISON", "ATELIER", "RIYADH CO", "ARABESQUE", "NUR & CO"].map((b) => (
                  <span
                    key={b + dup}
                    className="text-2xl font-bold tracking-[0.2em] text-muted-foreground/60 transition hover:text-gold"
                  >
                    {b}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-gold py-14 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4 md:px-6">
          {STATS.map((s) => (
            <div key={s.label_en} className="text-center">
              <div className="text-4xl font-extrabold md:text-5xl">
                <CountUp value={s.number} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-wider opacity-90 md:text-sm">
                {locale === "ar" ? s.label_ar : s.label_en}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle eyebrow={t.services.eyebrow} title={t.services.title} />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { img: IMG.service1, icon: Scissors, title: t.services.curtain_title, body: t.services.curtain_body },
              { img: IMG.service2, icon: Sofa, title: t.services.sofa_up_title, body: t.services.sofa_up_body },
              { img: IMG.service3, icon: Hammer, title: t.services.sofa_make_title, body: t.services.sofa_make_body },
            ].map(({ img, icon: Icon, title, body }) => (
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
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-accent text-gold">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
                  >
                    <MessageCircle size={14} /> {t.common.whatsapp}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative isolate overflow-hidden bg-secondary py-16 text-secondary-foreground">
        <div className="absolute inset-0 -z-10 opacity-20">
          <img src={IMG.cta} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 md:grid-cols-[1fr_auto] md:px-6">
          <div>
            <h3 className="text-2xl font-bold md:text-3xl">{t.cta_banner.title}</h3>
            <p className="mt-2 text-sm opacity-80">{t.cta_banner.subtitle}</p>
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              dir="ltr"
              className="mt-4 inline-block text-3xl font-extrabold text-gold md:text-4xl"
            >
              {CONTACT.phone}
            </a>
          </div>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
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
            {IMG.portfolio.map((src, i) => (
              <Link
                key={src}
                to="/portfolio"
                className={`group relative overflow-hidden rounded-2xl ${
                  i === 0 || i === 4 ? "md:row-span-2 aspect-[3/4] md:aspect-[3/5]" : "aspect-square"
                }`}
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
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

      {/* TESTIMONIALS */}
      <TestimonialsCarousel />

      {/* FAQ */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <SectionTitle eyebrow={t.faq.eyebrow} title={t.faq.title} />
          <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
            {t.faq.items.map((it, i) => (
              <FaqItem key={i} q={it.q} a={it.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="bg-muted/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle eyebrow={t.blog.eyebrow} title={t.blog.title} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.blog.items.map((post, i) => (
              <article
                key={post.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-luxury"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={IMG.blog[i]}
                    alt=""
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="rounded-full bg-gold/15 px-2.5 py-1 font-semibold text-gold">{post.tag}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="mt-3 text-base font-bold leading-snug">{post.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                  <button className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:underline">
                    {t.common.readMore} <ArrowRight size={14} className="rtl:rotate-180" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden py-24">
        <img src={IMG.hero} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 -z-10 bg-black/70" />
        <div className="mx-auto max-w-3xl px-4 text-center text-white md:px-6">
          <h2 className="text-3xl font-extrabold md:text-5xl">{t.final_cta.title}</h2>
          <p className="mt-4 text-white/75">{t.final_cta.subtitle}</p>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-luxury transition hover:bg-gold-dark"
          >
            <MessageCircle size={18} /> {t.common.whatsapp}
          </a>
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
        onClick={() => setOpen((v) => !v)}
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

function TestimonialsCarousel() {
  const { t } = useI18n();
  const items = t.testimonials.items;
  const [i, setI] = useState(0);

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <SectionTitle eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} />
        <div className="mt-12 rounded-2xl border border-border bg-card p-8 shadow-md md:p-12">
          <div className="flex justify-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} size={18} fill="currentColor" />
            ))}
          </div>
          <p className="mt-6 text-center text-lg leading-relaxed text-foreground md:text-xl">
            “{items[i].quote}”
          </p>
          <div className="mt-6 flex flex-col items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-accent text-gold font-bold">
              {items[i].name.charAt(0)}
            </div>
            <div className="text-center">
              <div className="text-sm font-bold">{items[i].name}</div>
              <div className="text-xs text-muted-foreground">{items[i].role}</div>
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {items.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Slide ${k + 1}`}
                className={`h-2 rounded-full transition-all ${
                  k === i ? "w-8 bg-gold" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

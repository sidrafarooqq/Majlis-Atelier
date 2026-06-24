import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { CONTACT, STATS } from "@/lib/constants";
import { CountUp } from "@/components/ui/CountUp";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Majlis Atelier | من نحن" },
      {
        name: "description",
        content:
          "تعرّف على قصة مجلس أتيليه: 15+ سنة من الحرفة السعودية في تفصيل الستائر وتنجيد الكنب. Learn our story — 15+ years of Saudi craftsmanship in curtains and upholstery.",
      },
      { property: "og:title", content: "About — Majlis Atelier" },
      { property: "og:description", content: "15+ years of Saudi craftsmanship in custom curtains and upholstery." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t, locale } = useI18n();
  const a = t.about_page;

  return (
    <>
      <PageHero title={a.title} subtitle={t.about.body} />

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80"
              alt=""
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-luxury"
              loading="lazy"
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
              <div key={x.title} className="rounded-2xl border border-border bg-card p-7 shadow-md transition hover:-translate-y-1 hover:border-gold hover:shadow-luxury">
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

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle eyebrow="Team" title={a.team_title} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {a.team.map((m) => (
              <div key={m.name} className="overflow-hidden rounded-2xl border border-border bg-card text-center">
                <div className="aspect-square overflow-hidden">
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent to-gold/30 text-5xl font-bold text-gold">
                    {m.name.charAt(0)}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold">{m.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionTitle eyebrow="2009 → 2026" title={a.timeline_title} />
          <ol className="relative mt-12 border-s-2 border-gold/40 ps-6">
            {a.timeline.map((step) => (
              <li key={step.year} className="relative mb-8 last:mb-0">
                <span className="absolute -start-[34px] grid h-6 w-6 place-items-center rounded-full bg-gold text-xs font-bold text-primary-foreground">
                  •
                </span>
                <div className="text-xl font-extrabold text-gold">{step.year}</div>
                <div className="mt-1 text-sm text-foreground">{step.text}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

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

      <section className="bg-background py-20 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h3 className="text-2xl font-bold md:text-3xl">{t.final_cta.title}</h3>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition hover:bg-gold hover:text-primary-foreground">
              {t.nav.contact}
            </Link>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-luxury hover:bg-gold-dark">
              <MessageCircle size={16} /> {t.common.whatsapp}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-secondary py-24 text-secondary-foreground md:py-32">
      <img
        src="https://images.unsplash.com/photo-1616627781537-1be4e08a4f0a?auto=format&fit=crop&w=1900&q=80"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 to-black/60" />
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <div className="section-label justify-center text-gold">
          <span className="h-px w-8 bg-gold/60" /> Majlis Atelier
        </div>
        <h1 className="mt-3 text-4xl font-extrabold text-white md:text-6xl">{title}</h1>
        {subtitle && <p className="mt-4 text-white/75">{subtitle}</p>}
      </div>
    </section>
  );
}

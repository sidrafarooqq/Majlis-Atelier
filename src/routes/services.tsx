import { createFileRoute } from "@tanstack/react-router";
import { Check, MessageCircle, Scissors, Sofa, Hammer } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { IMAGES } from "@/lib/catalog";
import { CONTACT } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Curtain Tailoring, Sofa Upholstery & Custom Sofas | خدماتنا" },
      {
        name: "description",
        content:
          "ثلاث خدمات نتقنها: تفصيل ستائر، تنجيد كنب، وتفصيل كنب مخصص بالرياض. Our three signature services: curtain tailoring, sofa upholstery, and custom sofa making in Riyadh.",
      },
      { property: "og:title", content: "Services — Majlis Atelier" },
      { property: "og:description", content: "Curtains, upholstery and custom sofas crafted in Riyadh." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useI18n();
  const sp = t.services_page;

  const items = [
    {
      img: IMAGES.double,
      icon: Scissors,
      title: t.services.curtain_title,
      body: t.services.curtain_body,
      features: t.services.curtain_features,
    },
    {
      img: "/sofaaaa.jpg",
      icon: Sofa,
      title: t.services.sofa_up_title,
      body: t.services.sofa_up_body,
      features: t.services.sofa_up_features,
    },
    {
      img: "/Sofa-White-1.webp",
      icon: Hammer,
      title: t.services.sofa_make_title,
      body: t.services.sofa_make_body,
      features: t.services.sofa_make_features,
    },
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border bg-secondary py-24 text-secondary-foreground md:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 to-black/60" />
        <img
          src={IMAGES.luxury}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
        />
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <div className="section-label justify-center text-gold">
            <span className="h-px w-8 bg-gold/60" /> {t.services.eyebrow}
          </div>
          <h1 className="mt-3 text-4xl font-extrabold text-white md:text-6xl">{sp.title}</h1>
          <p className="mt-4 text-white/75">{sp.subtitle}</p>
        </div>
      </section>

      {items.map((item, i) => {
        const Icon = item.icon;
        const reverse = i % 2 === 1;
        return (
          <section key={item.title} className={`py-20 md:py-24 ${i % 2 === 1 ? "bg-muted/40" : "bg-background"}`}>
            <div
              className={`mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 md:grid-cols-2 ${
                reverse ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden rounded-2xl shadow-luxury">
                <img src={item.img} alt={item.title} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              </div>
              <div>
                <div className="grid h-12 w-12 place-items-center rounded-full bg-accent text-gold">
                  <Icon size={20} />
                </div>
                <h2 className="mt-4 text-3xl font-bold md:text-4xl">{item.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{item.body}</p>

                <ul className="mt-6 space-y-3">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-gold text-primary-foreground">
                        <Check size={12} />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-luxury hover:bg-gold-dark"
                >
                  <MessageCircle size={16} /> {t.common.whatsapp}
                </a>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

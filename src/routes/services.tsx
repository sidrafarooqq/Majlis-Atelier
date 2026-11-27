import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MessageCircle, Scissors, Sofa, Hammer } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { IMAGES } from "@/lib/catalog";
import { getWhatsAppUrl } from "@/lib/constants";
import { buildRouteHead } from "@/lib/seo";
import { trackWhatsAppClick } from "@/lib/tracking";

export const Route = createFileRoute("/services")({
  head: () =>
    buildRouteHead({
      path: "/services",
      title: "خدماتنا — تفصيل وتركيب الستائر وتنجيد الكنب بالرياض | Tafseel Satair Sami",
      description:
        "خدمات تفصيل ستائر حسب المقاس، تركيب ستائر بالرياض، تنجيد الكنب وتفصيل الكنب المخصص في الرياض. Curtain tailoring Riyadh, curtain installation Riyadh, sofa upholstery and custom sofas.",
      keywords:
        "تفصيل ستائر بالرياض, تركيب ستائر بالرياض, محل ستائر بالرياض, تنجيد كنب الرياض, Curtain Tailoring Riyadh, Curtain Installation Riyadh, Custom Curtains Riyadh",
      ogTitle: "Services — Curtain Tailoring, Installation & Upholstery Riyadh | Tafseel Satair Sami",
      ogDescription: "Curtain tailoring, curtain installation, sofa upholstery and custom sofas in Riyadh.",
      breadcrumbName: "Services",
      service: {
        name: "Curtain Tailoring, Installation & Sofa Upholstery Riyadh",
        description:
          "Made-to-measure curtain tailoring, professional curtain installation, sofa upholstery and custom sofa crafting in Riyadh.",
        serviceTypes: [
          "Curtain Tailoring Riyadh",
          "Curtain Installation Riyadh",
          "Sofa Upholstery Riyadh",
          "Custom Sofa Making Riyadh",
        ],
      },
    }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t, locale } = useI18n();
  const sp = t.services_page;

  const items = [
    {
      img: IMAGES.double,
      alt: locale === "ar" ? "تفصيل وتركيب ستائر مزدوجة بالرياض" : "Double-layer custom curtains tailored and installed in Riyadh",
      icon: Scissors,
      title: t.services.curtain_title,
      body: t.services.curtain_body,
      features: t.services.curtain_features,
    },
    {
      img: "/images/charcoal-upholstered-sofas-riyadh.jpg",
      alt: locale === "ar" ? "تنجيد كنب فاخر بالرياض" : "Reupholstered modern charcoal sofas in Riyadh",
      icon: Sofa,
      title: t.services.sofa_up_title,
      body: t.services.sofa_up_body,
      features: t.services.sofa_up_features,
    },
    {
      img: "/images/custom-white-l-sofa-riyadh.webp",
      alt: locale === "ar" ? "تفصيل كنب زاوية أبيض بالرياض" : "Custom white L-shaped sofa and curtains in Riyadh",
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
          aria-hidden="true"
          width={1200}
          height={900}
          loading="eager"
          decoding="async"
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
                <img
                  src={item.img}
                  alt={item.alt}
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
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

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={getWhatsAppUrl(locale, item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick("services_page", item.title)}
                    className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-luxury hover:bg-gold-dark"
                  >
                    <MessageCircle size={16} /> {t.common.whatsapp}
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:border-gold hover:text-gold"
                  >
                    {t.nav.contact}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

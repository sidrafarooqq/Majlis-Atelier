import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Majlis Atelier | معرض الأعمال" },
      {
        name: "description",
        content:
          "نماذج من مشاريع الستائر والكنب والتنجيد التي نفّذناها بالرياض. A selection of curtain, sofa and upholstery projects we've delivered in Riyadh.",
      },
      { property: "og:title", content: "Portfolio — Majlis Atelier" },
      { property: "og:description", content: "Selected curtain, sofa and upholstery projects." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

type Cat = "all" | "curtains" | "sofas" | "upholstery";

const works: { src: string; cat: Exclude<Cat, "all"> }[] = [
  { src: "/Sofa-White-1.webp", cat: "sofas" },
  { src: "/cur.jpg", cat: "curtains" },
  { src: "/unn.jpg", cat: "upholstery" },
  { src: "/sofaaaa.jpg", cat: "sofas" },
  { src: "/ccr.jpg", cat: "curtains" },
  { src: "/unnnn.jpg", cat: "upholstery" },
  { src: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=900&q=80", cat: "sofas" },
  { src: "/cc.jpg", cat: "curtains" },
  { src: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80", cat: "upholstery" },
  { src: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=900&q=80", cat: "sofas" },
  { src: "/b.jpg", cat: "curtains" },
  { src: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=900&q=80", cat: "upholstery" },
];

function PortfolioPage() {
  const { t } = useI18n();
  const [filter, setFilter] = useState<Cat>("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const f = t.portfolio.filters;
  const tabs: { key: Cat; label: string }[] = [
    { key: "all", label: f.all },
    { key: "curtains", label: f.curtains },
    { key: "sofas", label: f.sofas },
    { key: "upholstery", label: f.upholstery },
  ];

  const filtered = filter === "all" ? works : works.filter((w) => w.cat === filter);

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border bg-secondary py-24 text-secondary-foreground md:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 to-black/60" />
        <img
          src="https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=1900&q=80"
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
        />
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h1 className="text-4xl font-extrabold text-white md:text-6xl">{t.portfolio_page.title}</h1>
          <p className="mt-4 text-white/75">{t.portfolio.subtitle}</p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                  filter === tab.key
                    ? "border-gold bg-gold text-primary-foreground shadow-luxury"
                    : "border-border bg-card text-foreground/80 hover:border-gold hover:text-gold"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-10 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
            {filtered.map((w) => (
              <button
                key={w.src}
                onClick={() => setLightbox(w.src)}
                className="group relative block w-full overflow-hidden rounded-2xl"
              >
                <img src={w.src} alt="" className="w-full transition duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gold/0 transition group-hover:bg-gold/30" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
          >
            <X size={20} />
          </button>
          <img src={lightbox} alt="" className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain" />
        </div>
      )}
    </>
  );
}

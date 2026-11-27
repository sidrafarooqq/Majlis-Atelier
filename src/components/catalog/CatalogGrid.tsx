import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { getWhatsAppUrl } from "@/lib/constants";
import { COPY, type CatalogItem } from "@/lib/catalog";
import { trackWhatsAppClick } from "@/lib/tracking";

export function CatalogGrid({ items }: { items: CatalogItem[] }) {
  const { locale } = useI18n();
  const c = COPY[locale];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => {
        const copy = item[locale];
        const whatsappUrl = getWhatsAppUrl(locale, copy.title);
        return (
          <motion.article
            key={item.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:border-gold hover:shadow-luxury"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={item.img}
                alt={copy.title}
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-bold">{copy.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{copy.body}</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("catalog_card", item.slug)}
                className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-gold px-4 py-2 text-xs font-semibold text-gold transition hover:bg-gold hover:text-primary-foreground"
              >
                <MessageCircle size={14} /> {c.quote}
                <ArrowRight size={12} className="rtl:rotate-180" />
              </a>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}

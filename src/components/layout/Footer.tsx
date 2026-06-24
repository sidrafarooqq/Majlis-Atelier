import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { BRAND, CONTACT } from "@/lib/constants";

export function Footer() {
  const { t, locale } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[oklch(0.16_0.005_60)] text-[oklch(0.95_0.015_80)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-[oklch(0.15_0.005_60)] font-bold">
              M
            </span>
            <span className="font-bold">{locale === "ar" ? BRAND.name_ar : BRAND.name_en}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-white/65">{t.footer.tagline}</p>
          <div className="mt-5 flex gap-2">
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition hover:border-gold hover:text-gold"
            >
              <Facebook size={16} />
            </a>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition hover:border-gold hover:text-gold"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wider text-gold uppercase">
            {t.footer.services_col}
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li><Link to="/services" className="hover:text-gold">{t.services.curtain_title}</Link></li>
            <li><Link to="/services" className="hover:text-gold">{t.services.sofa_up_title}</Link></li>
            <li><Link to="/services" className="hover:text-gold">{t.services.sofa_make_title}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wider text-gold uppercase">
            {t.footer.links_col}
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li><Link to="/about" className="hover:text-gold">{t.nav.about}</Link></li>
            <li><Link to="/portfolio" className="hover:text-gold">{t.nav.portfolio}</Link></li>
            <li><Link to="/contact" className="hover:text-gold">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wider text-gold uppercase">
            {t.footer.contact_col}
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-gold shrink-0" />
              <a href={`tel:${CONTACT.phoneRaw}`} dir="ltr" className="hover:text-gold">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={14} className="text-gold shrink-0" />
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-gold shrink-0" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-gold">{CONTACT.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
              <span>{locale === "ar" ? CONTACT.address_ar : CONTACT.address_en}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/55 md:flex-row md:px-6">
          <p>
            © {year} {locale === "ar" ? BRAND.name_ar : BRAND.name_en}. {t.footer.rights}.
          </p>
          <p className="tracking-wider">{BRAND.tagline_en} · {BRAND.tagline_ar}</p>
        </div>
      </div>
    </footer>
  );
}

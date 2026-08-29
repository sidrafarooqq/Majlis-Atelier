import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { IMAGES } from "@/lib/catalog";
import { CONTACT } from "@/lib/constants";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Majlis Atelier | اتصل بنا" },
      {
        name: "description",
        content:
          "تواصل مع مجلس أتيليه بالرياض — اتصال، واتساب، أو نموذج تواصل. Get in touch — call, WhatsApp, or send a message. Free consultation in Riyadh.",
      },
      { property: "og:title", content: "Contact — Majlis Atelier" },
      { property: "og:description", content: "Reach our Riyadh atelier for a free consultation." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t, locale } = useI18n();
  const cp = t.contact_page;
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border bg-secondary py-24 text-secondary-foreground md:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 to-black/60" />
        <img
          src={IMAGES.linen}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
        />
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h1 className="text-4xl font-extrabold text-white md:text-6xl">{cp.title}</h1>
          <p className="mt-4 text-white/75">{cp.subtitle}</p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold">{cp.info_title}</h2>
            <div className="mt-6 grid gap-4">
              {[
                { icon: Phone, label: t.common.callNow, value: CONTACT.phone, href: `tel:${CONTACT.phoneRaw}`, ltr: true },
                { icon: MessageCircle, label: "WhatsApp", value: CONTACT.phone, href: CONTACT.whatsapp, ltr: true },
                { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                { icon: MapPin, label: cp.address, value: locale === "ar" ? CONTACT.address_ar : CONTACT.address_en },
              ].map(({ icon: Icon, label, value, href, ltr }) => {
                const inner = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent text-gold">
                      <Icon size={18} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {label}
                      </span>
                      <span className="block truncate font-semibold" {...(ltr ? { dir: "ltr" } : {})}>
                        {value}
                      </span>
                    </span>
                  </>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition hover:border-gold hover:shadow-luxury"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={label} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
                    {inner}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex gap-2">
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-border transition hover:border-gold hover:text-gold">
                <Facebook size={16} />
              </a>
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-border transition hover:border-gold hover:text-gold">
                <Instagram size={16} />
              </a>
            </div>

            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-luxury transition hover:opacity-90"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>

            <div className="mt-6 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Riyadh&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold">{cp.form_title}</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-md md:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label={cp.name} name="name" required />
                <Field label={cp.phone} name="phone" type="tel" required />
                <Field label={cp.email} name="email" type="email" required className="sm:col-span-2" />
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-semibold">{cp.service}</label>
                  <select className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30">
                    {cp.service_options.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-semibold">{cp.message}</label>
                  <textarea
                    rows={5}
                    required
                    className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-luxury transition hover:bg-gold-dark"
              >
                <Send size={16} /> {cp.submit}
              </button>
              {sent && (
                <p className="mt-4 rounded-xl bg-accent px-4 py-3 text-sm text-accent-foreground">
                  {cp.sent}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  className = "",
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; className?: string }) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-sm font-semibold">{label}</label>
      <input
        {...rest}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
      />
    </div>
  );
}

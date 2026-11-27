import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { IMAGES } from "@/lib/catalog";
import { CONTACT, getWhatsAppUrl } from "@/lib/constants";
import { buildRouteHead } from "@/lib/seo";
import { trackFormSubmissionSuccess, trackPhoneClick, trackWhatsAppClick } from "@/lib/tracking";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildRouteHead({
      path: "/contact",
      title: "اتصل بنا — تفصيل ستائر سامي بالرياض | Contact Tafseel Satair Sami",
      description:
        "تواصل مع تفصيل ستائر سامي بالرياض — اتصال (+966 54 847 3140)، واتساب، أو نموذج تواصل لطلب قياس مجاني وعرض سعر لتفصيل وتركيب الستائر. Contact Tafseel Satair Sami in Riyadh.",
      keywords:
        "اتصل بنا تفصيل ستائر بالرياض, رقم محل ستائر بالرياض, حجز قياس ستائر بالرياض, Contact Curtains Riyadh, Free Curtain Measurement Riyadh",
      ogTitle: "Contact Us — Free Curtain Measurement in Riyadh | Tafseel Satair Sami",
      ogDescription: "Call, WhatsApp (+966 54 847 3140), or submit an enquiry for free curtain measurement in Riyadh.",
      breadcrumbName: "Contact",
      includeBusinessGraph: true,
    }),
  component: ContactPage,
});

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
}

function ContactPage() {
  const { t, locale } = useI18n();
  const cp = t.contact_page;
  const whatsappUrl = getWhatsAppUrl(locale);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState<string>(cp.service_options[0]);
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot

  const [fieldErrors, setFieldErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const formLoadedAtRef = useRef<number>(Date.now());

  useEffect(() => {
    formLoadedAtRef.current = Date.now();
  }, []);

  // Keep selected service aligned when user toggles AR/EN
  useEffect(() => {
    if (!cp.service_options.includes(service as never)) {
      setService(cp.service_options[0]);
    }
  }, [locale, cp.service_options, service]);

  function validateForm(): FormErrors {
    const errors: FormErrors = {};
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const digits = trimmedPhone.replace(/\D/g, "");
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (trimmedName.length < 2) {
      errors.name = cp.validation.name;
    }
    if (digits.length < 8 || digits.length > 15) {
      errors.phone = cp.validation.phone;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      errors.email = cp.validation.email;
    }
    if (!service.trim()) {
      errors.service = cp.validation.service;
    }
    if (trimmedMessage.length < 10) {
      errors.message = cp.validation.message;
    }
    return errors;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;

    setSubmitStatus("idle");
    setServerError("");

    const errors = validateForm();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          service: service.trim(),
          message: message.trim(),
          locale,
          website,
          formLoadedAt: formLoadedAtRef.current,
        }),
      });

      const data = (await response.json().catch(() => null)) as {
        ok?: boolean;
        code?: string;
        error?: string;
        submissionId?: string;
      } | null;

      if (!response.ok || !data?.ok || !data.submissionId) {
        setSubmitStatus("error");
        if (data?.code === "EMAIL_NOT_CONFIGURED") {
          setServerError(cp.errorNotConfigured);
        } else if (data?.code === "DUPLICATE_SUBMISSION") {
          setServerError(cp.errorDuplicate);
        } else {
          setServerError(cp.errorGeneric);
        }
        return;
      }

      // Confirmed delivery: mark success and fire conversion exactly once
      setSubmitStatus("success");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setFieldErrors({});
      formLoadedAtRef.current = Date.now();

      trackFormSubmissionSuccess({
        service: service.trim(),
        locale,
        submissionId: data.submissionId,
      });
    } catch {
      setSubmitStatus("error");
      setServerError(cp.errorGeneric);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border bg-secondary py-24 text-secondary-foreground md:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 to-black/60" />
        <img
          src={IMAGES.linen}
          alt=""
          aria-hidden="true"
          width={1200}
          height={900}
          loading="eager"
          decoding="async"
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
                {
                  icon: Phone,
                  label: t.common.callNow,
                  value: CONTACT.phone,
                  href: `tel:${CONTACT.phoneRaw}`,
                  ltr: true,
                  onClick: () => trackPhoneClick("contact_card"),
                },
                {
                  icon: MessageCircle,
                  label: t.common.whatsapp,
                  value: CONTACT.phone,
                  href: whatsappUrl,
                  ltr: true,
                  onClick: () => trackWhatsAppClick("contact_card"),
                },
                {
                  icon: Mail,
                  label: cp.email,
                  value: CONTACT.email,
                  href: `mailto:${CONTACT.email}`,
                  ltr: true,
                },
                {
                  icon: MapPin,
                  label: cp.address,
                  value: locale === "ar" ? CONTACT.address_ar : CONTACT.address_en,
                },
              ].map(({ icon: Icon, label, value, href, ltr, onClick }) => {
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
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    onClick={onClick}
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
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-border transition hover:border-gold hover:text-gold"
              >
                <Facebook size={16} />
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-border transition hover:border-gold hover:text-gold"
              >
                <Instagram size={16} />
              </a>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("contact_primary_cta")}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-luxury transition hover:opacity-90"
            >
              <MessageCircle size={18} /> {t.common.whatsapp}
            </a>

            <div className="mt-6 overflow-hidden rounded-2xl border border-border">
              <iframe
                title={locale === "ar" ? "موقعنا في الرياض" : "Riyadh Location Map"}
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
              onSubmit={handleSubmit}
              noValidate
              className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-md md:p-8"
            >
              {/* Honeypot field hidden from human visitors */}
              <input
                type="text"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  id="contact-name"
                  label={cp.name}
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (fieldErrors.name) setFieldErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  error={fieldErrors.name}
                  required
                />
                <Field
                  id="contact-phone"
                  label={cp.phone}
                  name="phone"
                  type="tel"
                  dir="ltr"
                  autoComplete="tel"
                  placeholder="+966 5X XXX XXXX"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (fieldErrors.phone) setFieldErrors((prev) => ({ ...prev, phone: undefined }));
                  }}
                  error={fieldErrors.phone}
                  required
                />
                <Field
                  id="contact-email"
                  label={cp.email}
                  name="email"
                  type="email"
                  dir="ltr"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (fieldErrors.email) setFieldErrors((prev) => ({ ...prev, email: undefined }));
                  }}
                  error={fieldErrors.email}
                  required
                  className="sm:col-span-2"
                />
                <div className="sm:col-span-2">
                  <label htmlFor="contact-service" className="mb-1.5 block text-sm font-semibold">
                    {cp.service}
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={service}
                    onChange={(e) => {
                      setService(e.target.value);
                      if (fieldErrors.service) setFieldErrors((prev) => ({ ...prev, service: undefined }));
                    }}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                  >
                    {cp.service_options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {fieldErrors.service && (
                    <p className="mt-1.5 text-xs text-destructive">{fieldErrors.service}</p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-semibold">
                    {cp.message}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (fieldErrors.message) setFieldErrors((prev) => ({ ...prev, message: undefined }));
                    }}
                    className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                  />
                  {fieldErrors.message && (
                    <p className="mt-1.5 text-xs text-destructive">{fieldErrors.message}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-luxury transition hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                {isSubmitting ? cp.sending : cp.submit}
              </button>

              {submitStatus === "success" && (
                <div
                  role="status"
                  className="mt-4 flex items-start gap-2.5 rounded-xl bg-accent px-4 py-3 text-sm text-accent-foreground"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold" />
                  <span>{cp.sent}</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  role="alert"
                  className="mt-4 space-y-2 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                >
                  <div className="flex items-start gap-2.5">
                    <AlertCircle size={18} className="mt-0.5 shrink-0" />
                    <span>{serverError}</span>
                  </div>
                  <div className="flex flex-wrap gap-3 ps-7 text-xs font-semibold">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick("contact_error_fallback")}
                      className="underline hover:opacity-80"
                    >
                      {t.common.whatsapp}
                    </a>
                    <a
                      href={`tel:${CONTACT.phoneRaw}`}
                      dir="ltr"
                      onClick={() => trackPhoneClick("contact_error_fallback")}
                      className="underline hover:opacity-80"
                    >
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  id,
  label,
  error,
  className = "",
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  error?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">
        {label}
      </label>
      <input
        id={id}
        {...rest}
        aria-invalid={Boolean(error)}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as CURTAIN_CATEGORIES, d as useI18n, i as COPY, r as CONTACT, s as IMAGES, u as getWhatsAppUrl } from "./catalog-5x0Ua0_T.mjs";
import { a as trackPhoneClick, o as trackWhatsAppClick } from "./tracking-D01QA9gJ.mjs";
import { t as SectionTitle } from "./SectionTitle-C_vcQ0pE.mjs";
import { b as ArrowRight, l as MessageCircle, s as Phone } from "../_libs/lucide-react.mjs";
import { t as CatalogGrid } from "./CatalogGrid-CvCBjoyB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/curtains-XBAiaXPX.js
var import_jsx_runtime = require_jsx_runtime();
function CurtainsPage() {
	const { locale } = useI18n();
	const c = COPY[locale];
	const whatsappUrl = getWhatsAppUrl(locale, locale === "ar" ? "تفصيل الستائر" : "Custom Curtains");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden border-b border-border py-24 md:py-32",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: IMAGES.luxury,
					alt: locale === "ar" ? "ستائر فاخرة بالرياض في صالة راقية" : "Luxury custom curtains in a Riyadh living room",
					width: 1200,
					height: 900,
					loading: "eager",
					fetchPriority: "high",
					decoding: "async",
					className: "absolute inset-0 -z-20 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/55 to-black/75" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl px-4 text-center md:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-label justify-center text-gold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-gold/60" }),
								" ",
								c.curtains_page.eyebrow
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 text-4xl font-extrabold text-white md:text-6xl",
							children: c.curtains_page.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-white/80",
							children: c.curtains_page.subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: whatsappUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								onClick: () => trackWhatsAppClick("curtains_hero"),
								className: "inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-luxury transition hover:bg-gold-dark",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 16 }),
									" ",
									c.quoteWhats
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${CONTACT.phoneRaw}`,
								dir: "ltr",
								onClick: () => trackPhoneClick("curtains_hero"),
								className: "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 16 }),
									" ",
									CONTACT.phone
								]
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-20 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: c.collection.eyebrow,
					title: c.collection.title,
					subtitle: c.collection.subtitle
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatalogGrid, { items: CURTAIN_CATEGORIES })
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-muted/40 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl shadow-luxury",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: IMAGES.fabric,
						alt: locale === "ar" ? "عيّنات أقمشة تفصيل ستائر بالرياض" : "Custom curtain fabric swatches in Riyadh",
						width: 1200,
						height: 900,
						loading: "lazy",
						decoding: "async",
						className: "aspect-[4/3] w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: c.install.eyebrow,
						title: c.install.title,
						align: "start"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-8 space-y-5",
						children: c.install.steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold text-sm font-bold text-primary-foreground",
								children: i + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-bold",
								children: s.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: s.body
							})] })]
						}, s.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/blinds",
							className: "inline-flex items-center gap-2 rounded-full border border-gold px-5 py-2.5 text-sm font-semibold text-gold transition hover:bg-gold hover:text-primary-foreground",
							children: [
								c.nav.blinds,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									size: 14,
									className: "rtl:rotate-180"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition hover:bg-gold hover:text-primary-foreground",
							children: locale === "ar" ? "احجز قياس مجاني" : "Book Free Measurement"
						})]
					})
				] })]
			})
		})
	] });
}
//#endregion
export { CurtainsPage as component };

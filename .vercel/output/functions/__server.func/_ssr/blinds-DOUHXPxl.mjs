import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { Ct as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as useI18n, i as COPY, r as CONTACT, s as IMAGES, t as BLIND_CATEGORIES, u as getWhatsAppUrl } from "./catalog-5x0Ua0_T.mjs";
import { a as trackPhoneClick, o as trackWhatsAppClick } from "./tracking-D01QA9gJ.mjs";
import { t as SectionTitle } from "./SectionTitle-C_vcQ0pE.mjs";
import { b as ArrowRight, l as MessageCircle, s as Phone } from "../_libs/lucide-react.mjs";
import { t as CatalogGrid } from "./CatalogGrid-CvCBjoyB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blinds-DOUHXPxl.js
var import_jsx_runtime = require_jsx_runtime();
function BlindsPage() {
	const { locale } = useI18n();
	const c = COPY[locale];
	const whatsappUrl = getWhatsAppUrl(locale, locale === "ar" ? "ستائر الرول والزيبرا" : "Roller & Zebra Blinds");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden border-b border-border py-24 md:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: IMAGES.wooden,
				alt: locale === "ar" ? "ستائر خشبية وبليندات بالرياض" : "Wooden blinds and custom window treatments in Riyadh",
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
							c.blinds_page.eyebrow
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-4xl font-extrabold text-white md:text-6xl",
						children: c.blinds_page.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-white/80",
						children: c.blinds_page.subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							onClick: () => trackWhatsAppClick("blinds_hero"),
							className: "inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-luxury transition hover:bg-gold-dark",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 16 }),
								" ",
								c.quoteWhats
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${CONTACT.phoneRaw}`,
							dir: "ltr",
							onClick: () => trackPhoneClick("blinds_hero"),
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
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-20 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: c.blinds_page.eyebrow,
					title: c.blinds_page.title,
					subtitle: c.blinds_page.subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatalogGrid, { items: BLIND_CATEGORIES })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex flex-wrap justify-center gap-3 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/curtains",
						className: "inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition hover:bg-gold hover:text-primary-foreground",
						children: [
							c.collection.all,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								size: 14,
								className: "rtl:rotate-180"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "inline-flex items-center gap-2 rounded-full border border-gold px-6 py-3 text-sm font-semibold text-gold transition hover:bg-gold hover:text-primary-foreground",
						children: locale === "ar" ? "اطلب قياس مجاني" : "Book Free Measurement"
					})]
				})
			]
		})
	})] });
}
//#endregion
export { BlindsPage as component };

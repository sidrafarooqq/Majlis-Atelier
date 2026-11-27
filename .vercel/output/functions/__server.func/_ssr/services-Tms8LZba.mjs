import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as useI18n, s as IMAGES, u as getWhatsAppUrl } from "./catalog-5x0Ua0_T.mjs";
import { o as trackWhatsAppClick } from "./tracking-D01QA9gJ.mjs";
import { i as Sofa, l as MessageCircle, m as Hammer, o as Scissors, v as Check } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-Tms8LZba.js
var import_jsx_runtime = require_jsx_runtime();
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
			features: t.services.curtain_features
		},
		{
			img: "/images/charcoal-upholstered-sofas-riyadh.jpg",
			alt: locale === "ar" ? "تنجيد كنب فاخر بالرياض" : "Reupholstered modern charcoal sofas in Riyadh",
			icon: Sofa,
			title: t.services.sofa_up_title,
			body: t.services.sofa_up_body,
			features: t.services.sofa_up_features
		},
		{
			img: "/images/custom-white-l-sofa-riyadh.webp",
			alt: locale === "ar" ? "تفصيل كنب زاوية أبيض بالرياض" : "Custom white L-shaped sofa and curtains in Riyadh",
			icon: Hammer,
			title: t.services.sofa_make_title,
			body: t.services.sofa_make_body,
			features: t.services.sofa_make_features
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden border-b border-border bg-secondary py-24 text-secondary-foreground md:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-black/30 to-black/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: IMAGES.luxury,
				alt: "",
				"aria-hidden": "true",
				width: 1200,
				height: 900,
				loading: "eager",
				decoding: "async",
				className: "absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-4 text-center md:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-label justify-center text-gold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-gold/60" }),
							" ",
							t.services.eyebrow
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-4xl font-extrabold text-white md:text-6xl",
						children: sp.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-white/75",
						children: sp.subtitle
					})
				]
			})
		]
	}), items.map((item, i) => {
		const Icon = item.icon;
		const reverse = i % 2 === 1;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: `py-20 md:py-24 ${i % 2 === 1 ? "bg-muted/40" : "bg-background"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl shadow-luxury",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.img,
						alt: item.alt,
						width: 1200,
						height: 900,
						className: "aspect-[4/3] w-full object-cover",
						loading: "lazy",
						decoding: "async"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-12 w-12 place-items-center rounded-full bg-accent text-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 20 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-bold md:text-4xl",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 leading-relaxed text-muted-foreground",
						children: item.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-3",
						children: item.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-gold text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 12 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f })]
						}, f))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: getWhatsAppUrl(locale, item.title),
							target: "_blank",
							rel: "noopener noreferrer",
							onClick: () => trackWhatsAppClick("services_page", item.title),
							className: "inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-luxury hover:bg-gold-dark",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 16 }),
								" ",
								t.common.whatsapp
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:border-gold hover:text-gold",
							children: t.nav.contact
						})]
					})
				] })]
			})
		}, item.title);
	})] });
}
//#endregion
export { ServicesPage as component };

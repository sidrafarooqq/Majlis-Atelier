import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { Ct as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as useI18n, n as BRAND, s as IMAGES, u as getWhatsAppUrl } from "./catalog-5x0Ua0_T.mjs";
import { o as trackWhatsAppClick } from "./tracking-D01QA9gJ.mjs";
import { t as SectionTitle } from "./SectionTitle-C_vcQ0pE.mjs";
import { l as MessageCircle, y as Award } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CQSPnJEJ.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	const { t, locale } = useI18n();
	const a = t.about_page;
	const whatsappUrl = getWhatsAppUrl(locale);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			brandName: locale === "ar" ? BRAND.name_ar : BRAND.name_en,
			title: a.title,
			subtitle: t.about.body
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: IMAGES.custom,
						alt: locale === "ar" ? "مشغل تفصيل ستائر حسب المقاس في الرياض" : "Custom made-to-measure curtain tailoring in Riyadh",
						width: 1200,
						height: 1500,
						className: "aspect-[4/5] w-full rounded-2xl object-cover shadow-luxury",
						loading: "lazy",
						decoding: "async"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -bottom-4 -start-4 flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-semibold tracking-wider text-primary-foreground uppercase shadow-luxury",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { size: 14 }),
							" ",
							t.common.since
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: t.about.eyebrow,
					title: a.story_title,
					align: "start"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 leading-relaxed text-muted-foreground",
					children: a.story_body
				})] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-muted/40 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: t.about.eyebrow,
					title: a.values_title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-3",
					children: [
						{
							title: t.about.vision,
							body: t.about.vision_body
						},
						{
							title: t.about.mission,
							body: t.about.mission_body
						},
						{
							title: t.about.different,
							body: t.about.different_body
						}
					].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-7 shadow-md transition hover:-translate-y-1 hover:border-gold hover:shadow-luxury",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 place-items-center rounded-full bg-accent text-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { size: 20 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-lg font-bold",
								children: x.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: x.body
							})
						]
					}, x.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-background py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-4 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: t.about.eyebrow,
					title: a.pillars_title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "relative mt-12 border-s-2 border-gold/40 ps-6",
					children: a.pillars.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "relative mb-8 last:mb-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -start-[34px] grid h-6 w-6 place-items-center rounded-full bg-gold text-xs font-bold text-primary-foreground",
								children: "•"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xl font-extrabold text-gold",
								children: item.step
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-sm text-foreground",
								children: item.text
							})
						]
					}, item.step))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-muted/40 py-20 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold md:text-3xl",
					children: t.final_cta.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition hover:bg-gold hover:text-primary-foreground",
						children: t.nav.contact
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: whatsappUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => trackWhatsAppClick("about_cta"),
						className: "inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-luxury hover:bg-gold-dark",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 16 }),
							" ",
							t.common.whatsapp
						]
					})]
				})]
			})
		})
	] });
}
function PageHero({ brandName, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden border-b border-border bg-secondary py-24 text-secondary-foreground md:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: IMAGES.majlis,
				alt: "",
				"aria-hidden": "true",
				width: 1200,
				height: 900,
				loading: "eager",
				decoding: "async",
				className: "absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-black/30 to-black/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-4 text-center md:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-label justify-center text-gold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-gold/60" }),
							" ",
							brandName
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-4xl font-extrabold text-white md:text-6xl",
						children: title
					}),
					subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-white/75",
						children: subtitle
					})
				]
			})
		]
	});
}
//#endregion
export { AboutPage as component };

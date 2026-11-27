import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as useI18n, s as IMAGES } from "./catalog-5x0Ua0_T.mjs";
import { t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio-Ob7mfniQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var works = [
	{
		src: "/images/custom-white-l-sofa-riyadh.webp",
		cat: "sofas",
		ar: "تفصيل كنب زاوية أبيض مع ستائر صالة في الرياض",
		en: "Custom white L-shaped sofa and living room curtains in Riyadh"
	},
	{
		src: "/images/grey-ripple-fold-curtains-riyadh.jpg",
		cat: "curtains",
		ar: "ستائر عصرية ويفي رمادية بسكة سقف في الرياض",
		en: "Modern grey ripple-fold curtains on ceiling track in Riyadh"
	},
	{
		src: "/images/beige-majlis-sofa-curtains-riyadh.jpg",
		cat: "upholstery",
		ar: "تنجيد كنب مجلس بيج مع ستائر شيفون في الرياض",
		en: "Beige majlis sofa upholstery with sheer curtains in Riyadh"
	},
	{
		src: "/images/charcoal-upholstered-sofas-riyadh.jpg",
		cat: "sofas",
		ar: "كنب منجّد رمادي غامق مع ستائر ناعمة بالرياض",
		en: "Charcoal upholstered sofas with sheer window curtains in Riyadh"
	},
	{
		src: "/images/double-layer-sheer-blackout-curtains-riyadh.jpg",
		cat: "curtains",
		ar: "ستائر مزدوجة بلاك أوت وشيفون بتفصيل حسب المقاس بالرياض",
		en: "Double-layer blackout and sheer ripple curtains tailored in Riyadh"
	},
	{
		src: "/images/dining-room-sheer-curtains-riyadh.jpg",
		cat: "upholstery",
		ar: "ستائر شيفون وبلاك أوت لغرفة طعام وكراسي منجّدة بالرياض",
		en: "Dining room sheer and blackout curtains with upholstered seating in Riyadh"
	},
	{
		src: IMAGES.bedroom,
		cat: "curtains",
		ar: "تفصيل ستائر غرف نوم بلاك أوت بالرياض",
		en: "Custom bedroom blackout curtains in Riyadh"
	},
	{
		src: IMAGES.sheer,
		cat: "curtains",
		ar: "ستائر شيفون شفافة للصالات بالرياض",
		en: "Sheer window curtains for living spaces in Riyadh"
	},
	{
		src: IMAGES.velvet,
		cat: "curtains",
		ar: "ستائر مخمل فاخرة بالرياض",
		en: "Luxury velvet curtains tailored in Riyadh"
	},
	{
		src: "/images/sand-majlis-curtains-sofa-riyadh.jpg",
		cat: "curtains",
		ar: "ستائر وكنب مجلس بلون رملي دافئ في الرياض",
		en: "Warm sand-toned majlis curtains and seating in Riyadh"
	},
	{
		src: IMAGES.roman,
		cat: "curtains",
		ar: "ستائر رومانية مفصّلة حسب المقاس بالرياض",
		en: "Made-to-measure Roman blinds in Riyadh"
	},
	{
		src: IMAGES.zebra,
		cat: "curtains",
		ar: "ستائر زيبرا الرياض للتحكم بالإضاءة",
		en: "Zebra blinds installed in Riyadh"
	},
	{
		src: IMAGES.office,
		cat: "curtains",
		ar: "ستائر رول ومكاتب عصرية بالرياض",
		en: "Modern office roller blinds and curtains in Riyadh"
	},
	{
		src: IMAGES.hotel,
		cat: "curtains",
		ar: "ستائر فندقية مزدوجة للفلل والأجنحة بالرياض",
		en: "Hotel-style double curtains for Riyadh villas and suites"
	},
	{
		src: "/images/cream-sheer-ripple-curtains-riyadh.jpg",
		cat: "curtains",
		ar: "ستائر شيفون كريمي بسكة مخفية في الرياض",
		en: "Cream sheer ripple curtains on recessed track in Riyadh"
	},
	{
		src: IMAGES.majlis,
		cat: "curtains",
		ar: "ستائر مجالس فاخرة بالرياض",
		en: "Luxury majlis drapery in Riyadh"
	},
	{
		src: IMAGES.blackout,
		cat: "curtains",
		ar: "ستائر بلاك أوت عازلة للحرارة والضوء بالرياض",
		en: "Thermal and light-blocking blackout curtains in Riyadh"
	},
	{
		src: IMAGES.wooden,
		cat: "curtains",
		ar: "ستائر خشبية طبيعية للمكاتب بالرياض",
		en: "Natural wooden blinds for studies and offices in Riyadh"
	}
];
function PortfolioPage() {
	const { t, locale } = useI18n();
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [lightbox, setLightbox] = (0, import_react.useState)(null);
	const f = t.portfolio.filters;
	const tabs = [
		{
			key: "all",
			label: f.all
		},
		{
			key: "curtains",
			label: f.curtains
		},
		{
			key: "sofas",
			label: f.sofas
		},
		{
			key: "upholstery",
			label: f.upholstery
		}
	];
	const filtered = filter === "all" ? works : works.filter((w) => w.cat === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden border-b border-border bg-secondary py-24 text-secondary-foreground md:py-32",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-black/30 to-black/60" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: IMAGES.double,
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
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl font-extrabold text-white md:text-6xl",
						children: t.portfolio_page.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-white/75",
						children: t.portfolio.subtitle
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 md:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "sr-only",
						children: t.portfolio.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap justify-center gap-2",
						children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setFilter(tab.key),
							className: `rounded-full border px-5 py-2 text-sm font-semibold transition ${filter === tab.key ? "border-gold bg-gold text-primary-foreground shadow-luxury" : "border-border bg-card text-foreground/80 hover:border-gold hover:text-gold"}`,
							children: tab.label
						}, tab.key))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4",
						children: filtered.map((w) => {
							const altText = locale === "ar" ? w.ar : w.en;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setLightbox(w),
								"aria-label": altText,
								className: "group relative block w-full overflow-hidden rounded-2xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: w.src,
									alt: altText,
									width: 900,
									height: 900,
									className: "w-full transition duration-700 group-hover:scale-105",
									loading: "lazy",
									decoding: "async"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gold/0 transition group-hover:bg-gold/30" })]
							}, w.src);
						})
					})
				]
			})
		}),
		lightbox && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4",
			onClick: () => setLightbox(null),
			role: "dialog",
			"aria-modal": "true",
			"aria-label": locale === "ar" ? lightbox.ar : lightbox.en,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setLightbox(null),
				"aria-label": locale === "ar" ? "إغلاق" : "Close",
				className: "absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: lightbox.src,
				alt: locale === "ar" ? lightbox.ar : lightbox.en,
				className: "max-h-[90vh] max-w-[95vw] rounded-2xl object-contain"
			})]
		})
	] });
}
//#endregion
export { PortfolioPage as component };

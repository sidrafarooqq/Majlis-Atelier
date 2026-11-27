import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as useI18n, i as COPY, u as getWhatsAppUrl } from "./catalog-5x0Ua0_T.mjs";
import { o as trackWhatsAppClick } from "./tracking-D01QA9gJ.mjs";
import { b as ArrowRight, l as MessageCircle } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CatalogGrid-CvCBjoyB.js
var import_jsx_runtime = require_jsx_runtime();
function CatalogGrid({ items }) {
	const { locale } = useI18n();
	const c = COPY[locale];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
		children: items.map((item, i) => {
			const copy = item[locale];
			const whatsappUrl = getWhatsAppUrl(locale, copy.title);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
				initial: {
					opacity: 0,
					y: 24
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-60px"
				},
				transition: {
					duration: .5,
					delay: i % 3 * .08
				},
				className: "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:border-gold hover:shadow-luxury",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-[4/3] overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.img,
						alt: copy.title,
						width: 1200,
						height: 900,
						loading: "lazy",
						decoding: "async",
						className: "h-full w-full object-cover transition duration-700 group-hover:scale-105"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 flex-col p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold",
							children: copy.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 flex-1 text-sm leading-relaxed text-muted-foreground",
							children: copy.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							onClick: () => trackWhatsAppClick("catalog_card", item.slug),
							className: "mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-gold px-4 py-2 text-xs font-semibold text-gold transition hover:bg-gold hover:text-primary-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 14 }),
								" ",
								c.quote,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									size: 12,
									className: "rtl:rotate-180"
								})
							]
						})
					]
				})]
			}, item.slug);
		})
	});
}
//#endregion
export { CatalogGrid as t };

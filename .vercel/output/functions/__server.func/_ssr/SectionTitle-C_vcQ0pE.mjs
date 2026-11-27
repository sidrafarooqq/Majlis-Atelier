import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionTitle-C_vcQ0pE.js
var import_jsx_runtime = require_jsx_runtime();
function SectionTitle({ eyebrow, title, subtitle, align = "center", light = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-start"}`,
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `section-label ${align === "center" ? "justify-center" : ""} ${light ? "text-gold" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-gold/60" }), eyebrow]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: `mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl ${light ? "text-white" : "text-foreground"}`,
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-4 text-base md:text-lg ${light ? "text-white/70" : "text-muted-foreground"}`,
				children: subtitle
			})
		]
	});
}
//#endregion
export { SectionTitle as t };

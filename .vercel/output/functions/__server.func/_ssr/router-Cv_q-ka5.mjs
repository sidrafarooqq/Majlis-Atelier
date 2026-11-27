import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { N as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as SITE_URL, d as useI18n, i as COPY, l as buildRouteHead, n as BRAND, o as I18nProvider, r as CONTACT, u as getWhatsAppUrl } from "./catalog-5x0Ua0_T.mjs";
import { a as trackPhoneClick, i as trackPageView, n as GTM_CONTAINER_ID, o as trackWhatsAppClick, t as GOOGLE_ADS_ID } from "./tracking-D01QA9gJ.mjs";
import { c as Moon, d as MapPin, f as Mail, h as Facebook, l as MessageCircle, p as Instagram, r as Sun, s as Phone, t as X, u as Menu } from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { i as stringType, n as numberType, r as objectType, t as enumType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Cv_q-ka5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BR7690tV.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var Ctx = (0, import_react.createContext)(null);
var KEY = "majlis_theme";
function ThemeProvider({ children }) {
	const [theme, setTheme] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		try {
			const saved = window.localStorage.getItem(KEY);
			const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
			setTheme(saved ?? (prefersDark ? "dark" : "light"));
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		const root = document.documentElement;
		if (theme === "dark") root.classList.add("dark");
		else root.classList.remove("dark");
		try {
			window.localStorage.setItem(KEY, theme);
		} catch {}
	}, [theme]);
	const toggle = (0, import_react.useCallback)(() => setTheme((t) => t === "dark" ? "light" : "dark"), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ctx.Provider, {
		value: {
			theme,
			toggle
		},
		children
	});
}
function useTheme() {
	const ctx = (0, import_react.useContext)(Ctx);
	if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
	return ctx;
}
function Navbar() {
	const { t, locale, toggle: toggleLang } = useI18n();
	const { theme, toggle: toggleTheme } = useTheme();
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 16);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const c = COPY[locale];
	const whatsappUrl = getWhatsAppUrl(locale);
	const links = [
		{
			to: "/",
			label: t.nav.home
		},
		{
			to: "/curtains",
			label: c.nav.curtains
		},
		{
			to: "/blinds",
			label: c.nav.blinds
		},
		{
			to: "/services",
			label: t.nav.services
		},
		{
			to: "/portfolio",
			label: t.nav.portfolio
		},
		{
			to: "/about",
			label: t.nav.about
		},
		{
			to: "/contact",
			label: t.nav.contact
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `sticky top-0 z-40 w-full transition-all duration-300 ${scrolled ? "border-b border-border bg-background/85 backdrop-blur-lg shadow-sm" : "bg-background/0"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-20 md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex shrink-0 items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-9 w-9 place-items-center rounded-full bg-gold text-xs font-bold text-primary-foreground",
						children: BRAND.shortMark
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden font-bold tracking-tight sm:block",
						children: locale === "ar" ? BRAND.name_ar : BRAND.name_en
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					"aria-label": "Main navigation",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "relative px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground",
						activeProps: { className: "relative px-4 py-2 text-sm font-semibold text-foreground after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-gold" },
						activeOptions: { exact: l.to === "/" },
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: toggleLang,
							"aria-label": locale === "ar" ? "Switch to English" : "التبديل إلى العربية",
							className: "rounded-full border border-border px-3 py-1.5 text-xs font-semibold tracking-wider text-foreground/80 transition hover:border-gold hover:text-gold",
							children: locale === "ar" ? "EN" : "AR"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: toggleTheme,
							"aria-label": locale === "ar" ? "تبديل المظهر" : "Toggle theme",
							className: "grid h-9 w-9 place-items-center rounded-full border border-border text-foreground/80 transition hover:border-gold hover:text-gold",
							children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { size: 16 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							onClick: () => trackWhatsAppClick("navbar_desktop"),
							className: "hidden items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-primary-foreground shadow-luxury transition hover:bg-gold-dark md:inline-flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 16 }), t.nav.cta]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOpen((v) => !v),
							"aria-label": locale === "ar" ? "القائمة" : "Menu",
							"aria-expanded": open,
							className: "grid h-9 w-9 place-items-center rounded-full border border-border lg:hidden",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 18 })
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `lg:hidden overflow-hidden border-t border-border bg-background transition-[max-height] duration-300 ${open ? "max-h-96" : "max-h-0"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col px-4 py-3",
				"aria-label": "Mobile navigation",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					className: "rounded-lg px-3 py-3 text-sm font-medium text-foreground/80 transition hover:bg-muted hover:text-foreground",
					activeProps: { className: "rounded-lg px-3 py-3 text-sm font-semibold text-gold bg-muted" },
					activeOptions: { exact: l.to === "/" },
					children: l.label
				}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: whatsappUrl,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => {
						setOpen(false);
						trackWhatsAppClick("navbar_mobile");
					},
					className: "mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-2.5 text-sm font-semibold text-primary-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 16 }),
						" ",
						t.nav.cta
					]
				})]
			})
		})]
	});
}
function Footer() {
	const { t, locale } = useI18n();
	const c = COPY[locale];
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	const whatsappUrl = getWhatsAppUrl(locale);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-[oklch(0.16_0.005_60)] text-[oklch(0.95_0.015_80)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-9 w-9 place-items-center rounded-full bg-gold text-xs font-bold text-[oklch(0.15_0.005_60)]",
							children: BRAND.shortMark
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold",
							children: locale === "ar" ? BRAND.name_ar : BRAND.name_en
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-sm text-white/65",
						children: t.footer.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: CONTACT.facebook,
							target: "_blank",
							rel: "noopener noreferrer",
							"aria-label": "Facebook",
							className: "grid h-9 w-9 place-items-center rounded-full border border-white/15 transition hover:border-gold hover:text-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { size: 16 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: CONTACT.instagram,
							target: "_blank",
							rel: "noopener noreferrer",
							"aria-label": "Instagram",
							className: "grid h-9 w-9 place-items-center rounded-full border border-white/15 transition hover:border-gold hover:text-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { size: 16 })
						})]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-semibold tracking-wider text-gold uppercase",
					children: t.footer.services_col
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm text-white/75",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/curtains",
							className: "hover:text-gold",
							children: c.nav.curtains
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/blinds",
							className: "hover:text-gold",
							children: c.nav.blinds
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "hover:text-gold",
							children: t.services.curtain_title
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "hover:text-gold",
							children: t.services.sofa_up_title
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "hover:text-gold",
							children: t.services.sofa_make_title
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-semibold tracking-wider text-gold uppercase",
					children: t.footer.links_col
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm text-white/75",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-gold",
							children: t.nav.about
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/portfolio",
							className: "hover:text-gold",
							children: t.nav.portfolio
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hover:text-gold",
							children: t.nav.contact
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-semibold tracking-wider text-gold uppercase",
					children: t.footer.contact_col
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-3 text-sm text-white/75",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								size: 14,
								className: "text-gold shrink-0"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${CONTACT.phoneRaw}`,
								dir: "ltr",
								onClick: () => trackPhoneClick("footer"),
								className: "hover:text-gold",
								children: CONTACT.phone
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
								size: 14,
								className: "text-gold shrink-0"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: whatsappUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								onClick: () => trackWhatsAppClick("footer"),
								className: "hover:text-gold",
								children: t.common.whatsapp
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								size: 14,
								className: "text-gold shrink-0"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${CONTACT.email}`,
								className: "hover:text-gold",
								children: CONTACT.email
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								size: 14,
								className: "text-gold mt-0.5 shrink-0"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: locale === "ar" ? CONTACT.address_ar : CONTACT.address_en })]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/55 md:flex-row md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					year,
					" ",
					locale === "ar" ? BRAND.name_ar : BRAND.name_en,
					". ",
					t.footer.rights,
					"."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "tracking-wider",
					children: [
						BRAND.tagline_en,
						" · ",
						BRAND.tagline_ar
					]
				})]
			})
		})]
	});
}
function FloatingButtons() {
	const { locale } = useI18n();
	const whatsappUrl = getWhatsAppUrl(locale);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-5 right-5 z-50 flex flex-col gap-3 md:bottom-6 md:right-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: `tel:${CONTACT.phoneRaw}`,
			"aria-label": locale === "ar" ? "اتصل الآن" : "Call Us",
			onClick: () => trackPhoneClick("floating_button"),
			className: "grid h-12 w-12 place-items-center rounded-full bg-gold text-primary-foreground shadow-luxury transition-transform hover:scale-110 md:h-14 md:w-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 20 })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: whatsappUrl,
			target: "_blank",
			rel: "noopener noreferrer",
			"aria-label": locale === "ar" ? "تواصل عبر واتساب" : "Chat on WhatsApp",
			onClick: () => trackWhatsAppClick("floating_button"),
			className: "pulse-whatsapp grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-luxury transition-transform hover:scale-110 md:h-14 md:w-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 32 32",
				width: "22",
				height: "22",
				fill: "currentColor",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.11 17.39c-.29-.15-1.72-.85-1.99-.94-.27-.1-.46-.15-.66.15-.2.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.2 3.03c.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.61.71.23 1.35.2 1.86.12.57-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.34zm-5.36 7.27h-.01a10.06 10.06 0 0 1-5.12-1.4l-.37-.22-3.8 1 1.02-3.71-.24-.38a10.06 10.06 0 1 1 8.52 4.71zm8.55-18.6A12.06 12.06 0 0 0 3.4 21.34L2 26.6l5.39-1.41a12.06 12.06 0 0 0 5.77 1.47h.01a12.06 12.06 0 0 0 12.06-12.06c0-3.22-1.26-6.25-3.54-8.54z" })
			})
		})]
	});
}
var TRACKING_BOOTSTRAP_SCRIPT = `
(function(w,d,s,l,i,aw){
  if (w.__tafseelTrackInit) return;
  w.__tafseelTrackInit = true;
  w[l] = w[l] || [];
  w.gtag = w.gtag || function(){ w[l].push(arguments); };
  w.gtag('js', new Date());
  w.gtag('config', aw);
  w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
  var f = d.getElementsByTagName(s)[0];
  var gtm = d.createElement(s);
  gtm.async = true;
  gtm.src = 'https://www.googletagmanager.com/gtm.js?id=' + i;
  f.parentNode.insertBefore(gtm, f);
})(window, document, 'script', 'dataLayer', '${GTM_CONTAINER_ID}', '${GOOGLE_ADS_ID}');
`;
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				property: "og:locale",
				content: "ar_SA"
			},
			{
				property: "og:locale:alternate",
				content: "en_US"
			},
			{
				property: "og:site_name",
				content: BRAND.name_en
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "ar",
		dir: "rtl",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				async: true,
				src: `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: TRACKING_BOOTSTRAP_SCRIPT } })
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("noscript", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				src: `https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`,
				height: "0",
				width: "0",
				style: {
					display: "none",
					visibility: "hidden"
				},
				title: "Google Tag Manager"
			}) }),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function RouteChangeTracker() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const { locale } = useI18n();
	const prevPathRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (prevPathRef.current === null) {
			prevPathRef.current = pathname;
			return;
		}
		if (prevPathRef.current !== pathname) {
			prevPathRef.current = pathname;
			trackPageView(pathname, locale);
		}
	}, [pathname, locale]);
	return null;
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(I18nProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteChangeTracker, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingButtons, {})
			]
		})] }) })
	});
}
var LASTMOD = "2026-11-27";
var Route$8 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		{
			path: "/",
			changefreq: "weekly",
			priority: "1.0"
		},
		{
			path: "/curtains",
			changefreq: "weekly",
			priority: "0.95"
		},
		{
			path: "/blinds",
			changefreq: "weekly",
			priority: "0.9"
		},
		{
			path: "/services",
			changefreq: "monthly",
			priority: "0.9"
		},
		{
			path: "/portfolio",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/about",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/contact",
			changefreq: "monthly",
			priority: "0.8"
		}
	].map((e) => [
		`  <url>`,
		`    <loc>${SITE_URL}${e.path}</loc>`,
		`    <lastmod>${LASTMOD}</lastmod>`,
		`    <changefreq>${e.changefreq}</changefreq>`,
		`    <priority>${e.priority}</priority>`,
		`  </url>`
	].join("\n")).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml; charset=utf-8",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$6 = () => import("./services-Tms8LZba.mjs");
var Route$7 = createFileRoute("/services")({
	head: () => buildRouteHead({
		path: "/services",
		title: "خدماتنا — تفصيل وتركيب الستائر وتنجيد الكنب بالرياض | Tafseel Satair Sami",
		description: "خدمات تفصيل ستائر حسب المقاس، تركيب ستائر بالرياض، تنجيد الكنب وتفصيل الكنب المخصص في الرياض. Curtain tailoring Riyadh, curtain installation Riyadh, sofa upholstery and custom sofas.",
		keywords: "تفصيل ستائر بالرياض, تركيب ستائر بالرياض, محل ستائر بالرياض, تنجيد كنب الرياض, Curtain Tailoring Riyadh, Curtain Installation Riyadh, Custom Curtains Riyadh",
		ogTitle: "Services — Curtain Tailoring, Installation & Upholstery Riyadh | Tafseel Satair Sami",
		ogDescription: "Curtain tailoring, curtain installation, sofa upholstery and custom sofas in Riyadh.",
		breadcrumbName: "Services",
		service: {
			name: "Curtain Tailoring, Installation & Sofa Upholstery Riyadh",
			description: "Made-to-measure curtain tailoring, professional curtain installation, sofa upholstery and custom sofa crafting in Riyadh.",
			serviceTypes: [
				"Curtain Tailoring Riyadh",
				"Curtain Installation Riyadh",
				"Sofa Upholstery Riyadh",
				"Custom Sofa Making Riyadh"
			]
		}
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./portfolio-Ob7mfniQ.mjs");
var Route$6 = createFileRoute("/portfolio")({
	head: () => buildRouteHead({
		path: "/portfolio",
		title: "أعمالنا — مشاريع تفصيل وتركيب ستائر بالرياض | Tafseel Satair Sami",
		description: "معرض أعمال تفصيل ستائر سامي بالرياض: ستائر مجالس، ستائر عصرية، ستائر بلاك أوت وشيفون وبليندات وتنجيد كنب. Selected custom curtains, blinds and upholstery projects in Riyadh.",
		keywords: "معرض أعمال ستائر بالرياض, تفصيل ستائر بالرياض, تركيب ستائر بالرياض, ستائر عصرية بالرياض, Custom Curtains Riyadh, Curtain Installation Riyadh",
		ogTitle: "Portfolio — Custom Curtains & Majlis Projects Riyadh | Tafseel Satair Sami",
		ogDescription: "Selected custom curtain, blinds, sofa and upholstery projects delivered in Riyadh.",
		breadcrumbName: "Portfolio"
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./curtains-XBAiaXPX.mjs");
var Route$5 = createFileRoute("/curtains")({
	head: () => buildRouteHead({
		path: "/curtains",
		title: "مجموعة الستائر — تفصيل ستائر فاخرة وعصرية بالرياض | Tafseel Satair Sami",
		description: "تفصيل ستائر بالرياض حسب المقاس: ستائر بلاك أوت، شيفون، مخمل، كتّان، ستائر عصرية وكلاسيكية وكهربائية مع قياس مجاني وتركيب ستائر بالرياض. Custom curtains, luxury, modern, blackout, sheer & motorized window curtains in Riyadh.",
		keywords: "تفصيل ستائر بالرياض, ستائر الرياض, تفصيل ستائر حسب المقاس, ستائر فاخرة بالرياض, ستائر عصرية بالرياض, تركيب ستائر بالرياض, Custom Curtains Riyadh, Luxury Curtains Riyadh, Modern Curtains Riyadh, Window Curtains Riyadh, Made to Measure Curtains Riyadh",
		ogTitle: "Custom Curtains Riyadh — Luxury, Modern, Blackout & Sheer | Tafseel Satair Sami",
		ogDescription: "Made to measure window curtains in Riyadh: blackout, sheer, velvet, linen, modern ripple-fold, classic and motorized curtains.",
		breadcrumbName: "Curtains",
		service: {
			name: "Custom Curtain Tailoring & Installation in Riyadh",
			description: "Made-to-measure luxury, modern, blackout, sheer, velvet, linen and motorized window curtains with free measuring and installation in Riyadh.",
			serviceTypes: [
				"Custom Curtains Riyadh",
				"Luxury Curtains Riyadh",
				"Modern Curtains Riyadh",
				"Made to Measure Curtains Riyadh",
				"Blackout Curtains Riyadh"
			]
		}
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact--Wj0JDZe.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => buildRouteHead({
		path: "/contact",
		title: "اتصل بنا — تفصيل ستائر سامي بالرياض | Contact Tafseel Satair Sami",
		description: "تواصل مع تفصيل ستائر سامي بالرياض — اتصال (+966 54 847 3140)، واتساب، أو نموذج تواصل لطلب قياس مجاني وعرض سعر لتفصيل وتركيب الستائر. Contact Tafseel Satair Sami in Riyadh.",
		keywords: "اتصل بنا تفصيل ستائر بالرياض, رقم محل ستائر بالرياض, حجز قياس ستائر بالرياض, Contact Curtains Riyadh, Free Curtain Measurement Riyadh",
		ogTitle: "Contact Us — Free Curtain Measurement in Riyadh | Tafseel Satair Sami",
		ogDescription: "Call, WhatsApp (+966 54 847 3140), or submit an enquiry for free curtain measurement in Riyadh.",
		breadcrumbName: "Contact",
		includeBusinessGraph: true
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./blinds-DOUHXPxl.mjs");
var Route$3 = createFileRoute("/blinds")({
	head: () => buildRouteHead({
		path: "/blinds",
		title: "ستائر رول وزيبرا ورومانية بالرياض | Roller & Zebra Blinds Riyadh | Tafseel Satair Sami",
		description: "ستائر رول الرياض، ستائر زيبرا الرياض، ستائر رومانية وخشبية وكهربائية ذكية مع قياس مجاني وتركيب احترافي في الرياض. Roller blinds Riyadh, zebra blinds Riyadh, Roman, wooden & motorized blinds.",
		keywords: "ستائر رول الرياض, ستائر زيبرا الرياض, تفصيل ستائر بالرياض, تركيب ستائر بالرياض, Roller Blinds Riyadh, Zebra Blinds Riyadh, Roman Blinds Riyadh, Window Curtains Riyadh",
		ogTitle: "Roller & Zebra Blinds Riyadh — Roman & Wooden | Tafseel Satair Sami",
		ogDescription: "Roller blinds, zebra blinds, Roman, wooden and motorized blinds, custom-measured and installed in Riyadh.",
		breadcrumbName: "Blinds",
		service: {
			name: "Roller, Zebra & Motorized Blinds in Riyadh",
			description: "Custom roller blinds, zebra blinds, Roman blinds, wooden blinds and motorized window blinds with free measuring and installation in Riyadh.",
			serviceTypes: [
				"Roller Blinds Riyadh",
				"Zebra Blinds Riyadh",
				"Roman Blinds Riyadh",
				"Motorized Blinds Riyadh"
			]
		}
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-CQSPnJEJ.mjs");
var Route$2 = createFileRoute("/about")({
	head: () => buildRouteHead({
		path: "/about",
		title: "من نحن — تفصيل ستائر سامي بالرياض | Tafseel Satair Sami",
		description: "تعرّف على تفصيل ستائر سامي — محل ستائر بالرياض متخصص في تفصيل ستائر حسب المقاس، ستائر فاخرة وعصرية، ستائر رول وزيبرا وتركيب ستائر بالرياض. About Tafseel Satair Sami in Riyadh.",
		keywords: "تفصيل ستائر سامي, محل ستائر بالرياض, تفصيل ستائر بالرياض, تركيب ستائر بالرياض, Tafseel Satair Sami, Curtains in Riyadh, Curtain Tailoring Riyadh",
		ogTitle: "About Tafseel Satair Sami — Riyadh Custom Curtains & Upholstery",
		ogDescription: "Made-to-measure curtains, blinds, and sofa upholstery crafted in Riyadh, Saudi Arabia.",
		breadcrumbName: "About",
		includeBusinessGraph: true
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-BCMkWaNO.mjs");
var Route$1 = createFileRoute("/")({
	head: () => buildRouteHead({
		path: "/",
		title: "تفصيل ستائر سامي | تفصيل وتركيب ستائر وبليندات بالرياض | Tafseel Satair Sami",
		description: "محل تفصيل ستائر بالرياض — تفصيل ستائر حسب المقاس، ستائر فاخرة وعصرية، ستائر رول وزيبرا وبلاك أوت، تركيب ستائر بالرياض وتنجيد كنب مع قياس مجاني. Custom curtains, roller & zebra blinds and curtain installation in Riyadh.",
		keywords: "تفصيل ستائر بالرياض, ستائر الرياض, محل ستائر بالرياض, تركيب ستائر بالرياض, ستائر فاخرة بالرياض, ستائر عصرية بالرياض, تفصيل ستائر حسب المقاس, ستائر رول الرياض, ستائر زيبرا الرياض, Curtains in Riyadh, Custom Curtains Riyadh, Curtain Tailoring Riyadh, Curtain Installation Riyadh, Luxury Curtains Riyadh, Modern Curtains Riyadh, Roller Blinds Riyadh, Zebra Blinds Riyadh, Window Curtains Riyadh, Made to Measure Curtains Riyadh",
		ogTitle: "Tafseel Satair Sami — Custom Curtains & Blinds in Riyadh | تفصيل ستائر سامي",
		ogDescription: "Made to measure curtains, roller & zebra blinds, and professional curtain installation in Riyadh, Saudi Arabia.",
		includeBusinessGraph: true,
		service: {
			name: "Custom Curtains, Blinds & Upholstery in Riyadh",
			description: "Made-to-measure curtain tailoring, luxury and modern window curtains, roller blinds, zebra blinds, curtain installation, and sofa upholstery in Riyadh.",
			serviceTypes: [
				"Custom Curtains Riyadh",
				"Curtain Tailoring Riyadh",
				"Curtain Installation Riyadh",
				"Roller Blinds Riyadh",
				"Zebra Blinds Riyadh",
				"Sofa Upholstery Riyadh"
			]
		}
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var DEFAULT_TO_EMAIL = "tafseelsatairsami@gmail.com";
var DEFAULT_FROM_EMAIL = "Tafseel Satair Sami <onboarding@resend.dev>";
var contactSchema = objectType({
	name: stringType().trim().min(2).max(100),
	phone: stringType().trim().min(7).max(25).refine((val) => {
		const digits = val.replace(/\D/g, "");
		return digits.length >= 8 && digits.length <= 15;
	}, "Invalid phone number"),
	email: stringType().trim().email().max(160),
	service: stringType().trim().min(2).max(120),
	message: stringType().trim().min(10).max(2e3),
	locale: enumType(["ar", "en"]).default("ar"),
	website: stringType().optional(),
	formLoadedAt: numberType().optional()
});
var RATE_WINDOW_MS = 600 * 1e3;
var MAX_REQUESTS_PER_WINDOW = 5;
var DUPLICATE_COOLDOWN_MS = 120 * 1e3;
var ipHits = /* @__PURE__ */ new Map();
var recentPayloads = /* @__PURE__ */ new Map();
function escapeHtml(str) {
	return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function getClientIp(request) {
	const cfIp = request.headers.get("cf-connecting-ip");
	if (cfIp) return cfIp.trim();
	const xff = request.headers.get("x-forwarded-for");
	if (xff) return xff.split(",")[0].trim();
	return "unknown";
}
function checkRateLimit(ip) {
	const now = Date.now();
	const hits = (ipHits.get(ip) ?? []).filter((ts) => now - ts < RATE_WINDOW_MS);
	if (hits.length >= MAX_REQUESTS_PER_WINDOW) {
		ipHits.set(ip, hits);
		return false;
	}
	hits.push(now);
	ipHits.set(ip, hits);
	return true;
}
function checkDuplicatePayload(email, phone, message) {
	const now = Date.now();
	for (const [k, ts] of recentPayloads.entries()) if (now - ts > DUPLICATE_COOLDOWN_MS) recentPayloads.delete(k);
	const key = `${email.toLowerCase()}|${phone.replace(/\D/g, "")}|${message.trim().slice(0, 120)}`;
	const prev = recentPayloads.get(key);
	if (prev !== void 0 && now - prev < DUPLICATE_COOLDOWN_MS) return true;
	recentPayloads.set(key, now);
	return false;
}
function getEnvVar(name) {
	if (typeof process !== "undefined" && process.env) {
		const val = process.env[name];
		if (typeof val === "string" && val.trim().length > 0) return val.trim();
	}
}
function jsonResponse(body, status) {
	return new Response(JSON.stringify(body), {
		status,
		headers: {
			"Content-Type": "application/json; charset=utf-8",
			"Cache-Control": "no-store"
		}
	});
}
var Route = createFileRoute("/api/contact")({ server: { handlers: { POST: async ({ request }) => {
	let raw;
	try {
		raw = await request.json();
	} catch {
		return jsonResponse({
			ok: false,
			code: "INVALID_JSON",
			error: "Invalid request payload."
		}, 400);
	}
	const parsedResult = contactSchema.safeParse(raw);
	if (!parsedResult.success) return jsonResponse({
		ok: false,
		code: "VALIDATION_ERROR",
		error: "Please check all required fields and try again.",
		issues: parsedResult.error.flatten().fieldErrors
	}, 400);
	const data = parsedResult.data;
	if (data.website && data.website.trim().length > 0) return jsonResponse({
		ok: false,
		code: "SPAM_REJECTED",
		error: "Submission rejected."
	}, 400);
	if (typeof data.formLoadedAt === "number" && Date.now() - data.formLoadedAt < 1200) return jsonResponse({
		ok: false,
		code: "SPAM_REJECTED",
		error: "Submission rejected."
	}, 400);
	if (!checkRateLimit(getClientIp(request))) return jsonResponse({
		ok: false,
		code: "RATE_LIMITED",
		error: "Too many enquiries submitted recently. Please try again in a few minutes or contact us on WhatsApp."
	}, 429);
	if (checkDuplicatePayload(data.email, data.phone, data.message)) return jsonResponse({
		ok: false,
		code: "DUPLICATE_SUBMISSION",
		error: "This enquiry was already submitted. Please wait before resending."
	}, 429);
	const resendApiKey = getEnvVar("RESEND_API_KEY");
	if (!resendApiKey) {
		console.error("[contact-api] RESEND_API_KEY is not configured in environment variables.");
		return jsonResponse({
			ok: false,
			code: "EMAIL_NOT_CONFIGURED",
			error: "Email service is not configured yet. Please contact us via WhatsApp or phone."
		}, 503);
	}
	const toEmail = getEnvVar("CONTACT_TO_EMAIL") || DEFAULT_TO_EMAIL;
	const fromEmail = getEnvVar("CONTACT_FROM_EMAIL") || DEFAULT_FROM_EMAIL;
	const submissionId = typeof crypto !== "undefined" && typeof crypto.randomUUID === "function" ? `lead_${crypto.randomUUID()}` : `lead_${Date.now()}`;
	const isArabic = data.locale === "ar";
	const subject = isArabic ? `طلب جديد (${data.service}) — ${data.name}` : `New Website Enquiry (${data.service}) — ${data.name}`;
	const safeName = escapeHtml(data.name);
	const safePhone = escapeHtml(data.phone);
	const safeEmail = escapeHtml(data.email);
	const safeService = escapeHtml(data.service);
	const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br />");
	const html = `
          <div dir="${isArabic ? "rtl" : "ltr"}" style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 24px; color: #1f1f1f; border: 1px solid #e5e0d8; border-radius: 12px;">
            <h2 style="margin: 0 0 16px; color: #9f7d3a;">Tafseel Satair Sami — ${isArabic ? "طلب تواصل جديد من الموقع" : "New Website Enquiry"}</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
              <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">${isArabic ? "الاسم:" : "Name:"}</td><td style="padding: 8px 0;">${safeName}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">${isArabic ? "رقم الجوال:" : "Phone:"}</td><td style="padding: 8px 0;" dir="ltr">${safePhone}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">${isArabic ? "البريد الإلكتروني:" : "Email:"}</td><td style="padding: 8px 0;" dir="ltr">${safeEmail}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">${isArabic ? "الخدمة:" : "Service:"}</td><td style="padding: 8px 0;">${safeService}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">${isArabic ? "اللغة:" : "Language:"}</td><td style="padding: 8px 0;">${data.locale.toUpperCase()}</td></tr>
            </table>
            <div style="padding: 16px; background: #fafaf8; border-radius: 8px; border: 1px solid #e5e0d8;">
              <div style="font-weight: bold; margin-bottom: 8px;">${isArabic ? "الرسالة:" : "Message:"}</div>
              <div style="line-height: 1.6;">${safeMessage}</div>
            </div>
            <p style="margin-top: 16px; font-size: 12px; color: #666;">Reference ID: ${submissionId} · majlisatelier.com</p>
          </div>
        `;
	const text = [
		`New Enquiry — Tafseel Satair Sami (majlisatelier.com)`,
		`Reference: ${submissionId}`,
		`Language: ${data.locale}`,
		`Name: ${data.name}`,
		`Phone: ${data.phone}`,
		`Email: ${data.email}`,
		`Service: ${data.service}`,
		``,
		`Message:`,
		data.message
	].join("\n");
	try {
		const resendResponse = await fetch("https://api.resend.com/emails", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${resendApiKey}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				from: fromEmail,
				to: [toEmail],
				reply_to: data.email,
				subject,
				html,
				text
			})
		});
		if (!resendResponse.ok) {
			const errText = await resendResponse.text();
			console.error("[contact-api] Resend API error:", resendResponse.status, errText);
			return jsonResponse({
				ok: false,
				code: "EMAIL_DELIVERY_FAILED",
				error: "Could not deliver your enquiry at the moment. Please reach us via WhatsApp or phone."
			}, 502);
		}
		return jsonResponse({
			ok: true,
			id: (await resendResponse.json()).id ?? null,
			submissionId
		}, 200);
	} catch (err) {
		console.error("[contact-api] Unexpected error calling email provider:", err);
		return jsonResponse({
			ok: false,
			code: "EMAIL_DELIVERY_FAILED",
			error: "Network error while sending enquiry. Please try again or contact us on WhatsApp."
		}, 502);
	}
} } } });
var SitemapDotxmlRoute = Route$8.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$9
});
var ServicesRoute = Route$7.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$9
});
var PortfolioRoute = Route$6.update({
	id: "/portfolio",
	path: "/portfolio",
	getParentRoute: () => Route$9
});
var CurtainsRoute = Route$5.update({
	id: "/curtains",
	path: "/curtains",
	getParentRoute: () => Route$9
});
var ContactRoute = Route$4.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$9
});
var BlindsRoute = Route$3.update({
	id: "/blinds",
	path: "/blinds",
	getParentRoute: () => Route$9
});
var AboutRoute = Route$2.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$9
});
var rootRouteChildren = {
	IndexRoute: Route$1.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	AboutRoute,
	BlindsRoute,
	ContactRoute,
	CurtainsRoute,
	PortfolioRoute,
	ServicesRoute,
	SitemapDotxmlRoute,
	ApiContactRoute: Route.update({
		id: "/api/contact",
		path: "/api/contact",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };

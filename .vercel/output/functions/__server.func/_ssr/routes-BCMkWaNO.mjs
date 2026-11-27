import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as CURTAIN_CATEGORIES, d as useI18n, i as COPY, r as CONTACT, s as IMAGES, t as BLIND_CATEGORIES, u as getWhatsAppUrl } from "./catalog-5x0Ua0_T.mjs";
import { a as trackPhoneClick, o as trackWhatsAppClick } from "./tracking-D01QA9gJ.mjs";
import { t as SectionTitle } from "./SectionTitle-C_vcQ0pE.mjs";
import { _ as ChevronDown, b as ArrowRight, g as Eye, i as Sofa, l as MessageCircle, m as Hammer, n as Target, o as Scissors, s as Phone, x as Sparkles, y as Award } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { t as CatalogGrid } from "./CatalogGrid-CvCBjoyB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BCMkWaNO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var IMG = {
	hero: IMAGES.hero,
	about1: IMAGES.majlis,
	about2: IMAGES.fabric,
	service1: IMAGES.double,
	service2: IMAGES.velvet,
	service3: IMAGES.custom,
	cta: IMAGES.hotel,
	portfolio: [
		{
			src: IMAGES.bedroom,
			ar: "تفصيل ستائر غرف نوم بلاك أوت بالرياض",
			en: "Custom blackout bedroom curtains tailored in Riyadh"
		},
		{
			src: IMAGES.sheer,
			ar: "ستائر شيفون عصرية بالرياض",
			en: "Modern sheer window curtains in Riyadh"
		},
		{
			src: "/images/sand-majlis-curtains-sofa-riyadh.jpg",
			ar: "تفصيل ستائر وكنب مجلس بالرياض",
			en: "Custom beige majlis curtains and sofa set in Riyadh"
		},
		{
			src: IMAGES.office,
			ar: "ستائر مكاتب وبليندات بالرياض",
			en: "Custom office window blinds and curtains in Riyadh"
		},
		{
			src: IMAGES.blackout,
			ar: "ستائر بلاك أوت عازلة للضوء والحرارة بالرياض",
			en: "Blackout curtains for light and heat control in Riyadh"
		},
		{
			src: "/images/grey-ripple-fold-curtains-riyadh.jpg",
			ar: "تركيب ستائر ويفي عصرية على سكة سقف بالرياض",
			en: "Modern ripple-fold curtains installed on ceiling track in Riyadh"
		}
	]
};
function HomePage() {
	const { t, locale } = useI18n();
	const c = COPY[locale];
	const whatsappUrl = getWhatsAppUrl(locale);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: IMG.hero,
					alt: locale === "ar" ? "مجلس فاخر مع تفصيل ستائر بالرياض" : "Luxury Riyadh majlis with custom tailored curtains",
					width: 1600,
					height: 1067,
					className: "absolute inset-0 -z-10 h-full w-full object-cover",
					loading: "eager",
					fetchPriority: "high",
					decoding: "async"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/45 to-black/75" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex min-h-[84vh] max-w-7xl flex-col items-start justify-center px-4 py-24 md:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .7 },
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "section-label text-gold",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 14 }),
									" ",
									t.hero.eyebrow
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 text-4xl font-extrabold leading-[1.12] text-white md:text-6xl lg:text-7xl",
								children: t.hero.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl text-base text-white/80 md:text-lg",
								children: t.hero.subtitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `tel:${CONTACT.phoneRaw}`,
										onClick: () => trackPhoneClick("home_hero"),
										className: "inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-luxury transition hover:bg-gold-dark",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 16 }),
											" ",
											t.common.callNow
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: whatsappUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										onClick: () => trackWhatsAppClick("home_hero"),
										className: "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 16 }),
											" ",
											t.common.whatsapp
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/curtains",
										className: "inline-flex items-center gap-2 rounded-full border border-gold/70 px-6 py-3 text-sm font-semibold text-gold transition hover:bg-gold hover:text-primary-foreground",
										children: [
											c.explore,
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
												size: 14,
												className: "rtl:rotate-180"
											})
										]
									})
								]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
						className: "animate-bounce",
						size: 22
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: IMG.about1,
							alt: locale === "ar" ? "ستائر فاخرة مفصّلة لمجلس في الرياض" : "Luxury custom curtains tailored for a Riyadh majlis",
							width: 1200,
							height: 1500,
							className: "aspect-[4/5] w-4/5 rounded-2xl object-cover shadow-luxury",
							loading: "lazy",
							decoding: "async"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: IMG.about2,
							alt: locale === "ar" ? "عينات أقمشة تفصيل ستائر حسب المقاس" : "Curated fabric swatches for made-to-measure curtains",
							width: 800,
							height: 800,
							className: "absolute bottom-0 end-0 hidden aspect-square w-1/2 rounded-2xl border-8 border-background object-cover shadow-luxury md:block",
							loading: "lazy",
							decoding: "async"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute -bottom-4 start-4 flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-semibold tracking-wider text-primary-foreground uppercase shadow-luxury",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { size: 14 }),
								" ",
								t.common.since
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: t.about.eyebrow,
						title: t.about.title,
						align: "start"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-muted-foreground leading-relaxed",
						children: t.about.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 sm:grid-cols-3",
						children: [
							{
								icon: Eye,
								title: t.about.vision,
								body: t.about.vision_body
							},
							{
								icon: Target,
								title: t.about.mission,
								body: t.about.mission_body
							},
							{
								icon: Sparkles,
								title: t.about.different,
								body: t.about.different_body
							}
						].map(({ icon: Icon, title, body }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 place-items-center rounded-full bg-accent text-gold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 18 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-sm font-bold",
									children: title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-xs leading-relaxed text-muted-foreground",
									children: body
								})
							]
						}, title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/about",
						className: "mt-8 inline-flex items-center gap-2 rounded-full border border-gold px-5 py-2.5 text-sm font-semibold text-gold transition hover:bg-gold hover:text-primary-foreground",
						children: [
							t.common.learnMore,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								size: 14,
								className: "rtl:rotate-180"
							})
						]
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-muted/40 py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: t.services.eyebrow,
					title: t.services.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-3",
					children: [
						{
							img: IMG.service1,
							icon: Scissors,
							title: t.services.curtain_title,
							body: t.services.curtain_body,
							to: "/curtains"
						},
						{
							img: IMG.service2,
							icon: Sofa,
							title: t.services.sofa_up_title,
							body: t.services.sofa_up_body,
							to: "/services"
						},
						{
							img: IMG.service3,
							icon: Hammer,
							title: t.services.sofa_make_title,
							body: t.services.sofa_make_body,
							to: "/services"
						}
					].map(({ img, icon: Icon, title, body, to }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						whileHover: { y: -6 },
						transition: {
							type: "spring",
							stiffness: 300,
							damping: 22
						},
						className: "group overflow-hidden rounded-2xl border border-border bg-card shadow-md transition hover:border-gold hover:shadow-luxury",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/3] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: img,
								alt: title,
								width: 1200,
								height: 900,
								className: "h-full w-full object-cover transition duration-700 group-hover:scale-105",
								loading: "lazy",
								decoding: "async"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 place-items-center rounded-full bg-accent text-gold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 18 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-xl font-bold",
									children: title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex flex-wrap items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: getWhatsAppUrl(locale, title),
										target: "_blank",
										rel: "noopener noreferrer",
										onClick: () => trackWhatsAppClick("home_service_card", title),
										className: "inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 14 }),
											" ",
											t.common.whatsapp
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to,
										className: "inline-flex items-center gap-1 text-xs font-semibold text-foreground/75 transition hover:text-gold",
										children: [
											t.common.learnMore,
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
												size: 12,
												className: "rtl:rotate-180"
											})
										]
									})]
								})
							]
						})]
					}, title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-background py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 md:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: c.collection.eyebrow,
						title: c.collection.title,
						subtitle: c.collection.subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatalogGrid, { items: CURTAIN_CATEGORIES.slice(0, 6) })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/curtains",
							className: "inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-luxury transition hover:bg-gold-dark",
							children: [
								c.collection.all,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									size: 14,
									className: "rtl:rotate-180"
								})
							]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-muted/40 py-20 md:py-28",
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
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatalogGrid, { items: BLIND_CATEGORIES.slice(0, 3) })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/blinds",
							className: "inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition hover:bg-gold hover:text-primary-foreground",
							children: [
								c.nav.blinds,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									size: 14,
									className: "rtl:rotate-180"
								})
							]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-background py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: c.why.eyebrow,
					title: c.why.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: c.why.items.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6 transition hover:border-gold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 place-items-center rounded-full bg-accent text-sm font-bold text-gold",
								children: i + 1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-base font-bold",
								children: w.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: w.body
							})
						]
					}, w.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-muted/40 py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: c.spaces.eyebrow,
					title: c.spaces.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						IMAGES.bedroom,
						IMAGES.majlis,
						IMAGES.office,
						IMAGES.hotel
					].map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group relative overflow-hidden rounded-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: img,
								alt: c.spaces.items[i].title,
								width: 1200,
								height: 900,
								loading: "lazy",
								decoding: "async",
								className: "aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 p-5 text-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-bold",
									children: c.spaces.items[i].title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-white/80",
									children: c.spaces.items[i].body
								})]
							})
						]
					}, c.spaces.items[i].title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-background py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl shadow-luxury",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: IMAGES.installation,
						alt: locale === "ar" ? "فني يركّب ستائر في شقة فاخرة بالرياض" : "Technician installing curtains in a Riyadh apartment",
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: whatsappUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => trackWhatsAppClick("home_installation"),
						className: "mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-luxury transition hover:bg-gold-dark",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 16 }),
							" ",
							c.quoteWhats
						]
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden bg-secondary py-16 text-secondary-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 -z-10 opacity-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: IMG.cta,
					alt: "",
					"aria-hidden": "true",
					className: "h-full w-full object-cover",
					loading: "lazy",
					decoding: "async"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-6 px-4 md:grid-cols-[1fr_auto] md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold md:text-3xl",
						children: t.cta_banner.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm opacity-80",
						children: t.cta_banner.subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `tel:${CONTACT.phoneRaw}`,
						dir: "ltr",
						onClick: () => trackPhoneClick("home_cta_banner"),
						className: "mt-4 inline-block text-3xl font-extrabold text-gold md:text-4xl",
						children: CONTACT.phone
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: whatsappUrl,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => trackWhatsAppClick("home_cta_banner"),
					className: "inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-luxury transition hover:bg-gold-dark",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 16 }),
						" ",
						t.common.whatsapp
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 md:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: t.portfolio.eyebrow,
						title: t.portfolio.title,
						subtitle: t.portfolio.subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4",
						children: IMG.portfolio.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/portfolio",
							className: `group relative overflow-hidden rounded-2xl ${i === 0 || i === 4 ? "md:row-span-2 aspect-[3/4] md:aspect-[3/5]" : "aspect-square"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.src,
									alt: locale === "ar" ? item.ar : item.en,
									width: 900,
									height: 900,
									className: "h-full w-full object-cover transition duration-700 group-hover:scale-110",
									loading: "lazy",
									decoding: "async"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gold/0 transition group-hover:bg-gold/35" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 grid place-items-center opacity-0 transition group-hover:opacity-100",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-white bg-black/30 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur",
										children: t.portfolio.view
									})
								})
							]
						}, item.src))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/portfolio",
							className: "inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition hover:bg-gold hover:text-primary-foreground",
							children: [
								t.common.viewAll,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									size: 14,
									className: "rtl:rotate-180"
								})
							]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-muted/40 py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-4 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: t.faq.eyebrow,
					title: t.faq.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 divide-y divide-border rounded-2xl border border-border bg-card",
					children: t.faq.items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqItem, {
						q: it.q,
						a: it.a,
						defaultOpen: i === 0
					}, it.q))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: IMG.hero,
					alt: "",
					"aria-hidden": "true",
					className: "absolute inset-0 -z-10 h-full w-full object-cover",
					loading: "lazy",
					decoding: "async"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-black/70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl px-4 text-center text-white md:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-extrabold md:text-5xl",
							children: t.final_cta.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-white/75",
							children: t.final_cta.subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: whatsappUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								onClick: () => trackWhatsAppClick("home_final_cta"),
								className: "inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-luxury transition hover:bg-gold-dark",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 18 }),
									" ",
									t.common.whatsapp
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20",
								children: t.nav.contact
							})]
						})
					]
				})
			]
		})
	] });
}
function FaqItem({ q, a, defaultOpen = false }) {
	const [open, setOpen] = (0, import_react.useState)(defaultOpen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => setOpen((v) => !v),
		"aria-expanded": open,
		className: "flex w-full items-center justify-between gap-4 px-5 py-5 text-start text-sm font-semibold transition hover:text-gold md:text-base",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
			size: 18,
			className: `shrink-0 text-gold transition-transform ${open ? "rotate-180" : ""}`
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `grid overflow-hidden px-5 transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden text-sm leading-relaxed text-muted-foreground",
			children: a
		})
	})] });
}
//#endregion
export { HomePage as component };

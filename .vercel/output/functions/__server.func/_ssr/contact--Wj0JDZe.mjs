import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as useI18n, r as CONTACT, s as IMAGES, u as getWhatsAppUrl } from "./catalog-5x0Ua0_T.mjs";
import { a as trackPhoneClick, o as trackWhatsAppClick, r as trackFormSubmissionSuccess } from "./tracking-D01QA9gJ.mjs";
import { C as CircleCheck, S as LoaderCircle, a as Send, d as MapPin, f as Mail, h as Facebook, l as MessageCircle, p as Instagram, s as Phone, w as CircleAlert } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact--Wj0JDZe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const { t, locale } = useI18n();
	const cp = t.contact_page;
	const whatsappUrl = getWhatsAppUrl(locale);
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [service, setService] = (0, import_react.useState)(cp.service_options[0]);
	const [message, setMessage] = (0, import_react.useState)("");
	const [website, setWebsite] = (0, import_react.useState)("");
	const [fieldErrors, setFieldErrors] = (0, import_react.useState)({});
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [submitStatus, setSubmitStatus] = (0, import_react.useState)("idle");
	const [serverError, setServerError] = (0, import_react.useState)("");
	const formLoadedAtRef = (0, import_react.useRef)(Date.now());
	(0, import_react.useEffect)(() => {
		formLoadedAtRef.current = Date.now();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!cp.service_options.includes(service)) setService(cp.service_options[0]);
	}, [
		locale,
		cp.service_options,
		service
	]);
	function validateForm() {
		const errors = {};
		const trimmedName = name.trim();
		const digits = phone.trim().replace(/\D/g, "");
		const trimmedEmail = email.trim();
		const trimmedMessage = message.trim();
		if (trimmedName.length < 2) errors.name = cp.validation.name;
		if (digits.length < 8 || digits.length > 15) errors.phone = cp.validation.phone;
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) errors.email = cp.validation.email;
		if (!service.trim()) errors.service = cp.validation.service;
		if (trimmedMessage.length < 10) errors.message = cp.validation.message;
		return errors;
	}
	function buildWhatsAppDraftUrl() {
		const summary = [
			name.trim() ? `${cp.name}: ${name.trim()}` : null,
			phone.trim() ? `${cp.phone}: ${phone.trim()}` : null,
			email.trim() ? `${cp.email}: ${email.trim()}` : null,
			service.trim() ? `${cp.service}: ${service.trim()}` : null,
			message.trim() ? `${cp.message}: ${message.trim()}` : null
		].filter(Boolean).join("\n");
		return summary ? `${CONTACT.whatsappBase}?text=${encodeURIComponent(summary)}` : whatsappUrl;
	}
	async function handleSubmit(e) {
		e.preventDefault();
		if (isSubmitting) return;
		setSubmitStatus("idle");
		setServerError("");
		const errors = validateForm();
		setFieldErrors(errors);
		if (Object.keys(errors).length > 0) return;
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
					formLoadedAt: formLoadedAtRef.current
				})
			});
			const data = await response.json().catch(() => null);
			if (!response.ok || !data?.ok || !data.submissionId) {
				setSubmitStatus("error");
				if (data?.code === "EMAIL_NOT_CONFIGURED") setServerError(cp.errorNotConfigured);
				else if (data?.code === "DUPLICATE_SUBMISSION") setServerError(cp.errorDuplicate);
				else setServerError(cp.errorGeneric);
				return;
			}
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
				submissionId: data.submissionId
			});
		} catch {
			setSubmitStatus("error");
			setServerError(cp.errorGeneric);
		} finally {
			setIsSubmitting(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden border-b border-border bg-secondary py-24 text-secondary-foreground md:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-black/30 to-black/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: IMAGES.linen,
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
					children: cp.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-white/75",
					children: cp.subtitle
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[1fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold",
					children: cp.info_title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4",
					children: [
						{
							icon: Phone,
							label: t.common.callNow,
							value: CONTACT.phone,
							href: `tel:${CONTACT.phoneRaw}`,
							ltr: true,
							onClick: () => trackPhoneClick("contact_card")
						},
						{
							icon: MessageCircle,
							label: t.common.whatsapp,
							value: CONTACT.phone,
							href: whatsappUrl,
							ltr: true,
							onClick: () => trackWhatsAppClick("contact_card")
						},
						{
							icon: Mail,
							label: cp.email,
							value: CONTACT.email,
							href: `mailto:${CONTACT.email}`,
							ltr: true
						},
						{
							icon: MapPin,
							label: cp.address,
							value: locale === "ar" ? CONTACT.address_ar : CONTACT.address_en
						}
					].map(({ icon: Icon, label, value, href, ltr, onClick }) => {
						const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent text-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 18 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate font-semibold",
								...ltr ? { dir: "ltr" } : {},
								children: value
							})]
						})] });
						return href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href,
							target: href.startsWith("http") ? "_blank" : void 0,
							rel: href.startsWith("http") ? "noopener noreferrer" : void 0,
							onClick,
							className: "flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition hover:border-gold hover:shadow-luxury",
							children: inner
						}, label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-4 rounded-2xl border border-border bg-card p-4",
							children: inner
						}, label);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: CONTACT.facebook,
						target: "_blank",
						rel: "noopener noreferrer",
						"aria-label": "Facebook",
						className: "grid h-10 w-10 place-items-center rounded-full border border-border transition hover:border-gold hover:text-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { size: 16 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: CONTACT.instagram,
						target: "_blank",
						rel: "noopener noreferrer",
						"aria-label": "Instagram",
						className: "grid h-10 w-10 place-items-center rounded-full border border-border transition hover:border-gold hover:text-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { size: 16 })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: whatsappUrl,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => trackWhatsAppClick("contact_primary_cta"),
					className: "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-luxury transition hover:opacity-90",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 18 }),
						" ",
						t.common.whatsapp
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 overflow-hidden rounded-2xl border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: locale === "ar" ? "موقعنا في الرياض" : "Riyadh Location Map",
						src: "https://www.google.com/maps?q=Riyadh&output=embed",
						className: "h-64 w-full",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade"
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold",
				children: cp.form_title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				noValidate: true,
				className: "mt-6 rounded-2xl border border-border bg-card p-6 shadow-md md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						name: "website",
						value: website,
						onChange: (e) => setWebsite(e.target.value),
						tabIndex: -1,
						autoComplete: "off",
						"aria-hidden": "true",
						className: "hidden"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "contact-name",
								label: cp.name,
								name: "name",
								autoComplete: "name",
								maxLength: 100,
								value: name,
								onChange: (e) => {
									setName(e.target.value);
									if (fieldErrors.name) setFieldErrors((prev) => ({
										...prev,
										name: void 0
									}));
								},
								error: fieldErrors.name,
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "contact-phone",
								label: cp.phone,
								name: "phone",
								type: "tel",
								dir: "ltr",
								autoComplete: "tel",
								maxLength: 25,
								placeholder: "+966 5X XXX XXXX",
								value: phone,
								onChange: (e) => {
									setPhone(e.target.value);
									if (fieldErrors.phone) setFieldErrors((prev) => ({
										...prev,
										phone: void 0
									}));
								},
								error: fieldErrors.phone,
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "contact-email",
								label: cp.email,
								name: "email",
								type: "email",
								dir: "ltr",
								autoComplete: "email",
								maxLength: 160,
								value: email,
								onChange: (e) => {
									setEmail(e.target.value);
									if (fieldErrors.email) setFieldErrors((prev) => ({
										...prev,
										email: void 0
									}));
								},
								error: fieldErrors.email,
								required: true,
								className: "sm:col-span-2"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "contact-service",
										className: "mb-1.5 block text-sm font-semibold",
										children: cp.service
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										id: "contact-service",
										name: "service",
										value: service,
										onChange: (e) => {
											setService(e.target.value);
											if (fieldErrors.service) setFieldErrors((prev) => ({
												...prev,
												service: void 0
											}));
										},
										className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30",
										children: cp.service_options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: opt,
											children: opt
										}, opt))
									}),
									fieldErrors.service && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-xs text-destructive",
										children: fieldErrors.service
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "contact-message",
										className: "mb-1.5 block text-sm font-semibold",
										children: cp.message
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										id: "contact-message",
										name: "message",
										rows: 5,
										required: true,
										maxLength: 2e3,
										value: message,
										onChange: (e) => {
											setMessage(e.target.value);
											if (fieldErrors.message) setFieldErrors((prev) => ({
												...prev,
												message: void 0
											}));
										},
										className: "w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
									}),
									fieldErrors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-xs text-destructive",
										children: fieldErrors.message
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						disabled: isSubmitting,
						className: "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-luxury transition hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-60",
						children: [isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
							size: 16,
							className: "animate-spin"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 16 }), isSubmitting ? cp.sending : cp.submit]
					}),
					submitStatus === "success" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						role: "status",
						className: "mt-4 flex items-start gap-2.5 rounded-xl bg-accent px-4 py-3 text-sm text-accent-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
							size: 18,
							className: "mt-0.5 shrink-0 text-gold"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: cp.sent })]
					}),
					submitStatus === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						role: "alert",
						className: "mt-4 space-y-2 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
								size: 18,
								className: "mt-0.5 shrink-0"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: serverError })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3 ps-7 text-xs font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: buildWhatsAppDraftUrl(),
								target: "_blank",
								rel: "noopener noreferrer",
								onClick: () => trackWhatsAppClick("contact_error_fallback"),
								className: "underline hover:opacity-80",
								children: t.common.whatsapp
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${CONTACT.phoneRaw}`,
								dir: "ltr",
								onClick: () => trackPhoneClick("contact_error_fallback"),
								className: "underline hover:opacity-80",
								children: CONTACT.phone
							})]
						})]
					})
				]
			})] })]
		})
	})] });
}
function Field({ id, label, error, className = "", ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: id,
				className: "mb-1.5 block text-sm font-semibold",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id,
				...rest,
				"aria-invalid": Boolean(error),
				className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-xs text-destructive",
				children: error
			})
		]
	});
}
//#endregion
export { ContactPage as component };

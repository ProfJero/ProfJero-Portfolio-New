import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Route$6 } from "./router-BPX34lc-.mjs";
import { _ as timeSlots, m as studios, n as cn, t as Shell } from "./layout-C-yWd278.mjs";
import { t as addBooking } from "./desk-D91l8YCI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-CFLlKlRR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	"Studio",
	"Service",
	"When",
	"You",
	"Confirm"
];
function BookPage() {
	const initial = Route$6.useSearch().studio;
	const [step, setStep] = (0, import_react.useState)(0);
	const [studio, setStudio] = (0, import_react.useState)(studios.some((s) => s.slug === initial) ? initial : "digital");
	const [service, setService] = (0, import_react.useState)("");
	const [date, setDate] = (0, import_react.useState)("");
	const [time, setTime] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)("");
	const [ref, setRef] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const current = studios.find((item) => item.slug === studio) ?? studios[0];
	function next() {
		setError("");
		if (step === 1 && !service) return setError("Pick a service.");
		if (step === 2 && (!date || !time)) return setError("Pick a date and a time. The time stays labelled when you select it.");
		if (step === 3 && (name.trim().length < 2 || !email.includes("@"))) return setError("Name and email, please.");
		if (step === 4) {
			const booking = addBooking({
				studio: current.name,
				service,
				date,
				time,
				name: name.trim(),
				email: email.trim(),
				phone: phone.trim(),
				note: note.trim()
			});
			setRef(booking.ref);
			return;
		}
		setStep((n) => n + 1);
	}
	if (ref) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-4 py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-[0.16em] text-gold uppercase",
				children: "Booked"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-2 font-display text-5xl",
				children: [
					"Your reference is ",
					ref,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-muted",
				children: [
					current.name,
					", ",
					service,
					", ",
					date,
					" at ",
					time,
					". Keep the code. You can look it up without an account."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/track",
				search: { ref },
				className: "mt-6 inline-flex min-h-11 items-center rounded-full bg-brand px-5 text-sm font-medium text-on-brand",
				children: "Track this booking"
			})
		]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-4 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs tracking-[0.16em] text-gold uppercase",
				children: [
					"Booking · step ",
					step + 1,
					" of 5"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl",
				children: STEPS[step]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-4 flex flex-wrap gap-2 text-xs",
				children: STEPS.map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: cn("rounded-full px-3 py-1", index === step ? "bg-brand text-on-brand" : "bg-line text-ink"),
					children: [
						index + 1,
						". ",
						label
					]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8",
				children: [
					step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2",
						children: studios.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								setStudio(item.slug);
								setService("");
							},
							className: cn("min-h-14 rounded-2xl border px-4 text-left", studio === item.slug ? "border-brand bg-brand text-on-brand" : "border-line"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-medium",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("block text-sm", studio === item.slug ? "text-on-brand/80" : "text-muted"),
								children: item.tagline
							})]
						}, item.slug))
					}),
					step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2",
						children: current.services.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setService(item.title),
							className: cn("min-h-14 rounded-2xl border px-4 text-left", service === item.title ? "border-brand bg-brand text-on-brand" : "border-line"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-medium",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("block text-sm", service === item.title ? "text-on-brand/80" : "text-muted"),
								children: item.text
							})]
						}, item.title))
					}),
					step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm",
								children: ["Date", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "date",
									value: date,
									onChange: (e) => setDate(e.target.value),
									className: "field mt-1"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: "Time — the label stays visible when selected."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-2 sm:grid-cols-3",
								children: timeSlots.map((slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setTime(slot),
									className: cn("min-h-14 rounded-2xl border text-base font-medium tabular-nums", time === slot ? "border-brand bg-brand text-on-brand" : "border-line bg-card text-ink"),
									children: slot
								}, slot))
							})
						]
					}),
					step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "field",
								placeholder: "Name",
								value: name,
								onChange: (e) => setName(e.target.value)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "field",
								placeholder: "Email",
								value: email,
								onChange: (e) => setEmail(e.target.value)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "field",
								placeholder: "Phone",
								value: phone,
								onChange: (e) => setPhone(e.target.value)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								className: "field",
								rows: 4,
								placeholder: "Anything we should know",
								value: note,
								onChange: (e) => setNote(e.target.value)
							})
						]
					}),
					step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "space-y-3 rounded-card border border-line bg-card p-5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Studio",
								v: current.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Service",
								v: service
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "When",
								v: `${date} at ${time}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Name",
								v: name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Email",
								v: email
							}),
							phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Phone",
								v: phone
							}),
							note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Note",
								v: note
							})
						]
					})
				]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-brand",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex gap-3",
				children: [step > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "min-h-11 rounded-full border border-line px-5 text-sm",
					onClick: () => setStep((n) => n - 1),
					children: "Back"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "min-h-11 rounded-full bg-brand px-5 text-sm font-medium text-on-brand",
					onClick: next,
					children: step === 4 ? "Confirm booking" : "Continue"
				})]
			})
		]
	}) });
}
function Row({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between gap-4 border-b border-line pb-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-right",
			children: v
		})]
	});
}
//#endregion
export { BookPage as component };

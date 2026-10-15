import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as studios, t as Shell } from "./layout-C-yWd278.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hub-t4T96dGa.js
var import_jsx_runtime = require_jsx_runtime();
function HubHome() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-[0.18em] text-gold uppercase",
				children: "ProfJero Hub"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 max-w-3xl font-display text-5xl sm:text-6xl",
				children: "Digital, Creative, Nourish and Agro — one desk."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-muted",
				children: "The hub is how the four studios meet a client: read the offer, request a quote, or book a time. The same person answers."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/book",
					search: { studio: "digital" },
					className: "inline-flex min-h-11 items-center rounded-full bg-brand px-5 text-sm font-medium text-on-brand",
					children: "Book a call"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/track",
					search: { ref: "" },
					className: "inline-flex min-h-11 items-center rounded-full border border-line px-5 text-sm",
					children: "Track a booking"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 md:grid-cols-2",
				children: studios.map((studio) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/hub/$studio",
					params: { studio: studio.slug },
					className: "overflow-hidden rounded-card border border-line bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: studio.image,
						alt: "",
						className: "h-52 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-[0.16em] text-gold uppercase",
								children: studio.color
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-display text-3xl",
								children: studio.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: studio.tagline
							})
						]
					})]
				}, studio.slug))
			})
		]
	}) });
}
//#endregion
export { HubHome as component };

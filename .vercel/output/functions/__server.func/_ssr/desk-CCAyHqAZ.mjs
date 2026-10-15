import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Shell } from "./layout-C-yWd278.mjs";
import { i as listDesk } from "./desk-D91l8YCI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/desk-CCAyHqAZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DeskPage() {
	const [enquiries, setEnquiries] = (0, import_react.useState)([]);
	const [bookings, setBookings] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const load = () => {
			const data = listDesk();
			setEnquiries(data.enquiries);
			setBookings(data.bookings);
		};
		load();
		window.addEventListener("profjero-desk", load);
		window.addEventListener("storage", load);
		return () => {
			window.removeEventListener("profjero-desk", load);
			window.removeEventListener("storage", load);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl px-4 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-[0.16em] text-gold uppercase",
				children: "Desk"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl",
				children: "What this browser has collected."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: "Messages and bookings from this preview stay on this device. They are not the Firebase inbox on profjero.pages.dev, and they are not emailed."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-3xl",
					children: ["Messages · ", enquiries.length]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-3",
					children: [enquiries.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-sm text-muted",
						children: "Nothing yet. The contact form lands here."
					}), enquiries.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-card border border-line bg-card p-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-medium",
								children: [
									item.name,
									" · ",
									item.subject || item.kind
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted",
								children: [
									item.email,
									item.service ? ` · ${item.service}` : "",
									item.budget ? ` · ${item.budget}` : ""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2",
								children: item.message
							})
						]
					}, item.id))]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-3xl",
					children: ["Bookings · ", bookings.length]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-3",
					children: [bookings.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-sm text-muted",
						children: "No calls booked from this browser yet."
					}), bookings.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-card border border-line bg-card p-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium tabular-nums",
								children: item.ref
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								item.studio,
								" · ",
								item.service
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted tabular-nums",
								children: [
									item.date,
									" at ",
									item.time
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1",
								children: [
									item.name,
									" · ",
									item.email
								]
							})
						]
					}, item.id))]
				})] })]
			})
		]
	}) });
}
//#endregion
export { DeskPage as component };

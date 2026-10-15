import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Route$3 } from "./router-BPX34lc-.mjs";
import { t as Shell } from "./layout-C-yWd278.mjs";
import { r as findBooking } from "./desk-D91l8YCI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/track-wf_tZTaN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TrackPage() {
	const initial = Route$3.useSearch().ref;
	const [code, setCode] = (0, import_react.useState)(initial);
	const [result, setResult] = (0, import_react.useState)(void 0);
	(0, import_react.useEffect)(() => {
		if (initial) setResult(findBooking(initial));
	}, [initial]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-4 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-[0.16em] text-gold uppercase",
				children: "Tracking"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl",
				children: "Look up a booking."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Use the reference from the confirmation, like PJ-1842. It lives in this browser."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-6 flex flex-col gap-3 sm:flex-row",
				onSubmit: (e) => {
					e.preventDefault();
					setResult(findBooking(code));
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field",
					value: code,
					onChange: (e) => setCode(e.target.value),
					placeholder: "PJ-0000",
					"aria-label": "Reference code"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "min-h-11 rounded-full bg-brand px-5 text-sm font-medium text-on-brand",
					children: "Find"
				})]
			}),
			result === null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-brand",
				children: "No booking with that code on this device."
			}),
			result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-6 space-y-2 rounded-card border border-line bg-card p-5 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl",
						children: result.ref
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						result.studio,
						" · ",
						result.service
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "tabular-nums",
						children: [
							result.date,
							" at ",
							result.time
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted",
						children: [
							result.name,
							" · ",
							result.email
						]
					}),
					result.note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: result.note })
				]
			})
		]
	}) });
}
//#endregion
export { TrackPage as component };

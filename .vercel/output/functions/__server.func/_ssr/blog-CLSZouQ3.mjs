import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as posts, t as Shell } from "./layout-C-yWd278.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-CLSZouQ3.js
var import_jsx_runtime = require_jsx_runtime();
function BlogIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-[0.18em] text-gold uppercase",
				children: "Journal"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl",
				children: "Notes from the practice."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-muted",
				children: "Short pieces on how Benjamin chooses tools. No funnel, no newsletter pop-over."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 md:grid-cols-3",
				children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog/$slug",
					params: { slug: post.slug },
					className: "overflow-hidden rounded-card border border-line bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: post.cover,
						alt: "",
						className: "h-44 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-gold",
								children: [
									post.category,
									" · ",
									post.minutes,
									" min"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-2xl",
								children: post.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: post.excerpt
							})
						]
					})]
				}, post.slug))
			})
		]
	}) });
}
//#endregion
export { BlogIndex as component };

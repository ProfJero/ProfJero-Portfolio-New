import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Route$2 } from "./router-BPX34lc-.mjs";
import { s as posts, t as Shell } from "./layout-C-yWd278.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-C7ingZhT.js
var import_jsx_runtime = require_jsx_runtime();
function PostPage() {
	const { slug } = Route$2.useParams();
	const post = posts.find((item) => item.slug === slug);
	if (!post) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "No note by that name."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/blog",
			className: "mt-4 inline-flex text-brand",
			children: "Back to the journal"
		})]
	}) });
	const related = posts.filter((item) => item.slug !== post.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-4 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs tracking-[0.16em] text-gold uppercase",
				children: [
					post.category,
					" · ",
					post.date
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-5xl",
				children: post.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg text-muted",
				children: post.excerpt
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: post.cover,
				alt: "",
				className: "mt-8 h-72 w-full rounded-card object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-4 text-base leading-relaxed",
				children: post.body.map((block, index) => block.t === "h" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "pt-4 font-display text-3xl",
					children: block.text
				}, index) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: block.text }, index))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 border-t border-line pt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "More notes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/blog/$slug",
						params: { slug: item.slug },
						className: "text-brand",
						children: item.title
					}) }, item.slug))
				})]
			})
		]
	}) });
}
//#endregion
export { PostPage as component };

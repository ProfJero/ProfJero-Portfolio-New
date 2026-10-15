import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Route$1 } from "./router-BPX34lc-.mjs";
import { m as studios, t as Shell } from "./layout-C-yWd278.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hub._studio-BgKCLE7S.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StudioPage() {
	const { studio: slug } = Route$1.useParams();
	const studio = studios.find((item) => item.slug === slug);
	const [open, setOpen] = (0, import_react.useState)(0);
	if (!studio) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "No studio by that name."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/hub",
			className: "mt-4 inline-flex text-brand",
			children: "All studios"
		})]
	}) });
	const products = "products" in studio ? studio.products : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: studio.image,
		alt: "",
		className: "h-[42vh] w-full object-cover"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-[0.16em] text-gold uppercase",
				children: studio.color
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl",
				children: studio.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-lg text-muted",
				children: studio.tagline
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-3",
				children: studio.services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-card border border-line bg-card p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: service.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: service.text
					})]
				}, service.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 font-display text-3xl",
				children: "Ways to start"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-4 md:grid-cols-2",
				children: studio.packages.map((pack) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-card border border-line p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl",
							children: pack.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-brand",
							children: pack.price
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: pack.detail
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "mt-4 inline-flex min-h-11 items-center text-sm font-medium text-brand",
							href: `/?service=${encodeURIComponent(studio.name)}&subject=${encodeURIComponent(`Quote: ${pack.name}`)}&budget=${encodeURIComponent(pack.price)}#contact`,
							children: "Request a quote"
						})
					]
				}, pack.name))
			}),
			products && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 font-display text-3xl",
				children: "Branded products"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-card border border-line bg-card p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: product.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: product.note
					})]
				}, product.name))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 font-display text-3xl",
				children: "Questions"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 max-w-3xl divide-y divide-line border-y border-line",
				children: studio.faqs.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "flex min-h-14 w-full items-center justify-between text-left",
					onClick: () => setOpen(open === index ? -1 : index),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-brand",
						children: open === index ? "–" : "+"
					})]
				}), open === index && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "pb-4 text-sm text-muted",
					children: item.a
				})] }, item.q))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/book",
				search: { studio: studio.slug },
				className: "mt-8 inline-flex min-h-11 items-center rounded-full bg-brand px-5 text-sm font-medium text-on-brand",
				children: "Book this studio"
			})
		]
	})] });
}
//#endregion
export { StudioPage as component };

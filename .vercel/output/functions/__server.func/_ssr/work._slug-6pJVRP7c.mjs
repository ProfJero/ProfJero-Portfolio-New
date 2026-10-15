import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route } from "./router-BPX34lc-.mjs";
import { a as formatMoney, f as projects, t as Shell } from "./layout-C-yWd278.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-6pJVRP7c.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STOCK = [
	{
		id: "para",
		name: "Paracetamol 500",
		price: 8
	},
	{
		id: "ors",
		name: "ORS sachet",
		price: 3
	},
	{
		id: "amox",
		name: "Amoxicillin",
		price: 18
	},
	{
		id: "vita",
		name: "Vitamin C",
		price: 12
	},
	{
		id: "cough",
		name: "Cough syrup",
		price: 25
	},
	{
		id: "plaster",
		name: "Plaster roll",
		price: 6
	}
];
function PosDemo() {
	const [qty, setQty] = (0, import_react.useState)({});
	const [stock, setStock] = (0, import_react.useState)({
		para: 40,
		ors: 60,
		amox: 18,
		vita: 24,
		cough: 11,
		plaster: 30
	});
	const [sales, setSales] = (0, import_react.useState)([]);
	const lines = STOCK.filter((item) => (qty[item.id] ?? 0) > 0);
	const total = lines.reduce((sum, item) => sum + item.price * (qty[item.id] ?? 0), 0);
	const today = (0, import_react.useMemo)(() => sales.reduce((sum, sale) => sum + sale.total, 0), [sales]);
	function add(id) {
		if ((stock[id] ?? 0) <= (qty[id] ?? 0)) return;
		setQty((prev) => ({
			...prev,
			[id]: (prev[id] ?? 0) + 1
		}));
	}
	function checkout() {
		if (!lines.length) return;
		setStock((prev) => {
			const next = { ...prev };
			for (const item of lines) next[item.id] = (next[item.id] ?? 0) - (qty[item.id] ?? 0);
			return next;
		});
		setSales((prev) => [{
			name: lines.map((l) => l.name).join(", "),
			total
		}, ...prev].slice(0, 5));
		setQty({});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-card border border-line bg-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-line px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl",
				children: "Counter"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted tabular-nums",
				children: ["Today ", formatMoney(today, "GHS")]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 p-4 lg:grid-cols-[1.3fr_0.7fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2 sm:grid-cols-3",
				children: STOCK.map((item) => {
					const left = (stock[item.id] ?? 0) - (qty[item.id] ?? 0);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => add(item.id),
						disabled: left <= 0,
						className: "rounded-2xl border border-line px-3 py-3 text-left hover:border-brand disabled:opacity-40",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-medium",
								children: item.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm text-muted tabular-nums",
								children: formatMoney(item.price, "GHS")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-2 block text-xs text-gold tabular-nums",
								children: [left, " in stock"]
							})
						]
					}, item.id);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col rounded-2xl bg-paper p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.14em] text-gold uppercase",
						children: "This sale"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-2 flex-1 space-y-2 text-sm",
						children: [lines.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-muted",
							children: "Tap an item. Stock falls when you take payment."
						}), lines.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								qty[item.id],
								" × ",
								item.name
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: formatMoney(item.price * (qty[item.id] ?? 0), "GHS")
							})]
						}, item.id))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 flex justify-between font-display text-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Due" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums",
							children: formatMoney(total, "GHS")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: checkout,
						disabled: !lines.length,
						className: "mt-3 min-h-11 rounded-full bg-brand text-sm font-medium text-on-brand disabled:opacity-40",
						children: "Take payment"
					})
				]
			})]
		})]
	});
}
function WorkPage() {
	const { slug } = Route.useParams();
	const project = projects.find((item) => item.slug === slug);
	if (!project) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "That project is not listed."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "/#work",
			className: "mt-4 inline-flex text-brand",
			children: "Back to the work"
		})]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: project.cover,
		alt: "",
		className: "h-[46vh] w-full object-cover"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs tracking-[0.16em] text-gold uppercase",
				children: [
					project.category,
					" · ",
					project.year,
					" · ",
					project.client
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-5xl",
				children: project.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg text-muted",
				children: project.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: project.tech.join(" · ")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-4",
				children: project.story.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 border-l-2 border-brand pl-4 text-muted",
				children: project.outcome
			}),
			"quote" in project && project.quote && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "mt-8 rounded-card border border-line bg-card p-5 text-sm",
				children: [
					"“",
					project.quote.text,
					"”",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
						className: "mt-3 text-xs tracking-[0.14em] text-gold uppercase",
						children: project.quote.by
					})
				]
			}),
			"demo" in project && project.demo === "pos" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Try the counter"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 mb-4 text-sm text-muted",
						children: "A slice of the pharmacy desk. Nothing here is a real prescription."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PosDemo, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `/?service=${encodeURIComponent(project.category)}&subject=${encodeURIComponent(`About: ${project.title}`)}#contact`,
					className: "inline-flex min-h-11 items-center rounded-full bg-brand px-5 text-sm font-medium text-on-brand",
					children: "Ask for something like this"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					search: {
						service: "",
						subject: "",
						budget: ""
					},
					className: "inline-flex min-h-11 items-center text-sm text-brand",
					children: "All work"
				})]
			})
		]
	})] }) });
}
//#endregion
export { WorkPage as component };

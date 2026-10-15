import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Mail, o as Phone, p as ArrowUpRight, u as MapPin } from "../_libs/lucide-react.mjs";
import { s as Route$8, u as useLook } from "./router-BPX34lc-.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { c as pricingGroups, d as profile, f as projects, g as testimonials, h as team, i as faqs, l as pricingNote, m as studios, n as cn, o as planPrice, p as skills, r as experience, s as posts, t as Shell, u as process, v as withYears, y as yearsOfExperience } from "./layout-C-yWd278.mjs";
import { n as addEnquiry } from "./desk-D91l8YCI.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BLud-Mox.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-full font-medium transition duration-200 disabled:pointer-events-none disabled:opacity-50 min-h-11 px-5 text-sm", {
	variants: { variant: {
		primary: "bg-brand text-on-brand hover:opacity-90",
		line: "border border-line bg-card text-ink hover:border-brand",
		ghost: "bg-transparent text-ink hover:bg-line",
		onhero: "bg-on-hero text-ink hover:opacity-90",
		quiet: "bg-transparent text-on-hero border border-white/30 hover:bg-white/10"
	} },
	defaultVariants: { variant: "primary" }
});
function Button({ className, variant, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({ variant }), className),
		...props
	});
}
function ContactForm({ seed }) {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const name = String(data.get("name") || "").trim();
		const email = String(data.get("email") || "").trim();
		const message = String(data.get("message") || "").trim();
		if (name.length < 2 || !email.includes("@") || message.length < 8) {
			setError("Add your name, a real email, and a note of at least a sentence.");
			return;
		}
		addEnquiry({
			kind: seed?.subject?.toLowerCase().includes("quote") ? "quote" : "message",
			name,
			email,
			phone: String(data.get("phone") || ""),
			service: String(data.get("service") || ""),
			budget: String(data.get("budget") || ""),
			subject: String(data.get("subject") || ""),
			message
		});
		setError("");
		setSent(true);
	}
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-card border border-line bg-card p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-3xl",
				children: "Received."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: "It is on the desk in this browser. Benjamin still replies from profjero947@gmail.com — write there if you need a person today."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-5",
				type: "button",
				variant: "line",
				onClick: () => setSent(false),
				children: "Send another"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "grid gap-3 rounded-card border border-line bg-card p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "name",
					required: true,
					placeholder: "Your name",
					className: "field"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "email",
					type: "email",
					required: true,
					placeholder: "Email",
					className: "field"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "phone",
					placeholder: "Phone (optional)",
					className: "field"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "service",
					defaultValue: seed?.service ?? "",
					placeholder: "Service",
					className: "field"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				name: "subject",
				defaultValue: seed?.subject ?? "",
				placeholder: "Subject",
				className: "field"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				name: "budget",
				defaultValue: seed?.budget ?? "",
				placeholder: "Budget range",
				className: "field"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				name: "message",
				required: true,
				rows: 5,
				placeholder: "What do you need done?",
				className: "field resize-y"
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-brand",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				children: "Send message"
			})
		]
	});
}
var COLS = 128;
var ROWS = 72;
var N = 9216;
var VERT = `
attribute vec2 aPos;
varying vec2 vUv;
void main() {
  vUv = vec2(aPos.x * 0.5 + 0.5, 0.5 - aPos.y * 0.5);
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;
var FRAG = `
precision mediump float;
varying vec2 vUv;
uniform sampler2D uImage;
uniform sampler2D uMap;
uniform vec2 uTexel;
void main() {
  float l = texture2D(uMap, vUv + vec2(-uTexel.x, 0.0)).r;
  float r = texture2D(uMap, vUv + vec2(uTexel.x, 0.0)).r;
  float u = texture2D(uMap, vUv + vec2(0.0, -uTexel.y)).r;
  float d = texture2D(uMap, vUv + vec2(0.0, uTexel.y)).r;
  vec2 off = vec2(r - l, d - u) * 1.85;
  vec2 uv = clamp(vUv + off, 0.001, 0.999);
  vec3 col = texture2D(uImage, uv).rgb;
  float crest = smoothstep(0.01, 0.07, length(off));
  col += crest * vec3(0.82, 0.9, 1.0) * 0.38;
  gl_FragColor = vec4(col, 1.0);
}`;
function compile(gl, type, src) {
	const shader = gl.createShader(type);
	if (!shader) return null;
	gl.shaderSource(shader, src);
	gl.compileShader(shader);
	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		gl.deleteShader(shader);
		return null;
	}
	return shader;
}
function WaterHero({ src, enabled, overlay }) {
	const canvasRef = (0, import_react.useRef)(null);
	const shade = Math.min(.78, Math.max(.2, overlay));
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (!enabled || reduce) {
			canvas.style.opacity = "0";
			return;
		}
		canvas.style.opacity = "1";
		const gl = canvas.getContext("webgl", {
			premultipliedAlpha: false,
			alpha: false
		});
		if (!gl) {
			canvas.style.opacity = "0";
			return;
		}
		const vs = compile(gl, gl.VERTEX_SHADER, VERT);
		const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
		if (!vs || !fs) return;
		const program = gl.createProgram();
		if (!program) return;
		gl.attachShader(program, vs);
		gl.attachShader(program, fs);
		gl.linkProgram(program);
		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
		gl.useProgram(program);
		const buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
			-1,
			-1,
			1,
			-1,
			-1,
			1,
			1,
			1
		]), gl.STATIC_DRAW);
		const loc = gl.getAttribLocation(program, "aPos");
		gl.enableVertexAttribArray(loc);
		gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
		const imageTex = gl.createTexture();
		const mapTex = gl.createTexture();
		const uImage = gl.getUniformLocation(program, "uImage");
		const uMap = gl.getUniformLocation(program, "uMap");
		const uTexel = gl.getUniformLocation(program, "uTexel");
		gl.uniform1i(uImage, 0);
		gl.uniform1i(uMap, 1);
		gl.uniform2f(uTexel, 1 / COLS, 1 / ROWS);
		const buffers = [
			new Float32Array(N),
			new Float32Array(N),
			new Float32Array(N)
		];
		let iCurr = 0;
		let iPrev = 1;
		let iNext = 2;
		const bytes = new Uint8Array(N);
		function disturb(nx, ny, radius = 3.2, power = .9) {
			const field = buffers[iCurr];
			const cx = nx * 127;
			const cy = ny * 71;
			const r = Math.ceil(radius);
			for (let y = -r; y <= r; y++) for (let x = -r; x <= r; x++) {
				const px = Math.round(cx + x);
				const py = Math.round(cy + y);
				if (px <= 0 || py <= 0 || px >= 127 || py >= 71) continue;
				const dist = Math.hypot(x, y);
				if (dist > radius) continue;
				field[py * COLS + px] += power * (1 - dist / radius);
			}
		}
		let imageReady = false;
		const image = new Image();
		image.src = src;
		image.onload = () => {
			imageReady = true;
			gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
			gl.activeTexture(gl.TEXTURE0);
			gl.bindTexture(gl.TEXTURE_2D, imageTex);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
		};
		gl.activeTexture(gl.TEXTURE1);
		gl.bindTexture(gl.TEXTURE_2D, mapTex);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		const resize = () => {
			const parent = canvas.parentElement;
			if (!parent) return;
			const rect = parent.getBoundingClientRect();
			const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
			const w = Math.max(2, Math.floor(rect.width * dpr));
			const h = Math.max(2, Math.floor(rect.height * dpr));
			if (canvas.width !== w || canvas.height !== h) {
				canvas.width = w;
				canvas.height = h;
			}
			gl.viewport(0, 0, canvas.width, canvas.height);
		};
		const pointer = (ev) => {
			const rect = canvas.getBoundingClientRect();
			const nx = (ev.clientX - rect.left) / rect.width;
			const ny = (ev.clientY - rect.top) / rect.height;
			if (nx < 0 || ny < 0 || nx > 1 || ny > 1) return;
			disturb(nx, ny, ev.pointerType === "touch" ? 4.4 : 3.2, 1);
		};
		const simulate = () => {
			const c = buffers[iCurr];
			const p = buffers[iPrev];
			const nbuf = buffers[iNext];
			for (let y = 1; y < 71; y++) {
				const row = y * COLS;
				for (let x = 1; x < 127; x++) {
					const i = row + x;
					nbuf[i] = ((c[i - 1] + c[i + 1] + c[i - COLS] + c[i + COLS]) * .5 - p[i]) * .984;
				}
			}
			const oldPrev = iPrev;
			iPrev = iCurr;
			iCurr = iNext;
			iNext = oldPrev;
		};
		const upload = () => {
			const c = buffers[iCurr];
			for (let i = 0; i < N; i++) {
				const v = c[i] < -1 ? -1 : c[i] > 1 ? 1 : c[i];
				bytes[i] = (v * .5 + .5) * 255;
			}
			gl.activeTexture(gl.TEXTURE1);
			gl.bindTexture(gl.TEXTURE_2D, mapTex);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, COLS, ROWS, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, bytes);
		};
		let visible = true;
		let stopped = false;
		let lastDrop = performance.now();
		let raf = 0;
		const frame = (now) => {
			if (stopped) return;
			raf = requestAnimationFrame(frame);
			if (!visible || document.hidden || !imageReady) return;
			if (now - lastDrop > 2800) {
				lastDrop = now;
				disturb(.2 + Math.random() * .6, .25 + Math.random() * .5, 2.6, .6);
			}
			simulate();
			upload();
			gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
		};
		const observer = new IntersectionObserver(([entry]) => {
			visible = entry?.isIntersecting ?? true;
		}, { threshold: .05 });
		observer.observe(canvas);
		resize();
		window.addEventListener("resize", resize);
		canvas.addEventListener("pointermove", pointer);
		canvas.addEventListener("pointerdown", pointer);
		raf = requestAnimationFrame(frame);
		return () => {
			stopped = true;
			cancelAnimationFrame(raf);
			observer.disconnect();
			window.removeEventListener("resize", resize);
			canvas.removeEventListener("pointermove", pointer);
			canvas.removeEventListener("pointerdown", pointer);
			gl.deleteProgram(program);
			gl.deleteShader(vs);
			gl.deleteShader(fs);
			gl.deleteTexture(imageTex);
			gl.deleteTexture(mapTex);
			gl.deleteBuffer(buffer);
		};
	}, [src, enabled]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: canvasRef,
				className: "absolute inset-0 h-full w-full touch-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-shade absolute inset-0",
				style: { ["--hero-shade"]: String(shade) }
			})
		]
	});
}
var ROLES = [
	"Software developer",
	"IT trainer",
	"Graphic designer",
	"Freelancer"
];
function HomePage({ seed }) {
	const { look } = useLook();
	const [role, setRole] = (0, import_react.useState)(0);
	const [currency, setCurrency] = (0, import_react.useState)("GHS");
	const [group, setGroup] = (0, import_react.useState)(0);
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [openFaq, setOpenFaq] = (0, import_react.useState)(0);
	const years = yearsOfExperience();
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const id = window.setInterval(() => setRole((n) => (n + 1) % ROLES.length), 2200);
		return () => window.clearInterval(id);
	}, []);
	(0, import_react.useEffect)(() => {
		const saved = localStorage.getItem("profjero-currency");
		if (saved === "GHS" || saved === "USD") {
			setCurrency(saved);
			return;
		}
		if (Intl.DateTimeFormat().resolvedOptions().timeZone !== "Africa/Accra") setCurrency("USD");
	}, []);
	function pickCurrency(next) {
		setCurrency(next);
		localStorage.setItem("profjero-currency", next);
	}
	const categories = ["All", ...new Set(projects.map((p) => p.category))];
	const shown = projects.filter((p) => filter === "All" || p.category === filter);
	const activeGroup = pricingGroups[group];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[88vh] overflow-hidden text-on-hero",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaterHero, {
				src: profile.hero,
				enabled: look.water,
				overlay: look.overlay
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm tracking-[0.18em] uppercase text-on-hero/80",
						children: profile.location
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-3 max-w-3xl font-display text-5xl leading-[1.05] sm:text-7xl",
						children: [
							"Hello, I am ",
							profile.name,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 h-8 text-xl text-on-hero/90 sm:text-2xl",
						"aria-live": "polite",
						children: ROLES[role]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-base text-on-hero/85 sm:text-lg",
						children: withYears("I design and build websites, business systems and training that still make sense after launch. {years} years in, from Cape Coast, still taking the work personally.")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "onhero",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								children: "Hire me"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "quiet",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#work",
								children: "See the work"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-sm text-on-hero/75",
						children: "Move across the water. It answers."
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "about",
			className: "section-anchor mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: profile.portrait,
				alt: `Portrait of ${profile.name}`,
				className: "aspect-square w-full max-w-md rounded-full object-cover"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "About" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl sm:text-5xl",
					children: "A desk for code, classrooms and the odd mug."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-muted",
					children: withYears("I'm Benjamin Amoako. Information technology is the formal training; the practice is websites, databases, graphics and teaching people who would rather build than watch. {years} years of client work, mostly in Ghana, under the name ProfJero.")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: "If the job is a parish site, a pharmacy counter, an assessment portal or a room of beginners, it is the same habit: make the next step obvious, then leave the client able to run it."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-8 grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							k: "Name",
							v: profile.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							k: "Profession",
							v: "Software development"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							k: "Email",
							v: profile.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							k: "Phone",
							v: profile.phone
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							k: "Education",
							v: "Degree, Information Technology"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							k: "Base",
							v: profile.location
						})
					]
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "skills",
			className: "section-anchor bg-card/60 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Skill" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl",
						children: "What the work is actually made of."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted",
						children: "Design is not a coat of paint at the end. The same eye that sets type also decides whether a pharmacist can finish a sale before the next customer speaks."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-5xl tabular-nums text-brand",
						children: years
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "years in practice, counted from January 2021. It moves on its own every January."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-4",
					children: skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1 flex justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: skill.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums text-muted",
							children: skill.level
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-2 overflow-hidden rounded-full bg-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-brand",
							style: { width: `${skill.level}%` }
						})
					})] }, skill.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "studios",
			className: "section-anchor mx-auto max-w-6xl px-4 py-20 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Studios" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "max-w-xl font-display text-4xl sm:text-5xl",
						children: "Four rooms, one name."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/hub",
						className: "text-sm font-medium text-brand",
						children: "Open the hub"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-2",
					children: studios.map((studio) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/hub/$studio",
						params: { studio: studio.slug },
						className: "group overflow-hidden rounded-card border border-line bg-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: studio.image,
							alt: "",
							className: "h-48 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-[0.16em] text-gold uppercase",
									children: studio.color
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
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
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-line bg-card/50 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Process" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl",
						children: "How a job actually moves."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-8 grid gap-4 md:grid-cols-5",
						children: process.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-card border border-line bg-paper p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl text-brand",
									children: step.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 text-xl",
									children: step.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: step.text
								})
							]
						}, step.n))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "work",
			className: "section-anchor mx-auto max-w-6xl px-4 py-20 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Work" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl sm:text-5xl",
					children: "Recent projects"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFilter(cat),
						className: cn("min-h-11 rounded-full border px-4 text-sm", filter === cat ? "border-brand bg-brand text-on-brand" : "border-line"),
						children: cat
					}, cat))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-5 md:grid-cols-2",
					children: shown.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/work/$slug",
						params: { slug: project.slug },
						className: "group overflow-hidden rounded-card border border-line bg-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: project.cover,
							alt: "",
							className: "h-56 w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-3 text-xs tracking-[0.14em] text-gold uppercase",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.category }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.year })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "mt-2 flex items-center gap-2 font-display text-3xl",
									children: [project.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5 opacity-0 transition group-hover:opacity-100" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: project.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-xs text-muted",
									children: project.tech.join(" · ")
								})
							]
						})]
					}, project.slug))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "experience",
			className: "section-anchor bg-footer py-20 text-footer-fg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Experience" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl",
						children: "Since January 2021."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-8 space-y-6 border-l border-white/15 pl-6",
						children: experience.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs tracking-[0.14em] text-gold uppercase",
								children: [
									item.start,
									" — ",
									item.end
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-display text-2xl",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-footer-muted",
								children: item.org
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-xl text-sm text-footer-muted",
								children: item.text
							})
						] }, item.title))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "team",
			className: "section-anchor mx-auto max-w-6xl px-4 py-20 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Team" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 max-w-xl font-display text-4xl sm:text-5xl",
					children: "Code, design and the numbers."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted",
					children: "A client hiring these prices should see more than one pair of hands. Hide nothing: Benjamin leads, Abel designs, Godsway watches the data."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-3",
					children: team.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-card border border-line bg-card p-5",
						children: [
							member.photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: member.photo,
								alt: "",
								className: "h-24 w-24 rounded-full object-cover"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-24 w-24 place-items-center rounded-full bg-brand text-2xl text-on-brand",
								children: member.name.slice(0, 1)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-2xl",
								children: member.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-brand",
								children: member.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: member.bio
							})
						]
					}, member.name))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "testimonials",
			className: "section-anchor bg-card/60 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Clients" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl",
						children: "In their words."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 lg:grid-cols-3",
						children: testimonials.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "flex flex-col rounded-card border border-line bg-paper p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "flex-1 text-sm leading-relaxed text-ink",
								children: [
									"“",
									item.text,
									"”"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-5 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.avatar,
									alt: "",
									className: "h-11 w-11 rounded-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-medium",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs text-muted",
									children: item.role
								})] })]
							})]
						}, item.name))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "pricing",
			className: "section-anchor mx-auto max-w-6xl px-4 py-20 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Pricing" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl sm:text-5xl",
						children: "Start here. The real number follows the brief."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex rounded-full border border-line p-1",
						children: ["GHS", "USD"].map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => pickCurrency(code),
							className: cn("min-h-11 rounded-full px-4 text-sm", currency === code ? "bg-brand text-on-brand" : "text-muted"),
							children: code === "GHS" ? "GH₵" : "US$"
						}, code))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex gap-2 overflow-x-auto pb-1",
					children: pricingGroups.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setGroup(index),
						className: cn("min-h-11 shrink-0 rounded-full border px-4 text-sm", group === index ? "border-brand bg-brand text-on-brand" : "border-line"),
						children: item.name
					}, item.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted",
					children: activeGroup.blurb
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 lg:grid-cols-3",
					children: activeGroup.plans.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: cn("flex flex-col rounded-card border p-5", plan.featured ? "border-brand bg-card" : "border-line bg-card"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-3xl",
								children: plan.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: plan.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 font-display text-4xl tabular-nums",
								children: planPrice(plan, currency)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-[0.12em] text-gold uppercase",
								children: plan.delivery
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 flex-1 space-y-2 text-sm",
								children: plan.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "border-t border-line pt-2",
									children: feature
								}, feature))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `/?service=${encodeURIComponent(activeGroup.name)}&subject=${encodeURIComponent(`Quote: ${plan.name}`)}&budget=${encodeURIComponent(planPrice(plan, currency))}#contact`,
								className: "mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-brand text-sm font-medium text-on-brand",
								children: "Get a quote"
							})
						]
					}, plan.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-3xl text-sm text-muted",
					children: pricingNote
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "journal",
			className: "section-anchor bg-card/50 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Journal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl",
						children: "Notes from the practice."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/blog",
						className: "text-sm font-medium text-brand",
						children: "All notes"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-3",
					children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog/$slug",
						params: { slug: post.slug },
						className: "overflow-hidden rounded-card border border-line bg-paper",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: post.cover,
							alt: "",
							className: "h-40 w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-gold",
									children: post.date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display text-2xl",
									children: post.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: post.excerpt
								})
							]
						})]
					}, post.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "faq",
			className: "section-anchor mx-auto max-w-3xl px-4 py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "FAQ" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl",
					children: "Before you write."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 divide-y divide-line border-y border-line",
					children: faqs.map((item, index) => {
						const open = openFaq === index;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "flex min-h-14 w-full items-center justify-between gap-4 py-3 text-left",
							"aria-expanded": open,
							onClick: () => setOpenFaq(open ? -1 : index),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: item.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-brand",
								children: open ? "–" : "+"
							})]
						}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "pb-4 text-sm text-muted",
							children: item.a
						})] }, item.q);
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "contact",
			className: "section-anchor mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-[0.8fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Contact" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl sm:text-5xl",
					children: "Tell me the job."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "A paragraph is enough: what it is, who uses it, and when you need it. Quotes from the price list arrive with the subject already filled."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-6 space-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${profile.email}`,
								children: profile.email
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: profile.phoneHref,
								children: profile.phone
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-brand" }), profile.location]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-wrap gap-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-brand",
							href: profile.whatsapp,
							children: "WhatsApp"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-brand",
							href: "/book",
							children: "Book a time"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-brand",
							href: "/track",
							children: "Track a booking"
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, { seed })]
		})
	] });
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs tracking-[0.18em] text-gold uppercase",
		children
	});
}
function Fact({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-t border-line pt-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs tracking-[0.14em] text-muted uppercase",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1 text-sm",
			children: v
		})]
	});
}
function Index() {
	const seed = Route$8.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePage, { seed }) });
}
//#endregion
export { Index as component };

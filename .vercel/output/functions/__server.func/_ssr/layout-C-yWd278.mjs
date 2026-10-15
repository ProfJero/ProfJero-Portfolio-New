import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as RotateCcw, c as Monitor, f as Droplets, i as Settings2, l as Menu, r as Sun, s as Moon, t as X } from "../_libs/lucide-react.mjs";
import { c as PATTERNS, l as SWATCHES, u as useLook } from "./router-BPX34lc-.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/layout-C-yWd278.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CAREER_START = new Date(2021, 0, 1);
function yearsOfExperience(now = /* @__PURE__ */ new Date()) {
	let years = now.getFullYear() - CAREER_START.getFullYear();
	if (now.getMonth() < CAREER_START.getMonth()) years -= 1;
	return Math.max(years, 0);
}
function withYears(text, now = /* @__PURE__ */ new Date()) {
	return text.replaceAll("{years}", String(yearsOfExperience(now)));
}
var profile = {
	name: "Amoako Benjamin",
	brand: "ProfJero",
	title: "Software developer & IT trainer",
	location: "Cape Coast, Ghana",
	email: "profjero947@gmail.com",
	phone: "+233 531 207 256",
	phoneHref: "tel:+233531207256",
	whatsapp: "https://wa.me/233531207256",
	facebook: "https://www.facebook.com/profile.php?id=61585853362550",
	tiktok: "https://www.tiktok.com/@profjero",
	site: "https://profjero.pages.dev",
	portrait: "/media/portrait.jpg",
	logo: "/media/profjero-logo.png",
	hero: "/media/hero.jpg",
	announcement: "Taking new websites, business systems and training from Cape Coast — reply usually within a day."
};
var skills = [
	{
		name: "HTML",
		level: 95,
		group: "Web"
	},
	{
		name: "CSS",
		level: 92,
		group: "Web"
	},
	{
		name: "JavaScript",
		level: 86,
		group: "Web"
	},
	{
		name: "React",
		level: 75,
		group: "Web"
	},
	{
		name: "PHP",
		level: 78,
		group: "Server"
	},
	{
		name: "WordPress",
		level: 80,
		group: "Web"
	},
	{
		name: "Node.js",
		level: 82,
		group: "Server"
	},
	{
		name: "Databases",
		level: 80,
		group: "Server"
	},
	{
		name: "Graphic design",
		level: 84,
		group: "Design"
	}
];
var studios = [
	{
		slug: "digital",
		name: "Digital Studio",
		tagline: "Websites, systems and the software a business actually runs on.",
		color: "Web & software",
		image: "/media/api.jpg",
		services: [
			{
				title: "Websites",
				text: "Clear, fast sites for churches, schools, shops and personal brands."
			},
			{
				title: "Business systems",
				text: "POS, admin portals, assessments and the screens staff use every day."
			},
			{
				title: "APIs & data",
				text: "Secure backends, reports and the joins between tools you already have."
			}
		],
		packages: [{
			name: "Brochure site",
			price: "from GH₵ 4,500",
			detail: "A focused site with contact and the pages you need to be found."
		}, {
			name: "Working system",
			price: "from GH₵ 22,000",
			detail: "Logins, records and a desk your team can trust."
		}],
		faqs: [{
			q: "Can you work with a site I already have?",
			a: "Yes. A repair, a redesign, or a system beside the old site — we start from what is already there."
		}, {
			q: "Do you train my staff?",
			a: "Handover includes a walkthrough. Longer training sits under the Training prices."
		}]
	},
	{
		slug: "creative",
		name: "Creative Studio",
		tagline: "Product branding — mugs, shirts, awards, signage and the look around them.",
		color: "Product branding",
		image: "/media/branding.jpg",
		services: [
			{
				title: "Marks & layouts",
				text: "A logo treatment, colours and type that still work on a shirt and a sign."
			},
			{
				title: "Merchandise",
				text: "Mugs, tees, caps, notebooks and awards, quoted per piece and quantity."
			},
			{
				title: "Print",
				text: "Banners, cards and shopfront pieces with files ready for the printer."
			}
		],
		packages: [{
			name: "Brand starter",
			price: "quoted",
			detail: "Mark, colours and one merchandise sample direction."
		}, {
			name: "Run of products",
			price: "per quantity",
			detail: "Tell us the item and the number. A quote comes back with a lead time."
		}],
		faqs: [{
			q: "Can I order 100 mugs?",
			a: "Yes. Use Request a quote on this page or the booking form and include the quantity."
		}, {
			q: "Do you print in Cape Coast?",
			a: "Design is done in-house. Printing is placed with a press that fits the job."
		}],
		products: [
			{
				name: "Ceramic mug",
				note: "Full-colour wrap, from 12 pieces"
			},
			{
				name: "Cotton shirt",
				note: "Screen or DTF, sizes mixed"
			},
			{
				name: "Cap",
				note: "Embroidery or print"
			},
			{
				name: "Acrylic award",
				note: "Names, events, staff recognition"
			},
			{
				name: "Notebook",
				note: "Branded cover, bulk for training rooms"
			},
			{
				name: "Shop signage",
				note: "Banner, roll-up or wall panel"
			}
		]
	},
	{
		slug: "nourish",
		name: "Nourish Studio",
		tagline: "Food, menus and the simple systems around a kitchen or wellness offer.",
		color: "Food & wellness",
		image: "/media/harvest.jpg",
		services: [
			{
				title: "Menu & story",
				text: "A clear offer people can read, not a cluttered list of everything you cook."
			},
			{
				title: "Order desk",
				text: "A page or WhatsApp flow so enquiries do not live only in a chat you cannot search."
			},
			{
				title: "Labels",
				text: "Packaging direction for products you sell by the jar, bag or plate."
			}
		],
		packages: [{
			name: "Menu site",
			price: "from GH₵ 4,500",
			detail: "Dishes, location, hours and a way to reach you."
		}, {
			name: "Product line",
			price: "quoted",
			detail: "Labels plus a small catalogue page."
		}],
		faqs: [{
			q: "Is this a restaurant chain?",
			a: "No. Nourish is the studio for food and wellness work under the ProfJero name."
		}]
	},
	{
		slug: "agro",
		name: "Agro Studio",
		tagline: "Farm records, produce stories and practical tools for growers.",
		color: "Agriculture",
		image: "/media/rural.jpg",
		services: [
			{
				title: "Farm profile",
				text: "A page that explains what you grow, where, and how to buy."
			},
			{
				title: "Records",
				text: "Simple tracking for seasons, stock and buyers — not a lecture in software."
			},
			{
				title: "Training",
				text: "Sessions for groups who want spreadsheets and phones to do real work."
			}
		],
		packages: [{
			name: "Grower page",
			price: "from GH₵ 4,500",
			detail: "Story, photos and contact."
		}, {
			name: "Season desk",
			price: "from GH₵ 9,500",
			detail: "A small system for stock and buyers."
		}],
		faqs: [{
			q: "Do you visit farms?",
			a: "Cape Coast and nearby, yes. Farther work can start on a call."
		}]
	}
];
var projects = [
	{
		slug: "rural-tech-hub",
		title: "Rural Tech Hub",
		category: "Systems",
		year: "2025",
		client: "Rural Tech Hub",
		summary: "Official site, assessment platform and admin portal for training, learners and day-to-day operations.",
		cover: "/media/rural.jpg",
		tech: [
			"Web app",
			"Admin",
			"Assessments"
		],
		story: ["Rural Tech Hub needed more than a brochure. Training, learners, assessments and administration were slipping between paper and chat.", "The build covers the public site, an assessment flow and an admin portal so the team can see who is learning and what still needs marking."],
		outcome: "Staff manage training, learners and assessments in one place instead of rebuilding the picture every week.",
		quote: {
			by: "Rural Tech Hub",
			text: "ProfJero played a key role in building Rural Tech Hub's official website, assessment platform, and admin portal. His ability to translate our ideas into functional, user-friendly system greatly improved how we manage training, learners, assessments and administration, track progress and organize operations. The solutions delivered were practical, reliable, and well-structured."
		}
	},
	{
		slug: "parish-website",
		title: "Parish website",
		category: "Websites",
		year: "2025",
		client: "Rev. Eric",
		summary: "A church site members can actually use — sermons, events and updates, without a manual.",
		cover: "/media/church.jpg",
		tech: [
			"Website",
			"Content",
			"Mobile"
		],
		story: ["The brief was simple and strict: the site should feel like the church, and members should find sermons, events and news without asking someone to forward a message.", "The result is a calm layout, easy updates, and a front door that matches the congregation rather than a generic template."],
		outcome: "Members reach sermons, events and updates on their own.",
		quote: {
			by: "Rev. Eric",
			text: "Working with ProfJero to build our Church website has been a true blessing. The design is clean, modern, and beautifully reflects our mission and values. Members can now access sermons, events, and updates with ease. His dedication, creativity, and technical skill brought our vision to life in a way that feels both professional and personal. We are truly grateful."
		}
	},
	{
		slug: "pharmacy-pos",
		title: "Pharmacy POS",
		category: "Systems",
		year: "2025",
		client: "Edmond",
		summary: "Stock, sales and the daily report for a pharmacy counter — fast enough to use while a customer is waiting.",
		cover: "/media/pharmacy.jpg",
		tech: [
			"POS",
			"Stock",
			"Reports"
		],
		demo: "pos",
		story: ["The counter could not wait on a slow system. Stock had to move when a sale moved, and the evening report had to be a click, not a reconstruction.", "Try the counter below. It is a small working slice: add a sale, watch stock fall, and read the day's takings. A full install is quoted to the shop."],
		outcome: "Daily sales and stock sit one click apart.",
		quote: {
			by: "Edmond",
			text: "Since ProfJero deployed our new POS system, managing our pharmacy has been smoother. From tracking stock levels to generating daily sales reports, everything is now just a click away. It's very fast and reliable. He understood our needs, delivered on time, and exceeded expectations. This system has truly transformed how we run our business."
		}
	},
	{
		slug: "secure-api",
		title: "Secure REST API",
		category: "Platforms",
		year: "2024",
		client: "Product build",
		summary: "A backend with JWT authentication, rate limiting and Swagger documentation, built to be handed to another developer.",
		cover: "/media/api.jpg",
		tech: [
			"Node.js",
			"Express",
			"PostgreSQL"
		],
		story: ["Some products should not start in a page builder. This API is the unglamorous middle: who is signed in, how often they can call, and a document another developer can read.", "JWT for access, limits so one client cannot drown the rest, and Swagger so the contract is not a rumour."],
		outcome: "A backend another developer can run without a tour of the author's head."
	}
];
var experience = [{
	type: "work",
	title: "Independent developer & trainer",
	org: "ProfJero",
	start: "Jan 2021",
	end: "Now",
	text: "Websites, business systems, branding support and hands-on IT training for clients across Ghana."
}, {
	type: "education",
	title: "Information Technology",
	org: "Degree",
	start: "Studies",
	end: "Completed",
	text: "Programming, web development, databases and the design tools that still show up in the work."
}];
var team = [
	{
		name: "Benjamin Amoako",
		role: "Founder · software & training",
		studio: "All studios",
		photo: "/media/portrait.jpg",
		bio: "The person on the call. Builds the systems, teaches the room, and signs the work."
	},
	{
		name: "Abel",
		role: "Design",
		studio: "Creative",
		photo: "",
		bio: "Layouts, brand pieces and the visual side of a job that also has to function."
	},
	{
		name: "Godsway",
		role: "Data",
		studio: "Digital",
		photo: "",
		bio: "The sheets, reports and checks that keep a system honest after launch."
	}
];
var testimonials = [
	{
		name: "Rural Tech Hub",
		role: "Training platform",
		avatar: "/media/05.png",
		text: "ProfJero played a key role in building Rural Tech Hub's official website, assessment platform, and admin portal. His ability to translate our ideas into functional, user-friendly system greatly improved how we manage training, learners, assessments and administration, track progress and organize operations. The solutions delivered were practical, reliable, and well-structured."
	},
	{
		name: "Rev. Eric",
		role: "Church website",
		avatar: "/media/client-a.jpg",
		text: "Working with ProfJero to build our Church website has been a true blessing. The design is clean, modern, and beautifully reflects our mission and values. Members can now access sermons, events, and updates with ease. His dedication, creativity, and technical skill brought our vision to life in a way that feels both professional and personal. We are truly grateful."
	},
	{
		name: "Edmond",
		role: "Pharmacy POS",
		avatar: "/media/client-b.jpg",
		text: "Since ProfJero deployed our new POS system, managing our pharmacy has been smoother. From tracking stock levels to generating daily sales reports, everything is now just a click away. It's very fast and reliable. He understood our needs, delivered on time, and exceeded expectations. This system has truly transformed how we run our business."
	}
];
var pricingGroups = [
	{
		name: "Websites",
		blurb: "A public site with a clear job.",
		plans: [
			{
				name: "Starter",
				tagline: "A tight site for a person, parish or small shop.",
				priceGhs: 4500,
				priceUsd: 300,
				delivery: "1–2 weeks",
				features: [
					"Up to 5 pages",
					"Mobile layout",
					"Contact path",
					"Basic SEO"
				]
			},
			{
				name: "Business",
				tagline: "More room for services, proof and updates.",
				priceGhs: 9500,
				priceUsd: 640,
				delivery: "2–4 weeks",
				featured: true,
				features: [
					"Custom layout",
					"Gallery or journal",
					"WhatsApp & forms",
					"Handover session"
				]
			},
			{
				name: "E-commerce / booking",
				tagline: "People can buy, book or request without a phone tag.",
				priceGhs: 16e3,
				priceUsd: 1050,
				delivery: "3–6 weeks",
				features: [
					"Catalogue or slots",
					"Enquiry or checkout",
					"Admin for you",
					"Launch support"
				]
			}
		]
	},
	{
		name: "Web apps & systems",
		blurb: "Software your staff open on a Tuesday morning.",
		plans: [
			{
				name: "Business system",
				tagline: "Records, roles and a daily report.",
				priceGhs: 22e3,
				priceUsd: 1450,
				delivery: "4–8 weeks",
				features: [
					"Sign-in",
					"Core records",
					"One main report",
					"Staff walkthrough"
				]
			},
			{
				name: "Custom platform",
				tagline: "Several desks, rules and a longer life.",
				priceGhs: 45e3,
				priceUsd: 2950,
				delivery: "8–14 weeks",
				featured: true,
				features: [
					"Multiple roles",
					"Workflows",
					"Exports",
					"Staged rollout"
				]
			},
			{
				name: "Enterprise",
				tagline: "When the organisation, not a single counter, is the client.",
				priceGhs: 9e4,
				priceUsd: 5900,
				prefix: "from",
				delivery: "Scoped",
				features: [
					"Discovery first",
					"Integrations",
					"Training plan",
					"Care option"
				]
			}
		]
	},
	{
		name: "Care & hosting",
		blurb: "Monthly. So the site does not rot in a drawer.",
		plans: [
			{
				name: "Keep",
				tagline: "Hosting watch, small text edits, a human if it breaks.",
				priceGhs: 650,
				priceUsd: 45,
				period: "/ month",
				delivery: "Ongoing",
				features: [
					"Uptime watch",
					"Minor edits",
					"Monthly note"
				]
			},
			{
				name: "Tend",
				tagline: "For a site that changes and a shop that asks questions.",
				priceGhs: 1500,
				priceUsd: 100,
				period: "/ month",
				delivery: "Ongoing",
				featured: true,
				features: [
					"Priority replies",
					"Content updates",
					"Backups",
					"Small improvements"
				]
			},
			{
				name: "Run",
				tagline: "A system with users, not just a homepage.",
				priceGhs: 3500,
				priceUsd: 230,
				period: "/ month",
				delivery: "Ongoing",
				features: [
					"System care",
					"Report checks",
					"Scheduled calls",
					"Change budget"
				]
			}
		]
	},
	{
		name: "Training",
		blurb: "Rooms, not slide decks left on a desk.",
		plans: [
			{
				name: "Coaching",
				tagline: "One person, one stack, a month of practice.",
				priceGhs: 2500,
				priceUsd: 165,
				period: "/ month",
				delivery: "4 weeks",
				features: [
					"Weekly session",
					"Exercises",
					"Review of your work"
				]
			},
			{
				name: "12-week bootcamp",
				tagline: "Web foundations through a small project you can show.",
				priceGhs: 6e3,
				priceUsd: 400,
				delivery: "12 weeks",
				featured: true,
				features: [
					"HTML, CSS, JavaScript",
					"A finished project",
					"Feedback on the work"
				]
			},
			{
				name: "Corporate",
				tagline: "A team, a room, a specific tool.",
				priceGhs: 5e3,
				priceUsd: 330,
				prefix: "from",
				period: "/ day",
				delivery: "By arrangement",
				features: [
					"On-site or remote",
					"Your examples",
					"Leave-behind notes"
				]
			}
		]
	}
];
var pricingNote = "Half to start. MoMo, bank transfer and card are accepted. The rest is due before handover, unless a care plan says otherwise. These are starting prices for an experienced full-stack developer in Ghana in 2026 — not a market survey. The number on your job is the one we agree after a look at the work.";
var process = [
	{
		n: "01",
		title: "Listen",
		text: "What the work is for, who uses it, and what failure would cost."
	},
	{
		n: "02",
		title: "Shape",
		text: "A scope, a price and a date. No fog about what is in and what is later."
	},
	{
		n: "03",
		title: "Build",
		text: "You see it while it is being made, not as a surprise on the last day."
	},
	{
		n: "04",
		title: "Hand over",
		text: "A walkthrough so the system is not trapped in one person's head."
	},
	{
		n: "05",
		title: "Stay",
		text: "Optional care, if you want someone still answering after launch."
	}
];
var faqs = [
	{
		q: "Where do you work from?",
		a: "Cape Coast. Clients are across Ghana. Calls and screen-shares cover the distance; visits when the job needs a room."
	},
	{
		q: "How does payment work?",
		a: "50% to start, the balance before handover. MoMo, bank and card. Care plans are monthly."
	},
	{
		q: "Will I be able to edit it myself?",
		a: "If you want to. Sites can be handed over with a simple way to change text and photos. Systems come with a walkthrough for the people who will use them."
	},
	{
		q: "Do you only write code?",
		a: "No. The same desk covers graphic design, WordPress, data and training. Larger jobs can pull Abel on design and Godsway on data."
	},
	{
		q: "Can you embed a video on a project?",
		a: "Yes — YouTube or TikTok. On a case study the film sits with the work, not on a separate tab you have to hunt for."
	},
	{
		q: "What if I only need a repair?",
		a: "Say so in the form. A broken form, a slow page or a report that lies is a valid job. It does not have to be a rebuild."
	}
];
var posts = [
	{
		slug: "front-end-and-back-end",
		title: "Front-end and back-end, without the fog",
		excerpt: "One is what a person touches. The other is what remembers, checks and refuses. Most real jobs need both.",
		date: "2026-02-12",
		category: "Practice",
		cover: "/media/blog-banner02.jpg",
		minutes: 4,
		body: [
			{
				t: "p",
				text: "People hire a website and then discover they hired two jobs. The front-end is the part a visitor sees and taps: type, colour, the order of a form, whether the page still makes sense on a phone in the sun. The back-end is the part that remembers who they are, stores the record, and decides what they are allowed to do."
			},
			{
				t: "h",
				text: "What the visitor feels"
			},
			{
				t: "p",
				text: "A front-end can be beautiful and still fail. If the button is pretty and the form forgets the message, the beauty did not do its job. I treat layout as a way of making the next step obvious — call, book, pay, read the sermon, see the stock."
			},
			{
				t: "h",
				text: "What the business feels a month later"
			},
			{
				t: "p",
				text: "The back-end shows up when there is more than one person, or more than one day. A pharmacy that cannot count stock, a school that cannot list learners, a church that cannot find last month's notice. That is server-side work: a database, rules, and a screen for the people who run the place."
			},
			{
				t: "p",
				text: "If you are commissioning work, ask which of the two you need. A five-page site is mostly front-end. A POS, an assessment portal or a client desk is both. Pricing them the same is how projects go sour."
			}
		]
	},
	{
		slug: "choosing-a-web-framework",
		title: "Choosing a framework after the brochure",
		excerpt: "React, WordPress, plain HTML. The right one is the one your next maintainer can live with.",
		date: "2026-03-03",
		category: "Practice",
		cover: "/media/blog-banner04.jpg",
		minutes: 5,
		body: [
			{
				t: "p",
				text: "A framework is a set of decisions someone else already made: how pages are built, how data moves, how a second developer finds the button. It is not a personality. Clients rarely need a framework. They need a site that loads, a form that arrives, and a person who can change the phone number in a year."
			},
			{
				t: "h",
				text: "When WordPress is the honest answer"
			},
			{
				t: "p",
				text: "Editors who will publish often, a pile of pages, and no custom rules. WordPress still earns its place there. I use it when the client should be able to write without calling me, and when the design can live inside a theme we actually control."
			},
			{
				t: "h",
				text: "When a framework earns the weight"
			},
			{
				t: "p",
				text: "Sign-in, roles, records, reports. Then React or a similar UI layer, with a real backend, stops being fashion. The cost is that casual editing is harder, and the person who inherits the code needs to be a developer. I say that before the invoice, not after."
			},
			{
				t: "h",
				text: "When neither is required"
			},
			{
				t: "p",
				text: "A short, fast page can be HTML, CSS and a little JavaScript. Less to break. Less to explain. If the job is a single story and a contact form, I will not invent an architecture to admire."
			}
		]
	},
	{
		slug: "wordpress-when-it-fits",
		title: "WordPress, when it fits and when it does not",
		excerpt: "It runs a huge share of the web for a reason. It is still the wrong tool for a counter that sells medicine.",
		date: "2026-04-18",
		category: "Practice",
		cover: "/media/blog-banner01.jpg",
		minutes: 4,
		body: [
			{
				t: "p",
				text: "WordPress became popular because a non-developer can publish. That is still its best trick. Pages, posts, a menu, a contact form, a gallery of work. For a parish, a trainer or a small brand, that is often the whole job."
			},
			{
				t: "h",
				text: "Where it starts to lie"
			},
			{
				t: "p",
				text: "Plugin stacks that nobody can name. A checkout held together by three subscriptions. A 'system' that is really five plugins arguing. When the work is stock, roles and a daily total, I would rather build the small system than decorate WordPress until it resembles one."
			},
			{
				t: "h",
				text: "How I leave it"
			},
			{
				t: "p",
				text: "Few plugins, a theme we can read, and a note of what to update. The client gets a login and a short session. If they want me to keep the updates, that is a care plan, priced in the open — not a surprise retainer."
			}
		]
	}
];
function formatMoney(amount, currency) {
	const formatted = new Intl.NumberFormat("en-GH", { maximumFractionDigits: 0 }).format(amount);
	return currency === "GHS" ? `GH₵ ${formatted}` : `US$ ${formatted}`;
}
function planPrice(plan, currency) {
	const core = formatMoney(currency === "GHS" ? plan.priceGhs : plan.priceUsd, currency);
	return `${plan.prefix ? `${plan.prefix} ` : ""}${core}${plan.period ?? ""}`;
}
var timeSlots = [
	"08:00",
	"09:30",
	"11:00",
	"13:00",
	"15:00",
	"17:00"
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var NAV = [
	{
		href: "/#work",
		label: "Work"
	},
	{
		href: "/#studios",
		label: "Studios"
	},
	{
		href: "/#pricing",
		label: "Pricing"
	},
	{
		href: "/blog",
		label: "Journal"
	},
	{
		href: "/hub",
		label: "Hub"
	}
];
function Shell({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [bar, setBar] = (0, import_react.useState)(true);
	const path = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [path]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "site-frame text-ink",
		children: [
			bar && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-50 bg-brand text-on-brand",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "min-w-0",
						children: profile.announcement
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid h-9 w-9 shrink-0 place-items-center rounded-full hover:bg-white/15",
						"aria-label": "Dismiss announcement",
						onClick: () => setBar(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-line bg-paper/92 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							search: {
								service: "",
								subject: "",
								budget: ""
							},
							className: "flex items-center gap-2 font-display text-xl tracking-tight text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: profile.logo,
								alt: "",
								className: "h-9 w-9 rounded-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ProfJero" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-6 md:flex",
							children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: item.href,
								className: "text-sm text-muted hover:text-ink",
								children: item.label
							}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/#contact",
								className: "inline-flex min-h-11 items-center rounded-full bg-brand px-4 text-sm font-medium text-on-brand",
								children: "Hire me"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid h-11 w-11 place-items-center rounded-full text-ink md:hidden",
							"aria-label": open ? "Close menu" : "Open menu",
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						})
					]
				}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-line bg-paper px-4 py-3 md:hidden",
					children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "flex min-h-11 items-center text-base",
						children: item.label
					}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#contact",
						className: "flex min-h-11 items-center font-medium text-brand",
						children: "Hire me"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "bg-footer text-footer-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl",
								children: "ProfJero"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 max-w-sm text-footer-muted",
								children: [
									profile.name,
									". Websites, systems, branding and training from ",
									profile.location,
									"."
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.16em] text-gold uppercase",
							children: "Visit"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 space-y-2 text-sm text-footer-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "hover:text-footer-fg",
									href: "/#work",
									children: "Work"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "hover:text-footer-fg",
									href: "/hub",
									children: "Hub"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "hover:text-footer-fg",
									href: "/blog",
									children: "Journal"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "hover:text-footer-fg",
									href: "/book",
									children: "Book a call"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "hover:text-footer-fg",
									href: "/desk",
									children: "Desk"
								}) })
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.16em] text-gold uppercase",
							children: "Direct"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 space-y-2 text-sm text-footer-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "hover:text-footer-fg",
									href: profile.phoneHref,
									children: profile.phone
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "hover:text-footer-fg",
									href: `mailto:${profile.email}`,
									children: profile.email
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "hover:text-footer-fg",
									href: profile.whatsapp,
									children: "WhatsApp"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "hover:text-footer-fg",
									href: profile.tiktok,
									children: "TikTok"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "hover:text-footer-fg",
									href: profile.facebook,
									children: "Facebook"
								}) })
							]
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-white/10 px-4 py-4 text-center text-xs text-footer-muted",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ProfJero. Cape Coast."
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Customize, {})
		]
	});
}
function Customize() {
	const { look, setLook, reset } = useLook();
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-expanded": open,
		"aria-label": "Customize appearance",
		onClick: () => setOpen((v) => !v),
		className: "fixed top-1/2 left-0 z-50 grid h-12 w-11 -translate-y-1/2 place-items-center rounded-r-2xl bg-brand text-on-brand shadow-lg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, { className: "h-5 w-5" })
	}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "hidden flex-1 bg-ink/30 sm:block",
				"aria-label": "Close customize",
				onClick: () => setOpen(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "flex h-full w-full max-w-sm flex-col overflow-y-auto border-r border-line bg-card p-5 text-ink shadow-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.16em] text-gold uppercase",
							children: "This device"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl",
							children: "Customize"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Close",
							className: "grid h-11 w-11 place-items-center",
							onClick: () => setOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Your choices stay in this browser. They do not change the site for anyone else."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm font-medium",
						children: "Theme colour"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid grid-cols-6 gap-2",
						children: SWATCHES.map((swatch) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": swatch.name,
							title: swatch.name,
							onClick: () => setLook({ color: swatch.hex }),
							className: cn("h-11 rounded-full border-2", look.color.toLowerCase() === swatch.hex ? "border-ink" : "border-transparent"),
							style: { background: swatch.hex }
						}, swatch.hex))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-3 flex items-center justify-between gap-3 text-sm",
						children: ["Custom", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "color",
							value: look.color,
							"aria-label": "Custom colour",
							onChange: (e) => setLook({ color: e.target.value }),
							className: "h-11 w-16 cursor-pointer bg-transparent"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm font-medium",
						children: "Colour mode"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 grid grid-cols-3 gap-2",
						children: [
							[
								"light",
								"Light",
								Sun
							],
							[
								"dark",
								"Dark",
								Moon
							],
							[
								"auto",
								"Auto",
								Monitor
							]
						].map(([id, label, Icon]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setLook({ mode: id }),
							className: cn("flex min-h-11 flex-col items-center justify-center gap-1 rounded-2xl border text-xs", look.mode === id ? "border-brand bg-brand text-on-brand" : "border-line"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" }), label]
						}, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm font-medium",
						children: "Layout"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 grid grid-cols-2 gap-2",
						children: ["full", "boxed"].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setLook({ layout: id }),
							className: cn("min-h-11 rounded-2xl border capitalize", look.layout === id ? "border-brand bg-brand text-on-brand" : "border-line"),
							children: id === "full" ? "Full width" : "Boxed"
						}, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm font-medium",
						children: "Background"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 grid grid-cols-3 gap-2",
						children: PATTERNS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setLook({ pattern: id }),
							className: cn("min-h-11 rounded-2xl border text-xs capitalize", look.pattern === id ? "border-brand bg-brand text-on-brand" : "border-line"),
							children: id
						}, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-6 block text-sm font-medium",
						children: [
							"Hero darkness · ",
							Math.round(look.overlay * 100),
							"%",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: .25,
								max: .75,
								step: .01,
								value: look.overlay,
								onChange: (e) => setLook({ overlay: Number(e.target.value) }),
								className: "mt-2 w-full accent-[var(--color-brand)]"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setLook({ water: !look.water }),
						className: "mt-4 flex min-h-11 items-center justify-between rounded-2xl border border-line px-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Droplets, { className: "h-4 w-4" }), " Water ripple"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: look.water ? "text-brand" : "text-muted",
							children: look.water ? "On" : "Off"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: reset,
						className: "mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" }), " Reset to ProfJero blue"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "flex-1 bg-ink/30 sm:hidden",
				"aria-label": "Close customize",
				onClick: () => setOpen(false)
			})
		]
	})] });
}
//#endregion
export { timeSlots as _, formatMoney as a, pricingGroups as c, profile as d, projects as f, testimonials as g, team as h, faqs as i, pricingNote as l, studios as m, cn as n, planPrice as o, skills as p, experience as r, posts as s, Shell as t, process as u, withYears as v, yearsOfExperience as y };

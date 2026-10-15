export const CAREER_START = new Date(2021, 0, 1);

export function yearsOfExperience(now = new Date()) {
  let years = now.getFullYear() - CAREER_START.getFullYear();
  if (now.getMonth() < CAREER_START.getMonth()) years -= 1;
  return Math.max(years, 0);
}

export function withYears(text: string, now = new Date()) {
  return text.replaceAll("{years}", String(yearsOfExperience(now)));
}

export const profile = {
  name: "Amoako Benjamin",
  brand: "ProfJero",
  title: "Software developer & IT trainer",
  location: "Cape Coast, Ghana",
  email: "profjero947@gmail.com",
  phone: "+233 531 207 256",
  phoneHref: "tel:+233531207256",
  whatsapp: "https://wa.me/233531207256",
  facebook:
    "https://www.facebook.com/profile.php?id=61585853362550",
  tiktok: "https://www.tiktok.com/@profjero",
  site: "https://profjero.pages.dev",
  portrait: "/media/portrait.jpg",
  logo: "/media/profjero-logo.png",
  hero: "/media/hero.jpg",
  announcement:
    "Taking new websites, business systems and training from Cape Coast — reply usually within a day.",
};

export const skills: { name: string; level: number; group: string }[] = [
  { name: "HTML", level: 95, group: "Web" },
  { name: "CSS", level: 92, group: "Web" },
  { name: "JavaScript", level: 86, group: "Web" },
  { name: "React", level: 75, group: "Web" },
  { name: "PHP", level: 78, group: "Server" },
  { name: "WordPress", level: 80, group: "Web" },
  { name: "Node.js", level: 82, group: "Server" },
  { name: "Databases", level: 80, group: "Server" },
  { name: "Graphic design", level: 84, group: "Design" },
];

export const studios = [
  {
    slug: "digital",
    name: "Digital Studio",
    tagline: "Websites, systems and the software a business actually runs on.",
    color: "Web & software",
    image: "/media/api.jpg",
    services: [
      { title: "Websites", text: "Clear, fast sites for churches, schools, shops and personal brands." },
      { title: "Business systems", text: "POS, admin portals, assessments and the screens staff use every day." },
      { title: "APIs & data", text: "Secure backends, reports and the joins between tools you already have." },
    ],
    packages: [
      { name: "Brochure site", price: "from GH₵ 4,500", detail: "A focused site with contact and the pages you need to be found." },
      { name: "Working system", price: "from GH₵ 22,000", detail: "Logins, records and a desk your team can trust." },
    ],
    faqs: [
      { q: "Can you work with a site I already have?", a: "Yes. A repair, a redesign, or a system beside the old site — we start from what is already there." },
      { q: "Do you train my staff?", a: "Handover includes a walkthrough. Longer training sits under the Training prices." },
    ],
  },
  {
    slug: "creative",
    name: "Creative Studio",
    tagline: "Product branding — mugs, shirts, awards, signage and the look around them.",
    color: "Product branding",
    image: "/media/branding.jpg",
    services: [
      { title: "Marks & layouts", text: "A logo treatment, colours and type that still work on a shirt and a sign." },
      { title: "Merchandise", text: "Mugs, tees, caps, notebooks and awards, quoted per piece and quantity." },
      { title: "Print", text: "Banners, cards and shopfront pieces with files ready for the printer." },
    ],
    packages: [
      { name: "Brand starter", price: "quoted", detail: "Mark, colours and one merchandise sample direction." },
      { name: "Run of products", price: "per quantity", detail: "Tell us the item and the number. A quote comes back with a lead time." },
    ],
    faqs: [
      { q: "Can I order 100 mugs?", a: "Yes. Use Request a quote on this page or the booking form and include the quantity." },
      { q: "Do you print in Cape Coast?", a: "Design is done in-house. Printing is placed with a press that fits the job." },
    ],
    products: [
      { name: "Ceramic mug", note: "Full-colour wrap, from 12 pieces" },
      { name: "Cotton shirt", note: "Screen or DTF, sizes mixed" },
      { name: "Cap", note: "Embroidery or print" },
      { name: "Acrylic award", note: "Names, events, staff recognition" },
      { name: "Notebook", note: "Branded cover, bulk for training rooms" },
      { name: "Shop signage", note: "Banner, roll-up or wall panel" },
    ],
  },
  {
    slug: "nourish",
    name: "Nourish Studio",
    tagline: "Food, menus and the simple systems around a kitchen or wellness offer.",
    color: "Food & wellness",
    image: "/media/harvest.jpg",
    services: [
      { title: "Menu & story", text: "A clear offer people can read, not a cluttered list of everything you cook." },
      { title: "Order desk", text: "A page or WhatsApp flow so enquiries do not live only in a chat you cannot search." },
      { title: "Labels", text: "Packaging direction for products you sell by the jar, bag or plate." },
    ],
    packages: [
      { name: "Menu site", price: "from GH₵ 4,500", detail: "Dishes, location, hours and a way to reach you." },
      { name: "Product line", price: "quoted", detail: "Labels plus a small catalogue page." },
    ],
    faqs: [
      { q: "Is this a restaurant chain?", a: "No. Nourish is the studio for food and wellness work under the ProfJero name." },
    ],
  },
  {
    slug: "agro",
    name: "Agro Studio",
    tagline: "Farm records, produce stories and practical tools for growers.",
    color: "Agriculture",
    image: "/media/rural.jpg",
    services: [
      { title: "Farm profile", text: "A page that explains what you grow, where, and how to buy." },
      { title: "Records", text: "Simple tracking for seasons, stock and buyers — not a lecture in software." },
      { title: "Training", text: "Sessions for groups who want spreadsheets and phones to do real work." },
    ],
    packages: [
      { name: "Grower page", price: "from GH₵ 4,500", detail: "Story, photos and contact." },
      { name: "Season desk", price: "from GH₵ 9,500", detail: "A small system for stock and buyers." },
    ],
    faqs: [
      { q: "Do you visit farms?", a: "Cape Coast and nearby, yes. Farther work can start on a call." },
    ],
  },
] as const;

export type Studio = (typeof studios)[number];

export const projects = [
  {
    slug: "rural-tech-hub",
    title: "Rural Tech Hub",
    category: "Systems",
    year: "2025",
    client: "Rural Tech Hub",
    summary:
      "Official site, assessment platform and admin portal for training, learners and day-to-day operations.",
    cover: "/media/rural.jpg",
    tech: ["Web app", "Admin", "Assessments"],
    story: [
      "Rural Tech Hub needed more than a brochure. Training, learners, assessments and administration were slipping between paper and chat.",
      "The build covers the public site, an assessment flow and an admin portal so the team can see who is learning and what still needs marking.",
    ],
    outcome:
      "Staff manage training, learners and assessments in one place instead of rebuilding the picture every week.",
    quote: {
      by: "Rural Tech Hub",
      text: "ProfJero played a key role in building Rural Tech Hub's official website, assessment platform, and admin portal. His ability to translate our ideas into functional, user-friendly system greatly improved how we manage training, learners, assessments and administration, track progress and organize operations. The solutions delivered were practical, reliable, and well-structured.",
    },
  },
  {
    slug: "parish-website",
    title: "Parish website",
    category: "Websites",
    year: "2025",
    client: "Rev. Eric",
    summary:
      "A church site members can actually use — sermons, events and updates, without a manual.",
    cover: "/media/church.jpg",
    tech: ["Website", "Content", "Mobile"],
    story: [
      "The brief was simple and strict: the site should feel like the church, and members should find sermons, events and news without asking someone to forward a message.",
      "The result is a calm layout, easy updates, and a front door that matches the congregation rather than a generic template.",
    ],
    outcome: "Members reach sermons, events and updates on their own.",
    quote: {
      by: "Rev. Eric",
      text: "Working with ProfJero to build our Church website has been a true blessing. The design is clean, modern, and beautifully reflects our mission and values. Members can now access sermons, events, and updates with ease. His dedication, creativity, and technical skill brought our vision to life in a way that feels both professional and personal. We are truly grateful.",
    },
  },
  {
    slug: "pharmacy-pos",
    title: "Pharmacy POS",
    category: "Systems",
    year: "2025",
    client: "Edmond",
    summary:
      "Stock, sales and the daily report for a pharmacy counter — fast enough to use while a customer is waiting.",
    cover: "/media/pharmacy.jpg",
    tech: ["POS", "Stock", "Reports"],
    demo: "pos" as const,
    story: [
      "The counter could not wait on a slow system. Stock had to move when a sale moved, and the evening report had to be a click, not a reconstruction.",
      "Try the counter below. It is a small working slice: add a sale, watch stock fall, and read the day's takings. A full install is quoted to the shop.",
    ],
    outcome: "Daily sales and stock sit one click apart.",
    quote: {
      by: "Edmond",
      text: "Since ProfJero deployed our new POS system, managing our pharmacy has been smoother. From tracking stock levels to generating daily sales reports, everything is now just a click away. It's very fast and reliable. He understood our needs, delivered on time, and exceeded expectations. This system has truly transformed how we run our business.",
    },
  },
  {
    slug: "secure-api",
    title: "Secure REST API",
    category: "Platforms",
    year: "2024",
    client: "Product build",
    summary:
      "A backend with JWT authentication, rate limiting and Swagger documentation, built to be handed to another developer.",
    cover: "/media/api.jpg",
    tech: ["Node.js", "Express", "PostgreSQL"],
    story: [
      "Some products should not start in a page builder. This API is the unglamorous middle: who is signed in, how often they can call, and a document another developer can read.",
      "JWT for access, limits so one client cannot drown the rest, and Swagger so the contract is not a rumour.",
    ],
    outcome: "A backend another developer can run without a tour of the author's head.",
  },
] as const;

export type Project = (typeof projects)[number];

export const experience = [
  {
    type: "work" as const,
    title: "Independent developer & trainer",
    org: "ProfJero",
    start: "Jan 2021",
    end: "Now",
    text: "Websites, business systems, branding support and hands-on IT training for clients across Ghana.",
  },
  {
    type: "education" as const,
    title: "Information Technology",
    org: "Degree",
    start: "Studies",
    end: "Completed",
    text: "Programming, web development, databases and the design tools that still show up in the work.",
  },
];

export const team = [
  {
    name: "Benjamin Amoako",
    role: "Founder · software & training",
    studio: "All studios",
    photo: "/media/portrait.jpg",
    bio: "The person on the call. Builds the systems, teaches the room, and signs the work.",
  },
  {
    name: "Abel",
    role: "Design",
    studio: "Creative",
    photo: "",
    bio: "Layouts, brand pieces and the visual side of a job that also has to function.",
  },
  {
    name: "Godsway",
    role: "Data",
    studio: "Digital",
    photo: "",
    bio: "The sheets, reports and checks that keep a system honest after launch.",
  },
];

export const testimonials = [
  {
    name: "Rural Tech Hub",
    role: "Training platform",
    avatar: "/media/05.png",
    text: "ProfJero played a key role in building Rural Tech Hub's official website, assessment platform, and admin portal. His ability to translate our ideas into functional, user-friendly system greatly improved how we manage training, learners, assessments and administration, track progress and organize operations. The solutions delivered were practical, reliable, and well-structured.",
  },
  {
    name: "Rev. Eric",
    role: "Church website",
    avatar: "/media/client-a.jpg",
    text: "Working with ProfJero to build our Church website has been a true blessing. The design is clean, modern, and beautifully reflects our mission and values. Members can now access sermons, events, and updates with ease. His dedication, creativity, and technical skill brought our vision to life in a way that feels both professional and personal. We are truly grateful.",
  },
  {
    name: "Edmond",
    role: "Pharmacy POS",
    avatar: "/media/client-b.jpg",
    text: "Since ProfJero deployed our new POS system, managing our pharmacy has been smoother. From tracking stock levels to generating daily sales reports, everything is now just a click away. It's very fast and reliable. He understood our needs, delivered on time, and exceeded expectations. This system has truly transformed how we run our business.",
  },
];

export type Currency = "GHS" | "USD";

export type Plan = {
  name: string;
  tagline: string;
  priceGhs: number;
  priceUsd: number;
  prefix?: string;
  period?: string;
  delivery: string;
  featured?: boolean;
  features: string[];
};

export const pricingGroups: { name: string; blurb: string; plans: Plan[] }[] = [
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
        features: ["Up to 5 pages", "Mobile layout", "Contact path", "Basic SEO"],
      },
      {
        name: "Business",
        tagline: "More room for services, proof and updates.",
        priceGhs: 9500,
        priceUsd: 640,
        delivery: "2–4 weeks",
        featured: true,
        features: ["Custom layout", "Gallery or journal", "WhatsApp & forms", "Handover session"],
      },
      {
        name: "E-commerce / booking",
        tagline: "People can buy, book or request without a phone tag.",
        priceGhs: 16000,
        priceUsd: 1050,
        delivery: "3–6 weeks",
        features: ["Catalogue or slots", "Enquiry or checkout", "Admin for you", "Launch support"],
      },
    ],
  },
  {
    name: "Web apps & systems",
    blurb: "Software your staff open on a Tuesday morning.",
    plans: [
      {
        name: "Business system",
        tagline: "Records, roles and a daily report.",
        priceGhs: 22000,
        priceUsd: 1450,
        delivery: "4–8 weeks",
        features: ["Sign-in", "Core records", "One main report", "Staff walkthrough"],
      },
      {
        name: "Custom platform",
        tagline: "Several desks, rules and a longer life.",
        priceGhs: 45000,
        priceUsd: 2950,
        delivery: "8–14 weeks",
        featured: true,
        features: ["Multiple roles", "Workflows", "Exports", "Staged rollout"],
      },
      {
        name: "Enterprise",
        tagline: "When the organisation, not a single counter, is the client.",
        priceGhs: 90000,
        priceUsd: 5900,
        prefix: "from",
        delivery: "Scoped",
        features: ["Discovery first", "Integrations", "Training plan", "Care option"],
      },
    ],
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
        features: ["Uptime watch", "Minor edits", "Monthly note"],
      },
      {
        name: "Tend",
        tagline: "For a site that changes and a shop that asks questions.",
        priceGhs: 1500,
        priceUsd: 100,
        period: "/ month",
        delivery: "Ongoing",
        featured: true,
        features: ["Priority replies", "Content updates", "Backups", "Small improvements"],
      },
      {
        name: "Run",
        tagline: "A system with users, not just a homepage.",
        priceGhs: 3500,
        priceUsd: 230,
        period: "/ month",
        delivery: "Ongoing",
        features: ["System care", "Report checks", "Scheduled calls", "Change budget"],
      },
    ],
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
        features: ["Weekly session", "Exercises", "Review of your work"],
      },
      {
        name: "12-week bootcamp",
        tagline: "Web foundations through a small project you can show.",
        priceGhs: 6000,
        priceUsd: 400,
        delivery: "12 weeks",
        featured: true,
        features: ["HTML, CSS, JavaScript", "A finished project", "Feedback on the work"],
      },
      {
        name: "Corporate",
        tagline: "A team, a room, a specific tool.",
        priceGhs: 5000,
        priceUsd: 330,
        prefix: "from",
        period: "/ day",
        delivery: "By arrangement",
        features: ["On-site or remote", "Your examples", "Leave-behind notes"],
      },
    ],
  },
];

export const pricingNote =
  "Half to start. MoMo, bank transfer and card are accepted. The rest is due before handover, unless a care plan says otherwise. These are starting prices for an experienced full-stack developer in Ghana in 2026 — not a market survey. The number on your job is the one we agree after a look at the work.";

export const process = [
  { n: "01", title: "Listen", text: "What the work is for, who uses it, and what failure would cost." },
  { n: "02", title: "Shape", text: "A scope, a price and a date. No fog about what is in and what is later." },
  { n: "03", title: "Build", text: "You see it while it is being made, not as a surprise on the last day." },
  { n: "04", title: "Hand over", text: "A walkthrough so the system is not trapped in one person's head." },
  { n: "05", title: "Stay", text: "Optional care, if you want someone still answering after launch." },
];

export const faqs = [
  {
    q: "Where do you work from?",
    a: "Cape Coast. Clients are across Ghana. Calls and screen-shares cover the distance; visits when the job needs a room.",
  },
  {
    q: "How does payment work?",
    a: "50% to start, the balance before handover. MoMo, bank and card. Care plans are monthly.",
  },
  {
    q: "Will I be able to edit it myself?",
    a: "If you want to. Sites can be handed over with a simple way to change text and photos. Systems come with a walkthrough for the people who will use them.",
  },
  {
    q: "Do you only write code?",
    a: "No. The same desk covers graphic design, WordPress, data and training. Larger jobs can pull Abel on design and Godsway on data.",
  },
  {
    q: "Can you embed a video on a project?",
    a: "Yes — YouTube or TikTok. On a case study the film sits with the work, not on a separate tab you have to hunt for.",
  },
  {
    q: "What if I only need a repair?",
    a: "Say so in the form. A broken form, a slow page or a report that lies is a valid job. It does not have to be a rebuild.",
  },
];

export const posts = [
  {
    slug: "front-end-and-back-end",
    title: "Front-end and back-end, without the fog",
    excerpt:
      "One is what a person touches. The other is what remembers, checks and refuses. Most real jobs need both.",
    date: "2026-02-12",
    category: "Practice",
    cover: "/media/blog-banner02.jpg",
    minutes: 4,
    body: [
      { t: "p", text: "People hire a website and then discover they hired two jobs. The front-end is the part a visitor sees and taps: type, colour, the order of a form, whether the page still makes sense on a phone in the sun. The back-end is the part that remembers who they are, stores the record, and decides what they are allowed to do." },
      { t: "h", text: "What the visitor feels" },
      { t: "p", text: "A front-end can be beautiful and still fail. If the button is pretty and the form forgets the message, the beauty did not do its job. I treat layout as a way of making the next step obvious — call, book, pay, read the sermon, see the stock." },
      { t: "h", text: "What the business feels a month later" },
      { t: "p", text: "The back-end shows up when there is more than one person, or more than one day. A pharmacy that cannot count stock, a school that cannot list learners, a church that cannot find last month's notice. That is server-side work: a database, rules, and a screen for the people who run the place." },
      { t: "p", text: "If you are commissioning work, ask which of the two you need. A five-page site is mostly front-end. A POS, an assessment portal or a client desk is both. Pricing them the same is how projects go sour." },
    ],
  },
  {
    slug: "choosing-a-web-framework",
    title: "Choosing a framework after the brochure",
    excerpt:
      "React, WordPress, plain HTML. The right one is the one your next maintainer can live with.",
    date: "2026-03-03",
    category: "Practice",
    cover: "/media/blog-banner04.jpg",
    minutes: 5,
    body: [
      { t: "p", text: "A framework is a set of decisions someone else already made: how pages are built, how data moves, how a second developer finds the button. It is not a personality. Clients rarely need a framework. They need a site that loads, a form that arrives, and a person who can change the phone number in a year." },
      { t: "h", text: "When WordPress is the honest answer" },
      { t: "p", text: "Editors who will publish often, a pile of pages, and no custom rules. WordPress still earns its place there. I use it when the client should be able to write without calling me, and when the design can live inside a theme we actually control." },
      { t: "h", text: "When a framework earns the weight" },
      { t: "p", text: "Sign-in, roles, records, reports. Then React or a similar UI layer, with a real backend, stops being fashion. The cost is that casual editing is harder, and the person who inherits the code needs to be a developer. I say that before the invoice, not after." },
      { t: "h", text: "When neither is required" },
      { t: "p", text: "A short, fast page can be HTML, CSS and a little JavaScript. Less to break. Less to explain. If the job is a single story and a contact form, I will not invent an architecture to admire." },
    ],
  },
  {
    slug: "wordpress-when-it-fits",
    title: "WordPress, when it fits and when it does not",
    excerpt:
      "It runs a huge share of the web for a reason. It is still the wrong tool for a counter that sells medicine.",
    date: "2026-04-18",
    category: "Practice",
    cover: "/media/blog-banner01.jpg",
    minutes: 4,
    body: [
      { t: "p", text: "WordPress became popular because a non-developer can publish. That is still its best trick. Pages, posts, a menu, a contact form, a gallery of work. For a parish, a trainer or a small brand, that is often the whole job." },
      { t: "h", text: "Where it starts to lie" },
      { t: "p", text: "Plugin stacks that nobody can name. A checkout held together by three subscriptions. A 'system' that is really five plugins arguing. When the work is stock, roles and a daily total, I would rather build the small system than decorate WordPress until it resembles one." },
      { t: "h", text: "How I leave it" },
      { t: "p", text: "Few plugins, a theme we can read, and a note of what to update. The client gets a login and a short session. If they want me to keep the updates, that is a care plan, priced in the open — not a surprise retainer." },
    ],
  },
] as const;

export type Post = (typeof posts)[number];

export function formatMoney(amount: number, currency: Currency) {
  const formatted = new Intl.NumberFormat("en-GH", { maximumFractionDigits: 0 }).format(amount);
  return currency === "GHS" ? `GH₵ ${formatted}` : `US$ ${formatted}`;
}

export function planPrice(plan: Plan, currency: Currency) {
  const amount = currency === "GHS" ? plan.priceGhs : plan.priceUsd;
  const core = formatMoney(amount, currency);
  return `${plan.prefix ? `${plan.prefix} ` : ""}${core}${plan.period ?? ""}`;
}

export const timeSlots = ["08:00", "09:30", "11:00", "13:00", "15:00", "17:00"];

import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { ContactForm, type ContactSeed } from "@/components/contact-form";
import { WaterHero } from "@/components/water-hero";
import { Button } from "@/components/ui/button";
import {
  experience,
  faqs,
  planPrice,
  posts,
  pricingGroups,
  pricingNote,
  process,
  profile,
  projects,
  skills,
  studios,
  team,
  testimonials,
  withYears,
  yearsOfExperience,
  type Currency,
} from "@/lib/content";
import { useLook } from "@/lib/look";
import { cn } from "@/lib/cn";

const ROLES = ["Software developer", "IT trainer", "Graphic designer", "Freelancer"];

export function HomePage({ seed }: { seed?: ContactSeed }) {
  const { look } = useLook();
  const [role, setRole] = useState(0);
  const [currency, setCurrency] = useState<Currency>("GHS");
  const [group, setGroup] = useState(0);
  const [filter, setFilter] = useState("All");
  const [openFaq, setOpenFaq] = useState(0);
  const years = yearsOfExperience();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setRole((n) => (n + 1) % ROLES.length), 2200);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("profjero-currency");
    if (saved === "GHS" || saved === "USD") {
      setCurrency(saved);
      return;
    }
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz !== "Africa/Accra") setCurrency("USD");
  }, []);

  function pickCurrency(next: Currency) {
    setCurrency(next);
    localStorage.setItem("profjero-currency", next);
  }

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const shown = projects.filter((p) => filter === "All" || p.category === filter);
  const activeGroup = pricingGroups[group];

  return (
    <div>
      <section className="relative min-h-[88vh] overflow-hidden text-on-hero">
        <WaterHero src={profile.hero} enabled={look.water} overlay={look.overlay} />
        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 py-16">
          <p className="text-sm tracking-[0.18em] uppercase text-on-hero/80">{profile.location}</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[1.05] sm:text-7xl">
            Hello, I am {profile.name}.
          </h1>
          <p className="mt-4 h-8 text-xl text-on-hero/90 sm:text-2xl" aria-live="polite">
            {ROLES[role]}
          </p>
          <p className="mt-4 max-w-xl text-base text-on-hero/85 sm:text-lg">
            {withYears(
              "I design and build websites, business systems and training that still make sense after launch. {years} years in, from Cape Coast, still taking the work personally.",
            )}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="onhero">
              <a href="#contact">Hire me</a>
            </Button>
            <Button asChild variant="quiet">
              <a href="#work">See the work</a>
            </Button>
          </div>
          <p className="mt-8 text-sm text-on-hero/75">Move across the water. It answers.</p>
        </div>
      </section>

      <section id="about" className="section-anchor mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-28">
        <div>
          <img
            src={profile.portrait}
            alt={`Portrait of ${profile.name}`}
            className="aspect-square w-full max-w-md rounded-full object-cover"
          />
        </div>
        <div>
          <Eyebrow>About</Eyebrow>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl">A desk for code, classrooms and the odd mug.</h2>
          <p className="mt-5 text-muted">
            {withYears(
              "I'm Benjamin Amoako. Information technology is the formal training; the practice is websites, databases, graphics and teaching people who would rather build than watch. {years} years of client work, mostly in Ghana, under the name ProfJero.",
            )}
          </p>
          <p className="mt-3 text-muted">
            If the job is a parish site, a pharmacy counter, an assessment portal or a room of beginners, it is the same habit: make the next step obvious, then leave the client able to run it.
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <Fact k="Name" v={profile.name} />
            <Fact k="Profession" v="Software development" />
            <Fact k="Email" v={profile.email} />
            <Fact k="Phone" v={profile.phone} />
            <Fact k="Education" v="Degree, Information Technology" />
            <Fact k="Base" v={profile.location} />
          </dl>
        </div>
      </section>

      <section id="skills" className="section-anchor bg-card/60 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
          <div>
            <Eyebrow>Skill</Eyebrow>
            <h2 className="mt-2 font-display text-4xl">What the work is actually made of.</h2>
            <p className="mt-4 text-muted">
              Design is not a coat of paint at the end. The same eye that sets type also decides whether a pharmacist can finish a sale before the next customer speaks.
            </p>
            <p className="mt-4 font-display text-5xl tabular-nums text-brand">{years}</p>
            <p className="text-sm text-muted">years in practice, counted from January 2021. It moves on its own every January.</p>
          </div>
          <ul className="space-y-4">
            {skills.map((skill) => (
              <li key={skill.name}>
                <div className="mb-1 flex justify-between text-sm">
                  <span>{skill.name}</span>
                  <span className="tabular-nums text-muted">{skill.level}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-line">
                  <div className="h-full rounded-full bg-brand" style={{ width: `${skill.level}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="studios" className="section-anchor mx-auto max-w-6xl px-4 py-20 md:py-28">
        <Eyebrow>Studios</Eyebrow>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-xl font-display text-4xl sm:text-5xl">Four rooms, one name.</h2>
          <Link to="/hub" className="text-sm font-medium text-brand">
            Open the hub
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {studios.map((studio) => (
            <Link
              key={studio.slug}
              to="/hub/$studio"
              params={{ studio: studio.slug }}
              className="group overflow-hidden rounded-card border border-line bg-card"
            >
              <img src={studio.image} alt="" className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
              <div className="p-5">
                <p className="text-xs tracking-[0.16em] text-gold uppercase">{studio.color}</p>
                <h3 className="mt-1 font-display text-3xl">{studio.name}</h3>
                <p className="mt-2 text-sm text-muted">{studio.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-card/50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <Eyebrow>Process</Eyebrow>
          <h2 className="mt-2 font-display text-4xl">How a job actually moves.</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-5">
            {process.map((step) => (
              <li key={step.n} className="rounded-card border border-line bg-paper p-4">
                <p className="font-display text-2xl text-brand">{step.n}</p>
                <h3 className="mt-2 text-xl">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="work" className="section-anchor mx-auto max-w-6xl px-4 py-20 md:py-28">
        <Eyebrow>Work</Eyebrow>
        <h2 className="mt-2 font-display text-4xl sm:text-5xl">Recent projects</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={cn(
                "min-h-11 rounded-full border px-4 text-sm",
                filter === cat ? "border-brand bg-brand text-on-brand" : "border-line",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {shown.map((project) => (
            <Link
              key={project.slug}
              to="/work/$slug"
              params={{ slug: project.slug }}
              className="group overflow-hidden rounded-card border border-line bg-card"
            >
              <img src={project.cover} alt="" className="h-56 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between gap-3 text-xs tracking-[0.14em] text-gold uppercase">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="mt-2 flex items-center gap-2 font-display text-3xl">
                  {project.title}
                  <ArrowUpRight className="h-5 w-5 opacity-0 transition group-hover:opacity-100" />
                </h3>
                <p className="mt-2 text-sm text-muted">{project.summary}</p>
                <p className="mt-3 text-xs text-muted">{project.tech.join(" · ")}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="experience" className="section-anchor bg-footer py-20 text-footer-fg">
        <div className="mx-auto max-w-6xl px-4">
          <Eyebrow>Experience</Eyebrow>
          <h2 className="mt-2 font-display text-4xl">Since January 2021.</h2>
          <ol className="mt-8 space-y-6 border-l border-white/15 pl-6">
            {experience.map((item) => (
              <li key={item.title}>
                <p className="text-xs tracking-[0.14em] text-gold uppercase">{item.start} — {item.end}</p>
                <h3 className="mt-1 font-display text-2xl">{item.title}</h3>
                <p className="text-sm text-footer-muted">{item.org}</p>
                <p className="mt-2 max-w-xl text-sm text-footer-muted">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="team" className="section-anchor mx-auto max-w-6xl px-4 py-20 md:py-28">
        <Eyebrow>Team</Eyebrow>
        <h2 className="mt-2 max-w-xl font-display text-4xl sm:text-5xl">Code, design and the numbers.</h2>
        <p className="mt-3 max-w-2xl text-muted">
          A client hiring these prices should see more than one pair of hands. Hide nothing: Benjamin leads, Abel designs, Godsway watches the data.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {team.map((member) => (
            <article key={member.name} className="rounded-card border border-line bg-card p-5">
              {member.photo ? (
                <img src={member.photo} alt="" className="h-24 w-24 rounded-full object-cover" />
              ) : (
                <div className="grid h-24 w-24 place-items-center rounded-full bg-brand text-2xl text-on-brand">
                  {member.name.slice(0, 1)}
                </div>
              )}
              <h3 className="mt-4 font-display text-2xl">{member.name}</h3>
              <p className="text-sm text-brand">{member.role}</p>
              <p className="mt-2 text-sm text-muted">{member.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="testimonials" className="section-anchor bg-card/60 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Eyebrow>Clients</Eyebrow>
          <h2 className="mt-2 font-display text-4xl">In their words.</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {testimonials.map((item) => (
              <figure key={item.name} className="flex flex-col rounded-card border border-line bg-paper p-5">
                <blockquote className="flex-1 text-sm leading-relaxed text-ink">“{item.text}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <img src={item.avatar} alt="" className="h-11 w-11 rounded-full object-cover" />
                  <span>
                    <span className="block text-sm font-medium">{item.name}</span>
                    <span className="block text-xs text-muted">{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section-anchor mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl">Start here. The real number follows the brief.</h2>
          </div>
          <div className="flex rounded-full border border-line p-1">
            {(["GHS", "USD"] as Currency[]).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => pickCurrency(code)}
                className={cn(
                  "min-h-11 rounded-full px-4 text-sm",
                  currency === code ? "bg-brand text-on-brand" : "text-muted",
                )}
              >
                {code === "GHS" ? "GH₵" : "US$"}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
          {pricingGroups.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setGroup(index)}
              className={cn(
                "min-h-11 shrink-0 rounded-full border px-4 text-sm",
                group === index ? "border-brand bg-brand text-on-brand" : "border-line",
              )}
            >
              {item.name}
            </button>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted">{activeGroup.blurb}</p>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {activeGroup.plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "flex flex-col rounded-card border p-5",
                plan.featured ? "border-brand bg-card" : "border-line bg-card",
              )}
            >
              <h3 className="font-display text-3xl">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted">{plan.tagline}</p>
              <p className="mt-4 font-display text-4xl tabular-nums">{planPrice(plan, currency)}</p>
              <p className="text-xs tracking-[0.12em] text-gold uppercase">{plan.delivery}</p>
              <ul className="mt-4 flex-1 space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="border-t border-line pt-2">{feature}</li>
                ))}
              </ul>
              <a
                href={`/?service=${encodeURIComponent(activeGroup.name)}&subject=${encodeURIComponent(`Quote: ${plan.name}`)}&budget=${encodeURIComponent(planPrice(plan, currency))}#contact`}
                className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-brand text-sm font-medium text-on-brand"
              >
                Get a quote
              </a>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm text-muted">{pricingNote}</p>
      </section>

      <section id="journal" className="section-anchor bg-card/50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <Eyebrow>Journal</Eyebrow>
              <h2 className="mt-2 font-display text-4xl">Notes from the practice.</h2>
            </div>
            <Link to="/blog" className="text-sm font-medium text-brand">All notes</Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} to="/blog/$slug" params={{ slug: post.slug }} className="overflow-hidden rounded-card border border-line bg-paper">
                <img src={post.cover} alt="" className="h-40 w-full object-cover" />
                <div className="p-4">
                  <p className="text-xs text-gold">{post.date}</p>
                  <h3 className="mt-1 font-display text-2xl">{post.title}</h3>
                  <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section-anchor mx-auto max-w-3xl px-4 py-20">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-2 font-display text-4xl">Before you write.</h2>
        <div className="mt-6 divide-y divide-line border-y border-line">
          {faqs.map((item, index) => {
            const open = openFaq === index;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  className="flex min-h-14 w-full items-center justify-between gap-4 py-3 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenFaq(open ? -1 : index)}
                >
                  <span className="font-medium">{item.q}</span>
                  <span className="text-brand">{open ? "–" : "+"}</span>
                </button>
                {open && <p className="pb-4 text-sm text-muted">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </section>

      <section id="contact" className="section-anchor mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl">Tell me the job.</h2>
          <p className="mt-4 text-muted">
            A paragraph is enough: what it is, who uses it, and when you need it. Quotes from the price list arrive with the subject already filled.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand" /><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand" /><a href={profile.phoneHref}>{profile.phone}</a></li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand" />{profile.location}</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <a className="text-brand" href={profile.whatsapp}>WhatsApp</a>
            <a className="text-brand" href="/book">Book a time</a>
            <a className="text-brand" href="/track">Track a booking</a>
          </div>
        </div>
        <ContactForm seed={seed} />
      </section>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-xs tracking-[0.18em] text-gold uppercase">{children}</p>;
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-t border-line pt-2">
      <dt className="text-xs tracking-[0.14em] text-muted uppercase">{k}</dt>
      <dd className="mt-1 text-sm">{v}</dd>
    </div>
  );
}

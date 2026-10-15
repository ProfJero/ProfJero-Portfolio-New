import { Link, useRouterState } from "@tanstack/react-router";
import {
  Droplets,
  Menu,
  Monitor,
  Moon,
  RotateCcw,
  Settings2,
  Sun,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/lib/content";
import { PATTERNS, SWATCHES, useLook, type Layout, type Mode, type Pattern } from "@/lib/look";
import { cn } from "@/lib/cn";

const NAV = [
  { href: "/#work", label: "Work" },
  { href: "/#studios", label: "Studios" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/blog", label: "Journal" },
  { href: "/hub", label: "Hub" },
];

export function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [bar, setBar] = useState(true);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <div className="site-frame text-ink">
      {bar && (
        <div className="relative z-50 bg-brand text-on-brand">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-sm">
            <p className="min-w-0">{profile.announcement}</p>
            <button
              type="button"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full hover:bg-white/15"
              aria-label="Dismiss announcement"
              onClick={() => setBar(false)}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
      <header className="sticky top-0 z-40 border-b border-line bg-paper/92 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
          <Link to="/" search={{ service: "", subject: "", budget: "" }} className="flex items-center gap-2 font-display text-xl tracking-tight text-ink">
            <img src={profile.logo} alt="" className="h-9 w-9 rounded-full object-cover" />
            <span>ProfJero</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-muted hover:text-ink">
                {item.label}
              </a>
            ))}
            <a
              href="/#contact"
              className="inline-flex min-h-11 items-center rounded-full bg-brand px-4 text-sm font-medium text-on-brand"
            >
              Hire me
            </a>
          </nav>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="border-t border-line bg-paper px-4 py-3 md:hidden">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="flex min-h-11 items-center text-base">
                {item.label}
              </a>
            ))}
            <a href="/#contact" className="flex min-h-11 items-center font-medium text-brand">
              Hire me
            </a>
          </div>
        )}
      </header>
      <main>{children}</main>
      <footer className="bg-footer text-footer-fg">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-3xl">ProfJero</p>
            <p className="mt-3 max-w-sm text-footer-muted">
              {profile.name}. Websites, systems, branding and training from {profile.location}.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.16em] text-gold uppercase">Visit</p>
            <ul className="mt-3 space-y-2 text-sm text-footer-muted">
              <li><a className="hover:text-footer-fg" href="/#work">Work</a></li>
              <li><a className="hover:text-footer-fg" href="/hub">Hub</a></li>
              <li><a className="hover:text-footer-fg" href="/blog">Journal</a></li>
              <li><a className="hover:text-footer-fg" href="/book">Book a call</a></li>
              <li><a className="hover:text-footer-fg" href="/desk">Desk</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.16em] text-gold uppercase">Direct</p>
            <ul className="mt-3 space-y-2 text-sm text-footer-muted">
              <li><a className="hover:text-footer-fg" href={profile.phoneHref}>{profile.phone}</a></li>
              <li><a className="hover:text-footer-fg" href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li><a className="hover:text-footer-fg" href={profile.whatsapp}>WhatsApp</a></li>
              <li><a className="hover:text-footer-fg" href={profile.tiktok}>TikTok</a></li>
              <li><a className="hover:text-footer-fg" href={profile.facebook}>Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-footer-muted">
          © {new Date().getFullYear()} ProfJero. Cape Coast.
        </div>
      </footer>
      <Customize />
    </div>
  );
}

function Customize() {
  const { look, setLook, reset } = useLook();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-label="Customize appearance"
        onClick={() => setOpen((v) => !v)}
        className="fixed top-1/2 left-0 z-50 grid h-12 w-11 -translate-y-1/2 place-items-center rounded-r-2xl bg-brand text-on-brand shadow-lg"
      >
        <Settings2 className="h-5 w-5" />
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex">
          <button className="hidden flex-1 bg-ink/30 sm:block" aria-label="Close customize" onClick={() => setOpen(false)} />
          <aside className="flex h-full w-full max-w-sm flex-col overflow-y-auto border-r border-line bg-card p-5 text-ink shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs tracking-[0.16em] text-gold uppercase">This device</p>
                <h2 className="font-display text-3xl">Customize</h2>
              </div>
              <button type="button" aria-label="Close" className="grid h-11 w-11 place-items-center" onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>
            <p className="mt-2 text-sm text-muted">Your choices stay in this browser. They do not change the site for anyone else.</p>

            <p className="mt-6 text-sm font-medium">Theme colour</p>
            <div className="mt-3 grid grid-cols-6 gap-2">
              {SWATCHES.map((swatch) => (
                <button
                  key={swatch.hex}
                  type="button"
                  aria-label={swatch.name}
                  title={swatch.name}
                  onClick={() => setLook({ color: swatch.hex })}
                  className={cn(
                    "h-11 rounded-full border-2",
                    look.color.toLowerCase() === swatch.hex ? "border-ink" : "border-transparent",
                  )}
                  style={{ background: swatch.hex }}
                />
              ))}
            </div>
            <label className="mt-3 flex items-center justify-between gap-3 text-sm">
              Custom
              <input
                type="color"
                value={look.color}
                aria-label="Custom colour"
                onChange={(e) => setLook({ color: e.target.value })}
                className="h-11 w-16 cursor-pointer bg-transparent"
              />
            </label>

            <p className="mt-6 text-sm font-medium">Colour mode</p>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {(
                [
                  ["light", "Light", Sun],
                  ["dark", "Dark", Moon],
                  ["auto", "Auto", Monitor],
                ] as const
              ).map(([id, label, Icon]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setLook({ mode: id as Mode })}
                  className={cn(
                    "flex min-h-11 flex-col items-center justify-center gap-1 rounded-2xl border text-xs",
                    look.mode === id ? "border-brand bg-brand text-on-brand" : "border-line",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              ))}
            </div>

            <p className="mt-6 text-sm font-medium">Layout</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {(["full", "boxed"] as Layout[]).map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setLook({ layout: id })}
                  className={cn(
                    "min-h-11 rounded-2xl border capitalize",
                    look.layout === id ? "border-brand bg-brand text-on-brand" : "border-line",
                  )}
                >
                  {id === "full" ? "Full width" : "Boxed"}
                </button>
              ))}
            </div>

            <p className="mt-6 text-sm font-medium">Background</p>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {PATTERNS.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setLook({ pattern: id as Pattern })}
                  className={cn(
                    "min-h-11 rounded-2xl border text-xs capitalize",
                    look.pattern === id ? "border-brand bg-brand text-on-brand" : "border-line",
                  )}
                >
                  {id}
                </button>
              ))}
            </div>

            <label className="mt-6 block text-sm font-medium">
              Hero darkness · {Math.round(look.overlay * 100)}%
              <input
                type="range"
                min={0.25}
                max={0.75}
                step={0.01}
                value={look.overlay}
                onChange={(e) => setLook({ overlay: Number(e.target.value) })}
                className="mt-2 w-full accent-[var(--color-brand)]"
              />
            </label>

            <button
              type="button"
              onClick={() => setLook({ water: !look.water })}
              className="mt-4 flex min-h-11 items-center justify-between rounded-2xl border border-line px-3 text-sm"
            >
              <span className="inline-flex items-center gap-2">
                <Droplets className="h-4 w-4" /> Water ripple
              </span>
              <span className={look.water ? "text-brand" : "text-muted"}>{look.water ? "On" : "Off"}</span>
            </button>

            <button type="button" onClick={reset} className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-muted">
              <RotateCcw className="h-4 w-4" /> Reset to ProfJero blue
            </button>
          </aside>
          <button className="flex-1 bg-ink/30 sm:hidden" aria-label="Close customize" onClick={() => setOpen(false)} />
        </div>
      )}
    </>
  );
}

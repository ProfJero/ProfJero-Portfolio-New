import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/layout";
import { studios } from "@/lib/content";

export const Route = createFileRoute("/hub")({
  component: HubHome,
});

function HubHome() {
  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs tracking-[0.18em] text-gold uppercase">ProfJero Hub</p>
        <h1 className="mt-2 max-w-3xl font-display text-5xl sm:text-6xl">Digital, Creative, Nourish and Agro — one desk.</h1>
        <p className="mt-4 max-w-2xl text-muted">
          The hub is how the four studios meet a client: read the offer, request a quote, or book a time. The same person answers.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/book" search={{ studio: "digital" }} className="inline-flex min-h-11 items-center rounded-full bg-brand px-5 text-sm font-medium text-on-brand">Book a call</Link>
          <Link to="/track" search={{ ref: "" }} className="inline-flex min-h-11 items-center rounded-full border border-line px-5 text-sm">Track a booking</Link>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {studios.map((studio) => (
            <Link key={studio.slug} to="/hub/$studio" params={{ studio: studio.slug }} className="overflow-hidden rounded-card border border-line bg-card">
              <img src={studio.image} alt="" className="h-52 w-full object-cover" />
              <div className="p-5">
                <p className="text-xs tracking-[0.16em] text-gold uppercase">{studio.color}</p>
                <h2 className="mt-1 font-display text-3xl">{studio.name}</h2>
                <p className="mt-2 text-sm text-muted">{studio.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Shell>
  );
}

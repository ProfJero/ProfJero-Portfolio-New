import { createFileRoute, stripSearchParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Shell } from "@/components/layout";
import { findBooking, type Booking } from "@/lib/desk";

type Search = { ref: string };

export const Route = createFileRoute("/track")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    ref: typeof search.ref === "string" ? search.ref : "",
  }),
  search: {
    middlewares: [stripSearchParams({ ref: "" })],
  },
  component: TrackPage,
});

function TrackPage() {
  const initial = Route.useSearch().ref;
  const [code, setCode] = useState(initial);
  const [result, setResult] = useState<Booking | null | undefined>(undefined);

  useEffect(() => {
    if (initial) setResult(findBooking(initial));
  }, [initial]);

  return (
    <Shell>
      <div className="mx-auto max-w-xl px-4 py-16">
        <p className="text-xs tracking-[0.16em] text-gold uppercase">Tracking</p>
        <h1 className="mt-2 font-display text-5xl">Look up a booking.</h1>
        <p className="mt-3 text-muted">Use the reference from the confirmation, like PJ-1842. It lives in this browser.</p>
        <form
          className="mt-6 flex flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            setResult(findBooking(code));
          }}
        >
          <input className="field" value={code} onChange={(e) => setCode(e.target.value)} placeholder="PJ-0000" aria-label="Reference code" />
          <button type="submit" className="min-h-11 rounded-full bg-brand px-5 text-sm font-medium text-on-brand">Find</button>
        </form>
        {result === null && <p className="mt-6 text-sm text-brand">No booking with that code on this device.</p>}
        {result && (
          <dl className="mt-6 space-y-2 rounded-card border border-line bg-card p-5 text-sm">
            <p className="font-display text-3xl">{result.ref}</p>
            <p>{result.studio} · {result.service}</p>
            <p className="tabular-nums">{result.date} at {result.time}</p>
            <p className="text-muted">{result.name} · {result.email}</p>
            {result.note && <p>{result.note}</p>}
          </dl>
        )}
      </div>
    </Shell>
  );
}

import { createFileRoute, Link, stripSearchParams } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/layout";
import { studios, timeSlots } from "@/lib/content";
import { addBooking } from "@/lib/desk";
import { cn } from "@/lib/cn";

type Search = { studio: string };

export const Route = createFileRoute("/book")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    studio: typeof search.studio === "string" ? search.studio : "digital",
  }),
  search: {
    middlewares: [stripSearchParams({ studio: "digital" })],
  },
  component: BookPage,
});

const STEPS = ["Studio", "Service", "When", "You", "Confirm"];

function BookPage() {
  const initial = Route.useSearch().studio;
  const [step, setStep] = useState(0);
  const [studio, setStudio] = useState(studios.some((s) => s.slug === initial) ? initial : "digital");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [ref, setRef] = useState("");
  const [error, setError] = useState("");

  const current = studios.find((item) => item.slug === studio) ?? studios[0];

  function next() {
    setError("");
    if (step === 1 && !service) return setError("Pick a service.");
    if (step === 2 && (!date || !time)) return setError("Pick a date and a time. The time stays labelled when you select it.");
    if (step === 3 && (name.trim().length < 2 || !email.includes("@"))) return setError("Name and email, please.");
    if (step === 4) {
      const booking = addBooking({
        studio: current.name,
        service,
        date,
        time,
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        note: note.trim(),
      });
      setRef(booking.ref);
      return;
    }
    setStep((n) => n + 1);
  }

  if (ref) {
    return (
      <Shell>
        <div className="mx-auto max-w-xl px-4 py-20">
          <p className="text-xs tracking-[0.16em] text-gold uppercase">Booked</p>
          <h1 className="mt-2 font-display text-5xl">Your reference is {ref}.</h1>
          <p className="mt-4 text-muted">
            {current.name}, {service}, {date} at {time}. Keep the code. You can look it up without an account.
          </p>
          <Link to="/track" search={{ ref }} className="mt-6 inline-flex min-h-11 items-center rounded-full bg-brand px-5 text-sm font-medium text-on-brand">
            Track this booking
          </Link>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <div className="mx-auto max-w-xl px-4 py-16">
        <p className="text-xs tracking-[0.16em] text-gold uppercase">Booking · step {step + 1} of 5</p>
        <h1 className="mt-2 font-display text-5xl">{STEPS[step]}</h1>
        <ol className="mt-4 flex flex-wrap gap-2 text-xs">
          {STEPS.map((label, index) => (
            <li key={label} className={cn("rounded-full px-3 py-1", index === step ? "bg-brand text-on-brand" : "bg-line text-ink")}>
              {index + 1}. {label}
            </li>
          ))}
        </ol>

        <div className="mt-8">
          {step === 0 && (
            <div className="grid gap-2">
              {studios.map((item) => (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => {
                    setStudio(item.slug);
                    setService("");
                  }}
                  className={cn(
                    "min-h-14 rounded-2xl border px-4 text-left",
                    studio === item.slug ? "border-brand bg-brand text-on-brand" : "border-line",
                  )}
                >
                  <span className="block font-medium">{item.name}</span>
                  <span className={cn("block text-sm", studio === item.slug ? "text-on-brand/80" : "text-muted")}>{item.tagline}</span>
                </button>
              ))}
            </div>
          )}
          {step === 1 && (
            <div className="grid gap-2">
              {current.services.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setService(item.title)}
                  className={cn(
                    "min-h-14 rounded-2xl border px-4 text-left",
                    service === item.title ? "border-brand bg-brand text-on-brand" : "border-line",
                  )}
                >
                  <span className="block font-medium">{item.title}</span>
                  <span className={cn("block text-sm", service === item.title ? "text-on-brand/80" : "text-muted")}>{item.text}</span>
                </button>
              ))}
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <label className="block text-sm">
                Date
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="field mt-1" />
              </label>
              <p className="text-sm">Time — the label stays visible when selected.</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTime(slot)}
                    className={cn(
                      "min-h-14 rounded-2xl border text-base font-medium tabular-nums",
                      time === slot ? "border-brand bg-brand text-on-brand" : "border-line bg-card text-ink",
                    )}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="grid gap-3">
              <input className="field" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <input className="field" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input className="field" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <textarea className="field" rows={4} placeholder="Anything we should know" value={note} onChange={(e) => setNote(e.target.value)} />
            </div>
          )}
          {step === 4 && (
            <dl className="space-y-3 rounded-card border border-line bg-card p-5 text-sm">
              <Row k="Studio" v={current.name} />
              <Row k="Service" v={service} />
              <Row k="When" v={`${date} at ${time}`} />
              <Row k="Name" v={name} />
              <Row k="Email" v={email} />
              {phone && <Row k="Phone" v={phone} />}
              {note && <Row k="Note" v={note} />}
            </dl>
          )}
        </div>
        {error && <p className="mt-4 text-sm text-brand">{error}</p>}
        <div className="mt-6 flex gap-3">
          {step > 0 && (
            <button type="button" className="min-h-11 rounded-full border border-line px-5 text-sm" onClick={() => setStep((n) => n - 1)}>
              Back
            </button>
          )}
          <button type="button" className="min-h-11 rounded-full bg-brand px-5 text-sm font-medium text-on-brand" onClick={next}>
            {step === 4 ? "Confirm booking" : "Continue"}
          </button>
        </div>
      </div>
    </Shell>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-line pb-2">
      <dt className="text-muted">{k}</dt>
      <dd className="text-right">{v}</dd>
    </div>
  );
}

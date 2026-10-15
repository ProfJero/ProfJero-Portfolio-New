import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Shell } from "@/components/layout";
import { listDesk, type Booking, type Enquiry } from "@/lib/desk";

export const Route = createFileRoute("/desk")({
  component: DeskPage,
});

function DeskPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const load = () => {
      const data = listDesk();
      setEnquiries(data.enquiries);
      setBookings(data.bookings);
    };
    load();
    window.addEventListener("profjero-desk", load);
    window.addEventListener("storage", load);
    return () => {
      window.removeEventListener("profjero-desk", load);
      window.removeEventListener("storage", load);
    };
  }, []);

  return (
    <Shell>
      <div className="mx-auto max-w-5xl px-4 py-16">
        <p className="text-xs tracking-[0.16em] text-gold uppercase">Desk</p>
        <h1 className="mt-2 font-display text-5xl">What this browser has collected.</h1>
        <p className="mt-3 max-w-2xl text-muted">
          Messages and bookings from this preview stay on this device. They are not the Firebase inbox on profjero.pages.dev, and they are not emailed.
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <section>
            <h2 className="font-display text-3xl">Messages · {enquiries.length}</h2>
            <ul className="mt-4 space-y-3">
              {enquiries.length === 0 && <li className="text-sm text-muted">Nothing yet. The contact form lands here.</li>}
              {enquiries.map((item) => (
                <li key={item.id} className="rounded-card border border-line bg-card p-4 text-sm">
                  <p className="font-medium">{item.name} · {item.subject || item.kind}</p>
                  <p className="text-muted">{item.email}{item.service ? ` · ${item.service}` : ""}{item.budget ? ` · ${item.budget}` : ""}</p>
                  <p className="mt-2">{item.message}</p>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-display text-3xl">Bookings · {bookings.length}</h2>
            <ul className="mt-4 space-y-3">
              {bookings.length === 0 && <li className="text-sm text-muted">No calls booked from this browser yet.</li>}
              {bookings.map((item) => (
                <li key={item.id} className="rounded-card border border-line bg-card p-4 text-sm">
                  <p className="font-medium tabular-nums">{item.ref}</p>
                  <p>{item.studio} · {item.service}</p>
                  <p className="text-muted tabular-nums">{item.date} at {item.time}</p>
                  <p className="mt-1">{item.name} · {item.email}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </Shell>
  );
}

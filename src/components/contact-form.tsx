import { useState } from "react";
import { addEnquiry } from "@/lib/desk";
import { Button } from "@/components/ui/button";

export type ContactSeed = { service?: string; subject?: string; budget?: string };

export function ContactForm({ seed }: { seed?: ContactSeed }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
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
      message,
    });
    setError("");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-card border border-line bg-card p-6">
        <p className="font-display text-3xl">Received.</p>
        <p className="mt-2 text-muted">
          It is on the desk in this browser. Benjamin still replies from profjero947@gmail.com — write there if you need a person today.
        </p>
        <Button className="mt-5" type="button" variant="line" onClick={() => setSent(false)}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 rounded-card border border-line bg-card p-5">
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="name" required placeholder="Your name" className="field" />
        <input name="email" type="email" required placeholder="Email" className="field" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="phone" placeholder="Phone (optional)" className="field" />
        <input name="service" defaultValue={seed?.service ?? ""} placeholder="Service" className="field" />
      </div>
      <input name="subject" defaultValue={seed?.subject ?? ""} placeholder="Subject" className="field" />
      <input name="budget" defaultValue={seed?.budget ?? ""} placeholder="Budget range" className="field" />
      <textarea name="message" required rows={5} placeholder="What do you need done?" className="field resize-y" />
      {error && <p className="text-sm text-brand">{error}</p>}
      <Button type="submit">Send message</Button>
    </form>
  );
}

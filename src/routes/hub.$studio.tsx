import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/layout";
import { studios } from "@/lib/content";

export const Route = createFileRoute("/hub/$studio")({
  component: StudioPage,
});

function StudioPage() {
  const { studio: slug } = Route.useParams();
  const studio = studios.find((item) => item.slug === slug);
  const [open, setOpen] = useState(0);
  if (!studio) {
    return (
      <Shell>
        <div className="mx-auto max-w-3xl px-4 py-20">
          <h1 className="font-display text-4xl">No studio by that name.</h1>
          <Link to="/hub" className="mt-4 inline-flex text-brand">All studios</Link>
        </div>
      </Shell>
    );
  }
  const products = "products" in studio ? studio.products : undefined;
  return (
    <Shell>
      <img src={studio.image} alt="" className="h-[42vh] w-full object-cover" />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <p className="text-xs tracking-[0.16em] text-gold uppercase">{studio.color}</p>
        <h1 className="mt-2 font-display text-5xl">{studio.name}</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">{studio.tagline}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {studio.services.map((service) => (
            <article key={service.title} className="rounded-card border border-line bg-card p-5">
              <h2 className="font-display text-2xl">{service.title}</h2>
              <p className="mt-2 text-sm text-muted">{service.text}</p>
            </article>
          ))}
        </div>
        <h2 className="mt-12 font-display text-3xl">Ways to start</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {studio.packages.map((pack) => (
            <article key={pack.name} className="rounded-card border border-line p-5">
              <h3 className="font-display text-2xl">{pack.name}</h3>
              <p className="mt-1 text-brand">{pack.price}</p>
              <p className="mt-2 text-sm text-muted">{pack.detail}</p>
              <a
                className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-brand"
                href={`/?service=${encodeURIComponent(studio.name)}&subject=${encodeURIComponent(`Quote: ${pack.name}`)}&budget=${encodeURIComponent(pack.price)}#contact`}
              >
                Request a quote
              </a>
            </article>
          ))}
        </div>
        {products && (
          <>
            <h2 className="mt-12 font-display text-3xl">Branded products</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <li key={product.name} className="rounded-card border border-line bg-card p-4">
                  <p className="font-medium">{product.name}</p>
                  <p className="mt-1 text-sm text-muted">{product.note}</p>
                </li>
              ))}
            </ul>
          </>
        )}
        <h2 className="mt-12 font-display text-3xl">Questions</h2>
        <div className="mt-4 max-w-3xl divide-y divide-line border-y border-line">
          {studio.faqs.map((item, index) => (
            <div key={item.q}>
              <button type="button" className="flex min-h-14 w-full items-center justify-between text-left" onClick={() => setOpen(open === index ? -1 : index)}>
                <span>{item.q}</span>
                <span className="text-brand">{open === index ? "–" : "+"}</span>
              </button>
              {open === index && <p className="pb-4 text-sm text-muted">{item.a}</p>}
            </div>
          ))}
        </div>
        <Link to="/book" search={{ studio: studio.slug }} className="mt-8 inline-flex min-h-11 items-center rounded-full bg-brand px-5 text-sm font-medium text-on-brand">
          Book this studio
        </Link>
      </div>
    </Shell>
  );
}

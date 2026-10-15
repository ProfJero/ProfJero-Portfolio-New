import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/layout";
import { PosDemo } from "@/components/pos-demo";
import { projects } from "@/lib/content";

export const Route = createFileRoute("/work/$slug")({
  component: WorkPage,
});

function WorkPage() {
  const { slug } = Route.useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    return (
      <Shell>
        <div className="mx-auto max-w-3xl px-4 py-20">
          <h1 className="font-display text-4xl">That project is not listed.</h1>
          <a href="/#work" className="mt-4 inline-flex text-brand">Back to the work</a>
        </div>
      </Shell>
    );
  }
  return (
    <Shell>
      <article>
        <img src={project.cover} alt="" className="h-[46vh] w-full object-cover" />
        <div className="mx-auto max-w-3xl px-4 py-12">
          <p className="text-xs tracking-[0.16em] text-gold uppercase">{project.category} · {project.year} · {project.client}</p>
          <h1 className="mt-3 font-display text-5xl">{project.title}</h1>
          <p className="mt-4 text-lg text-muted">{project.summary}</p>
          <p className="mt-3 text-sm text-muted">{project.tech.join(" · ")}</p>
          <div className="mt-8 space-y-4">
            {project.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-6 border-l-2 border-brand pl-4 text-muted">{project.outcome}</p>
          {"quote" in project && project.quote && (
            <blockquote className="mt-8 rounded-card border border-line bg-card p-5 text-sm">
              “{project.quote.text}”
              <footer className="mt-3 text-xs tracking-[0.14em] text-gold uppercase">{project.quote.by}</footer>
            </blockquote>
          )}
          {"demo" in project && project.demo === "pos" && (
            <div className="mt-10">
              <h2 className="font-display text-3xl">Try the counter</h2>
              <p className="mt-2 mb-4 text-sm text-muted">A slice of the pharmacy desk. Nothing here is a real prescription.</p>
              <PosDemo />
            </div>
          )}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`/?service=${encodeURIComponent(project.category)}&subject=${encodeURIComponent(`About: ${project.title}`)}#contact`}
              className="inline-flex min-h-11 items-center rounded-full bg-brand px-5 text-sm font-medium text-on-brand"
            >
              Ask for something like this
            </a>
            <Link to="/" search={{ service: "", subject: "", budget: "" }} className="inline-flex min-h-11 items-center text-sm text-brand">All work</Link>
          </div>
        </div>
      </article>
    </Shell>
  );
}

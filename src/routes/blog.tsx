import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/layout";
import { posts } from "@/lib/content";

export const Route = createFileRoute("/blog")({
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs tracking-[0.18em] text-gold uppercase">Journal</p>
        <h1 className="mt-2 font-display text-5xl">Notes from the practice.</h1>
        <p className="mt-3 max-w-xl text-muted">
          Short pieces on how Benjamin chooses tools. No funnel, no newsletter pop-over.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} to="/blog/$slug" params={{ slug: post.slug }} className="overflow-hidden rounded-card border border-line bg-card">
              <img src={post.cover} alt="" className="h-44 w-full object-cover" />
              <div className="p-4">
                <p className="text-xs text-gold">{post.category} · {post.minutes} min</p>
                <h2 className="mt-2 font-display text-2xl">{post.title}</h2>
                <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Shell>
  );
}

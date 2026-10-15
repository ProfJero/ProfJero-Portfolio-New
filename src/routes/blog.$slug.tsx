import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/layout";
import { posts } from "@/lib/content";

export const Route = createFileRoute("/blog/$slug")({
  component: PostPage,
});

function PostPage() {
  const { slug } = Route.useParams();
  const post = posts.find((item) => item.slug === slug);
  if (!post) {
    return (
      <Shell>
        <div className="mx-auto max-w-3xl px-4 py-20">
          <h1 className="font-display text-4xl">No note by that name.</h1>
          <Link to="/blog" className="mt-4 inline-flex text-brand">Back to the journal</Link>
        </div>
      </Shell>
    );
  }
  const related = posts.filter((item) => item.slug !== post.slug);
  return (
    <Shell>
      <article className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-xs tracking-[0.16em] text-gold uppercase">{post.category} · {post.date}</p>
        <h1 className="mt-3 font-display text-5xl">{post.title}</h1>
        <p className="mt-4 text-lg text-muted">{post.excerpt}</p>
        <img src={post.cover} alt="" className="mt-8 h-72 w-full rounded-card object-cover" />
        <div className="mt-8 space-y-4 text-base leading-relaxed">
          {post.body.map((block, index) =>
            block.t === "h" ? (
              <h2 key={index} className="pt-4 font-display text-3xl">{block.text}</h2>
            ) : (
              <p key={index}>{block.text}</p>
            ),
          )}
        </div>
        <div className="mt-12 border-t border-line pt-6">
          <p className="text-sm text-muted">More notes</p>
          <ul className="mt-3 space-y-2">
            {related.map((item) => (
              <li key={item.slug}>
                <Link to="/blog/$slug" params={{ slug: item.slug }} className="text-brand">{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Shell>
  );
}

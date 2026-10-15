import { createFileRoute, stripSearchParams } from "@tanstack/react-router";
import { HomePage } from "@/components/home";
import { Shell } from "@/components/layout";

type Search = { service: string; subject: string; budget: string };

const searchDefaults: Search = { service: "", subject: "", budget: "" };

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    service: typeof search.service === "string" ? search.service : "",
    subject: typeof search.subject === "string" ? search.subject : "",
    budget: typeof search.budget === "string" ? search.budget : "",
  }),
  search: {
    middlewares: [stripSearchParams(searchDefaults)],
  },
  component: Index,
});

function Index() {
  const seed = Route.useSearch();
  return (
    <Shell>
      <HomePage seed={seed} />
    </Shell>
  );
}

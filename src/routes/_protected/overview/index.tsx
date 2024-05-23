import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/overview/")({
  component: Overview,
});

function Overview() {
  return <div>Overview Page</div>;
}

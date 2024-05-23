import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/home/")({
  component: HomePage,
});

function HomePage() {
  return <div>Home Page</div>;
}

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Card } from "@/components/ui/card";
import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import Cookies from "js-cookie";

export const Route = createFileRoute("/_protected")({
  beforeLoad: () => {
    if (!Cookies.get("NAME")) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: ProtectedLayout,
});

function ProtectedLayout() {
  return (
    <div className="flex flex-col w-full bg-hero-rain dark:bg-hero-rain-dark">
      <div className="flex justify-start">
        <Navbar />
      </div>
      <Card className="flex items-center justify-center h-full m-10 mt-24">
        <Outlet />
      </Card>
      <div className="flex justify-end">
        <Footer />
      </div>
    </div>
  );
}

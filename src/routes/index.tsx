import { createFileRoute, redirect } from "@tanstack/react-router";
import Cookies from "js-cookie";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    if (Cookies.get("NAME")) {
      throw redirect({
        to: "/home",
      });
    } else {
      throw redirect({
        to: "/login",
      });
    }
  },
});

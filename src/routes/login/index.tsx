import { Card } from "@/components/ui/card";
import { createFileRoute, redirect } from "@tanstack/react-router";
import logo from "@/assets/Resources/4i_Blue Logo with GPTW-01-01.svg";
import { LoginForm } from "@/components/login-form";
import Cookies from "js-cookie";

export const Route = createFileRoute("/login/")({
  beforeLoad: () => {
    if (Cookies.get("NAME")) {
      throw redirect({
        to: "/compare",
      });
    }
  },
  component: Login,
});

function Login() {
  return (
    <div className="flex h-screen w-screen justify-center items-center bg-cover">
      <Card className="flex justify-evenly border-none shadow-none bg-transparent h-[90%]">
        <div className="flex bg-[url('@/assets/Resources/4i-Workspace.png')] bg-cover rounded-3xl w-[70%] items-end justify-center p-5">
          <div className="w-[98%] p-6 brightness-200 text-white bg-slate-900/50 rounded-3xl font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ac velit quis neque dictum vulputate. Fusce nec metus at quam cursus
            hendrerit ut id risus. Cras sit amet convallis velit. Phasellus
            feugiat orci vel odio aliquet, vel facilisis dolor consequat. Aenean
            sit amet justo id est convallis tempus. Aliquam erat volutpat. Sed
            et convallis enim, in dictum libero. Nulla facilisi. Praesent eget
            dignissim orci. Etiam pharetra eros nec sapien ultrices, sit amet
            feugiat leo fermentum. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Praesent a
            faucibus mauris. Cras vehicula, nisl sit amet vehicula scelerisque,
            mi libero scelerisque lectus, ut tincidunt lectus metus ut nulla.
            Suspendisse et orci mauris. Sed pharetra justo vitae est tincidunt,
            sit amet lacinia felis porttitor.
          </div>
        </div>
        <div className="flex flex-col backdrop-blur-3xl p-8 items-center justify-center">
          <div className="flex justify-evenly items-center gap-6">
            <img src={logo} alt="logo" className="h-10" />
            <div className="text-xl font-bold">4i Apps Solutions</div>
          </div>
          <div className="w-full">
            <LoginForm />
          </div>
        </div>
      </Card>
    </div>
  );
}

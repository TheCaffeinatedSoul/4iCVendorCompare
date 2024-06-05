import logo from "@/assets/Resources/4i_Blue Logo with GPTW-01-01.svg";
import { FiLogOut } from "react-icons/fi";
import { DarkModeToggle } from "./dark-mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Searchbar } from "./searchbar";
import { useNavigate } from "@tanstack/react-router";
import Cookies from "js-cookie";

export const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("NAME");
    navigate({ to: "/login" });
  };

  return (
    <nav className="flex justify-between items-center px-5 py-2 fixed w-full backdrop-blur-3xl z-10 gap-4">
      <div className="flex gap-2">
        <img
          src={logo}
          height={"40px"}
          width={"80px"}
          onClick={() => navigate({ to: "/compare" })}
          className="cursor-pointer"
        />
      </div>
      <b>AI Procurement Evaluation</b>
      <div className="flex items-center gap-2">
        <Searchbar />
        <div>
          <DarkModeToggle />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="Username" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              className="flex justify-evenly"
              onClick={handleLogout}
            >
              Logout <FiLogOut />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

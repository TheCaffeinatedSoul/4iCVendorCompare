import { vendors } from "@/data/vendors";
import { IoMdSearch } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useNavigate } from "@tanstack/react-router";

export const Searchbar = () => {
  const navigate = useNavigate();

  const handleSelect = (vendorName: string) => {
    navigate({ to: `/overview/${vendorName}` });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant={"outline"}
          className="flex gap-2 justify-evenly items-center"
        >
          Vendors <IoMdSearch />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {vendors.map((item) => (
            <DropdownMenuItem
              key={item.vendorName}
              onSelect={() => handleSelect(item.vendorName)}
            >
              {item.vendorName}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

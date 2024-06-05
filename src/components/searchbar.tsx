import { vendors } from "@/data/vendors";
import { IoMdSearch } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useNavigate } from "@tanstack/react-router";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { useState } from "react";

export const Searchbar = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleSelect = (vendorName: string) => {
    navigate({ to: `/overview/${vendorName}` });
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger>
        <Button
          variant={"outline"}
          className="flex gap-2 justify-evenly items-center"
        >
          Vendors <IoMdSearch />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-none p-0">
        <Command className="rounded-lg border">
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No results found</CommandEmpty>
            <CommandGroup heading="Vendors">
              {vendors.map((item) => (
                <CommandItem
                  key={item.vendorName}
                  onSelect={() => {
                    handleSelect(item.vendorName);
                    setOpen(false);
                  }}
                  className="cursor-pointer"
                >
                  {item.vendorName}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

"use client";

import React from "react";
import { ChevronDown, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function AuthDropdown() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DropdownMenu onOpenChange={(open) => setIsOpen(open)}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="group">
          Account
          <ChevronDown
            className={cn(
              "transition-all ease-out",
              isOpen ? "-rotate-180" : "rotate-0",
            )}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Sebastian Klen</p>
            <p className="text-xs leading-none text-muted-foreground">
              sebastianklen@gmail.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Settings />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOut />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

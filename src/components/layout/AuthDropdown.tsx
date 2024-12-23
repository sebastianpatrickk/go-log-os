"use client";

import React from "react";
import { ChevronDown, LogOut, Settings } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { Skeleton } from "../ui/skeleton";

export function AuthDropdown() {
  const { isLoaded, isSignedIn, user } = useUser();

  const [isOpen, setIsOpen] = React.useState(false);

  if (!isLoaded) {
    return <Skeleton className="h-9 w-28" />;
  }

  if (!isSignedIn) {
    return (
      <>
        <Link
          href="/sign-up"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          Get Started
        </Link>
      </>
    );
  }

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
      <DropdownMenuContent align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm leading-none">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.primaryEmailAddress?.emailAddress}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/settings">
            <DropdownMenuItem>
              <Settings />
              <span>Settings</span>
            </DropdownMenuItem>
          </Link>
          <SignOutButton>
            <DropdownMenuItem>
              <LogOut />
              <span>Log out</span>
            </DropdownMenuItem>
          </SignOutButton>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

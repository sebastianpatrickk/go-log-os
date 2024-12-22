import Link from "next/link";
import { Breadcrumb } from "./Breadcrumb";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../ModeToggle";
import { AuthDropdown } from "./AuthDropdown";

export default function Header() {
  return (
    <header className="container flex h-16 items-center">
      <div className="flex w-full items-center justify-between">
        <Breadcrumb />

        <div className="flex items-center gap-1">
          <Link
            href="/dashboard"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            Dashboard
          </Link>
          <Link
            href="/Users"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            Users
          </Link>
          <AuthDropdown />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

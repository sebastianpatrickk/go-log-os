import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { AuthDropdown } from "./AuthDropdown";
import { auth } from "@clerk/nextjs/server";

export default async function Navigation() {
  const { userId } = await auth();

  return (
    <div className="flex items-center gap-1">
      {userId && (
        <>
          <Link
            href="/teams"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            Teams
          </Link>
          <Link
            href="/devices"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            Devices
          </Link>
        </>
      )}
      <AuthDropdown />
    </div>
  );
}

"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { type DeviceCard } from "@/lib/schemas/device";
import { BookUser } from "lucide-react";

export default function DeviceCard({ device }: { device: DeviceCard }) {
  return (
    <div className="flex h-[5.75rem] w-full cursor-pointer flex-col justify-between border border-border p-4 hover:bg-accent">
      <div className="flex justify-between">
        <p>{device.name}</p>
        <div />
      </div>
      <div className="flex justify-between">
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <BookUser size={16} />
          <span>{device.teamsCount} teams</span>
        </p>
        <div />
      </div>
    </div>
  );
}

DeviceCard.Skeleton = function SkeletonComponent() {
  return <Skeleton className="h-[5.75rem] w-full" />;
};

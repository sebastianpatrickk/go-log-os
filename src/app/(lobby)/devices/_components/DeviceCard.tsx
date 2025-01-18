import { BookUser, History } from "lucide-react";

export default function DeviceCard() {
  return (
    <div className="flex h-[5.75rem] w-full cursor-pointer flex-col justify-between border border-border p-4 hover:bg-accent">
      <div className="flex justify-between">
        <p>Random team</p>
        <p className="flex items-center gap-2 text-sm">
          <div className="size-[6px] rounded-full bg-teal-400" />
          <span className="text-muted-foreground">active</span>
        </p>
      </div>
      <div className="flex justify-between">
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <BookUser size={16} />
          <span>8 teams</span>
        </p>
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <History size={16} />
          <span>231:57:28</span>
        </p>
      </div>
    </div>
  );
}

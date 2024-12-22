import { History, Users } from "lucide-react";

export default function TeamCard() {
  return (
    <div className="flex h-[5.75rem] w-full cursor-pointer flex-col justify-between border border-border p-4 transition-colors hover:border-gray-500 hover:bg-gray-100">
      <div className="flex justify-between">
        <p>Random team</p>
        <p className="flex items-center gap-2 text-sm">
          <div className="size-[6px] rounded-full bg-teal-700" />
          <span className="text-gray-900">6 active</span>
        </p>
      </div>
      <div className="flex justify-between">
        <p className="flex items-center gap-2 text-sm text-gray-900">
          <Users size={16} />
          <span>8 members</span>
        </p>
        <p className="flex items-center gap-2 text-sm text-gray-900">
          <History size={16} />
          <span>231:57:28</span>
        </p>
      </div>
    </div>
  );
}

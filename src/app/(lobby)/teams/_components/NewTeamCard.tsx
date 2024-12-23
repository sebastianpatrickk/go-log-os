import { Plus } from "lucide-react";

export default function NewTeamCard() {
  return (
    <div className="flex h-[5.75rem] w-full cursor-pointer items-center justify-center border border-border p-4 hover:bg-accent">
      <p className="flex items-center gap-2 text-sm">
        <Plus size={16} />
        <span>Create New Team</span>
      </p>
    </div>
  );
}

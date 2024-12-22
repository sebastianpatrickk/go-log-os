import { CopyPlus } from "lucide-react";
import TeamCard from "./_components/TeamCard";
import NewTeamCard from "./_components/NewTeamCard";

export default function Teams() {
  return (
    <div className="flex w-full flex-col gap-3">
      <h2 className="flex items-center gap-2 text-lg">
        <CopyPlus size={16} />
        <span>Teams</span>
      </h2>
      <div className="grid w-full grid-cols-3 gap-4">
        <TeamCard />
        <NewTeamCard />
      </div>
    </div>
  );
}

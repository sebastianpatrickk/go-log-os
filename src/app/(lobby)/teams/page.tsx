import { CopyPlus } from "lucide-react";
import TeamCard from "./_components/TeamCard";
import NewTeamCard from "./_components/NewTeamCard";
import { getUserTeams } from "@/lib/queries/team";

export default async function Teams() {
  const teams = await getUserTeams();

  console.log(teams);

  return (
    <div className="flex w-full flex-col gap-3">
      <h2 className="flex items-center gap-2 text-lg">
        <CopyPlus size={16} />
        <span>Teams</span>
      </h2>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-[repeat(auto-fit,minmax(22.75rem,28rem))]">
        <TeamCard />
        <NewTeamCard />
      </div>
    </div>
  );
}

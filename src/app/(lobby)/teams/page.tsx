import { BookUser } from "lucide-react";
import TeamCard from "./_components/TeamCard";
import NewTeamCard from "./_components/NewTeamCard";

export default async function Teams() {
  return (
    <div className="flex w-full flex-col gap-3">
      <h2 className="flex items-center gap-2 text-lg">
        <BookUser size={16} />
        <span>Teams</span>
      </h2>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-[repeat(auto-fit,minmax(22.75rem,28rem))]">
        <TeamCard />
        <NewTeamCard />
      </div>
    </div>
  );
}

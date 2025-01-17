import { db } from "@/lib/db/drizzle";
import { teams, users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export default async function DashboardPage({
  params,
}: {
  params: Promise<{
    id: number;
  }>;
}) {
  const { id } = await params;

  const team = await db
    .select({
      team: teams,
      users: users,
    })
    .from(teams)
    .where(eq(teams.id, id))
    .leftJoin(users, eq(users.teamId, teams.id));

  if (team.length === 0) {
    return <div className="w-full">Team not found</div>;
  }

  const teamData = team[0];

  return (
    <div className="w-full">
      <pre>{JSON.stringify(teamData, null, 2)}</pre>
    </div>
  );
}

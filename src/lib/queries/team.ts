import { auth } from "@clerk/nextjs/server";
import { users } from "../db/schema";
import { db } from "../db/drizzle";
import { eq } from "drizzle-orm";

export async function getUserTeams() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  const userTeams = await db.query.teams.findMany({
    columns: {},
    with: {
      users: {
        where: eq(users.clerkId, userId),
      },
    },
  });

  return userTeams;
}

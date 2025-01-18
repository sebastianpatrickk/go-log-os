"use server";

import { eq } from "drizzle-orm";
import { teams } from "../db/schema";
import { db } from "../db/drizzle";

export async function getTeamsByPersonIdForSelect(personId: string) {
  return await db
    .select({
      id: teams.id,
      name: teams.name,
    })
    .from(teams)
    .where(eq(teams.personId, personId));
}

import { db } from "@/lib/db/drizzle";
import { entries, users } from "@/lib/db/schema";
import { attendanceSchema } from "@/lib/schemas/attendance";
import { validateCard } from "@/lib/token";
import { generateAttendanceMessage } from "@/lib/utils";
import { and, eq, isNull } from "drizzle-orm";

export async function POST(req: Request) {
  const body = await req.json();

  const { data } = attendanceSchema.parse(body);

  const { error, data: card } = await validateCard(data.cardId, data.token);

  if (!card) {
    return Response.json({
      error: "Invalid card",
      data: null,
    });
  }

  if (error) {
    return Response.json({
      error: error,
      data: null,
    });
  }

  const userData = await db
    .select()
    .from(users)
    .where(eq(users.id, card.userId));

  if (userData.length === 0) {
    return Response.json({
      error: "User not found",
      data: null,
    });
  }

  const entryData = await db
    .select()
    .from(entries)
    .where(and(eq(entries.userId, card.userId), isNull(entries.endDate)));

  let message;

  if (entryData.length > 0) {
    await db
      .update(entries)
      .set({ endDate: new Date(data.timestamp) })
      .where(eq(entries.id, entryData[0].id));

    message = generateAttendanceMessage(
      userData[0].firstName ?? "Dear",
      new Date(data.timestamp),
      "out",
    );
  } else {
    await db.insert(entries).values({
      startDate: new Date(data.timestamp),
      userId: card.userId,
    });

    message = generateAttendanceMessage(
      userData[0].firstName ?? "Dear",
      new Date(data.timestamp),
      "in",
    );
  }

  return Response.json({
    error: null,
    data: {
      message,
    },
  });
}

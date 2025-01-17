import { db } from "@/lib/db/drizzle";
import { entries, users } from "@/lib/db/schema";
import { attendanceSchema } from "@/lib/schemas/attendance";
import { validateCard } from "@/lib/token";
import { generateAttendanceMessage } from "@/lib/utils";
import { and, eq, isNull } from "drizzle-orm";

export async function POST(req: Request) {
  const body = await req.json();

  const { data } = attendanceSchema.parse(body);

  const isValid = await validateCard(data.cardId, data.token);

  if (!isValid) {
    return Response.json({
      data: {
        message: "Invalid card",
      },
    });
  }

  const userData = await db
    .select()
    .from(users)
    .where(eq(users.id, data.userId));

  if (userData.length === 0) {
    return Response.json({
      data: {
        message: "User not found",
      },
    });
  }

  const entryData = await db
    .select()
    .from(entries)
    .where(and(eq(entries.userId, data.userId), isNull(entries.endDate)));

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
      userId: data.userId,
    });

    message = generateAttendanceMessage(
      userData[0].firstName ?? "Dear",
      new Date(data.timestamp),
      "in",
    );
  }

  return Response.json({
    data: {
      message,
    },
  });
}

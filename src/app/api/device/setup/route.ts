import { db } from "@/lib/db/drizzle";
import { devices, person } from "@/lib/db/schema";
import { setupDeviceSchema } from "@/lib/schemas/device";
import { and, eq } from "drizzle-orm";

export async function POST(req: Request) {
  const body = await req.json();

  const { id, apiKey } = setupDeviceSchema.parse(body);

  const devicesData = await db
    .select()
    .from(devices)
    .where(and(eq(devices.id, id), eq(devices.apiKey, apiKey)));

  console.log(id, apiKey);
  if (devicesData.length === 0) {
    return Response.json({
      error: "Device not found",
      data: null,
    });
  }

  const deviceData = devicesData[0];

  if (!deviceData.personId) {
    return Response.json({
      error: "Device not paired",
      data: null,
    });
  }

  const personsData = await db
    .select()
    .from(person)
    .where(eq(person.id, deviceData.personId));

  const personData = personsData[0];

  if (!personData) {
    return Response.json({
      error: "Person not found",
      data: null,
    });
  }
  return Response.json({
    error: null,
    data: {
      message: "Pairing successful",
    },
  });
}

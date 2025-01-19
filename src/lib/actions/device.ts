"use server";

import { eq, inArray } from "drizzle-orm";
import { db } from "../db/drizzle";
import { DeviceCard, InputDeviceCard, PairDevice } from "../schemas/device";
import { devices, teams, teamsToDevices } from "../db/schema";
import { getErrorMessage } from "../utils";

export async function getDeviceCards({
  personId,
}: InputDeviceCard): Promise<DeviceCard[]> {
  const devicesData = await db.query.devices.findMany({
    where: (devices, { eq }) => eq(devices.personId, personId),
    columns: {
      id: true,
      name: true,
    },
    with: {
      teams: {
        with: {
          team: {
            columns: {
              id: true,
            },
          },
        },
      },
    },
  });

  const devices = devicesData.map((device) => {
    return {
      id: device.id,
      name: device.name,
      teamsCount: device.teams.length,
    };
  });

  return devices;
}

export async function pairDevice(input: PairDevice) {
  try {
    const deviceData = await db
      .select()
      .from(devices)
      .where(eq(devices.apiKey, input.apiKey));

    if (deviceData.length === 0) {
      throw new Error("Device not found");
    }

    const teamsData = await db
      .select()
      .from(teams)
      .where(
        inArray(
          teams.id,
          input.teams.map((team) => Number(team)),
        ),
      );

    if (teamsData.length === 0) {
      throw new Error("Teams not found");
    }

    await db
      .update(devices)
      .set({
        personId: input.personId,
      })
      .where(eq(devices.id, deviceData[0].id));

    await db.insert(teamsToDevices).values(
      teamsData.map((team) => ({
        teamId: team.id,
        deviceId: deviceData[0].id,
      })),
    );

    return {
      data: null,
      error: null,
    };
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

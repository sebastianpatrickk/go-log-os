"use server";

import { db } from "../db/drizzle";
import { DeviceCard } from "../schemas/device";

export async function getDeviceCards(): Promise<DeviceCard[]> {
  const devicesData = await db.query.devices.findMany({
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

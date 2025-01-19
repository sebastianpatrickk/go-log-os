import { z } from "zod";

export const deviceCardSchema = z.object({
  id: z.string(),
  name: z.string(),
  teamsCount: z.number(),
});
export type DeviceCard = z.infer<typeof deviceCardSchema>;

export const newDeviceFormSchema = z.object({
  apiKey: z.string().length(8, "API key must be exactly 8 characters"),
  teams: z.array(z.string()),
});
export type NewDeviceForm = z.infer<typeof newDeviceFormSchema>;

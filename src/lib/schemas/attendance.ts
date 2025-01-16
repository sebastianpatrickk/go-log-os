import { z } from "zod";
import { dateToUTC } from "../utils";

export const attendanceSchema = z.object({
  data: z.object({
    userId: z.number(),
    timestamp: z.string().transform((value) => dateToUTC(new Date(value))),
  }),
});

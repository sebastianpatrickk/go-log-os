import { z } from "zod";
import { dateToUTC } from "../utils";

export const attendanceSchema = z.object({
  data: z.object({
    timestamp: z.string().transform((value) => dateToUTC(new Date(value))),
    token: z.string(),
    cardId: z.string(),
  }),
});

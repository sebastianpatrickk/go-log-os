import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { TZDate } from "@date-fns/tz";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function dateToUTC(date: Date) {
  return new TZDate(date, "UTC");
}

type MessageType = "in" | "out";

export function generateAttendanceMessage(
  firstName: string,
  timestamp: Date,
  type: MessageType,
): string {
  const dayOfWeek = timestamp.getDay(); // 0 = Sunday, 6 = Saturday
  const hours = timestamp.getHours();

  if (type === "out") {
    // Messages for leaving work
    if (dayOfWeek === 5) {
      return `Goodbye ${firstName}! Have a great weekend!`;
    }
    if (dayOfWeek === 6 || dayOfWeek === 0) {
      return `Goodbye ${firstName}! Enjoy the rest of your weekend!`;
    }
    if (hours >= 17) {
      return `Goodbye ${firstName}! Have a pleasant evening!`;
    }
    return `Goodbye ${firstName}, see you soon!`;
  } else {
    // Messages for arriving at work
    if (hours < 7) {
      return `Welcome ${firstName}! You're quite early today!`;
    }
    if (hours < 9) {
      return `Good morning ${firstName}! Have a productive day!`;
    }
    if (hours >= 12) {
      return `Welcome ${firstName}! Have a great afternoon!`;
    }
    return `Welcome ${firstName}! Have a great day at work!`;
  }
}

export function getErrorMessage(err: unknown) {
  if (err instanceof z.ZodError) {
    return err.errors[0]?.message ?? "An unknown error occurred";
  } else if (err instanceof Error) {
    return err.message;
  } else {
    return "An unknown error occurred";
  }
}

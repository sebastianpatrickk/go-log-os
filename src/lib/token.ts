import crypto from "crypto";
import { db } from "./db/drizzle";
import { cards } from "./db/schema";
import { eq } from "drizzle-orm";
import { generateId } from "./id";

export function generateCardToken(cardId: string, secret: string) {
  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(cardId);
  return hmac.digest("hex");
}

export async function validateCard(cardId: string, token: string) {
  const card = await db.select().from(cards).where(eq(cards.id, cardId));
  if (!card || !card[0].isActive) {
    return null;
  }
  const expectedToken = generateCardToken(cardId, process.env.CARD_SECRET!);

  if (token !== expectedToken) {
    return null;
  }

  return card[0];
}

export async function generateDeviceApiKey() {
  return generateId("device", { length: 8 });
}

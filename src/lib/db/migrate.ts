import dotenv from "dotenv";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { db } from "./drizzle";

dotenv.config();

async function main() {
  try {
    console.log("⏳ Running migrations...");

    const start = Date.now();

    await migrate(db, {
      migrationsFolder: "drizzle",
    });

    const end = Date.now();

    console.log(`✅ Migrations completed in ${end - start}ms`);

    process.exit(1);
  } catch (err) {
    console.error("❌ Migration failed");
    console.error(err);
    process.exit(1);
  }
}

main();

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Hash passwords
  const passwordAdmin = await bcrypt.hash("admin123", 10);
  const passwordUser = await bcrypt.hash("user123", 10);

  // Create users
  const users = await prisma.user.createMany({
    data: [
      {
        name: "Admin User",
        username: "admin",
        password: passwordAdmin,
        role: "admin",
      },
      {
        name: "Regular User",
        username: "user",
        password: passwordUser,
        role: "user",
      },
    ],
    skipDuplicates: true, // Prevent duplicate seeding
  });

  console.log(`Seeded ${users} users.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

import { VercelRequest, VercelResponse } from "@vercel/node";
import { PrismaClient } from "@prisma/client";

// Используем одинаковый экземпляр Prisma для production
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default async (req: VercelRequest, res: VercelResponse) => {
  // CORS заголовки
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    // Проверка переменной окружения
    if (!process.env.DATABASE_URL) {
      console.error("DATABASE_URL не установлена");
      return res.status(500).json({ 
        error: "DATABASE_URL not configured" 
      });
    }

    const limit = Math.min(Number(req.query.limit) || 10, 100);
    const order = req.query.order === "asc" ? "asc" : "desc";

    const data = await prisma.marketNews.findMany({
      take: limit,
      orderBy: {
        createdAt: order,
      },
    });

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching market news:", error);
    res.status(500).json({ 
      error: "Failed to fetch market news",
      details: process.env.NODE_ENV === "development" ? String(error) : undefined
    });
  }
};

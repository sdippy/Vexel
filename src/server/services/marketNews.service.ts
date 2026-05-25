import { prisma } from "../db/prisma";

export async function getAllMarketNews(
  limit: number,
  order: "asc" | "desc" = "desc",
) {
  return prisma.marketNews.findMany({
    take: limit,
    orderBy: {
      createdAt: order,
    },
  });
}

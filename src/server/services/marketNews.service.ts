import { prisma } from "../db/prisma";

export async function getAllMarketNews(limit: number) {
  return prisma.marketNews.findMany({
    take: limit,
    orderBy: {
      createdAt: "desc",
    },
  });
}

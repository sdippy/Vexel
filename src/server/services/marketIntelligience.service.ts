import { prisma } from "../db/prisma";

export async function getAllMarketIntelligience(limit: number) {
  return prisma.marketIntelligence.findMany({
    take: limit,
    orderBy: {
      timeCreated: "desc",
    },
  });
}

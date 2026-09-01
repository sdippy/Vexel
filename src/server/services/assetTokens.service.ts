// (Сервис получения информации о крипте)
import { prisma } from "../db/prisma";

export type GetAssetTokensParams = {
  search?: string;
  limit?: number;
  offset?: number;
};

export async function getAssetTokens({
  search,
  limit = 20,
  offset = 0,
}: GetAssetTokensParams = {}) {
  return prisma.assetToken.findMany({
    where: search
      ? {
          OR: [
            {
              name: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              symbol: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              slug: {
                contains: search,
                mode: "insensitive",
              },
            },
          ],
        }
      : undefined,

    select: {
      id: true,
      symbol: true,
      name: true,
      slug: true,
      imageUrl: true,
      color: true,
    },

    orderBy: {
      name: "asc",
    },

    take: limit,
    skip: offset,
  });
}
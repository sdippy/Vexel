import { prisma } from "../db/prisma";

// Global Watchlist
export async function getAllWatchlistGlobal(
  order: "asc" | "desc" = "desc", 
) {
  return prisma.watchlist.findMany({
    where: {
    isGlobal: true,
  },
  orderBy: {
    name: order,
  },
  });
}

// User Watchlist
type GetAllWatchlistUserParams = {
  userId: string;
  order?: "asc" | "desc";
  name?: string;
  limit?: number;
  offset?: number;
};

export async function getAllWatchlistUser({
  userId,
  order = "desc",
  name,
  limit,
  offset,
}: GetAllWatchlistUserParams) {
  return prisma.watchlist.findMany({
    where: {
      userId,

      ...(name && {
        name: {
          contains: name,
          mode: "insensitive",
        },
      }),
    },

    orderBy: {
      name: order,
    },

    ...(limit !== undefined && {
      take: limit,
    }),

    ...(offset !== undefined && {
      skip: offset,
    }),
  });
}

import { prisma } from "../db/prisma";

// (Сервис глобального Watchlist)
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

// (Сервис пользовательского Watchlist)
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

// (Сервис WatchlistItem)
type GetAllWatchlistItemsParams = {
  watchlistId: string;
  order?: "asc" | "desc";
  limit?: number;
  offset?: number;
};

export async function getAllWatchlistItems({
  watchlistId,
  order = "desc",
  limit,
  offset,
}: GetAllWatchlistItemsParams) {
  return prisma.watchlistItem.findMany({
    where: {
      watchlistId,
    },

    select: {
    id: true,
    createdAt: true,

    assetToken: {
        select: {
          id: true,
          symbol: true,
          name: true,
          slug: true,
          imageUrl: true,
          color: true,
        },
      },
    },

    orderBy: {
      assetToken: {
        symbol: order,
      },
  },

    ...(limit !== undefined && {
      take: limit,
    }),

    ...(offset !== undefined && {
      skip: offset,
    }),
  });
}
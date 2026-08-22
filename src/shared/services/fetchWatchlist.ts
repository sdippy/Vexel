import type { WatchlistItemProps } from "@/shared/types";

// Global watchlist service
export async function getWatchlistGlobal(order: "asc" | "desc") {
  const res = await fetch(`/api/watchlist/global?isGlobal=true&order=${order}`, {
    credentials: "include",
  });

  if (!res.ok) return [];

  return res.json();
}

// User watchlist service
export type GetWatchlistsParams = {
  order?: "asc" | "desc";
  name?: string;
  limit?: number;
  offset?: number;
};

export async function getWatchlistUser(
  params: GetWatchlistsParams = {},
) {
  const searchParams = new URLSearchParams();

  if (params.order) {
    searchParams.set("order", params.order);
  }

  if (params.limit !== undefined) {
    searchParams.set("limit", String(params.limit));
  }

  if (params.offset !== undefined) {
    searchParams.set("offset", String(params.offset));
  }

  const res = await fetch(
    `/api/watchlist?${searchParams.toString()}`,
    {
      credentials: "include",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch watchlists");
  }

  return res.json();
}

// watchlistItems service
export type GetWatchlistItemsParams = {
  watchlistId: string;
  order?: "asc" | "desc";
  limit?: number;
  offset?: number;
};

export async function getWatchlistItems(
  params: GetWatchlistItemsParams,
): Promise<WatchlistItemProps[]> {
  const searchParams = new URLSearchParams();

  if (params.order) {
    searchParams.set("order", params.order);
  }

  if (params.limit !== undefined) {
    searchParams.set("limit", String(params.limit));
  }

  if (params.offset !== undefined) {
    searchParams.set("offset", String(params.offset));
  }

  const res = await fetch(
    `/api/watchlist/${params.watchlistId}/items?${searchParams.toString()}`,
    {
      credentials: "include",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch watchlistItems");
  }

  return res.json();
}
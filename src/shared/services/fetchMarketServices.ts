import type { MarketPrices } from "@/shared/types";

export async function getWatchlistMarketData(
  watchlistId: string,
): Promise<MarketPrices> {
  const response = await fetch(
    `/api/watchlist/${watchlistId}/market`,
    {
      credentials: "include",
    },
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch watchlist market data",
    );
  }

  return response.json();
}
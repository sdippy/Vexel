import { useQuery } from "@tanstack/react-query";

import {
  getWatchlistMarketData,
} from "@/shared/services/fetchMarketServices";

export function useWatchlistMarketData(
  watchlistId?: string,
) {
  return useQuery({
    queryKey: [
      "watchlist-market-data",
      watchlistId,
    ],

    queryFn: () =>
      getWatchlistMarketData(
        watchlistId!,
      ),

    enabled: Boolean(watchlistId),

    staleTime: 60 * 1000,
  });
}
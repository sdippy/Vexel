import { useQuery } from "@tanstack/react-query";
import { getWatchlistGlobal, getWatchlistUser, type GetWatchlistsParams, getWatchlistItems, type GetWatchlistItemsParams, } from "@/shared/services/fetchWatchlist";

// Global watchlist query
export function useWatchlistGlobal(order: "asc" | "desc" = "asc") {
  return useQuery({
    queryKey: ["watchlist", order],
    queryFn: () => getWatchlistGlobal(order),
  });
}

// User watchlist query
export function useWatchlistUser(
  params: GetWatchlistsParams = {},
) {
  return useQuery({
    queryKey: ["watchlist", "user", params],
    queryFn: () => getWatchlistUser(params),
  });
}

// Watchlist item
export function useWatchlistItems(
  params: GetWatchlistItemsParams,
) {
  return useQuery({
    queryKey: ["watchlistItems", params],
    queryFn: () => getWatchlistItems(params),
    enabled: Boolean(params.watchlistId),
  });
}

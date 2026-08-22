// import { useQuery } from "@tanstack/react-query";

// import {
//   getWatchlistMarketPrices,
// } from "@/shared/services/fetchMarketServices"

// export function useWatchlistMarketPrices(
//   watchlistId: string,
// ) {
//   return useQuery({
//     queryKey: ["watchlistMarketPrices", watchlistId],

//     queryFn: () =>
//       getWatchlistMarketPrices(watchlistId),

//     enabled: Boolean(watchlistId),

//     refetchInterval: 30_000,
//   });
// }
import { useQuery } from "@tanstack/react-query";
import { getMarketNews } from "@/shared/services/fetchMarketNews";

export function useMarketNews(limit = 2) {
  return useQuery({
    queryKey: ["market-intelligence", limit],
    queryFn: () => getMarketNews(limit),
  });
}

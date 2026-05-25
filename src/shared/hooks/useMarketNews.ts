import { useQuery } from "@tanstack/react-query";
import { getMarketNews } from "@/shared/services/fetchMarketNews";

export function useMarketNews(limit = 2, order: "asc" | "desc" = "desc") {
  return useQuery({
    queryKey: ["market-news", limit, order],
    queryFn: () => getMarketNews(limit, order),
  });
}

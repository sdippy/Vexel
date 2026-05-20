import { useQuery } from "@tanstack/react-query";
import { getMarketIntelligence } from "@/shared/services/fetchMarketIntelligience";

export function useMarketIntelligence(limit = 2) {
  return useQuery({
    queryKey: ["market-intelligence", limit],
    queryFn: () => getMarketIntelligence(limit),
  });
}

import { useQuery } from "@tanstack/react-query";

import {
  getAssetTokens,
  type GetAssetTokensParams,
} from "@/shared/services/fetchAssetTokens";

export function useAssetTokens(
  params: GetAssetTokensParams = {},
) {
  return useQuery({
    queryKey: ["assetTokens", params],

    queryFn: () => getAssetTokens(params),
  });
}
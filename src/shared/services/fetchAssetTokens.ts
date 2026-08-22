export type AssetToken = {
  id: string;
  symbol: string;
  name: string;
  slug: string;
  imageUrl: string;
  color: string;
};

export type GetAssetTokensParams = {
  search?: string;
  limit?: number;
  offset?: number;
};

export async function getAssetTokens({
  search,
  limit = 20,
  offset = 0,
}: GetAssetTokensParams = {}): Promise<AssetToken[]> {
  const params = new URLSearchParams();

  if (search) {
    params.set("search", search);
  }

  params.set("limit", String(limit));
  params.set("offset", String(offset));

  const response = await fetch(
    `/api/asset-tokens?${params.toString()}`,
    {
      credentials: "include",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to get asset tokens");
  }

  return response.json();
}
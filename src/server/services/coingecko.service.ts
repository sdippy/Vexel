// (api coingecko для получения цен на крипту)
const COINGECKO_API_URL = "https://api.coingecko.com/api/v3";

export async function getCoinsPrices(slugs: string[]) {
  if (slugs.length === 0) {
    return {};
  }

  const params = new URLSearchParams({
  ids: slugs.join(","),
  vs_currencies: "usd",
  include_24hr_change: "true",
});

  const response = await fetch(
    `${COINGECKO_API_URL}/simple/price?${params.toString()}`,
  );


  if (!response.ok) {
    throw new Error(
      `CoinGecko request failed: ${response.status}`,
    );
  }

  return response.json();
}
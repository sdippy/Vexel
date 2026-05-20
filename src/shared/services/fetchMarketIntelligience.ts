export async function getMarketIntelligence(limit = 2) {
  const res = await fetch(
    `http://localhost:3001/api/market-intelligence?limit=${limit}`,
  );

  if (!res.ok) throw new Error("Failed to fetch");

  return res.json();
}

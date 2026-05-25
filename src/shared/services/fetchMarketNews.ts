export async function getMarketNews(limit: number, order: "asc" | "desc") {
  const res = await fetch(
    `http://localhost:3001/api/market-news?limit=${limit}&order=${order}`,
  );

  if (!res.ok) return [];

  return res.json();
}

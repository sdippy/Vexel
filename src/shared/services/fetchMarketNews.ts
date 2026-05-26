export async function getMarketNews(limit: number, order: "asc" | "desc") {
  const res = await fetch(`/api/market-news?limit=${limit}&order=${order}`, {
    credentials: "include",
  });

  if (!res.ok) return [];

  return res.json();
}

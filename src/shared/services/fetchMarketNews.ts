export async function getMarketNews(limit = 2) {
  const res = await fetch(
    `http://localhost:3001/api/market-news?limit=${limit}`,
  );

  if (!res.ok) throw new Error("Failed to fetch");

  return res.json();
}

export async function getMarketNewsBig(limit = 1) {
  const res = await fetch(
    `http://localhost:3001/api/market-news?limit=${limit}`,
  );

  if (!res.ok) throw new Error("Failed to fetch");

  return res.json();
}

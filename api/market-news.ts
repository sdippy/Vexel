import { VercelRequest, VercelResponse } from "@vercel/node";
import { getAllMarketNews } from "../src/server/services/marketNews.service";

export default async (req: VercelRequest, res: VercelResponse) => {
  // CORS заголовки
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const limit = Number(req.query.limit) || 10;
    const order = req.query.order === "asc" ? "asc" : "desc";

    const data = await getAllMarketNews(limit, order);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching market news:", error);
    res.status(500).json({ message: "error" });
  }
};

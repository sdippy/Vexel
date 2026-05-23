import type { Request, Response } from "express";
import { getAllMarketNews } from "../services/marketNews.service";

export async function getMarketNewsController(req: Request, res: Response) {
  try {
    const limit = Math.min(Number(req.query.limit) || 10, 50);

    const data = await getAllMarketNews(limit);

    res.json(data);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch MarketNews",
    });
  }
}

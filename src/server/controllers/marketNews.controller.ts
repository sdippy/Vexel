import type { Request, Response } from "express";
import { getAllMarketNews } from "../services/marketNews.service";

export async function getMarketNewsController(req: Request, res: Response) {
  try {
    const limit = Number(req.query.limit) || 10;

    const order = req.query.order === "asc" ? "asc" : "desc";

    const data = await getAllMarketNews(limit, order);

    res.json(data);
  } catch (e) {
    res.status(500).json({ message: "error" });
  }
}

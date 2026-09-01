import type { Request, Response } from "express";

import {
  getWatchlistMarketData,
} from "../services/market.service";

// (Контроллер получения информации о крипте (Цены) с api coingecko)
export async function getWatchlistMarketDataController(
  req: Request,
  res: Response,
) {
  try {
    const { watchlistId } = req.params;

    if (typeof watchlistId !== "string") {
      return res.status(400).json({
        message: "Invalid watchlistId",
      });
    }

    const data =
      await getWatchlistMarketData(watchlistId);

    return res.json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to get market data",
    });
  }
}
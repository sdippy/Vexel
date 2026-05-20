import type { Request, Response } from "express";
import { getAllMarketIntelligience } from "../services/marketIntelligience.service";

export async function getMarketIntelligienceController(
  req: Request,
  res: Response,
) {
  try {
    const limit = Number(req.query.limit) || 10;

    const data = await getAllMarketIntelligience(limit);

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch MarketIntelligence",
    });
  }
}

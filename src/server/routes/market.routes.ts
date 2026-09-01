import { Router } from "express";

import {
  getWatchlistMarketDataController,
} from "../controllers/market.controller";

const router = Router();

// (Роут получения информации о крипте (Цены) с api coingecko)
router.get(
  "/watchlist/:watchlistId/market",
  getWatchlistMarketDataController,
);

export default router;
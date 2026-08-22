import { Router } from "express";

import {
  getWatchlistMarketDataController,
} from "../controllers/market.controller";

const router = Router();

router.get(
  "/watchlist/:watchlistId/market",
  getWatchlistMarketDataController,
);

export default router;
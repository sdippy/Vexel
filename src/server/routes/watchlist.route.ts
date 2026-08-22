import { Router } from "express";

import {
  getWatchlistGlobalController,
  getWatchlistUserController,
  getWatchlistItemsController,
} from "../controllers/watchlist.controller";

import {
  getWatchlistMarketDataController,
} from "../controllers/market.controller";

const router = Router();

// Global watchlist
router.get(
  "/global",
  getWatchlistGlobalController,
);

// User watchlists
router.get(
  "/",
  getWatchlistUserController,
);

// Watchlist market data
router.get(
  "/:watchlistId/market",
  getWatchlistMarketDataController,
);

// Watchlist items
router.get(
  "/:watchlistId/items",
  getWatchlistItemsController,
);

export default router;
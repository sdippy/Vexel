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

// (Роут глобального watchlist)
router.get(
  "/global",
  getWatchlistGlobalController,
);

// (Роут пользовательского watchlists)
router.get(
  "/",
  getWatchlistUserController,
);

// (Роут к api)
router.get(
  "/:watchlistId/market",
  getWatchlistMarketDataController,
);

// (Роут Watchlist items)
router.get(
  "/:watchlistId/items",
  getWatchlistItemsController,
);

export default router;
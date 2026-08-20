import { Router } from "express";
import { getWatchlistGlobalController, getWatchlistUserController } from "../controllers/watchlist.controller";

const router = Router();
// Global watchlist route
router.get("/global", getWatchlistGlobalController);
router.get("/", getWatchlistUserController);

export default router;

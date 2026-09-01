import { Router } from "express";
import { getMarketNewsController } from "../controllers/marketNews.controller";

const router = Router();

// (Роут получения новостей)
router.get("/", getMarketNewsController);

export default router;

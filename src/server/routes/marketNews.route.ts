import { Router } from "express";
import { getMarketNewsController } from "../controllers/marketNews.controller";

const router = Router();

router.get("/", getMarketNewsController);

export default router;

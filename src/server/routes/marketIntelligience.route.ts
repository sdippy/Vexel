import { Router } from "express";
import { getMarketIntelligienceController } from "../controllers/marketIntelligience.controller";

const router = Router();

router.get("/", getMarketIntelligienceController);

export default router;

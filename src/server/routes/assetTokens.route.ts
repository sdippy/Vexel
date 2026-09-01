import { Router } from "express";
import { getAssetTokensController } from "../controllers/assetTokens.controller";

const router = Router();
// (Роут AssetToken)
router.get("/", getAssetTokensController);

export default router;

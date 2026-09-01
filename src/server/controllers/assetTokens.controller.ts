import type { Request, Response } from "express";
import { getAssetTokens } from "../services/assetTokens.service"

// (Контроллер получения информации о крипте)
export async function getAssetTokensController(
  req: Request,
  res: Response,
) {
  try {
    const search =
      typeof req.query.search === "string"
        ? req.query.search
        : undefined;

    const limit =
      typeof req.query.limit === "string"
        ? Number(req.query.limit)
        : undefined;

    const offset =
      typeof req.query.offset === "string"
        ? Number(req.query.offset)
        : undefined;

    const data = await getAssetTokens({
      search,
      limit,
      offset,
    });

    res.json(data);
  } catch (e) {
    console.error(e);

    res.status(500).json({
      message: "Failed to get asset tokens",
    });
  }
}
import type { Request, Response } from "express";
import { getAllWatchlistGlobal, getAllWatchlistUser } from "../services/watchlist.service";

// Global Watchlist Controller
export async function getWatchlistGlobalController(req: Request, res: Response) {
  try {
    const order = req.query.order === "asc" ? "asc" : "desc";

    const data = await getAllWatchlistGlobal(order);

    res.json(data);
  } catch (e) {
    res.status(500).json({ message: "error" });
  }
}


// User Watchlist Controller
export async function getWatchlistUserController(
  req: Request,
  res: Response,
) {
  try {
    const order =
      req.query.order === "asc" ? "asc" : "desc";

    const name =
      typeof req.query.name === "string"
        ? req.query.name
        : undefined;

    const limit =
      typeof req.query.limit === "string"
        ? Number(req.query.limit)
        : undefined;

    const offset =
      typeof req.query.offset === "string"
        ? Number(req.query.offset)
        : undefined;

    const userId = "v37b6a90-4c1f-49fd-92d2-f3e7ab1c55de";    
    const data = await getAllWatchlistUser({
      userId: userId,
      // userId: req.user.id,
      order,
      name,
      limit,
      offset,
    });

    res.json(data);
  } catch (e) {
    console.error(e);

    res.status(500).json({
      message: "Failed to get watchlists",
    });
  }
}

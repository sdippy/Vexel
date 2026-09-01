import express from "express";
import newsRoutes from "./routes/marketNews.route";
import watchlistRoutes from "./routes/watchlist.route";
import assetTokensRoutes from "./routes/assetTokens.route";
import marketRoutes from "./routes/market.routes";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: [
      // dev build перенаправление
      "http://localhost:5173", 
      // preview build перенаправление
      "http://localhost:4173",
      process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "",
    ].filter(Boolean),
    credentials: true,
  }),
);
app.use("/api/market-news", newsRoutes);
app.use("/api/watchlist", watchlistRoutes);
app.use("/api/asset-tokens", assetTokensRoutes);
app.use("/api", marketRoutes);

app.listen(3001, () => {
  console.log("Server running");
});

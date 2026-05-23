import express from "express";
import newsRoutes from "./routes/marketNews.route";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use("/api/market-news", newsRoutes);

app.listen(3001, () => {
  console.log("Server running");
});

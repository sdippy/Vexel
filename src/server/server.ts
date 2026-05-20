import express from "express";
import newsRoutes from "./routes/marketIntelligience.route";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use("/api/market-intelligence", newsRoutes);

app.listen(3001, () => {
  console.log("Server running");
});

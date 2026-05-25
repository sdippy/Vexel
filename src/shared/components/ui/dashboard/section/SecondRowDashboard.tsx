import { lazy, Suspense } from "react";
const CandlestickChart = lazy(
  () => import("../candelistick-chart/CandlestickChart"),
);
const WatchlistPanel = lazy(() => import("../watchlist/WatchlistPanel"));

export default function SecondRowDashboard() {
  return (
    <div className="w-full h-[500px] flex gap-[24px]">
      <Suspense fallback={<div></div>}>
        <CandlestickChart />
      </Suspense>
      <WatchlistPanel />
    </div>
  );
}

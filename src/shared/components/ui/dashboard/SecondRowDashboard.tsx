import CandlestickChart from "./CandlestickChart";
import WatchlistPanel from "../watchlist/WatchlistPanel";

export default function SecondRowDashboard() {
  return (
    <div className="w-full h-[500px] flex gap-[24px]">
      <CandlestickChart />
      <WatchlistPanel />
    </div>
  );
}

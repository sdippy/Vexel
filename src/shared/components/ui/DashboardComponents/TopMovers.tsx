import MarketMovers from "../market-movers/MarketMovers";
import MarketIntelligence from "../market-intelligence/MarketIntelligence";

export default function TopMovers() {
  return (
    <div className="w-full flex gap-[24px]">
      <MarketMovers />
      <MarketIntelligence />
    </div>
  );
}

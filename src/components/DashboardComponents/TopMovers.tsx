import MarketMovers from "./MarketMovers";
import MarketIntelligence from "./MarketIntelligence";

export default function TopMovers() {
  return (
    <div className="w-full flex gap-[24px]">
      <MarketMovers />
      <MarketIntelligence />
    </div>
  );
}

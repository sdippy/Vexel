import { Suspense } from "react";

import MarketMovers from "../market-movers/MarketMovers";
import MarketIntelligence from "../market-intelligence/MarketIntelligence";

export default function TopMovers() {
  return (
    <div className="w-full flex gap-[24px]">
      <Suspense fallback={<div></div>}>
        <MarketMovers />
        <MarketIntelligence />
      </Suspense>
    </div>
  );
}

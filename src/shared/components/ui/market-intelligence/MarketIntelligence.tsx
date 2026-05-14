import MarketIntelligenceList from "./MarketIntelligenceList";

export default function MarketMovers() {
  return (
    <div className="w-3/5 flex flex-col gap-[17px]">
      <h2 className="text-[18px] font-normal font-hanken text-[#E1E2EC] px-2">
        Market Intelligence
      </h2>
      <MarketIntelligenceList />
    </div>
  );
}

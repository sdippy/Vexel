import MarketMoversCard from "./MarketMoversCard";

export default function MarketMoversList() {
  return (
    <div className="w-full h-full grid grid-cols-2 gap-[17px]">
      <MarketMoversCard />
      <MarketMoversCard />
      <MarketMoversCard />
      <MarketMoversCard />
    </div>
  );
}

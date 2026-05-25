import MarketIntelligenceCard from "./MarketIntelligenceCard";
import { useMarketNews } from "@/shared/hooks/useMarketNews";

export default function MarketIntelligence() {
  const { data = [] } = useMarketNews(2);

  return (
    <div className="w-4/6 flex flex-col gap-[17px]">
      <h2 className="text-[18px] font-normal font-hanken text-[#E1E2EC] px-2">
        Market Intelligence
      </h2>
      <div className="w-full h-full flex gap-[17px]">
        {data.map((item: any) => (
          <MarketIntelligenceCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

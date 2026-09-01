import MarketIntelligenceCard from "./MarketIntelligenceCard";
import { useMarketNews } from "@/shared/hooks/useMarketNews";

export default function MarketIntelligence() {
  const { data = [] } = useMarketNews(2);

  return (
    <div className="w-full h-full flex flex-col gap-[17px]">
      {data.map((item: any) => (
        <MarketIntelligenceCard key={item.id} {...item} />
      ))}
    </div>
  );
}

import MarketIntelligenceCard from "./MarketIntelligenceCard";
import { useMarketIntelligence } from "@/shared/hooks/useMarketIntelligence";

export default function MarketIntelligence() {
  const { data = [] } = useMarketIntelligence(2);

  return (
    <div className="w-4/6 flex flex-col gap-[17px]">
      <h2 className="text-[18px] font-normal font-hanken text-[#E1E2EC] px-2">
        Market Intelligence
      </h2>
      <div className="w-full h-full flex gap-[17px]">
        {data.map((item: any) => (
          <MarketIntelligenceCard
            key={item.id}
            label={item.label}
            timeToRead={item.timeToRead}
            typeTopic={item.typeTopic}
            timeCreated={item.timeCreated}
            imgTopic={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

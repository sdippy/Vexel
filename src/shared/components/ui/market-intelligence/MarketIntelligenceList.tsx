import MarketIntelligenceCard from "./MarketIntelligenceCard";

const data = [
  {
    id: 1,
    label: "SEC Approves Strategic Bitcoin Reserve Framework",
    timeToRead: "5 min read",
    typeTopic: "BULLISH",
    timeCreated: "05.05.2026",
    imgTopic: "/1test.png",
  },
  {
    id: 2,
    label: "Ethereum Layer-2 Activity Hits All-Time Highs Post - Upgrade",
    timeToRead: "3 min read",
    typeTopic: "NEUTRAL",
    timeCreated: "15.05.2026",
    imgTopic: "/2test.png",
  },
];

export default function MarketIntelligenceList() {
  return (
    <div className="w-full h-full flex gap-[17px]">
      {data.map((item) => (
        <MarketIntelligenceCard
          key={item.id}
          label={item.label}
          timeToRead={item.timeToRead}
          typeTopic={item.typeTopic}
          timeCreated={item.timeCreated}
          imgTopic={item.imgTopic}
        />
      ))}
    </div>
  );
}

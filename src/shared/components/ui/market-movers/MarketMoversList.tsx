import MarketMoversCard from "./MarketMoversCard";

const data = [
  {
    id: 1,
    label: "TOP GAINER",
    nameCoin: "LINK",
    priceChange: "+14.2%",
    color: "#4AE176",
  },
  {
    id: 2,
    label: "TOP VOLUME",
    nameCoin: "PEPE",
    priceChange: "$240M",
    color: "#ADC6FF",
  },
  {
    id: 3,
    label: "TOP LOSER",
    nameCoin: "DOGE",
    priceChange: "-5.1%",
    color: "#FFB4AB",
  },
  {
    id: 4,
    label: "NEW LISTING",
    nameCoin: "STRK",
    priceChange: "$2.10",
    color: "#E1E2EC",
  },
];

export default function MarketMoversList() {
  return (
    <div className="w-full h-full grid grid-cols-2 gap-[17px]">
      {data.map((item) => (
        <MarketMoversCard
          key={item.id}
          label={item.label}
          nameCoin={item.nameCoin}
          priceChange={item.priceChange}
          color={item.color}
        />
      ))}
    </div>
  );
}

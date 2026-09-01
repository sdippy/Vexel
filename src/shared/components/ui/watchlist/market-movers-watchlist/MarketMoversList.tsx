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
    label: "NEW LISTING",
    nameCoin: "STRK",
    priceChange: "$2.10",
    color: "#E1E2EC",
  },
];

export default function MarketMoversList() {
  return (
    <div className="w-full h-full flex flex-col gap-[17px]">
      {data.map((item) => (
        <MarketMoversCard key={item.id} {...item} />
      ))}
    </div>
  );
}

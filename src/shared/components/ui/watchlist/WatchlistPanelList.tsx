import WatchlistPanelCard from "./WatchlistPanelCard";

const data = [
  {
    id: 1,
    nameCoin: "BTC",
    upPricePercent: 2.4,
    price: "103,242",
    bgColor: "bg-[#F7931A]/20",
    borderColor: "border-[#F7931A]/30",
  },
  {
    id: 2,
    nameCoin: "ETH",
    upPricePercent: 1.1,
    price: "3,421",
    bgColor: "bg-[#3B82F6]/20",
    borderColor: "border-[#3B82F6]/30",
  },
];

export default function WatchlistPanelList() {
  return (
    <div className="w-full h-full flex flex-col gap-[17px] p-5 overflow-auto">
      {data.map((item) => (
        <WatchlistPanelCard
          key={item.id}
          nameCoin={item.nameCoin}
          upPricePercent={item.upPricePercent}
          price={item.price}
          bgColor={item.bgColor}
          borderColor={item.borderColor}
        />
      ))}
    </div>
  );
}

import WatchlistPanelCard from "./WatchlistPanelCard";

const data = [
  {
    id: 1,
    nameCoin: "BTC",
    priceData: [78033.65, 77923.17, 77970.17, 77980.17, 77990.17],
  },
  {
    id: 2,
    nameCoin: "ETH",
    priceData: [2185.9, 2182.33, 2185.16, 2182.99, 2179.33],
  },
  {
    id: 3,
    nameCoin: "SOL",
    priceData: [86.94, 86.79, 86.52, 86.59, 86.91],
  },
  {
    id: 4,
    nameCoin: "TON",
    priceData: [86.94, 86.79, 86.52, 86.59, 86.91],
  },
  {
    id: 5,
    nameCoin: "XRP",
    priceData: [0.523, 0.519, 0.514, 0.517, 0.521],
  },
];

export default function WatchlistPanelList() {
  return (
    <div className="w-full h-full flex flex-col gap-[17px] p-5 overflow-auto">
      {data.map((item) => (
        <WatchlistPanelCard
          key={item.id}
          nameCoin={item.nameCoin}
          priceData={item.priceData}
        />
      ))}
    </div>
  );
}

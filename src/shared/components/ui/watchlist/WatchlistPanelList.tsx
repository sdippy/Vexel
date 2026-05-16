import WatchlistPanelCard from "./WatchlistPanelCard";

const data = [
  {
    id: 1,
    nameCoin: "BTC",
    priceData: [10, 30, 20, 50, 100, 90],
  },
  {
    id: 2,
    nameCoin: "ETH",
    priceData: [10, 30, 20, 50, 70],
  },
  {
    id: 3,
    nameCoin: "SOL",
    priceData: [10, 30, 20, 50, 70],
  },
  {
    id: 4,
    nameCoin: "TON",
    priceData: [10, 30, 20, 50, 70],
  },
  {
    id: 5,
    nameCoin: "XRP",
    priceData: [10, 30, 20, 50, 70],
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

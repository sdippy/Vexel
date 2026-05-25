import WatchlistPanelCard from "./WatchlistPanelCard";
import { WATCHLIST_DATA } from "./watchlist.data";

function WatchlistPanelList() {
  return (
    <div className="w-full h-full flex flex-col gap-[17px] p-5 overflow-auto">
      {WATCHLIST_DATA.map((item) => (
        <WatchlistPanelCard
          key={item.id}
          id={item.id}
          nameCoin={item.nameCoin}
          priceData={item.priceData}
        />
      ))}
    </div>
  );
}

export default WatchlistPanelList;

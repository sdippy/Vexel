import WatchlistPanelCard from "./WatchlistPanelCard";

export default function WatchlistPanelList() {
  return (
    <div className="w-full h-full flex flex-col gap-[17px] p-5 overflow-auto">
      <WatchlistPanelCard />
      <WatchlistPanelCard />
      <WatchlistPanelCard />
      <WatchlistPanelCard />
      <WatchlistPanelCard />
    </div>
  );
}

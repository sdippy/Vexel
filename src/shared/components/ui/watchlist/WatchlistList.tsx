import WatchlistCard from "@/shared/components/ui/watchlist/WatchlistCard";
import WatchlistAddCard from "@/shared/components/ui/watchlist/WatchlistAddCard";

import { type WatchlistItem } from "@/shared/types";

type Props = {
  dataWatchlistItem: WatchlistItem[];
};

export default function WatchlistList({ dataWatchlistItem }: Props) {
  return (
    <div className="w-full h-full flex gap-[16px]">
      {dataWatchlistItem.map((item) => (
        <WatchlistCard key={item.id} {...item} />
      ))}

      <WatchlistAddCard />
    </div>
  );
}

import WatchlistCard from "@/shared/components/ui/watchlist/WatchlistCard";
import WatchlistAddCard from "@/shared/components/ui/watchlist/WatchlistAddCard";

import { type WatchlistItemProps, type MarketPrices } from "@/shared/types";

type Props = {
  dataWatchlistItem: WatchlistItemProps[];
  marketPrices: MarketPrices;
};

export default function WatchlistList({
  dataWatchlistItem,
  marketPrices,
}: Props) {
  return (
    <div className="w-full h-full grid grid-cols-3 gap-[16px]">
      {dataWatchlistItem.map((item) => {
        const marketData = marketPrices[item.assetToken.slug];

        return (
          <WatchlistCard
            key={item.id}
            {...item}
            marketPrice={marketData?.usd}
            marketPriceChange={marketData?.usd_24h_change}
            priceData={marketData?.chart ?? []}
          />
        );
      })}

      <WatchlistAddCard />
    </div>
  );
}

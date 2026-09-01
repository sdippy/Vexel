import { memo } from "react";

import { TrendingUp, TrendingDown, EllipsisVertical } from "lucide-react";

import {
  type WatchlistItemProps,
  getPriceChange,
  getPriceColor,
} from "@/shared/types";

import SparklineChart from "@/shared/components/ui/dashboard/watchlist/SparklineChart";

type Props = WatchlistItemProps & {
  marketPrice?: number;
  marketPriceChange?: number;
};

function WatchlistCard({
  assetToken,
  marketPrice,
  marketPriceChange,
  priceData,
}: Props) {
  const priceColor =
    marketPriceChange !== undefined
      ? getPriceColor(marketPriceChange)
      : "text-[#C2C6D6]";

  const pricePercent =
    marketPriceChange !== undefined ? getPriceChange(marketPriceChange) : "--";

  return (
    <div className="flex flex-col gap-[16px] p-5 border-[1px] border-white/10 rounded-[12px] bg-white/[.03] shadow-[0_8px_32px_rgba(0,0,0,0.37)] hover:border-[#ADC6FF]/50 hover:-translate-y-[2px] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200 cursor-pointer">
      <div className="flex justify-between w-full">
        <div className="flex gap-[12px] items-center">
          <div
            className="flex items-center justify-center rounded-full h-[35px] w-[35px] border-[1px]"
            style={{
              backgroundColor: `${assetToken.color}20`,
              borderColor: `${assetToken.color}4D`,
            }}
          >
            <img
              src={assetToken.imageUrl}
              alt={assetToken.name}
              className="h-[20px] w-[20px] rounded-full"
            />
          </div>

          <div className="flex flex-col">
            <h3 className="text-[24px] font-semibold font-hanken text-[#E1E2EC]">
              {assetToken.symbol}
            </h3>

            <h4 className="text-[14px] font-inter text-[#C2C6D6]/[.8]">
              {assetToken.name}
            </h4>
          </div>
        </div>

        <button className="flex h-[22px] w-[22px] items-center justify-center text-[#C2C6D6] hover:text-[#ADC6FF] hover:drop-shadow-[0_0_20px_rgba(173,198,255,0.3)]">
          <EllipsisVertical
            size={22}
            className="transition-transform duration-500 hover:rotate-90"
          />
        </button>
      </div>

      <div className="flex flex-col gap-[4px]">
        <span
          className={`text-[20px] font-semibold font-jetbrainsmono ${priceColor}`}
        >
          {marketPrice !== undefined
            ? `$${marketPrice.toLocaleString("en-US")}`
            : "--"}
        </span>

        <div className="flex gap-[8px]">
          <div className="flex gap-[3px] items-center">
            {marketPriceChange !== undefined &&
              (marketPriceChange >= 0 ? (
                <TrendingUp size={14} color="#4AE176" />
              ) : (
                <TrendingDown size={14} color="#FFB4AB" />
              ))}

            <span
              className={`text-[14px] font-semibold font-jetbrainsmono ${priceColor}`}
            >
              {pricePercent}
            </span>
          </div>

          <span className="text-[12px] font-jetbrainsmono text-[#C2C6D6]/[.7]">
            24H CHANGE
          </span>
        </div>
      </div>

      <SparklineChart chartData={priceData ?? []} />
    </div>
  );
}

export default memo(WatchlistCard);

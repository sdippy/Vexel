import { memo } from "react";

import { TrendingUp, TrendingDown, EllipsisVertical } from "lucide-react";

import {
  type WatchlistItem,
  getCurrentPrice,
  getPreviousPrice,
  getPriceChange,
  getPriceColor,
  getCurrentPriceFormat,
} from "@/shared/types";

import {
  getCryptoTheme,
  getCryptoSymbol,
  getCryptoAlias,
} from "@/shared/utils/Crypto/crypto";

import { CryptoIcon } from "@/shared/utils/Crypto/CryptoIcon";

import SparklineChart from "@/shared/components/ui/dashboard/watchlist/SparklineChart";

function WatchlistCard(item: WatchlistItem) {
  const currentPrice = getCurrentPrice(item.priceData);
  const previousPrice = getPreviousPrice(item.priceData);

  const pricePercent = getPriceChange(currentPrice, previousPrice);
  const priceColor = getPriceColor(currentPrice, previousPrice);
  const price = getCurrentPriceFormat(item.priceData);

  const theme = getCryptoTheme(item.assetTokenId);
  const alias = getCryptoAlias(item.assetTokenId);

  return (
    <div className="flex flex-col gap-[16px] w-1/3 p-5 border-[1px] border-white/10 rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)]">
      <div className="flex justify-between w-full">
        <div className="flex gap-[12px] items-center">
          <div
            className={`flex items-center justify-center rounded-full h-[35px] w-[35px] ${theme.bgColor} ${theme.borderColor} border-[1px]`}
          >
            <CryptoIcon
              symbol={getCryptoSymbol(item.assetTokenId)}
              className="size-20"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-[24px] font-semibold font-hanken text-[#E1E2EC]">
              {item.assetTokenId}
            </h3>
            <h4 className="text-[14px] font-inter text-[#C2C6D6]/[.8]">
              {alias}
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
          ${price}
        </span>
        <div className="flex gap-[8px]">
          <div className="flex gap-[3px] items-center">
            {currentPrice >= previousPrice ? (
              <TrendingUp size={14} color="#4AE176" />
            ) : (
              <TrendingDown size={14} color="#FFB4AB" />
            )}

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
      <SparklineChart chartData={item.priceData} />
    </div>
  );
}

export default memo(WatchlistCard);

import { memo } from "react";

import { NavLink } from "react-router-dom";
import SparklineChart from "./SparklineChart";
import {
  type WatchlistItemPrice,
  getCurrentPrice,
  getPreviousPrice,
  getPriceChange,
  getPriceColor,
  getCurrentPriceFormat,
} from "@/shared/types";

import { getCryptoTheme, getCryptoSymbol } from "@/shared/utils/Crypto/crypto";

import { CryptoIcon } from "@/shared/utils/Crypto/CryptoIcon";

function WatchlistPanelCard(props: WatchlistItemPrice) {
  const currentPrice = getCurrentPrice(props.priceData);
  const previousPrice = getPreviousPrice(props.priceData);

  const pricePercent = getPriceChange(currentPrice, previousPrice);
  const priceColor = getPriceColor(currentPrice, previousPrice);
  const price = getCurrentPriceFormat(props.priceData);

  const theme = getCryptoTheme(props.nameCoin);
  return (
    <NavLink
      aria-label="Open watchlist"
      to="/Watchlist"
      className="w-full h-[82px] border-[1px] border-white/10 rounded-[12px] flex flex-col  w-full bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)] hover:-translate-y-[2px] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200"
    >
      <div
        className="h-full px-5 py-[16px] rounded-[12px]"
        style={{
          WebkitBackfaceVisibility: "hidden", // устраняет артефакты рендера
          backfaceVisibility: "hidden",
          willChange: "transform",
          transform: "translateZ(0)", // форсирует GPU слой в Safari
        }}
      >
        <div className="flex flex-col gap-[8px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[8px]">
              <div
                className={`flex items-center justify-center rounded-full h-[24px] w-[24px] ${theme.bgColor} ${theme.borderColor} border-[1px]`}
              >
                <CryptoIcon
                  symbol={getCryptoSymbol(props.nameCoin)}
                  className="size-10"
                />
              </div>
              <p className="text-[14px] font-normal font-hanken text-[#E1E2EC] uppercase">
                {props.nameCoin}
              </p>
            </div>
            <p
              className={`text-[12px] font-normal font-jetbrainsmono ${priceColor}`}
            >
              {pricePercent}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p
              className={`text-[16px] font-normal font-jetbrainsmono ${priceColor}`}
            >
              ${price}
            </p>
            <SparklineChart chartData={props.priceData} width={64} />
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default memo(WatchlistPanelCard);

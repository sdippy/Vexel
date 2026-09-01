import { memo } from "react";
import { NavLink } from "react-router-dom";
import {
  type MarketIntelligence,
  getNewsMarketSentimentTheme,
  formatShortTimeAgo,
} from "@/shared/types";
import { Clock } from "lucide-react";

function MarketIntelligenceCard(props: MarketIntelligence) {
  const theme = getNewsMarketSentimentTheme(props.typeTopic);

  return (
    <div className="w-full flex-1 min-h-0 border border-white/10 rounded-[12px] bg-white/[.03] shadow-[0_8px_32px_rgba(0,0,0,0.37)] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200 overflow-hidden">
      <NavLink to="/News" className="h-full flex">
        <div className="w-1/3 shrink-0">
          <img
            src={props.imageUrl}
            alt="News"
            className="w-full max-h-[180px] h-full object-cover"
          />
        </div>

        <div className="w-2/3 flex flex-col p-5">
          <div className="flex items-center justify-between">
            <p
              className={`text-[12px] font-normal font-inter rounded-full px-[8px] border uppercase ${theme.bgColor} ${theme.borderColor} ${theme.color}`}
            >
              {props.typeTopic}
            </p>

            <p className="text-[12px] font-normal font-inter text-[#C2C6D6]">
              {formatShortTimeAgo(props.createdAt)}
            </p>
          </div>

          <div className="flex-1">
            <p className="text-[14px] font-normal font-hanken text-[#E1E2EC] mt-[10px]">
              {props.label}
            </p>
          </div>

          <div className="flex items-center mt-[20px] gap-[4px]">
            <Clock size={13} className="text-[#C2C6D6]" />

            <p className="text-[13px] font-normal font-inter text-[#C2C6D6] leading-none">
              {props.timeToRead}
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default memo(MarketIntelligenceCard);

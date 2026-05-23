import type { MarketIntelligence } from "@/shared/types";
import { NavLink } from "react-router-dom";
import {
  getNewsMarketSentimentTheme,
  formatShortTimeAgo,
} from "@/shared/types";
import { Clock } from "lucide-react";

type MarketIntelligenceCardProps = Omit<MarketIntelligence, "id">;

export default function MarketIntelligenceCard({
  label,
  timeToRead,
  typeTopic,
  createdAt,
  imgTopic,
}: MarketIntelligenceCardProps) {
  const theme = getNewsMarketSentimentTheme(typeTopic);
  return (
    <div className="w-full h-[217px] border-[1px] border-white/10 rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)] hover:-translate-y-[2px] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200">
      <NavLink
        to="/News"
        className="h-full flex"
        style={{
          WebkitBackfaceVisibility: "hidden", // устраняет артефакты рендера
          backfaceVisibility: "hidden",
          willChange: "transform",
          transform: "translateZ(0)", // форсирует GPU слой в Safari
        }}
      >
        <div className="w-1/3">
          <img
            src={imgTopic}
            alt="Profile"
            className="w-full h-full rounded-l-[12px] object-cover"
          />
        </div>
        <div className="w-2/3 flex flex-col p-5">
          <div className="flex items-center justify-between">
            <p
              className={`text-[12px] font-normal font-inter rounded-full px-[8px] border-[1px] uppercase ${theme.bgColor} ${theme.borderColor} ${theme.color}`}
            >
              {typeTopic}
            </p>
            <p className="text-[12px] font-normal font-inter text-[#C2C6D6]">
              {formatShortTimeAgo(createdAt)}
            </p>
          </div>
          <div className="flex-1">
            <p className="text-[14px] font-normal font-hanken text-[#E1E2EC] mt-[10px]">
              {label}
            </p>
          </div>

          <div className="flex items-center mt-[20px] gap-[4px]">
            <Clock size={13} className="text-[#C2C6D6]" />
            <p className="text-[13px] font-normal font-inter text-[#C2C6D6] leading-none">
              {timeToRead}
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

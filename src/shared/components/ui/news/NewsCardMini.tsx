import type { MarketNews } from "@/shared/types";
import {
  getNewsMarketSentimentTheme,
  formatMiddleTimeAgo,
} from "@/shared/types";
import { NavLink } from "react-router-dom";

type MarketNewsCardProps = Omit<MarketNews, "id">;

export default function NewsCardMini({
  topic,
  label,
  description,
  typeTopic,
  createdAt,
  keywords,
}: MarketNewsCardProps) {
  const theme = getNewsMarketSentimentTheme(typeTopic);

  return (
    <div className="w-full p-[20px] flex flex-col border-[1px] border-white/10 rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)]">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <span className="text-[16px] font-jetbrainsmono text-[#ADC6FF]">
            {topic}
          </span>
          <p
            className={`text-[12px] font-normal font-inter rounded-full px-[8px] border-[1px] uppercase ${theme.bgColor} ${theme.borderColor} ${theme.color}`}
          >
            {typeTopic}
          </p>
        </div>
        <span className="text-[16px] font-jetbrainsmono text-[#C2C6D6]">
          {formatMiddleTimeAgo(createdAt)}
        </span>
      </div>
      <div className="flex flex-col mt-[12px] gap-[12px]">
        <h2 className="text-[20px] font-semibold font-hanken text-[#E1E2EC]">
          {label}
        </h2>
        <p className="text-[16px] font-inter text-[#E1E2EC] h-[100px]">
          {description?.split(" ").slice(0, 15).join(" ") + "..."}
        </p>
      </div>
      <div className="flex justify-between items-center border-t-[1px] border-white/10 pt-[12px]">
        <div className="flex items-center gap-[12px]">
          {keywords.map((keyword, index) => (
            <div key={keyword} className="flex items-center gap-[12px]">
              <p className="text-[16px] font-jetbrainsmono text-[#C2C6D6]">
                {keyword}
              </p>

              {index !== keywords.length - 1 && (
                <span className="rounded-full h-[4px] w-[4px] bg-[#C2C6D6]" />
              )}
            </div>
          ))}
        </div>
        <NavLink
          to="/"
          className="text-[#C2C6D6] text-[20px] hover:text-[#ADC6FF]"
        >
          →
        </NavLink>
      </div>
    </div>
  );
}

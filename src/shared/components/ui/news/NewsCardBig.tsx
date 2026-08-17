import { memo } from "react";
import {
  type MarketNews,
  getNewsMarketSentimentTheme,
  formatMiddleTimeAgo,
} from "@/shared/types";
import { useModalStore } from "@/shared/types";

type MarketNewsCardProps = MarketNews;
function NewsCardBig(props: MarketNewsCardProps) {
  const theme = getNewsMarketSentimentTheme(props.typeTopic);
  const openNews = useModalStore((state) => state.openNews);

  return (
    <div
      onClick={() => openNews(props)}
      className="w-full flex h-[500px] border-[1px] border-white/10 rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)] cursor-pointer hover:-translate-y-[2px] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-300"
    >
      <div className="w-1/2 relative">
        <div className="absolute z-50 top-[20px] left-[20px]">
          <p
            className={`text-[12px] font-normal font-inter rounded-full px-[8px] border-[1px] uppercase ${theme.bgColor} ${theme.borderColor} ${theme.color}`}
          >
            {props.typeTopic}
          </p>
        </div>
        <img
          src={props.imageUrl}
          alt="IMG NEWS"
          className="w-full h-full rounded-l-[12px] object-cover inset-0"
        />
        <div className="absolute inset-0 rounded-l-[12px] bg-gradient-to-b from-[#10131A]/100 via-[#10131A]/60 to-transparent to-60%" />
      </div>
      <div className="w-1/2 p-[20px] flex flex-col justify-between gap-[24px]">
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[12px]">
            <span className="text-[16px] font-jetbrainsmono text-[#ADC6FF]">
              {props.topic}
            </span>
            <span className="text-[16px] font-jetbrainsmono text-[#C2C6D6]">
              {formatMiddleTimeAgo(props.createdAt)}
            </span>
          </div>
          <div className="flex flex-col overflow-y-auto h-[340px]">
            <h2 className="text-[24px] font-semibold font-hanken text-[#E1E2EC]">
              {props.label}
            </h2>
            <p className="text-[16px] font-inter text-[#E1E2EC]">
              {props.description?.split(" ").slice(0, 30).join(" ") + "..."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(NewsCardBig);

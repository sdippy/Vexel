import { memo } from "react";
import {
  type MarketNews,
  getNewsMarketSentimentTheme,
  formatMiddleTimeAgo,
} from "@/shared/types";
import { useModalStore } from "@/shared/types";

type MarketNewsCardProps = MarketNews;

function NewsCardMini(props: MarketNewsCardProps) {
  const theme = getNewsMarketSentimentTheme(props.typeTopic);
  const openNews = useModalStore((state) => state.openNews);

  return (
    <div
      onClick={() => openNews(props)}
      className="w-full p-[20px] flex flex-col border-[1px] border-white/10 rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)] cursor-pointer hover:-translate-y-[2px] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-300"
    >
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <span className="text-[16px] font-jetbrainsmono text-[#ADC6FF]">
            {props.topic}
          </span>
          <p
            className={`text-[12px] font-normal font-inter rounded-full px-[8px] border-[1px] uppercase ${theme.bgColor} ${theme.borderColor} ${theme.color}`}
          >
            {props.typeTopic}
          </p>
        </div>
        <span className="text-[16px] font-jetbrainsmono text-[#C2C6D6]">
          {formatMiddleTimeAgo(props.createdAt)}
        </span>
      </div>
      <div className="flex flex-col mt-[12px] gap-[12px]">
        <h2 className="text-[20px] font-semibold font-hanken text-[#E1E2EC]">
          {props.label}
        </h2>
        <p className="text-[16px] font-inter text-[#E1E2EC] h-[100px]">
          {props.description?.split(" ").slice(0, 15).join(" ") + "..."}
        </p>
      </div>
      <div className="flex justify-between items-center border-t-[1px] border-white/10 pt-[12px]">
        <div className="flex items-center gap-[12px]">
          {props.keywords.map((keyword, index) => (
            <div key={keyword} className="flex items-center gap-[12px]">
              <p className="text-[16px] font-jetbrainsmono text-[#C2C6D6]">
                {keyword}
              </p>

              {index !== props.keywords.length - 1 && (
                <span className="rounded-full h-[4px] w-[4px] bg-[#C2C6D6]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(NewsCardMini);

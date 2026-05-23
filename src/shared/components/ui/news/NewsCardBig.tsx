import type { MarketNews } from "@/shared/types";
import {
  getNewsMarketSentimentTheme,
  formatMiddleTimeAgo,
} from "@/shared/types";

type MarketNewsCardProps = Omit<MarketNews, "id">;

export default function NewsCardBig({
  topic,
  label,
  description,
  typeTopic,
  imageUrl,
  createdAt,
}: MarketNewsCardProps) {
  const theme = getNewsMarketSentimentTheme(typeTopic);

  return (
    <div className="w-full flex h-[500px] border-[1px] border-white/10 rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)]">
      <div className="w-1/2 relative">
        <div className="absolute z-50 top-[20px] left-[20px]">
          <p
            className={`text-[12px] font-normal font-inter rounded-full px-[8px] border-[1px] uppercase ${theme.bgColor} ${theme.borderColor} ${theme.color}`}
          >
            {typeTopic}
          </p>
        </div>
        <img
          src={imageUrl}
          alt="IMG NEWS"
          className="w-full h-full rounded-l-[12px] object-cover"
        />
      </div>
      <div className="w-1/2 p-[20px] flex flex-col justify-between gap-[24px]">
        <div className="flex flex-col gap-[16px]">
          <div className="flex items-center gap-[12px]">
            <span className="text-[16px] font-jetbrainsmono text-[#ADC6FF]">
              {topic}
            </span>
            <span className="rounded-full h-[4px] w-[4px] bg-[#C2C6D6]"></span>
            <span className="text-[16px] font-jetbrainsmono text-[#C2C6D6]">
              {formatMiddleTimeAgo(createdAt)}
            </span>
          </div>
          <div className="flex flex-col overflow-y-auto h-[340px]">
            <h2 className="text-[24px] font-semibold font-hanken text-[#E1E2EC]">
              {label}
            </h2>
            <p className="text-[16px] font-inter text-[#E1E2EC]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import type { MarketNewsTopic } from "@/shared/types";

type MarketNewsTopicProps = Omit<MarketNewsTopic, "id">;

export default function NewsTopic({ topic, count }: MarketNewsTopicProps) {
  return (
    <div className="flex flex-col">
      <span className="text-[16px] font-inter font-semibold text-[#E1E2EC]">
        #{topic}
      </span>
      <div className="flex items-center gap-[10px]">
        <span className="text-[16px] font-jetbrainsmono text-[#E1E2EC]">
          {count} mentions
        </span>
      </div>
    </div>
  );
}

import NewsTopicSkeleton from "./NewsTopicSkeleton";
import NewsCardBigSkeleton from "./NewsCardBigSkeleton";
import NewsCardMiniSkeleton from "./NewsCardMiniSkeleton";

export default function NewsSkeleton() {
  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[10px]">
            <div className="h-7 w-[260px] rounded bg-white/[.04] shimmer" />
            <div className="h-4 w-[420px] rounded bg-white/[.04] shimmer" />
          </div>

          <div className="flex gap-[8px]">
            <div className="h-[42px] w-[120px] rounded-[12px] bg-white/[.04] shimmer" />
            <div className="h-[42px] w-[140px] rounded-[12px] bg-white/[.04] shimmer" />
          </div>
        </div>

        <div className="w-full flex gap-[20px] mt-[20px] items-center">
          <div className="h-[134px] w-5/12 flex flex-col gap-[16px] p-[20px] rounded-[12px] bg-white/[.03]">
            <div className="flex justify-between items-center">
              <div className="h-5 w-[160px] rounded bg-white/[.04] shimmer" />
              <div className="h-5 w-5 rounded-full bg-white/[.04] shimmer" />
            </div>

            <div className="h-[12px] w-full rounded-full bg-white/[.04] shimmer" />

            <div className="flex justify-between">
              <div className="h-4 w-[120px] rounded bg-white/[.04] shimmer" />
              <div className="h-4 w-[120px] rounded bg-white/[.04] shimmer" />
            </div>
          </div>

          <div className="h-[134px] w-7/12 flex flex-col gap-[24px] p-[20px] rounded-[12px] bg-white/[.03]">
            <div className="h-5 w-[180px] rounded bg-white/[.04] shimmer" />

            <div className="grid grid-cols-3 gap-[20px]">
              {Array.from({ length: 3 }).map((_, i) => (
                <NewsTopicSkeleton key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-[16px]">
        <NewsCardBigSkeleton />
        <div className="w-full grid grid-cols-2 gap-[16px]">
          {Array.from({ length: 2 }).map((_, i) => (
            <NewsCardMiniSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

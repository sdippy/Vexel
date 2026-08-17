export default function NewsCardMiniSkeleton() {
  return (
    <div className="w-full p-[20px] flex flex-col rounded-[12px] bg-white/[.03]">
      {/* HEADER */}
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className="h-4 w-[80px] rounded bg-white/[.04] shimmer" />
          <div className="h-6 w-[70px] rounded-full bg-white/[.04] shimmer" />
        </div>

        <div className="h-4 w-[100px] rounded bg-white/[.04] shimmer mt-[8px]" />
      </div>

      {/* TITLE + TEXT */}
      <div className="flex flex-col mt-[12px] gap-[12px]">
        <div className="h-6 w-full rounded bg-white/[.04] shimmer" />
        <div className="h-6 w-8/12 rounded bg-white/[.04] shimmer" />

        <div className="flex flex-col gap-[8px] mt-[4px]">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className={`h-4 rounded bg-white/[.04] shimmer ${
                i === 2 ? "w-7/12" : "w-full"
              }`}
            />
          ))}
        </div>
      </div>

      {/* KEYWORDS */}
      <div className="flex items-center gap-[12px] pt-[12px] mt-[20px]">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex items-center gap-[12px]">
            <div className="h-4 w-[60px] rounded bg-white/[.04] shimmer" />

            {i !== 2 && (
              <span className="h-[4px] w-[4px] rounded-full bg-white/[.04]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

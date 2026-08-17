export default function NewsCardBigSkeleton() {
  return (
    <div className="w-full flex h-[500px] rounded-[12px] bg-white/[.03] overflow-hidden">
      {/* IMAGE */}
      <div className="w-1/2 relative bg-white/[.02]">
        <div className="absolute top-[20px] left-[20px] h-6 w-[90px] rounded-full bg-white/[.04] shimmer" />
      </div>

      {/* CONTENT */}
      <div className="w-1/2 p-[20px] flex flex-col gap-[20px]">
        <div className="flex items-center gap-[12px]">
          <div className="h-4 w-[80px] rounded bg-white/[.04] shimmer" />
          <div className="h-[4px] w-[4px] rounded-full bg-white/[.04]" />
          <div className="h-4 w-[100px] rounded bg-white/[.04] shimmer" />
        </div>

        <div className="flex flex-col gap-[10px]">
          <div className="h-8 w-full rounded bg-white/[.04] shimmer" />
          <div className="h-8 w-9/12 rounded bg-white/[.04] shimmer" />
        </div>

        <div className="flex flex-col gap-[10px] mt-[10px]">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={`h-4 rounded bg-white/[.04] shimmer ${
                i === 5 ? "w-8/12" : "w-full"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

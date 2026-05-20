export default function TopRowDashboardSkeleton() {
  return (
    <div className="w-full h-[308px] flex gap-[24px]">
      {/* HERO CARD SKELETON */}
      <div className="w-2/3 h-full rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)] overflow-hidden relative">
        {/* background shimmer glow */}
        <div className="absolute inset-0 shimmer bg-white/[.02]" />

        <div className="relative z-10 h-full flex flex-col justify-between p-[32px]">
          {/* TOP TEXT */}
          <div className="flex flex-col gap-[18px]">
            <div className="h-3 w-28 rounded bg-white/[.05] shimmer" />

            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-[10px]">
                <div className="h-10 w-48 rounded bg-white/[.05] shimmer" />
                <div className="h-10 w-32 rounded bg-white/[.05] shimmer" />
              </div>

              <div className="flex flex-col items-end gap-[10px]">
                <div className="h-3 w-24 rounded bg-white/[.05] shimmer" />
                <div className="h-8 w-40 rounded bg-white/[.05] shimmer" />
              </div>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-[12px]">
            <div className="h-[36px] w-[120px] rounded-[8px] bg-white/[.05] shimmer" />
            <div className="h-[36px] w-[140px] rounded-[8px] bg-white/[.05] shimmer" />
          </div>
        </div>
      </div>

      {/* PORTFOLIO CARD SKELETON */}
      <div className="w-1/3 h-full rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)] overflow-hidden">
        <div className="h-full flex flex-col gap-[10px] p-[24px]">
          {/* HEADER */}
          <div className="flex justify-between">
            <div className="flex flex-col gap-[8px]">
              <div className="h-3 w-28 rounded bg-white/[.05] shimmer" />
              <div className="h-6 w-40 rounded bg-white/[.05] shimmer" />
              <div className="h-3 w-24 rounded bg-white/[.05] shimmer" />
            </div>

            <div className="h-[40px] w-[40px] rounded-full bg-white/[.05] shimmer" />
          </div>

          {/* CHART */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-[120px] h-[120px] rounded-full bg-white/[.05] shimmer" />
          </div>
        </div>
      </div>
    </div>
  );
}

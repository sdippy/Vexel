export default function SecondRowDashboardSkeleton() {
  return (
    <div className="w-full h-[500px] flex gap-[24px]">
      {/* CHART SKELETON */}
      <div className="w-3/4 h-full min-h-0 overflow-hidden rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)] flex flex-col">
        {/* HEADER */}
        <div className="flex items-center justify-between px-[32px] py-[20px]">
          <div className="h-5 w-44 rounded bg-white/[.05] shimmer" />

          <div className="flex gap-[12px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="h-7 w-10 rounded-[8px] bg-white/[.05] shimmer"
              />
            ))}
          </div>

          <div className="flex gap-[16px]">
            <div className="h-4 w-24 rounded bg-white/[.05] shimmer" />
            <div className="h-4 w-24 rounded bg-white/[.05] shimmer" />
          </div>
        </div>

        {/* CHART AREA */}
        <div className="px-[32px] pb-[24px] flex-1 min-h-0">
          <div className="w-full h-full rounded-[8px] bg-white/[.04] shimmer" />
        </div>
      </div>

      {/* WATCHLIST SKELETON */}
      <div className="w-1/4 h-full rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)] flex flex-col">
        {/* HEADER */}
        <div className="flex justify-between items-center p-5">
          <div className="h-5 w-28 rounded bg-white/[.05] shimmer" />
          <div className="h-5 w-5 rounded bg-white/[.05] shimmer" />
        </div>

        {/* LIST */}
        <div className="flex flex-col gap-[17px] p-5 overflow-hidden">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="w-full h-[82px] rounded-[12px] bg-white/[.03] overflow-hidden"
            >
              <div className="h-full px-5 py-[16px] flex flex-col justify-between">
                {/* top row */}
                <div className="flex justify-between items-center">
                  <div className="h-4 w-16 rounded bg-white/[.05] shimmer" />
                  <div className="h-3 w-12 rounded bg-white/[.05] shimmer" />
                </div>

                {/* bottom row */}
                <div className="flex justify-between items-center">
                  <div className="h-5 w-20 rounded bg-white/[.05] shimmer" />
                  <div className="h-6 w-16 rounded bg-white/[.05] shimmer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

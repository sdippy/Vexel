export default function TopMoversSkeleton() {
  return (
    <div className="w-full flex gap-[24px]">
      {/* LEFT SECTION */}
      <div className="w-2/6 flex flex-col gap-[17px]">
        {/* TITLE */}
        <div className="flex items-center px-2">
          <div className="h-5 w-36 rounded bg-white/[.05]  shimmer" />
        </div>

        {/* GRID */}
        <div className="w-full h-full grid grid-cols-2 gap-[17px]">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="w-full h-[100px] rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)] overflow-hidden"
            >
              <div className="h-full px-5 py-[16px] flex flex-col justify-between">
                {/* LABEL */}
                <div className="h-3 w-20 rounded bg-white/[.05] shimmer" />

                {/* COIN */}
                <div className="h-4 w-14 rounded bg-white/[.05] shimmer" />

                {/* PRICE */}
                <div className="h-5 w-16 rounded bg-white/[.05] shimmer" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-4/6 flex flex-col gap-[17px]">
        {/* TOP ROW */}
        <div className="flex h-full gap-[17px]">
          <div className="h-full w-full rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)] shimmer" />
          <div className="h-full w-full rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)] shimmer" />
        </div>

        {/* BOTTOM ROW */}
        <div className="w-full h-full flex gap-[17px]">
          {/* LEFT BIG CARD */}
          <div className="flex w-full h-[217px] rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)] overflow-hidden">
            {/* IMAGE */}
            <div className="w-1/3 h-full bg-white/[.04] shimmer" />

            {/* CONTENT */}
            <div className="w-2/3 h-full flex flex-col pl-5 py-4 gap-[10px]">
              <div className="h-3 w-24 rounded bg-white/[.05] shimmer" />

              <div className="h-4 w-4/5 rounded bg-white/[.05] shimmer" />

              <div className="h-3 w-3/5 rounded bg-white/[.05] shimmer" />

              <div className="h-3 w-2/3 rounded bg-white/[.05] shimmer" />

              <div className="h-3 w-1/2 rounded bg-white/[.05] shimmer" />

              {/* META */}
              <div className="mt-auto flex gap-3">
                <div className="h-3 w-16 rounded bg-white/[.05] shimmer" />

                <div className="h-3 w-20 rounded bg-white/[.05] shimmer" />
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            className="flex w-full h-[217px] rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)] overflow-hidden
            "
          >
            {/* IMAGE */}
            <div className="w-1/3 h-full bg-white/[.04] shimmer" />

            {/* CONTENT */}
            <div className="w-2/3 h-full flex flex-col pl-5 py-4 gap-[10px]">
              <div className="h-3 w-20 rounded bg-white/[.05] shimmer" />

              <div className="h-4 w-3/4 rounded bg-white/[.05] shimmer" />

              <div className="h-3 w-2/3 rounded bg-white/[.05] shimmer" />

              <div className="h-3 w-3/5 rounded bg-white/[.05] shimmer" />

              {/* STATS */}
              <div className="mt-auto flex flex-col gap-2">
                <div className="h-3 w-1/2 rounded bg-white/[.05] shimmer" />

                <div className="h-3 w-2/3 rounded bg-white/[.05] shimmer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

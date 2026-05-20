export default function MarketIntelligenceSkeleton() {
  return (
    <div className="w-4/6 flex flex-col gap-[17px]">
      {/* TOP ROW */}
      <div className="flex h-full gap-[17px]">
        <div className="h-full w-full rounded-[12px] shadow-[0_8_32px_rgba(0,0,0,0.37)] shimmer" />
        <div className="h-full w-full rounded-[12px] shadow-[0_8_32px_rgba(0,0,0,0.37)] shimmer" />
      </div>

      {/* BOTTOM ROW */}
      <div className="w-full h-full flex gap-[17px]">
        {/* LEFT BIG CARD */}
        <div className="flex w-full h-[217px] rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)] overflow-hidden">
          {/* IMAGE */}
          <div className="w-1/3 bg-[#10131A] h-full shimmer" />

          {/* CONTENT */}
          <div className="w-2/3 h-full flex flex-col pl-5 gap-[10px] py-4">
            <div className="h-3 w-24 rounded shimmer" /> {/* tag */}
            <div className="h-4 w-4/5 rounded shimmer" /> {/* title */}
            <div className="h-3 w-3/5 rounded shimmer" />
            <div className="h-3 w-2/3 rounded shimmer" />
            <div className="h-3 w-1/2 rounded shimmer" />
            {/* bottom meta */}
            <div className="mt-auto flex gap-3">
              <div className="h-3 w-16 rounded shimmer" />
              <div className="h-3 w-20 rounded shimmer" />
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="flex w-full h-[217px] rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)] overflow-hidden">
          {/* IMAGE */}
          <div className="w-1/3 bg-[#10131A] h-full shimmer" />

          {/* CONTENT */}
          <div className="w-2/3 h-full flex flex-col pl-5 gap-[10px] py-4">
            <div className="h-3 w-20 rounded shimmer" />
            <div className="h-4 w-3/4 rounded shimmer" />
            <div className="h-3 w-2/3 rounded shimmer" />
            <div className="h-3 w-3/5 rounded shimmer" />

            {/* stats row */}
            <div className="mt-auto flex flex-col gap-2">
              <div className="h-3 w-1/2 rounded shimmer" />
              <div className="h-3 w-2/3 rounded shimmer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

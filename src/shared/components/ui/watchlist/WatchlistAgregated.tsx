export default function WatchlistAgregated() {
  return (
    <div className="flex h-full flex-col p-5 border border-white/10 rounded-[12px]  bg-white/[.03] shadow-[0_8px_32px_rgba(0,0,0,0.37)] gap-[20px]">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className="text-[14px] font-semibold font-hanken text-[#E1E2EC]">
            Watchlist Aggregated Alpha
          </h2>
          <p className="text-[14px] font-inter text-[#C2C6D6]">
            Relative performance vs BTC Benchmark
          </p>
        </div>
        <div className="flex flex-col text-right">
          <h3 className="text-[10px] font-jetbrainsmono text-[#E1E2EC]">
            ALPHA SCORE
          </h3>
          <span className="text-[20px] font-semibold font-jetbrainsmono text-[#4AE176]">
            +12.4%
          </span>
        </div>
      </div>
      <div className="relative w-full h-full overflow-hidden">
        <img
          src="chain2.jpg"
          alt="IMG NEWS"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        {/* Градиент поверх изображения */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#10131A]/100 via-[#10131A]/40 to-transparent to-70%" />
      </div>
    </div>
  );
}

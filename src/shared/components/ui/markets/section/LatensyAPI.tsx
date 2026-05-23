// Доделать латенси при задержке меняет цвет
export default function LatencyAPI() {
  return (
    <div className="flex justify-end text-[12px] font-normal font-jetbrainsmono text-[#E1E2EC]">
      <div className="flex justify-center w-[300px] gap-[16px] py-2 border-[1px] border-white/10 rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)]">
        <div className="flex items-center gap-[6px]">
          <div className="w-[10px] h-[10px] rounded-full bg-[#4AE176] shrink-0 shadow-[0_0_8px_rgba(74,225,118,1)] animate-pulse" />
          <p className="m-0 leading-none translate-y-[0.5px] border-r-[1px] border-r-white/20 pr-[16px]">
            Real-time Feed Active
          </p>
        </div>
        <div className="flex gap-[10px]">
          <p className="m-0 leading-none translate-y-[0.5px]">Latency:</p>
          <p className="m-0 leading-none translate-y-[0.5px]">24ms</p>
        </div>
      </div>
    </div>
  );
}

import { TrendingUp, Zap } from "lucide-react";

export default function MarketOverviewSection() {
  return (
    <div className="flex gap-[16px] w-full">
      <div className="flex flex-col gap-[20px] w-4/6">
        <div className="flex gap-[16px] h-[142px] justify-between">
          <div className="w-full flex flex-col justify-center gap-[4px] p-5 border-[1px] border-white/10 rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)]">
            <h2 className="text-[14px] font-jetbrainsmono text-[#C2C6D6]">
              GLOBAL MARKET CAP
            </h2>
            <span className="text-[14px] font-jetbrainsmono text-[#ADC6FF]">
              $2.48T
            </span>
            <div className="flex items-center gap-[4px]">
              <TrendingUp size={12} color="#4AE176" />
              <span className="text-[16px] font-inter font-bold text-[#4AE176]">
                +2.4% (24h)
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center gap-[4px] p-5 border-[1px] border-white/10 rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)]">
            <h2 className="text-[16px] font-jetbrainsmono text-[#C2C6D6]">
              24H TRADING VOLUME
            </h2>
            <span className="text-[16px] font-jetbrainsmono text-[#ADC6FF]">
              $2.48T
            </span>
            <div className="flex items-center gap-[4px]">
              <TrendingUp size={12} color="#4AE176" />
              <span className="text-[16px] font-inter font-bold text-[#4AE176]">
                +2.4% (24h)
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center gap-[4px] p-5 border-[1px] border-white/10 rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)]">
            <h2 className="text-[16px] font-jetbrainsmono text-[#C2C6D6]">
              BTC DOMINANCE
            </h2>
            <span className="text-[16px] font-jetbrainsmono text-[#ADC6FF]">
              $2.48T
            </span>
            <div className="flex items-center gap-[4px]">
              <TrendingUp size={12} color="#4AE176" />
              <span className="text-[16px] font-inter font-bold text-[#4AE176]">
                +2.4% (24h)
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-[106px] flex justify-between gap-[40px] px-[60px] items-center border-[1px] border-white/10 rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)]">
          <div className="h-[30px] w-[120px] text-center rounded-[12px] bg-[#ADC6FF]/10 border-[1px] border-[#ADC6FF]/20">
            <span className="text-[16px] font-jetbrainsmono text-[#ADC6FF] ">
              TRENDING
            </span>
          </div>
          <div className="flex items-center gap-[12px]">
            <span className="text-[14px] font-jetbrainsmono text-[#C2C6D6]">
              1. SOLANA
            </span>
            <span className="text-[14px] font-jetbrainsmono text-[#C2C6D6]">
              $142.12
            </span>
            <span className="px-[6px] py-[4px] rounded-[4px] text-[10px] font-inter text-[#4AE176] bg-[#4AE176]/10 border-[1px] border-[#4AE176]/20">
              +8.4%
            </span>
          </div>
          <div className="flex items-center gap-[12px]">
            <span className="text-[14px] font-jetbrainsmono text-[#C2C6D6]">
              2. PEPE
            </span>
            <span className="text-[14px] font-jetbrainsmono text-[#C2C6D6]">
              $0.0000082
            </span>
            <span className="px-[6px] py-[4px] rounded-[4px] text-[10px] font-inter text-[#4AE176] bg-[#4AE176]/10 border-[1px] border-[#4AE176]/20">
              +1.2%
            </span>
          </div>
        </div>
      </div>
      <div className="w-2/6 h-[268px] flex flex-col p-[20px] justify-between border-[1px] border-white/10 rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)]">
        <div className="flex justify-between items-center">
          <span className="text-[14px] font-hanken font-bold text-[#E1E2EC]">
            TOP GAINER
          </span>
          <Zap size={20} color="#4AE176" />
        </div>
        <div className="flex items-center justify-center rounded-[8px] bg-white/5 border-[1px] border-white/10 gap-[16px] p-[14px]">
          <div>icon</div>
          <div className="flex flex-col h-full justify-between">
            <span className="text-[14px] font-jetbrainsmono font-bold text-[#E1E2EC]">
              Turbo Token (TURBO)
            </span>
            <div className="flex items-center gap-[14px]">
              <span className="text-[14px] font-jetbrainsmono text-[#4AE176]">
                +$0.0042
              </span>
              <span className="text-[12px] font-jetbrainsmono text-[#4AE176]">
                (+112%)
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex justify-between items-center">
            <span className="text-[14px] font-hanken font-bold text-[#E1E2EC] leading-none">
              NEW LISTINGS
            </span>
            <span className="text-[12px] font-hanken font-bold text-[#ADC6FF] leading-none border-b-[1px] border-transparent hover:border-[#ADC6FF] transition-all duration-200 cursor-pointer">
              VIEW ALL
            </span>
          </div>
          <div className="flex flex-col gap-[12px]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[8px]">
                <div className="w-[8px] h-[8px] rounded-full bg-[#ADC6FF] shadow-[0_0_5px_rgba(173,198,255,0.8)]"></div>
                <span className="text-[14px] font-inter font-bold text-[#E1E2EC] leading-none">
                  EIGEN
                </span>
              </div>
              <span className="text-[12px] font-inter font-bold text-[#C2C6D6] leading-none">
                2h ago
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[8px]">
                <div className="w-[8px] h-[8px] rounded-full bg-[#ADC6FF] shadow-[0_0_5px_rgba(173,198,255,0.8)]"></div>
                <span className="text-[14px] font-inter font-bold text-[#E1E2EC] leading-none">
                  EIGEN
                </span>
              </div>
              <span className="text-[12px] font-inter font-bold text-[#C2C6D6] leading-none">
                2h ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

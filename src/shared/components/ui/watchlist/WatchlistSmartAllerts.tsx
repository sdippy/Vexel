const data = [
  {
    id: 1,
    type: "PRICE BREAKOUT",
    title: "BTC/USD Above $64,000",
    description:
      "Price surged through major resistance. High volume confirmation detected on 4H candle.",
    volatility: "VOLATILITY: HIGH",
    date: "2026-05-19 21:30 UTC+3",
  },
  {
    id: 2,
    type: "LIQUIDITY SIGNAL",
    title: "Large Order Book Depth",
    description:
      "Significant liquidity detected at key levels. Potential support/resistance zones identified.",
    volatility: "CONFIDENCE: 88%",
    date: "2026-05-19 21:07 UTC+3",
  },
  {
    id: 3,
    type: "DOWNSIDE RISK",
    title: "AVAX Delta Divergence",
    description:
      "Price momentum weakening while volatility increases. Elevated risk of pullback in next 12-24 hours.",
    volatility: "RISK: ELEVATED",
    date: "2026-05-19 21:06 UTC+3",
  },
];

import { getNotificationTypeTheme, formatShortTimeAgo } from "@/shared/types";

export default function WatchlistSmartAlerts() {
  return (
    <div className="w-full h-full p-5 flex flex-col gap-[16px] border border-white/10 rounded-[12px] bg-white/[.03] shadow-[0_8px_32px_rgba(0,0,0,0.37)] overflow-hidden">
      <h2 className="text-[16px] font-semibold font-hanken text-[#E1E2EC]">
        Smart Alerts
      </h2>

      <div className="flex flex-col gap-[16px] flex-1">
        {data.map((item) => {
          const theme = getNotificationTypeTheme(item.type);

          return (
            <div
              key={item.id}
              className={`rounded-[8px] px-[20px] py-[12px] border-l-[2px] ${theme.borderColorL} border-b border-b-white/10 hover:bg-white/[0.03] hover:border-b-[#ADC6FF]/50 cursor-pointer`}
            >
              <div className="flex items-center justify-between gap-[12px] mb-[7px]">
                <span
                  className={`text-[10px] font-jetbrainsmono tracking-[1px] ${theme.textColor}`}
                >
                  {item.type}
                </span>

                <span className="text-[9px] font-jetbrainsmono text-[#6B7280] whitespace-nowrap">
                  {formatShortTimeAgo(item.date)}
                </span>
              </div>

              <h3 className="text-[14px] font-inter text-[#E1E2EC]">
                {item.title}
              </h3>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className="w-full flex items-center justify-center py-[8px] border border-white/10 rounded-[12px] text-[#E1E2EC] hover:text-[#ADC6FF] hover:border-[#ADC6FF]/50 hover:-translate-y-[2px] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200 cursor-pointer text-[11px] font-bold font-jetbrainsmono"
      >
        Manage All Alerts
      </button>
    </div>
  );
}

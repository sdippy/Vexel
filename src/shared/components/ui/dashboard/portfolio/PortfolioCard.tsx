import { NavLink } from "react-router-dom";

import PortfolioChart from "./PortfolioChart";
import Portfolio from "@/shared/assets/icons_aside/Portfolio_icon.svg?react";

export default function PortfolioCard() {
  return (
    <div className="w-1/3 h-[308px] border-[1px] border-white/10 rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)]">
      <div
        className="h-full w-full flex flex-col gap-[10px] p-[24px] rounded-[12px]"
        style={{
          WebkitBackfaceVisibility: "hidden", // устраняет артефакты рендера
          backfaceVisibility: "hidden",
          willChange: "transform",
          transform: "translateZ(0)", // форсирует GPU слой в Safari
        }}
      >
        <div className="flex justify-between">
          <div className="flex flex-col gap-[4px]">
            <h2 className="text-[11px] font-bold font-jetbrainsmono text-[#C2C6D6]">
              TOTAL BALANCE
            </h2>
            <p className="text-[24px] font-normal font-jetbrainsmono text-[#E1E2EC]">
              $24 521,10
            </p>
            <p className="text-[13px] font-medium font-inter text-[#4AE176] leading-none">
              +12.3% this month
            </p>
          </div>
          <NavLink
            to="/Portfolio"
            className={({ isActive }) =>
              `${
                isActive
                  ? "hidden"
                  : "flex items-center justify-center cursor-pointer w-[40px] h-[40px] rounded-full bg-[#ADC6FF]/20 border border-[#ADC6FF]/20 hover:border-[#ADC6FF] hover:drop-shadow-[0_0_20px_rgba(173,198,255,0.3)] hover:-translate-y-[2px] transition-all duration-200 cursor-pointer"
              }`
            }
          >
            <Portfolio className="w-[20px] h-[20px] text-[#ADC6FF]" />
          </NavLink>
        </div>
        <PortfolioChart />
      </div>
    </div>
  );
}

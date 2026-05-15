import { NavLink } from "react-router-dom";
import VectorBg from "@/shared/assets/icon_utils/Vector.svg?react";

export default function HeroCard() {
  return (
    <div
      className="
        relative
        overflow-hidden
        w-2/3
        h-full
        rounded-[12px]
        shadow-[0_8_32px_rgba(0,0,0,0.37)]
      "
      style={{
        background: `
          linear-gradient(
            135deg,
            rgba(0,90,194,0.25) 0%,
            rgba(74,225,118,0.15) 100%
          )
        `,
        WebkitBackfaceVisibility: "hidden", // устраняет артефакты рендера
        backfaceVisibility: "hidden",
        willChange: "transform",
        transform: "translateZ(0)", // форсирует GPU слой в Safari
      }}
    >
      <VectorBg
        className="
          absolute
          bottom-0
          right-0
          opacity-20
        "
      />
      <div className="relative z-10 p-[32px] h-full flex flex-col px-[32px] pt-[32px] gap-[32px]">
        <div className="w-full flex flex-col justify-between">
          <p className="text-[11px] font-bold font-jetbrainsmono text-[#00285D]">
            PRIMARY ASSET
          </p>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h2 className="text-[48px] font-bold font-hanken text-[#E1E2EC]">
                Bitcoin
              </h2>
              <p className="text-[48px] font-bold font-hanken text-[#E1E2EC]">
                (BTC)
              </p>
            </div>
            <div>
              <p className="text-[11px] text-right font-bold font-jetbrainsmono text-[#00285D]">
                LIVE QUOTE
              </p>
              <div className="flex gap-[2px]">
                <p className="text-[16px] font-normal font-jetbrainsmono text-[#4AE176]">
                  +4.32%
                </p>
                <p className="text-[32px] font-normal font-jetbrainsmono text-[#FFFFFF]">
                  $103,242.84
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[12px]">
          <NavLink
            to="/Portfolio"
            className="bg-[#4AE176] rounded-[8px] hover:bg-opacity-80 hover:shadow-[0_0_20px_rgba(74,225,118,0.3)] text-[14px] text-[#003915] font-normal font-hanken px-[24px] py-[9px] transition-all duration-200 ease-out"
          >
            Buy Now
          </NavLink>
          <NavLink
            to="/Portfolio"
            className="bg-[#fff] bg-opacity-10 rounded-[8px] border-[1px] border-white/20 hover:bg-opacity-40 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] text-[14px] text-[#fff] font-normal font-hanken px-[24px] py-[9px] transition-all duration-200 ease-out"
          >
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
}

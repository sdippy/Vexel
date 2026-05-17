import type { MarketMoversItem } from "@/shared/types";
import { NavLink } from "react-router-dom";

type MarketMoversCardProps = Omit<MarketMoversItem, "id">;

export default function MarketMoversCard({
  label,
  nameCoin,
  priceChange,
  color,
}: MarketMoversCardProps) {
  return (
    <div className="w-full h-[100px] border-[1px] border-white/10 rounded-[12px] flex flex-col  w-full bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)] hover:-translate-y-[2px] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200">
      <NavLink
        to="/Markets"
        className="h-full px-5 py-[16px] rounded-[12px]"
        style={{
          WebkitBackfaceVisibility: "hidden", // устраняет артефакты рендера
          backfaceVisibility: "hidden",
          willChange: "transform",
          transform: "translateZ(0)", // форсирует GPU слой в Safari
        }}
      >
        <p className="text-[10px] font-normal font-jetbrainsmono text-[#C2C6D6] uppercase">
          {label}
        </p>
        <p className="text-[14px] font-normal font-jetbrainsmono text-[#E1E2EC] uppercase">
          {nameCoin}
        </p>
        <p
          className={`text-[16px] font-normal font-jetbrainsmono text-[${color}]`}
        >
          {priceChange}
        </p>
      </NavLink>
    </div>
  );
}

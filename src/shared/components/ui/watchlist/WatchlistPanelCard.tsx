import type { WatchlistItem } from "@/shared/types";
import { getCryptoIcon } from "@/shared/types";

type WatchlistPanelCardProps = Omit<WatchlistItem, "id">;

export default function WatchlistPanelCard({
  nameCoin,
  price,
  upPricePercent,
  bgColor,
  borderColor,
}: WatchlistPanelCardProps) {
  const Icon = getCryptoIcon(nameCoin);
  return (
    <div className="w-full h-[82px] border-[1px] border-white/10 rounded-[12px] flex flex-col  w-full bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)] cursor-pointer hover:-translate-y-[2px] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200">
      <div
        className="h-full px-5 py-[16px] rounded-[12px]"
        style={{
          WebkitBackfaceVisibility: "hidden", // устраняет артефакты рендера
          backfaceVisibility: "hidden",
          willChange: "transform",
          transform: "translateZ(0)", // форсирует GPU слой в Safari
        }}
      >
        <div className="flex flex-col gap-[8px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[8px]">
              <div
                className={`flex items-center justify-center rounded-full h-[24px] w-[24px] ${bgColor} ${borderColor} border-[1px]`}
              >
                <Icon size={20} variant="branded" />
              </div>
              <p className="text-[14px] font-normal font-hanken text-[#E1E2EC] uppercase">
                {nameCoin}
              </p>
            </div>
            <p className="text-[12px] font-normal font-jetbrainsmono text-[#4AE176]">
              +{upPricePercent}%
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[16px] font-normal font-jetbrainsmono text-[#E1E2EC]">
              ${price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

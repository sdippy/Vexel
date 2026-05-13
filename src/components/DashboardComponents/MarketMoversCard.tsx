export default function MarketMoversCard() {
  return (
    <div className="w-full h-[100px] border-[1px] border-white/10 rounded-[12px] flex flex-col  w-full bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)]">
      <div
        className="h-full px-5 py-[16px] rounded-[12px]"
        style={{
          WebkitBackfaceVisibility: "hidden", // устраняет артефакты рендера
          backfaceVisibility: "hidden",
          willChange: "transform",
          transform: "translateZ(0)", // форсирует GPU слой в Safari
        }}
      >
        <p className="text-[10px] font-normal font-jetbrainsmono text-[#C2C6D6] uppercase">
          TOP GAINEr
        </p>
        <p className="text-[14px] font-normal font-jetbrainsmono text-[#E1E2EC] uppercase">
          LINK
        </p>
        <p className="text-[16px] font-normal font-jetbrainsmono text-[#4AE176]">
          +14.2%
        </p>
      </div>
    </div>
  );
}

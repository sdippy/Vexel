export default function PortfolioCard() {
  return (
    <div className="w-1/3 h-[308px] border-[1px] border-white/10 rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)]">
      <div
        className="h-full px-5 py-[16px] rounded-[12px]"
        style={{
          WebkitBackfaceVisibility: "hidden", // устраняет артефакты рендера
          backfaceVisibility: "hidden",
          willChange: "transform",
          transform: "translateZ(0)", // форсирует GPU слой в Safari
        }}
      >
        2131321
      </div>
    </div>
  );
}

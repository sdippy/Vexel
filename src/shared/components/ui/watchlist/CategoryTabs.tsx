import { type AssetsWatchlistCategory } from "@/shared/types";

type Props = {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  categoriesGlobal: AssetsWatchlistCategory[];
};

export default function CategoryTabs({
  categoriesGlobal,
  activeCategory,
  onCategoryChange,
}: Props) {
  return (
    <div className="flex gap-[12px]">
      {categoriesGlobal.map((category) => {
        const isActive = activeCategory === category.id;

        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`h-[40px] px-[15px] rounded-full border font-jetbrainsmono text-[11px] font-bold tracking-[2px] whitespace-nowrap transition-all duration-200
              ${
                isActive
                  ? "border-[#65769A] bg-[#303A4E] text-[#ADC6FF]"
                  : "border-[1px] border-white/10 bg-white/[.03] text-[#C2C6D6] hover:text-[#ADC6FF] hover:border-[#65769A] hover:drop-shadow-[0_0_20px_rgba(173,198,255,0.3)]"
              }
            `}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}

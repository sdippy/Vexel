import MarketOverviewSection from "@/shared/components/ui/markets/section/MarketOverviewSection";
import AssetTableControls from "@/shared/components/ui/markets/section/AssetTableControls";
import AssetTableSection from "@/shared/components/ui/markets/section/AssetTableSection";
import LatencyAPI from "@/shared/components/ui/markets/section/LatensyAPI";

export default function Markets() {
  return (
    <div className="flex flex-col gap-[56px]">
      <div className="flex flex-col gap-[24px]">
        <MarketOverviewSection />
        <AssetTableControls />
        <AssetTableSection />
      </div>
      <LatencyAPI />
    </div>
  );
}

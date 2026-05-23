import ButtonSelectTimeframe from "../assetSelectButton/buttonSelectTimeframe";
import ButtonSelectVolatillity from "../assetSelectButton/buttonSelectVolatillity";
import ButtonSelectAsset from "../assetSelectButton/buttonSelectAsset";

export default function AssetTableControls() {
  return (
    <div className="flex justify-between w-full">
      <div className="flex items-center p-[4px] rounded-[8px] border border-white/10 bg-white/[0.03] shadow-[0_8_32px_rgba(0,0,0,0.37)]">
        <button className="text-[14px] font-bold font-inter px-[20px] py-[8px] rounded-[8px] text-[#E1E2EC] hover:text-[#00285D] hover:bg-[#ADC6FF] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200">
          All
        </button>

        <button className="text-[14px] font-medium font-inter px-[20px] py-[8px] rounded-[8px] text-[#E1E2EC] hover:text-[#00285D] hover:bg-[#ADC6FF] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200">
          DeFi
        </button>

        <button className="text-[14px] font-medium font-inter px-[20px] py-[8px] rounded-[8px] text-[#E1E2EC] hover:text-[#00285D] hover:bg-[#ADC6FF] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200">
          AI
        </button>

        <button className="text-[14px] font-medium font-inter px-[20px] py-[8px] rounded-[8px] text-[#E1E2EC] hover:text-[#00285D] hover:bg-[#ADC6FF] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200">
          Memes
        </button>

        <button className="text-[14px] font-medium font-inter px-[20px] py-[8px] rounded-[8px] text-[#E1E2EC] hover:text-[#00285D] hover:bg-[#ADC6FF] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200">
          RWA
        </button>
        <ButtonSelectAsset />
      </div>
      <div className="flex gap-[16px]">
        <ButtonSelectTimeframe />
        <ButtonSelectVolatillity />
      </div>
    </div>
  );
}

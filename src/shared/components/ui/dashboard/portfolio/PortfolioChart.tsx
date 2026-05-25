import { useEffect, useMemo, useState, memo } from "react";
import { cryptoRegistry } from "@/shared/utils/Crypto/crypto.registry";

type Asset = {
  nameCoin: string;
  percent: number;
};

const assets: Asset[] = [
  {
    nameCoin: "BTC",
    percent: 40,
  },
  {
    nameCoin: "ETH",
    percent: 25,
  },
  {
    nameCoin: "SOL",
    percent: 4,
  },
  {
    nameCoin: "ADA",
    percent: 1,
  },
  {
    nameCoin: "USDT",
    percent: 20,
  },
  {
    nameCoin: "XRP",
    percent: 5,
  },
  { nameCoin: "DOGE", percent: 5 },
];

function PortfolioDonutChart() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimated(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const size = 128;
  const strokeWidth = 10;

  const radius = (size - strokeWidth) / 2;

  const sortedAssets = useMemo(() => {
    return [...assets].sort((a, b) => b.percent - a.percent);
  }, []);

  const total = sortedAssets.reduce((sum, asset) => sum + asset.percent, 0);

  const animatedAssets = useMemo(() => {
    return sortedAssets.map((asset) => ({
      ...asset,
      normalizedPercent: animated ? (asset.percent / total) * 100 : 0,
      displayPercent: Math.round((asset.percent / total) * 100),
      color:
        cryptoRegistry[asset.nameCoin as keyof typeof cryptoRegistry]?.theme
          .color || "#999",
    }));
  }, [animated, total, sortedAssets]);

  let accumulated = 0;

  return (
    <div className="w-full h-full flex items-center justify-center gap-[24px] overflow-hidden">
      {/* chart */}
      <div className="relative flex items-center justify-center hover:rotate-180 transition-all duration-[1400ms] ease-out">
        {/* glow */}
        <div className="absolute w-[128px] h-[128px] rounded-full" />

        <svg width={size} height={size} className="-rotate-90 rounded-full">
          {animatedAssets.map((asset) => {
            const currentAccumulated = accumulated;

            const dash = asset.normalizedPercent;
            const offset = 100 - currentAccumulated;

            accumulated += asset.normalizedPercent;

            return (
              <circle
                key={asset.nameCoin}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="transparent"
                stroke={asset.color}
                strokeWidth={strokeWidth}
                pathLength="100"
                strokeDasharray={`${dash} ${100 - dash}`}
                strokeDashoffset={offset}
                className="transition-all duration-[1000ms] ease-out"
                style={{
                  filter: `drop-shadow(0px 0px 12px ${asset.color})`,
                }}
              />
            );
          })}
        </svg>

        {/* center */}
        <div className="absolute flex flex-col items-center">
          <span className="text-[10px] font-normal font-jetbrainsmono text-[#C2C6D6]">
            ASSETS
          </span>

          <span className="text-[16px] font-normal font-jetbrainsmono text-[#C2C6D6]">
            {assets.length}
          </span>
        </div>
      </div>

      {/* legend */}
      <div className="flex flex-col gap-[14px] h-[100px] w-[140px] pl-5 overflow-y-auto">
        {animatedAssets.map((asset) => (
          <div key={asset.nameCoin} className="flex items-center gap-[8px]">
            <div
              className="w-[8px] h-[8px] rounded-full"
              style={{
                background: asset.color,
                boxShadow: `0 0 5px ${asset.color}`,
              }}
            />

            <div className="flex items-center gap-[8px]">
              <span className="text-[14px] font-normal font-inter text-[#E1E2EC] leading-none">
                {asset.nameCoin}
              </span>

              <span className="text-[14px] font-normal font-inter text-[#E1E2EC] leading-none">
                {asset.displayPercent}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(PortfolioDonutChart);

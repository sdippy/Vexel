import {
  getSparklinePoints,
  getCurrentPrice,
  getPreviousPrice,
} from "@/shared/types";

type Props = {
  chartData: number[];
};

export default function SparklineChart({ chartData }: Props) {
  const points = getSparklinePoints(chartData);

  const currentPrice = getCurrentPrice(chartData);

  const previousPrice = getPreviousPrice(chartData);

  const isPositive = currentPrice >= previousPrice;

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="w-[64px] h-[16px] overflow-visible"
    >
      <polyline
        fill="none"
        stroke={isPositive ? "#4AE176" : "#FFB4AB"}
        strokeWidth="5"
        strokeLinejoin="round"
        strokeLinecap="round"
        points={points}
      />
    </svg>
  );
}

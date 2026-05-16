import { useEffect, useRef, useState } from "react";
import {
  getSparklinePoints,
  getCurrentPrice,
  getPreviousPrice,
} from "@/shared/types";

type Props = {
  chartData: number[];
};

export default function SparklineChart({ chartData }: Props) {
  const polylineRef = useRef<SVGPolylineElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimated(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const points = getSparklinePoints(chartData);

  const currentPrice = getCurrentPrice(chartData);

  const previousPrice = getPreviousPrice(chartData);

  const isPositive = currentPrice >= previousPrice;

  const pathLength = polylineRef.current?.getTotalLength() || 0;

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="w-[64px] h-[16px] overflow-visible"
    >
      <style>
        {`
          @keyframes drawLine {
            from {
              stroke-dashoffset: ${pathLength};
            }
            to {
              stroke-dashoffset: 0;
            }
          }
          .sparkline-line {
            animation: drawLine 1.2s ease-out ${animated ? "forwards" : "none"};
          }
        `}
      </style>
      <polyline
        ref={polylineRef}
        fill="none"
        stroke={isPositive ? "#4AE176" : "#FFB4AB"}
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
        points={points}
        strokeDasharray={pathLength}
        className="sparkline-line"
        style={{
          filter: `drop-shadow(0px 0px 3px ${isPositive ? "#4AE176" : "#FFB4AB"})`,
        }}
      />
    </svg>
  );
}

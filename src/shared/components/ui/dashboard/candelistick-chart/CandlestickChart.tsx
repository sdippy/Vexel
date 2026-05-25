import { useEffect, useRef, useState, memo } from "react";
import {
  CandlestickSeries,
  type CandlestickData,
  ColorType,
  createChart,
} from "lightweight-charts";

import ButtonSelectCoin from "./buttonSelectCoin";

function CandlestickChart() {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimated(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,

      layout: {
        attributionLogo: false,
        background: {
          type: ColorType.Solid,
          color: "transparent",
        },
        textColor: "transparent",
      },

      grid: {
        vertLines: {
          visible: false,
          style: 2,
        },
        horzLines: {
          style: 2,

          color: "rgba(255,255,255,0.1)",
        },
      },

      rightPriceScale: {
        visible: false,
        borderVisible: false,
      },

      leftPriceScale: {
        visible: false,
        borderVisible: false,
      },

      timeScale: {
        visible: false,
        borderVisible: false,
        barSpacing: 16,
        rightOffset: 0,
      },

      crosshair: {
        vertLine: {
          visible: false,
        },
        horzLine: {
          visible: false,
        },
      },

      handleScroll: false,
      handleScale: false,
    });

    const series = chart.addSeries(CandlestickSeries, {
      upColor: "rgba(74, 225, 117, 0.8)",
      downColor: "rgba(255, 180, 171, 0.4)",

      borderVisible: false,

      wickUpColor: "rgba(74, 225, 117, 0.6)",
      wickDownColor: "rgba(255, 180, 171, 0.6)",

      priceLineVisible: false,
      lastValueVisible: false,
    });

    const data: CandlestickData[] = [
      {
        time: "2025-01-01",
        open: 90,
        high: 95,
        low: 70,
        close: 40,
      },
      {
        time: "2025-01-02",
        open: 35,
        high: 55,
        low: 25,
        close: 60,
      },
      {
        time: "2025-01-03",
        open: 50,
        high: 90,
        low: 48,
        close: 85,
      },
      {
        time: "2025-01-04",
        open: 45,
        high: 48,
        low: 30,
        close: 20,
      },
      {
        time: "2025-01-05",
        open: 60,
        high: 120,
        low: 55,
        close: 110,
      },
      {
        time: "2025-01-06",
        open: 80,
        high: 145,
        low: 78,
        close: 135,
      },
      {
        time: "2025-01-07",
        open: 90,
        high: 130,
        low: 85,
        close: 125,
      },
      {
        time: "2025-01-08",
        open: 70,
        high: 80,
        low: 50,
        close: 40,
      },
      {
        time: "2025-01-09",
        open: 60,
        high: 110,
        low: 55,
        close: 100,
      },
      {
        time: "2025-01-10",
        open: 90,
        high: 170,
        low: 88,
        close: 160,
      },
    ];

    chart.timeScale().fitContent();

    series.setData(data);

    const handleResize = () => {
      if (!chartContainerRef.current) return;

      chart.applyOptions({
        width: chartContainerRef.current.clientWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, []);

  return (
    <div className="w-3/4 overflow-hidden rounded-[12px] border border-white/10 bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)] h-full">
      {/* CONTENT */}
      <div
        className="h-full px-[32px] py-[24px] rounded-[12px]"
        style={{
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          willChange: "transform",
          transform: "translateZ(0)",
          opacity: animated ? 1 : 0,
          animation: animated ? "slideUp 0.8s ease-out forwards" : "none",
        }}
      >
        <style>{`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
        <div className=" h-full flex flex-col">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-[10px]">
            <div className="flex items-center gap-[16px]">
              <h2 className="text-[#E1E2EC] text-[20px] font-normal font-hanken">
                Market Analysis
              </h2>
              {/* TABS */}
              <div className="flex gap-[20px]">
                <ButtonSelectCoin />
                <div className="flex items-center p-[4px] rounded-[8px] border border-white/10 bg-white/[0.05] backdrop-blur-[12px]">
                  <button className="text-[14px] font-medium font-inter px-[12px] py-[4px] rounded-[8px] text-[#E1E2EC] hover:text-[#00285D] hover:bg-[#ADC6FF] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200">
                    1H
                  </button>

                  <button className="text-[14px] font-medium font-inter px-[12px] py-[4px] rounded-[8px] text-[#E1E2EC] hover:text-[#00285D] hover:bg-[#ADC6FF] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200">
                    24H
                  </button>

                  <button className="text-[14px] font-medium font-inter px-[12px] py-[4px] rounded-[8px] text-[#E1E2EC] hover:text-[#00285D] hover:bg-[#ADC6FF] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200">
                    7D
                  </button>

                  <button className="text-[14px] font-medium font-inter px-[12px] py-[4px] rounded-[8px] text-[#E1E2EC] hover:text-[#00285D] hover:bg-[#ADC6FF] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200">
                    1M
                  </button>

                  <button className="text-[14px] font-medium font-inter px-[12px] py-[4px] rounded-[8px] text-[#E1E2EC] hover:text-[#00285D] hover:bg-[#ADC6FF] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200">
                    1Y
                  </button>
                </div>
              </div>
            </div>
            {/* STATS */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-[4px]">
                <div className="w-[8px] h-[8px] rounded-full bg-[#4AE176]" />
                <p className="text-[14px] text-[#C2C6D6] font-normal font-jetbrainsmono">
                  Open: 102.1k
                </p>
              </div>

              <div className="flex items-center gap-[4px]">
                <div className="w-[8px] h-[8px] rounded-full bg-[#FFB4AB]" />
                <p className="text-[14px] text-[#C2C6D6] font-normal font-jetbrainsmono">
                  High: 104.5k
                </p>
              </div>
            </div>
          </div>

          {/* CHART */}
          <div className=" flex-1">
            <div
              ref={chartContainerRef}
              className="w-full h-full border-l border-b border-[rgba(255,255,255,0.1)]"
              style={{
                filter:
                  "drop-shadow(0px 4px 12px rgba(74, 225, 117, 0.2)) drop-shadow(0px 0px 8px rgba(74, 225, 117, 0.1))",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CandlestickChart);

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Info,
  ArrowUpNarrowWide,
  ArrowDownNarrowWide,
  RotateCw,
} from "lucide-react";

import { getTopTopics, type MarketNews } from "@/shared/types";

import { useMarketNews } from "@/shared/hooks/useMarketNews";
import NewsCardBig from "@/shared/components/ui/news/NewsCardBig";
import NewsCardMini from "@/shared/components/ui/news/NewsCardMini";
import NewsTopic from "@/shared/components/ui/news/NewsTopic";

export default function News() {
  const [order, setOrder] = useState<"asc" | "desc">("desc");

  const { data = [], refetch, isFetching } = useMarketNews(10, order);
  const latestNews = data[0];

  const bullishCount = data.filter(
    (item: MarketNews) => item.typeTopic === "BULLISH",
  ).length;

  const bearishCount = data.filter(
    (item: MarketNews) => item.typeTopic === "BEARISH",
  ).length;

  const total = bullishCount + bearishCount;

  const bullishPercent = total > 0 ? (bullishCount / total) * 100 : 0;

  const bearishPercent = total > 0 ? (bearishCount / total) * 100 : 0;

  const topTopics = getTopTopics(data, 3);

  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex-col">
            <h2 className="text-[24px] font-semibold font-hanken text-[#E1E2EC]">
              Market Intelligence
            </h2>
            <p className="text-[16px] font-inter text-[#C2C6D6]">
              Real-time institutional-grade news feed and sentiment analysis.
            </p>
          </div>
          <div className="flex gap-[8px]">
            <button
              onClick={() =>
                setOrder((prev) => (prev === "desc" ? "asc" : "desc"))
              }
              className="flex items-center gap-[8px] text-[#E1E2EC] text-[16px] font-jetbrainsmono py-[8px] px-[16px] border-[1px] border-white/10 rounded-[12px] bg-white/[.03] hover:bg-black/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)] transition-all duration-200"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={order}
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  {order === "desc" ? (
                    <ArrowUpNarrowWide size={18} />
                  ) : (
                    <ArrowDownNarrowWide size={18} />
                  )}
                </motion.div>
              </AnimatePresence>
              Filter
            </button>
            <button
              onClick={() => refetch()}
              className="flex items-center gap-[8px] text-[#E1E2EC] text-[16px] font-jetbrainsmono py-[8px] px-[16px] border-[1px] border-white/10 rounded-[12px] bg-white/[.03] hover:bg-black/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)]"
            >
              <motion.div
                animate={isFetching ? { rotate: 360 } : { rotate: 0 }}
                transition={
                  isFetching
                    ? {
                        repeat: Infinity,
                        duration: 0.8,
                        ease: "linear",
                      }
                    : { duration: 0.2 }
                }
              >
                <RotateCw size={15} />
              </motion.div>
              Live Update
            </button>
          </div>
        </div>

        <div className="w-full flex gap-[20px] mt-[20px] items-center">
          <div className="h-[134px] w-5/12 flex flex-col gap-[16px] p-[20px] border-[1px] border-white/10 rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)]">
            <div className="w-full flex justify-between items-center">
              <h2 className="text-[16px] font-hanken text-[#E1E2EC]">
                Market Sentiment
              </h2>

              <div className="relative group text-[#C2C6D6] hover:text-[#ADC6FF]">
                <Info size={20} className="cursor-pointer " />

                <div className="absolute right-0 top-full mt-2 w-[220px] p-3 text-sm text-[#E1E2EC] bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl opacity-0 translate-y-1 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-200 pointer-events-none z-50">
                  Market sentiment shows bullish vs bearish ratio based on
                  latest news signals.
                </div>
              </div>
            </div>

            <div className="flex overflow-hidden rounded-full">
              <motion.div
                animate={{
                  width: `${bullishPercent}%`,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="h-[12px] bg-[#4AE176] shadow-[0_0_12px_rgba(74,225,118,0.35)]"
              />

              <motion.div
                animate={{
                  width: `${bearishPercent}%`,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="h-[12px] bg-[#FFB4AB] shadow-[0_0_12px_rgba(255,180,171,0.35)]"
              />
            </div>
            <div className="w-full flex justify-between">
              <span className="text-[16px] font-jetbrainsmono text-[#4AE176]">
                {bullishPercent.toFixed(0)}% BULLISH
              </span>
              <span className="text-[16px] font-jetbrainsmono text-[#FFB4AB]">
                {bearishPercent.toFixed(0)}% BEARISH
              </span>
            </div>
          </div>

          <div className="h-[134px] w-7/12 flex flex-col gap-[24px] p-[20px] border-[1px] border-white/10 rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)]">
            <h2 className="text-[16px] font-hanken text-[#E1E2EC]">
              Trending Topics
            </h2>

            <div className="max-w-[600px] grid grid-cols-3 grid-flow-row auto-rows-max gap-[20px]">
              {topTopics.map((t) => (
                <NewsTopic key={t.word} topic={t.word} count={t.count} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-[16px]">
        <AnimatePresence mode="wait">
          {latestNews && (
            <motion.div
              key={latestNews.id}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            >
              <NewsCardBig {...latestNews} />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="w-full grid grid-cols-2 gap-[16px]"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.06,
              },
            },
          }}
        >
          {data.slice(1).map((item: any) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            >
              <NewsCardMini {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

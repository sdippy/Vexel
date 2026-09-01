import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ArrowDownNarrowWide, ArrowUpNarrowWide, RotateCw } from "lucide-react";

import {
  useWatchlistGlobal,
  useWatchlistUser,
  useWatchlistItems,
  useWatchlistMarketData,
} from "@/shared/types";

import WatchlistList from "@/shared/components/ui/watchlist/WatchlistList";
import CategoryTabs from "@/shared/components/ui/watchlist/CategoryTabs";
import MarketIntelligence from "@/shared/components/ui/watchlist/market-intelligence-watchlist/MarketIntelligence";
import MarketMovers from "@/shared/components/ui/watchlist/market-movers-watchlist/MarketMovers";
import WatchlistSmartAlerts from "@/shared/components/ui/watchlist/WatchlistSmartAllerts";
import WatchlistAgregated from "@/shared/components/ui/watchlist/WatchlistAgregated";

export default function Watchlist() {
  // (Получение всех глобальных ватчлистов)
  const {
    data: globalWatchlists = [],
    refetch: refetchGlobal,
    isFetching: isFetchingGlobal,
    isLoading: isLoadingGlobal,
  } = useWatchlistGlobal();

  // (Получение всех ватчлистов юзера)
  const {
    data: userWatchlists = [],
    refetch: refetchUser,
    isFetching: isFetchingUser,
    isLoading: isLoadingUser,
  } = useWatchlistUser();

  // (Общий массив ватчлистов)
  const watchlists = [...globalWatchlists, ...userWatchlists];

  // (Активное состояние категории ватчлиста)
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // (Состояние выбора первой категории)
  useEffect(() => {
    if (activeCategory === null && watchlists.length > 0) {
      setActiveCategory(watchlists[0].id);
    }
  }, [watchlists, activeCategory]);

  const activeId = activeCategory ?? watchlists[0]?.id;

  // (Получение всех токенов ватчлиста)
  const {
    data: WatchlistItems = [],
    refetch: refetchWatchlistItems,
    isFetching: isFetchingWatchlistItems,
    isLoading: isLoadingWatchlistItems,
  } = useWatchlistItems({
    watchlistId: activeId,
    order: "asc",
  });

  // (Получение цен на токены)
  const {
    data: marketData = {},
    refetch: refetchWatchlistMarketData,
    isFetching: isFetchingWatchlistMarketData,
    isLoading: isLoadingWatchlistMarketData,
  } = useWatchlistMarketData(activeId);

  // Состояние фильтра asc | desc
  const [order, setOrder] = useState<"asc" | "desc" | null>(null);

  // Сортировка
  const sortedWatchlistItems = [...WatchlistItems].sort((a, b) => {
    return order === "desc"
      ? b.assetToken.symbol.localeCompare(a.assetToken.symbol)
      : a.assetToken.symbol.localeCompare(b.assetToken.symbol);
  });

  // Состояние загрузки api и получение данных
  const isFetching =
    isFetchingGlobal ||
    isFetchingUser ||
    isFetchingWatchlistItems ||
    isFetchingWatchlistMarketData;

  // Перезагрузка api и получение данных
  const refetch = async () => {
    await Promise.all([
      refetchGlobal(),
      refetchUser(),
      refetchWatchlistItems(),
      refetchWatchlistMarketData(),
    ]);
  };

  // Состояние загрузки страницы
  const isLoading =
    isLoadingGlobal ||
    isLoadingUser ||
    isLoadingWatchlistItems ||
    isLoadingWatchlistMarketData;

  // Отображение скелетона во время загрузки страницы
  // if (isLoading) return <WatchlistSkeleton />;

  // filter assets by category
  // const filteredAssets =
  //   activeCategory === "all"
  //     ? assets
  //     : assets.filter(
  //         (asset) => asset.category === activeCategory,
  //       );

  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex justify-between">
        <CategoryTabs
          categoriesGlobal={watchlists}
          activeCategory={activeId ?? ""}
          onCategoryChange={setActiveCategory}
        />
        <div className="flex gap-[8px]">
          <button
            onClick={() =>
              setOrder((prev) => (prev === "desc" ? "asc" : "desc"))
            }
            className={`flex items-center gap-[8px] h-[40px] px-[15px] rounded-full border font-jetbrainsmono text-[11px] font-bold tracking-[2px] whitespace-nowrap transition-all duration-200
    ${
      order === "desc"
        ? "border-[#65769A] bg-[#303A4E] text-[#ADC6FF]"
        : "border-[1px] border-white/10 bg-white/[.03] text-[#C2C6D6] hover:text-[#ADC6FF] hover:border-[#65769A] hover:drop-shadow-[0_0_20px_rgba(173,198,255,0.3)]"
    }
  `}
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
            Sort by: {order === "desc" ? "(Z-A)" : "(A-Z)"}
          </button>
          <button
            onClick={() => refetch()}
            className={`flex items-center gap-[8px] h-[40px] px-[15px] rounded-full border font-jetbrainsmono text-[11px] font-bold tracking-[2px] whitespace-nowrap transition-all duration-200
            ${
              isFetching
                ? "border-[#65769A] bg-[#303A4E] text-[#ADC6FF]"
                : "border-[1px] border-white/10 bg-white/[.03] text-[#C2C6D6] hover:text-[#ADC6FF] hover:border-[#65769A] hover:drop-shadow-[0_0_20px_rgba(173,198,255,0.3)]"
            }
              `}
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
      <WatchlistList
        dataWatchlistItem={sortedWatchlistItems}
        marketPrices={marketData}
      />
      <div className="w-full grid grid-cols-2 gap-[24px] items-stretch">
        <MarketIntelligence />
        <WatchlistSmartAlerts />
      </div>

      <div className="w-full grid grid-cols-5 gap-[24px] items-stretch">
        <div className="col-span-4">
          <WatchlistAgregated />
        </div>
        <MarketMovers />
      </div>
    </div>
  );
}

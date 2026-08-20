import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ArrowDownNarrowWide, ArrowUpNarrowWide, RotateCw } from "lucide-react";

import {
  useWatchlistGlobal,
  useWatchlistUser,
  type WatchlistItem,
} from "@/shared/types";

import WatchlistList from "@/shared/components/ui/watchlist/WatchlistList";
import CategoryTabs from "@/shared/components/ui/watchlist/CategoryTabs";

// Watchlist label category
// fetch watchlist where isGlobal = true (standart pack watchlist) (id, name)
// logic fetch watchlistID, Name where userId = userId_uuid (Получение всех ватчлистов юзера)

// const DataCategoriesGlobal: AssetsWatchlistCategory[] = [
//   { id: "all", name: "All Assets" },
//   { id: "defi", name: "DeFi" },
//   { id: "gaming", name: "Gaming" },
//   { id: "ai", name: "AI & Data" },
// ];

// fetch WatchlistItem where watchlistId = watchlist_uuid (Получение всех айтемов ватчлиста по айди ватчлиста)

// fetch WatchlistItem where watchlistId = watchlist_uuid (Получение всех айтемов global ватчлиста по айди global ватчлиста)

const dataWatchlistItem: WatchlistItem[] = [
  {
    id: "7a2f9c84-13d6-4e5b-b0a7-62c8f1d93420",
    watchlistId: "1",
    assetTokenId: "BTC",
    createdAt: "1",
    priceData: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: "7a3f9c84-13d6-4e5b-b0a7-62c8f1d93420",
    watchlistId: "1",
    assetTokenId: "ETH",
    createdAt: "1",
    priceData: [1, 1, 2, 3, 4, 5, 6, 6, 5, 5, 4],
  },
];

export default function Watchlist() {
  // const { data = [], refetch, isFetching, isLoading } = useWatchlistGlobal();

  const {
    data: globalWatchlists = [],
    refetch: refetchGlobal,
    isFetching: isFetchingGlobal,
  } = useWatchlistGlobal();

  const {
    data: userWatchlists = [],
    refetch: refetchUser,
    isFetching: isFetchingUser,
  } = useWatchlistUser();

  const [order, setOrder] = useState<"asc" | "desc" | null>(null);

  const watchlists = [...globalWatchlists, ...userWatchlists];

  const sortedWatchlists =
    order === null
      ? watchlists
      : [...watchlists].sort((a, b) => {
          if (order === "asc") {
            return a.name.localeCompare(b.name);
          }

          return b.name.localeCompare(a.name);
        });

  const isFetching = isFetchingGlobal || isFetchingUser;
  const refetch = async () => {
    await Promise.all([refetchGlobal(), refetchUser()]);
  };

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const activeId = activeCategory ?? globalWatchlists[0]?.id;

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
          categoriesGlobal={sortedWatchlists}
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
              order !== null
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
            Filter
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
      <WatchlistList dataWatchlistItem={dataWatchlistItem} />
    </div>
  );
}

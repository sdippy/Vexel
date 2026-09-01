import { AnimatePresence, motion } from "framer-motion";

import TopRowDashboard from "@/shared/components/ui/dashboard/top-row-dashboard/TopRowDashboard";
import SecondRowDashboard from "@/shared/components/ui/dashboard/section/SecondRowDashboard";
import TopMovers from "@/shared/components/ui/dashboard/section/TopMovers";

import DashboardSkeleton from "@/shared/components/ui/skeleton/dashboard-skeleton/DashboardSkeleton";

import { useMarketNews } from "@/shared/hooks/useMarketNews";

export default function Dashboard() {
  // (Скелетон загрузка)
  const market = useMarketNews(2);
  const isLoading = market.isLoading;

  return (
    <div className="relative">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="skeleton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
          >
            <DashboardSkeleton />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="flex flex-col gap-[24px]"
      >
        <TopRowDashboard />
        <SecondRowDashboard />
        <TopMovers />
      </motion.div>
    </div>
  );
}

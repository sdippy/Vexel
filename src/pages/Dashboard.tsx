import TopRowDashboard from "../shared/components/ui/dashboard/top-row-dashboard/TopRowDashboard";
import SecondRowDashboard from "../shared/components/ui/dashboard/section/SecondRowDashboard";
import TopMovers from "../shared/components/ui/dashboard/section/TopMovers";

// import DashboardSkeleton from "../shared/components/ui/skeleton/dashboard-skeleton/DashboardSkeleton";

// import { useMarketNews } from "../shared/hooks/useMarketNews";
// import другие query

export default function Dashboard() {
  // const market = useMarketNews(2);

  // потом:
  // const portfolio = usePortfolio();
  // const movers = useTopMovers();

  // const isLoading = market.isLoading;
  // || portfolio.isLoading
  // || movers.isLoading

  // if (isLoading) {
  //   return <DashboardSkeleton />;
  // }

  return (
    <div className="flex flex-col gap-[24px]">
      <TopRowDashboard />

      <SecondRowDashboard />

      <TopMovers />
    </div>
  );
}

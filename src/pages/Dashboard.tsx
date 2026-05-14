import TopRowDashboard from "../shared/components/ui/DashboardComponents/TopRowDashboard";
import SecondRowDashboard from "../shared/components/ui/DashboardComponents/SecondRowDashboard";
import TopMovers from "../shared/components/ui/DashboardComponents/TopMovers";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-[24px]">
      <TopRowDashboard />
      <SecondRowDashboard />
      <TopMovers />
    </div>
  );
}

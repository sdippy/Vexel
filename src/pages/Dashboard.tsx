import TopRowDashboard from "../components/DashboardComponents/TopRowDashboard";
import SecondRowDashboard from "../components/DashboardComponents/SecondRowDashboard";
import TopMovers from "../components/DashboardComponents/TopMovers";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-[24px]">
      <TopRowDashboard />
      <SecondRowDashboard />
      <TopMovers />
    </div>
  );
}

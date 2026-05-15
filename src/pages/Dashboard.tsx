import TopRowDashboard from "../shared/components/ui/dashboard/TopRowDashboard";
import SecondRowDashboard from "../shared/components/ui/dashboard/SecondRowDashboard";
import TopMovers from "../shared/components/ui/dashboard/TopMovers";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-[24px]">
      <TopRowDashboard />
      <SecondRowDashboard />
      <TopMovers />
    </div>
  );
}

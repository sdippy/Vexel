import TopRowDashboardSkeleton from "./TopRowDashboardSkeleton";
import SecondRowDashboardSkeleton from "./SecondRowDashboardSkeleton";
import TopMoversSkeleton from "./TopMoversSkeleton";

export default function DashboardSkeleton() {
  return (
    <div className="flex flex-col gap-[24px]">
      <TopRowDashboardSkeleton />
      <SecondRowDashboardSkeleton />
      <TopMoversSkeleton />
    </div>
  );
}

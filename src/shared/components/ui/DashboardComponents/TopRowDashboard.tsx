import HeroCard from "./HeroCard";
import PortfolioCard from "../portfolio/PortfolioCard";

export default function TopRowDashboard() {
  return (
    <div className="w-full h-[308px] flex gap-[24px]">
      <HeroCard />
      <PortfolioCard />
    </div>
  );
}

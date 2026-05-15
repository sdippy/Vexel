import { NavLink } from "react-router-dom";
import WatchlistPanelList from "./WatchlistPanelList";
import PlusIcon from "@/shared/assets/icon_utils/Plus_icon.svg?react";

export default function WatchlistPanel() {
  return (
    <div className="w-1/4 h-[500px] flex flex-col border-[1px] border-white/10 rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)]">
      <div className="flex justify-between items-center p-5">
        <h2 className="text-[18px] font-normal font-hanken text-[#E1E2EC]">
          Watchlist
        </h2>
        <NavLink to="/Watchlist" className="cursor-pointer">
          <PlusIcon className="w-[20px] h-[20px] text-[#C2C6D6] hover:text-[#ADC6FF] hover:-translate-y-[2px] hover:drop-shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200" />
        </NavLink>
      </div>
      <WatchlistPanelList />
    </div>
  );
}

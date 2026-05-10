import { NavLink } from "react-router-dom";
import Dashboard from "../assets/Icon.svg?react";
import Markets from "../assets/Icon-1.svg?react";
import Portfolio from "../assets/Icon-2.svg?react";
import Watchlist from "../assets/Icon-3.svg?react";
import News from "../assets/Icon-4.svg?react";
import Settings from "../assets/Icon-5.svg?react";

export default function Aside() {
  return (
    <div className="w-[280px] flex flex-col border-r-[1px] border-r-white/10">
      <div className="pl-[24px] pt-[24px] flex flex-col">
        <h2 className="text-[30px] font-bold font-hanken text-[#ADC6FF]">
          VEXEL
        </h2>
        <p className="text-[14px] font-bold font-jetbrainsmono text-[#C2C6D6]">
          Institutional Terminal
        </p>
      </div>

      <nav className="flex flex-col pt-[40px] gap-[4px]">
        <NavLink
          to="/Dashboard"
          className={({ isActive }) =>
            `flex items-center gap-[16px] text-[16px] font-normal font-inter transition-colors duration-10
      ${
        isActive
          ? "text-[#ADC6FF] border-l-[2px] border-l-[#ADC6FF] bg-[#ffffff] bg-opacity-5"
          : "text-[#C2C6D6] hover:text-[#ADC6FF] border-l-[2px] border-l-transparent hover:border-l-[2px] hover:border-[#ADC6FF] hover:bg-[#ffffff] hover:bg-opacity-5"
      }`
          }
        >
          <Dashboard className="ml-[24px] w-[18px] h-[18px]" />
          <p className="py-[12px]">Dashboard</p>
        </NavLink>
        <NavLink
          to="/Markets"
          className={({ isActive }) =>
            `flex items-center gap-[16px] text-[16px] font-normal font-inter transition-colors duration-10
      ${
        isActive
          ? "text-[#ADC6FF] border-l-[2px] border-l-[#ADC6FF] bg-[#ffffff] bg-opacity-5"
          : "text-[#C2C6D6] hover:text-[#ADC6FF] border-l-[2px] border-l-transparent hover:border-l-[2px] hover:border-[#ADC6FF] hover:bg-[#ffffff] hover:bg-opacity-5"
      }`
          }
        >
          <Markets className="ml-[24px] w-[20px] h-[13px]" />
          <p className="py-[12px]">Markets</p>
        </NavLink>
        <NavLink
          to="/Portfolio"
          className={({ isActive }) =>
            `flex items-center gap-[16px] text-[16px] font-normal font-inter transition-colors duration-10
      ${
        isActive
          ? "text-[#ADC6FF] border-l-[2px] border-l-[#ADC6FF] bg-[#ffffff] bg-opacity-5"
          : "text-[#C2C6D6] hover:text-[#ADC6FF] border-l-[2px] border-l-transparent hover:border-l-[2px] hover:border-[#ADC6FF] hover:bg-[#ffffff] hover:bg-opacity-5"
      }`
          }
        >
          <Portfolio className="ml-[24px] w-[19px] h-[18px]" />
          <p className="py-[12px]">Portfolio</p>
        </NavLink>
        <NavLink
          to="/Watchlist"
          className={({ isActive }) =>
            `flex items-center gap-[16px] text-[16px] font-normal font-inter transition-colors duration-10
      ${
        isActive
          ? "text-[#ADC6FF] border-l-[2px] border-l-[#ADC6FF] bg-[#ffffff] bg-opacity-5"
          : "text-[#C2C6D6] hover:text-[#ADC6FF] border-l-[2px] border-l-transparent hover:border-l-[2px] hover:border-[#ADC6FF] hover:bg-[#ffffff] hover:bg-opacity-5"
      }`
          }
        >
          <Watchlist className="ml-[24px] w-[20px] h-[15px]" />
          <p className="py-[12px]">Watchlist</p>
        </NavLink>
        <NavLink
          to="/News"
          className={({ isActive }) =>
            `flex items-center gap-[16px] text-[16px] font-normal font-inter transition-colors duration-10
      ${
        isActive
          ? "text-[#ADC6FF] border-l-[2px] border-l-[#ADC6FF] bg-[#ffffff] bg-opacity-5"
          : "text-[#C2C6D6] hover:text-[#ADC6FF] border-l-[2px] border-l-transparent hover:border-l-[2px] hover:border-[#ADC6FF] hover:bg-[#ffffff] hover:bg-opacity-5"
      }`
          }
        >
          <News className="ml-[24px] w-[20px] h-[18px]" />
          <p className="py-[12px]">News</p>
        </NavLink>
        <NavLink
          to="/Settings"
          className={({ isActive }) =>
            `flex items-center gap-[16px] text-[16px] font-normal font-inter transition-colors duration-10
      ${
        isActive
          ? "text-[#ADC6FF] border-l-[2px] border-l-[#ADC6FF] bg-[#ffffff] bg-opacity-5"
          : "text-[#C2C6D6] hover:text-[#ADC6FF] border-l-[2px] border-l-transparent hover:border-l-[2px] hover:border-[#ADC6FF] hover:bg-[#ffffff] hover:bg-opacity-5"
      }`
          }
        >
          <Settings className="ml-[24px] w-[20px] h-[20px]" />
          <p className="py-[12px]">Settings</p>
        </NavLink>
      </nav>
    </div>
  );
}

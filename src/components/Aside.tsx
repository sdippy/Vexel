import { NavLink } from "react-router-dom";
import Dashboard from "../assets/icons_aside/Dashboard_icon.svg?react";
import Markets from "../assets/icons_aside/Markets_icon.svg?react";
import Portfolio from "../assets/icons_aside/Portfolio_icon.svg?react";
import Watchlist from "../assets/icons_aside/Watchlist_icon.svg?react";
import News from "../assets/icons_aside/News_icon.svg?react";
import Settings from "../assets/icons_aside/Settings_icon.svg?react";
import Auth from "../assets/icons_aside/Auth_icon.svg?react";
import Support from "../assets/icons_aside/Support_icon.svg?react";

export default function Aside() {
  return (
    // aside
    <div className="w-[280px] flex flex-col border-r-[1px] border-r-white/10 h-screen">
      {/* logo */}
      <div className="pl-[24px] pt-[24px] flex flex-col">
        <h2 className="text-[30px] font-bold font-hanken text-[#ADC6FF]">
          VEXEL
        </h2>
        <p className="text-[14px] font-bold font-jetbrainsmono text-[#C2C6D6]">
          Institutional Terminal
        </p>
      </div>

      {/* navigation menu top*/}
      <nav className="flex flex-1 flex-col pt-[40px] gap-[4px]">
        <NavLink
          to="/Dashboard"
          className={({ isActive }) =>
            `flex items-center gap-[16px] text-[16px] font-normal font-inter transition-all duration-200 ease-out
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
            `flex items-center gap-[16px] text-[16px] font-normal font-inter transition-all duration-200 ease-out
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
            `flex items-center gap-[16px] text-[16px] font-normal font-inter transition-all duration-200 ease-out
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
            `flex items-center gap-[16px] text-[16px] font-normal font-inter transition-all duration-200 ease-out
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
            `flex items-center gap-[16px] text-[16px] font-normal font-inter transition-all duration-200 ease-out
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
            `flex items-center gap-[16px] text-[16px] font-normal font-inter transition-all duration-200 ease-out
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

      {/* navigation menu bottom*/}
      <nav className="flex flex-col">
        <NavLink
          to="/Markets"
          className={({ isActive }) =>
            `${
              isActive
                ? "hidden"
                : "text-[#00285D] hover:text-[#00285D] text-center text-[16px] font-normal hover:font-bold font-inter bg-[#ADC6FF] rounded-[8px] py-[12px] mb-[24px] mx-[24px] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200"
            }`
          }
        >
          Trade Now
        </NavLink>

        <div className="flex flex-col pt-[16px] pb-[24px] gap-[4px] border-t-[1px] border-t-white/10">
          <NavLink
            to="/Support"
            className={({ isActive }) =>
              `flex items-center gap-[16px] text-[16px] font-normal font-inter transition-all duration-200 ease-out
      ${
        isActive
          ? "text-[#ADC6FF] border-l-[2px] border-l-[#ADC6FF] bg-[#ffffff] bg-opacity-5"
          : "text-[#C2C6D6] hover:text-[#ADC6FF] border-l-[2px] border-l-transparent hover:border-l-[2px] hover:border-[#ADC6FF] hover:bg-[#ffffff] hover:bg-opacity-5"
      }`
            }
          >
            <Support className="ml-[24px] w-[20px] h-[20px]" />
            <p className="py-[12px]">Support</p>
          </NavLink>
          <div className="flex items-center gap-[16px] text-[16px] font-normal font-inter text-[#C2C6D6] hover:text-[#FFB4AB] border-l-[2px] border-l-transparent hover:border-l-[2px] hover:border-[#FFB4AB] hover:bg-[#FFB4AB] hover:bg-opacity-5 transition-all duration-200 ease-out cursor-pointer">
            <Auth className="ml-[24px] w-[20px] h-[15px]" />
            <p className="py-[12px]">Log Out</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

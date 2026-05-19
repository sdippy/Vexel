import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Find from "@/shared/assets/icons_header/Find_icon.svg?react";
import Notification from "@/shared/assets/icons_header/Notification_icon.svg?react";
import Services from "@/shared/assets/icons_header/Services_icon.svg?react";
import ProfilePopover from "../popover/ProfilePopover";
import NotificationPopover from "../popover/NotificationPopover";
import { usePopoverMenuStore } from "@/shared/types";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const openSearch = () => {
    setIsSearchOpen(true);
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  const closeSearch = () => {
    if (!searchValue.trim()) {
      setIsSearchOpen(false);
    }
  };

  const avatar = "/Profile_img.jpeg";

  const { togglePopover } = usePopoverMenuStore();

  const buttonRefProfile = useRef<HTMLButtonElement>(null);
  const buttonRefNotification = useRef<HTMLButtonElement>(null);

  return (
    <div className="flex items-center h-full w-full px-[33px]">
      <nav className="flex flex-1 gap-[24px]">
        <motion.div
          animate={{ width: isSearchOpen ? 256 : 40 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
          className={`flex items-center gap-[13px] bg-[#191B23]  border border-[#ADC6FF] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] h-[32px] rounded-full border-b border-white/10 hover:border-[#ADC6FF] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] focus-within:border-[#ADC6FF] focus-within:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200 cursor-pointer`}
          onClick={openSearch}
        >
          <Find className="w-[15px] h-[20px] text-[#C2C6D6] ml-[12px]" />

          {isSearchOpen && (
            <input
              ref={inputRef}
              type="text"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              onBlur={closeSearch}
              placeholder="Search markets..."
              className="text-[14px] w-full font-normal font-inter placeholder:text-[#6B7280] text-[#C2C6D6] bg-transparent appearance-none outline-none border-none ring-0 focus:ring-0 focus:outline-none"
            />
          )}
        </motion.div>
        <div className="flex items-center gap-[16px] border-l-[1px] border-white/10 pl-[24px]">
          <div className="flex gap-[5px] justify-center text-[16px] font-normal font-jetbrainsmono text-[#4AE176]">
            <p>BTC/USD</p>
            <p>$64,231</p>
          </div>
          <div className="flex gap-[5px] justify-center text-[16px] font-normal font-jetbrainsmono text-[#C2C6D6]">
            <p>BTC/USD</p>
            <p>$64,231</p>
          </div>
          <div className="flex gap-[5px] justify-center text-[16px] font-normal font-jetbrainsmono text-[#C2C6D6]">
            <p>BTC/USD</p>
            <p>$64,231</p>
          </div>
        </div>
      </nav>
      <nav className="flex justify-end items-center gap-[16px]">
        <NavLink
          to="/Settings"
          className={({ isActive }) =>
            `${
              isActive
                ? "hidden"
                : "text-[#ADC6FF] hover:text-[#00285D] text-center border-[1px] border-[#ADC6FF] py-[6px] px-[16px] text-[16px] font-normal font-inter bg-transparent hover:bg-[#ADC6FF] rounded-full hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200"
            }`
          }
        >
          Trade Now
        </NavLink>
        <div className="flex gap-[15px]">
          <button
            ref={buttonRefNotification}
            onClick={() => togglePopover("notification")}
            className="relative cursor-pointer w-[16px] h-[20px] hover:-translate-y-[2px] transition-all duration-200"
          >
            {/* Иконка */}
            <Notification className="w-[16px] h-[20px] text-[#C2C6D6] hover:text-[#ADC6FF]  hover:drop-shadow-[0_0_20px_rgba(173,198,255,0.3)]" />

            {/* Точка поверх иконки */}
            <div className="absolute -top-[4px] -right-[4px] w-[8px] h-[8px] rounded-full bg-[#FFB4AB] shadow-[0_0_8px_rgba(255,180,171,1)] animate-pulse" />
          </button>
          <div className="cursor-pointer">
            <Services className="w-[18px] h-[18px] text-[#C2C6D6] hover:text-[#ADC6FF] hover:-translate-y-[2px] hover:drop-shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200" />
          </div>
        </div>
        <button
          ref={buttonRefProfile}
          onClick={() => togglePopover("profile")}
          className="flex items-center justify-center cursor-pointer w-[36px] h-[36px] rounded-full border-[1px] border-white/20 hover:border-[#ADC6FF] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200 cursor-pointer"
        >
          <img
            src={avatar}
            alt="Profile"
            className="w-[32px] h-[32px] rounded-full object-cover"
          />
        </button>
      </nav>
      <ProfilePopover anchorRef={buttonRefProfile} />
      <NotificationPopover anchorRef={buttonRefNotification} />
    </div>
  );
}

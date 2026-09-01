import { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { usePopoverMenuStore } from "@/shared/types";

import Find from "@/shared/assets/icons_header/Find_icon.svg?react";
import Notification from "@/shared/assets/icons_header/Notification_icon.svg?react";
import ProfilePopover from "../popover/ProfilePopover";
import NotificationPopover from "../popover/NotificationPopover";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const buttonRefProfile = useRef<HTMLButtonElement>(null);
  const buttonRefNotification = useRef<HTMLButtonElement>(null);

  const avatar = "/Profile_img.jpeg";

  const { togglePopover } = usePopoverMenuStore();

  const openSearch = useCallback(() => {
    setIsSearchOpen(true);

    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  }, []);

  const closeSearch = () => {
    if (!searchValue.trim()) {
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Cmd + K на Mac
      // Ctrl + K на Windows/Linux
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();

        openSearch();
      }

      // Escape — закрыть поиск
      if (event.key === "Escape") {
        setIsSearchOpen(false);
        setSearchValue("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openSearch]);

  return (
    <div className="flex items-center h-full w-full px-[33px]">
      <nav className="flex flex-1 gap-[24px]">
        {/* Search */}
        <motion.div
          animate={{
            width: isSearchOpen ? 256 : 58,
          }}
          transition={{
            duration: 0.15,
            ease: "easeOut",
          }}
          className="relative flex items-center bg-[#191B23] border border-white/10 h-[32px] rounded-full hover:border-[#ADC6FF] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] focus-within:border-[#ADC6FF] focus-within:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200 cursor-pointer"
          onClick={openSearch}
        >
          <Find className="absolute left-[12px] w-[15px] h-[20px] text-[#C2C6D6]" />

          {!isSearchOpen && (
            <span className="absolute right-[9px] text-[9px] font-jetbrainsmono text-[#6B7280]">
              ⌘K
            </span>
          )}

          {isSearchOpen && (
            <>
              <input
                ref={inputRef}
                type="text"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                onBlur={closeSearch}
                placeholder="Search assets..."
                className="w-full h-full pl-[35px] pr-[45px] text-[14px] font-normal font-inter placeholder:text-[#6B7280] text-[#C2C6D6] bg-transparent outline-none border-none ring-0 focus:ring-0 focus:outline-none"
              />

              <span className="absolute right-[10px] top-1/2 -translate-y-1/2 text-[9px] font-jetbrainsmono text-[#6B7280] border border-white/10 rounded-[4px] px-[5px] py-[2px] pointer-events-none">
                ESC
              </span>
            </>
          )}
        </motion.div>

        {/* Market prices */}
        <div className="flex items-center gap-[16px] border-l-[1px] border-white/10 pl-[24px]">
          <div className="flex gap-[5px] justify-center text-[16px] font-normal font-jetbrainsmono text-[#4AE176]">
            <p>BTC/USD</p>
            <p>$64,231</p>
          </div>

          <div className="flex gap-[5px] justify-center text-[16px] font-normal font-jetbrainsmono text-[#C2C6D6]">
            <p>ETH/USD</p>
            <p>$64,231</p>
          </div>

          <div className="flex gap-[5px] justify-center text-[16px] font-normal font-jetbrainsmono text-[#C2C6D6]">
            <p>SOL/USD</p>
            <p>$64,231</p>
          </div>
        </div>
      </nav>

      {/* Right side */}
      <nav className="flex justify-end items-center gap-[16px]">
        <NavLink
          to="/Settings"
          className={({ isActive }) =>
            isActive
              ? "hidden"
              : "text-[#ADC6FF] hover:text-[#00285D] text-center border-[1px] border-[#ADC6FF] py-[6px] px-[16px] text-[16px] font-normal font-inter bg-transparent hover:bg-[#ADC6FF] rounded-full hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200"
          }
        >
          Trade Now
        </NavLink>

        {/* Notifications */}
        <div className="flex gap-[15px]">
          <button
            aria-label="Open notification"
            ref={buttonRefNotification}
            onClick={() => togglePopover("notification")}
            className="relative cursor-pointer w-[16px] h-[20px] hover:-translate-y-[2px] transition-all duration-200"
          >
            <Notification className="w-[16px] h-[20px] text-[#C2C6D6] hover:text-[#ADC6FF] hover:drop-shadow-[0_0_20px_rgba(173,198,255,0.3)]" />

            <div className="absolute -top-[4px] -right-[4px] w-[8px] h-[8px] rounded-full bg-[#FFB4AB] shadow-[0_0_8px_rgba(255,180,171,1)] animate-pulse" />
          </button>
        </div>

        {/* Profile */}
        <button
          aria-label="Open profile"
          ref={buttonRefProfile}
          onClick={() => togglePopover("profile")}
          className="flex items-center justify-center cursor-pointer w-[36px] h-[36px] rounded-full border-[1px] border-white/20 hover:border-[#ADC6FF] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200"
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

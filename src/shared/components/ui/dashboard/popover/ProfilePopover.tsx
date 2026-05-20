import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Settings, KeyRound, Wallet, LogOut, BadgeCheck } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { usePopoverMenuStore } from "@/shared/types";

interface ProfilePopoverProps {
  anchorRef: React.RefObject<HTMLButtonElement | null>;
}

export default function ProfilePopover({ anchorRef }: ProfilePopoverProps) {
  const { openPopover } = usePopoverMenuStore();

  const isOpen = openPopover === "profile";

  const popoverRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState({
    top: 0,
    right: 0,
  });

  // позиционирование
  useEffect(() => {
    if (!anchorRef.current) return;

    const rect = anchorRef.current.getBoundingClientRect();

    setPosition({
      top: rect.bottom + 30,
      right: window.innerWidth - rect.right,
    });
  }, [isOpen, anchorRef]);

  const close = usePopoverMenuStore((s) => s.closePopover);

  // outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: PointerEvent) => {
      const target = e.target as Node;

      if (
        popoverRef.current &&
        !popoverRef.current.contains(target) &&
        !anchorRef.current?.contains(target)
      ) {
        close();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, close]);

  const avatar = "/Profile_img.jpeg";

  interface MenuItemProps {
    icon: React.ReactNode;
    label: string;
  }

  function MenuItem({ icon, label }: MenuItemProps) {
    return (
      <motion.button
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.12 }}
        className="flex items-center gap-[16px] w-full rounded-2xl px-[20px] py-[12px] text-white/80 hover:bg-white/[0.05] hover:text-white transition-all duration-200"
      >
        {icon}
        <span className="text-[16px] font-normal font-inter text-[#C2C6D6] font-jetbrainsmono">
          {label}
        </span>
      </motion.button>
    );
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={popoverRef}
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          style={{
            position: "fixed",
            top: position.top,
            right: position.right,
          }}
          className="absolute z-50 w-[320px] rounded-[12px] border-[1px] border-white/10 bg-[#10131A]/60 backdrop-blur-[40px] shadow-[0_25_50px_rgba(0,0,0,0.25)]"
        >
          {/* HEADER */}
          <div className="flex flex-col gap-[16px] p-[20px] rounded-t-[12px] bg-[#FFFFFF]/5">
            <div className="flex gap-[16px]">
              {/* avatar */}
              <div className="w-[52px] h-[52px] rounded-full overflow-hidden border-[2px] border-[#4AE176] shadow-[0_0_15px_rgba(74,225,118,0.2)]">
                <img
                  src={avatar}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* info */}
              <div className="flex flex-col gap-[5px]">
                <h2 className="text-[24px] font-semibold font-hanken text-[#FFFFFF]">
                  Alexander Vance
                </h2>
                <div className="flex items-center gap-[5px]">
                  <BadgeCheck size={12} className="text-[#4AE176]" />
                  <span className="text-[10px] font-medium font-hanken text-[#4AE176] font-jetbrainsmono">
                    VERIFIED INSTITUTIONAL
                  </span>
                </div>
              </div>
            </div>
            {/* STATUS */}
            <div className="rounded-[8px] border-[1px] border-white/5 bg-black/20 p-[20px]">
              <div className="grid grid-cols-2 gap-y-[2px]">
                <p className="text-[16px] text-[#C2C6D6] font-medium font-jetbrainsmono">
                  Account
                </p>
                <p className="text-[16px] text-[#ADC6FF] font-medium font-jetbrainsmono">
                  Tier 3
                </p>
                <p className="text-[16px] text-[#C2C6D6] font-medium font-jetbrainsmono">
                  Status
                </p>
                <p className="text-[16px] text-[#ADC6FF] font-medium font-jetbrainsmono">
                  Access
                </p>
              </div>
            </div>
          </div>
          {/* MENU */}
          <div className="border-t-[1px] border-white/10 p-[20px]">
            <div className="flex flex-col">
              <MenuItem
                icon={<Settings size={20} color="#C2C6D6" />}
                label="Account Settings"
              />
              <MenuItem
                icon={<KeyRound size={20} color="#C2C6D6" />}
                label="Security Keys"
              />
              <MenuItem
                icon={<Wallet size={20} color="#C2C6D6" />}
                label="Billing"
              />
            </div>
          </div>
          {/* FOOTER */}
          <div className="border-t-[1px] border-white/10 p-[20px] pt-[28px]">
            <button className="flex items-center justify-center gap-[8px] w-full py-[5px] rounded-[8px] bg-[#93000A] text-[16px] font-semibold font-inter text-[#FFDAD6] hover:opacity-90 transition-all duration-200">
              <LogOut size={20} color="#FFDAD6" /> Log Out
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { usePopoverMenuStore } from "@/shared/types";
import { Zap } from "lucide-react";

import NotificationCard from "./NotificationCard";

const data = [
  {
    id: 1,
    type: "PRICE BREAKOUT",
    title: "BTC/USD Above $64,000",
    description:
      "Price surged through major resistance. High volume confirmation detected on 4H candle.",
    volatility: "VOLATILITY: HIGH",
    date: "2026-05-19 21:30 UTC+3",
  },
  {
    id: 2,
    type: "LIQUIDITY SIGNAL",
    title: "Large Order Book Depth",
    description:
      "Significant liquidity detected at key levels. Potential support/resistance zones identified.",
    volatility: "CONFIDENCE: 88%",
    date: "2026-05-19 21:07 UTC+3",
  },
  {
    id: 3,
    type: "DOWNSIDE RISK",
    title: "AVAX Delta Divergence",
    description:
      "Price momentum weakening while volatility increases. Elevated risk of pullback in next 12-24 hours.",
    volatility: "RISK: ELEVATED",
    date: "2026-05-19 21:06 UTC+3",
  },
];

interface ProfilePopoverProps {
  anchorRef: React.RefObject<HTMLButtonElement | null>;
}

export default function NotificationPopover({
  anchorRef,
}: ProfilePopoverProps) {
  const { openPopover } = usePopoverMenuStore();

  const isOpen = openPopover === "notification";

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
      top: rect.bottom + 40,
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
          className="absolute z-50 w-[400px] rounded-[12px] border-[1px] border-white/10 bg-[#10131A]/60 backdrop-blur-[40px] shadow-[0_25_50px_rgba(0,0,0,0.25)]"
        >
          {/* HEADER */}
          <div className="flex flex-col gap-[16px] p-[20px] rounded-t-[12px]">
            {/* info */}
            <div className="flex items-center gap-[2px]">
              <Zap size={20} color="#ADC6FF" />
              <h2 className="text-[20px] font-semibold font-hanken text-[#FFFFFF]">
                Smart Allerts
              </h2>
            </div>
          </div>
          {/* Notification */}
          <div className="flex flex-col border-t-[1px] border-white/10 max-h-[400px] overflow-auto">
            {data.map((item) => (
              <NotificationCard key={item.id} {...item} />
            ))}
          </div>
          {/* FOOTER */}
          <div className="flex justify-center items-center border-t-[1px] border-white/10 py-[16px] bg-[#FFFFFF]/5 rounded-b-[12px]">
            <NavLink
              to="/News"
              className="text-[16px] font-medium font-jetbrains text-[#C2C6D6] hover:text-[#ADC6FF] transition-all duration-200"
            >
              View All Activity →
            </NavLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

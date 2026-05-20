import { useEffect, useRef, useState } from "react";

const currencies = ["USD", "EUR", "BTC", "ETH"];

export default function CurrencySelect() {
  const [currency, setCurrency] = useState("USD");
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  // закрытие при клике вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!ref.current) return;

      if (!ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      {/* Trigger */}
      <div className="p-[4px] rounded-[8px] border border-white/10 bg-white/[0.05] backdrop-blur-[12px]">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-1 text-[14px] font-medium font-hanken px-[12px] py-[4px] rounded-[8px] text-[#E1E2EC] hover:text-black hover:bg-[#ADC6FF] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200"
        >
          {currency}
          <span className="text-white/40">▾</span>
        </button>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-12 right-0 z-50 rounded-2xl border border-white/10 bg-[#10131A]/60 backdrop-blur-2xl p-1 shadow-2xl">
          {currencies.map((item) => (
            <button
              key={item}
              onClick={() => {
                setCurrency(item);
                setOpen(false);
              }}
              className="relative w-full text-[14px] font-medium font-hanken px-[12px] py-[6px] rounded-[8px] text-[#E1E2EC] text-center hover:bg-[#ADC6FF] hover:text-black hover:shadow-[0_0_15px_rgba(173,198,255,0.25)]"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

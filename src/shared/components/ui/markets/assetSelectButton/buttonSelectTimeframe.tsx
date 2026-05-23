import { useEffect, useRef, useState } from "react";

const currencies = [
  "Timeframe: 1h",
  "Timeframe: 12h",
  "Timeframe: 24h",
  "Timeframe: 1d",
];

export default function ButtonSelectTimeframe() {
  const [currency, setCurrency] = useState("Timeframe: 24h");
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
      <div className="p-[4px] w-[166px] flex items-center justify-center text-center rounded-[8px] border border-white/10 bg-white/[0.03] shadow-[0_8_32px_rgba(0,0,0,0.37)]">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="w-full flex gap-1 justify-left pl-5 text-[14px] text-[#E1E2EC] font-medium font-inter py-[8px] rounded-[8px] hover:text-[#10131A] hover:bg-[#ADC6FF] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200"
        >
          {currency}
          <span>▾</span>
        </button>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-[50px] right-0 z-50 rounded-[8px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-1 shadow-2xl">
          {currencies.map((item) => (
            <button
              key={item}
              onClick={() => {
                setCurrency(item);
                setOpen(false);
              }}
              className="relative w-full text-[14px] text-[#E1E2EC] font-medium font-inter pl-5 py-[6px] rounded-[8px] text-left hover:bg-[#ADC6FF] hover:text-[#10131A] hover:shadow-[0_0_15px_rgba(173,198,255,0.25)]"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

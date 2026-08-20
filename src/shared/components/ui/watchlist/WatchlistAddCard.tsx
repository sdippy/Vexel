function WatchlistAddCard() {
  return (
    <div className="flex flex-col justify-center items-center gap-[16px] w-1/3 p-5 border-[1px] border-white/10 rounded-[12px] bg-white/[.03] shadow-[0_8_32px_rgba(0,0,0,0.37)]">
      <div className="flex bg-white/10 h-[48px] w-[48px] items-center justify-center rounded-full border border-white/10 text-[30px] leading-none text-[#C2C6D6] cursor-pointer hover:-translate-y-[2px] hover:border-[#ADC6FF] hover:text-[#ADC6FF] hover:drop-shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-200">
        <span className="-translate-y-[1px]">+</span>
      </div>
      <div className="flex flex-col">
        <h3 className="text-[16px] font-bold font-hanken text-[#C2C6D6]">
          Add Custom Asset
        </h3>
        <h4 className="text-[14px] font-inter text-[#C2C6D6]">
          Search 10,000+ coins
        </h4>
      </div>
    </div>
  );
}

export default WatchlistAddCard;

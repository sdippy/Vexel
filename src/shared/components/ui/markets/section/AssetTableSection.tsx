export default function AssetTableSection() {
  return (
    <div className="flex w-full flex-col gap-[24px]">
      <div className="overflow-hidden rounded-[12px] border border-white/10 bg-white/[0.03] shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
        <div className="max-h-[500px] overflow-y-auto">
          <table className="w-full table-fixed border-collapse">
            {/* HEADER */}
            <thead className="sticky top-0 z-20 bg-white/[0.04] backdrop-blur-[12px] text-left text-[12px] font-bold uppercase text-[#C2C6D6] font-jetbrainsmono">
              <tr className="h-[64px] text-[14px] text-[#C2C6D6] font-jetbrainsmono">
                <th className="w-[60px] border-b border-white/10 px-[24px]">
                  #
                </th>
                <th className="border-b border-white/10 px-[24px]">Asset</th>
                <th className="border-b border-white/10 px-[24px]">Price</th>
                <th className="border-b border-white/10 px-[24px]">
                  24h Change
                </th>
                <th className="border-b border-white/10 px-[24px]">
                  Market Cap
                </th>
                <th className="border-b border-white/10 px-[24px]">
                  Volume (24h)
                </th>
                <th className="w-[140px] border-b border-white/10 px-[24px] text-right">
                  Trend
                </th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody className="font-hanken text-[#E1E2EC]">
              {Array.from({ length: 10 }).map((_, index) => (
                <tr
                  key={index}
                  className="h-[72px] cursor-pointer transition-all duration-200 hover:bg-white/[0.03]"
                >
                  <td className="border-b border-white/10 px-[24px] text-[#C2C6D6]">
                    {index + 1}
                  </td>

                  <td className="border-b border-white/10 px-[24px]">
                    <div className="flex items-center gap-[12px]">
                      <div className="h-[32px] w-[32px] rounded-full border border-[#F7931A]/30 bg-[#F7931A]/20" />
                      <div className="flex flex-col">
                        <span className="text-[14px] font-bold text-[#E1E2EC] font-inter">
                          Bitcoin
                        </span>
                        <span className="text-[12px] font-bold text-[#C2C6D6] font-inter">
                          BTC
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="border-b border-white/10 px-[24px] text-[16px] text-[#E1E2EC] font-jetbrainsmono">
                    $64,231.42
                  </td>

                  <td className="border-b border-white/10 px-[24px] text-[16px] font-jetbrainsmono text-[#4AE176]">
                    <span className="rounded-[4px] px-[8px] py-[4px] bg-[#4AE176]/10 border border-[#4AE176]/20 shadow-[0_0px_10px_rgba(74,225,118,0.1)]">
                      +1.24%
                    </span>
                  </td>

                  <td className="border-b border-white/10 px-[24px] text-[16px] text-[#E1E2EC] font-jetbrainsmono">
                    $1.26T
                  </td>

                  <td className="border-b border-white/10 px-[24px] text-[16px] text-[#E1E2EC] font-jetbrainsmono">
                    $32.1B
                  </td>

                  <td className="border-b border-white/10 px-[24px]">
                    <div className="flex justify-end">
                      <div className="h-[32px] w-[100px] rounded-[8px] border border-[#4AE176]/10 bg-gradient-to-r from-[#4AE176]/10 to-transparent" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

            {/* FOOTER */}
            <tfoot className="sticky bottom-0 z-20 bg-white/[0.03] backdrop-blur-[12px]">
              <tr className="h-[64px]">
                <td
                  colSpan={5}
                  className="border-t border-white/10 px-[24px] text-[14px] text-[#C2C6D6] font-inter"
                >
                  Showing 1–10 of 2,491 assets
                </td>

                <td colSpan={2} className="border-t border-white/10 px-[24px]">
                  <div className="flex justify-end">
                    <div className="flex items-center gap-[4px] rounded-[10px] p-[4px]">
                      <button className="flex h-[36px] w-[36px] items-center justify-center rounded-[8px] text-[#E1E2EC] hover:bg-[#ADC6FF] hover:text-[#00285D]">
                        ‹
                      </button>

                      <button className="min-w-[36px] rounded-[8px] bg-[#ADC6FF] px-[14px] py-[8px] text-[14px] font-semibold text-[#00285D]">
                        1
                      </button>

                      <button className="min-w-[36px] rounded-[8px] px-[14px] py-[8px] text-[14px] text-[#E1E2EC] hover:bg-[#ADC6FF] hover:text-[#00285D]">
                        2
                      </button>

                      <button className="min-w-[36px] rounded-[8px] px-[14px] py-[8px] text-[14px] text-[#E1E2EC] hover:bg-[#ADC6FF] hover:text-[#00285D]">
                        3
                      </button>

                      <button className="flex h-[36px] w-[36px] items-center justify-center rounded-[8px] text-[#E1E2EC] hover:bg-[#ADC6FF] hover:text-[#00285D]">
                        ›
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

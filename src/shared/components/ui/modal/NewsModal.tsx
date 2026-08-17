import { useModalStore } from "@/shared/types";
import { NavLink } from "react-router-dom";

import Modal from "@/shared/components/ui/modal/modal";

import {
  getNewsMarketSentimentTheme,
  formatMiddleTimeAgo,
} from "@/shared/types";

import {
  Eye,
  Share2,
  Clock,
  SquarePen,
  Building2,
  ArrowUp,
  ChartNoAxesCombined,
} from "lucide-react";

import SparklineChart from "@/shared/components/ui/dashboard/watchlist/SparklineChart";

const priceData = [
  77200, 77450, 77100, 76800, 77300, 77900, 78200, 77800, 78100, 78500, 78300,
  77900, 78600, 79100, 78700, 78400, 79200, 79800, 79400, 78900, 79600, 80100,
  79700, 80300, 80800, 80500, 80200, 80900, 81200, 80800,
];

export default function ProfileModal() {
  const { isModalOpen, closeNews } = useModalStore();
  const selectedNews = useModalStore((s) => s.selectedNews);

  const theme = getNewsMarketSentimentTheme(
    useModalStore((s) => s.selectedNews)?.typeTopic || "default",
  );

  const formatCreatedAt = formatMiddleTimeAgo(
    useModalStore((s) => s.selectedNews)?.createdAt || "",
  );

  return (
    <Modal isOpen={isModalOpen} onClose={closeNews}>
      <div className="flex w-full h-full">
        <div className="w-3/4 h-full overflow-auto flex flex-col gap-[24px] bg-[#10131A]/95 rounded-l-[32px]">
          <div className="relative w-full h-[250px] overflow-hidden rounded-tl-[32px]">
            <img
              src={selectedNews?.imageUrl}
              alt="IMG NEWS"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />

            {/* Градиент поверх изображения */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#10131A]/100 via-[#10131A]/40 to-transparent to-70%" />

            {/* Текст */}
            <div className="absolute z-50 bottom-[20px] left-[20px] flex flex-col gap-[12px]">
              <p
                className={`w-[100px] text-center text-[16px] font-normal font-inter rounded-full px-[8px] border-[1px] uppercase ${theme.bgColor} ${theme.borderColor} ${theme.color}`}
              >
                {selectedNews?.typeTopic}
              </p>

              <p className="text-[26px] font-semibold font-hanken text-[#E1E2EC]">
                {selectedNews?.label}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] px-[20px] pb-[24px]">
            <div className="flex gap-[24px] border-b border-white/[.05] px-[20px] pb-[24px]">
              <div className="flex gap-[12px] items-center">
                <span className="flex items-center p-[8px] bg-[#ADC6FF]/[.2] rounded-full">
                  <Building2 size={20} color="#ADC6FF" />
                </span>
                <div className="flex flex-col">
                  <p className="text-[16px] font-jetbrainsmono text-[#C2C6D6]">
                    SOURCE
                  </p>
                  <p className="text-[16px] font-jetbrainsmono text-[#E1E2EC]">
                    {selectedNews?.source}
                  </p>
                </div>
              </div>
              <div className="flex gap-[12px] items-center">
                <span className="flex items-center p-[8px] bg-[#ADC6FF]/[.2] rounded-full">
                  <Clock size={20} color="#ADC6FF" />
                </span>
                <div className="flex flex-col">
                  <p className="text-[16px] font-jetbrainsmono text-[#C2C6D6]">
                    TIMESTAMP
                  </p>
                  <p className="text-[16px] font-jetbrainsmono text-[#E1E2EC]">
                    {formatCreatedAt}
                  </p>
                </div>
              </div>
              <div className="flex gap-[12px] items-center">
                <span className="flex items-center p-[8px] bg-[#ADC6FF]/[.2] rounded-full">
                  <SquarePen size={20} color="#ADC6FF" />
                </span>
                <div className="flex flex-col">
                  <p className="text-[16px] font-jetbrainsmono text-[#C2C6D6]">
                    AUTHOR
                  </p>
                  <p className="text-[16px] font-jetbrainsmono text-[#E1E2EC]">
                    {selectedNews?.author}
                  </p>
                </div>
              </div>
            </div>
            <p className="text-[16px] font-inter text-[#E1E2EC]">
              {selectedNews?.description}
            </p>

            <div className="bg-[#4D8EFF]/[.1] border-l-[2px] border-[#ADC6FF] p-[20px]">
              <p className="text-[16px] font-inter italic text-[#004395]">
                {selectedNews?.comment}
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/4 h-full flex flex-col justify-between bg-[#10131A]/80 rounded-r-[32px] py-10 px-5">
          <div className="flex flex-1 flex-col gap-[24px]">
            <div className="flex gap-[5px] items-center">
              <ChartNoAxesCombined size={15} color="#C2C6D6" />

              <h2 className="text-[16px] font-jetbrainsmono text-[#C2C6D6]">
                Market Impact
              </h2>
            </div>
            <div className="p-[16px] flex flex-col gap-[4px] rounded-[12px] bg-[#00B954]/[.05] border border-[#00B954]/20">
              <div className="flex justify-between">
                <p className="text-[16px] font-bold font-hanken text-[#E1E2EC]">
                  ETH/USD
                </p>
                <div className="flex items-center gap-[5px]">
                  <ArrowUp size={15} color="#4AE176" />
                  <span className="text-[16px] font-jetbrainsmono text-[#4AE176]">
                    +4.21%
                  </span>
                </div>
              </div>
              <p className="text-[16px] font-jetbrainsmono text-[#4AE176]">
                $3,421.45
              </p>
              <SparklineChart chartData={priceData} />
            </div>
            <div className="flex flex-col gap-[16px]">
              <div className="flex justify-between p-[12px] rounded-[12px] border border-white/[.05]">
                <p className="text-[16px] font-jetbrainsmono text-[#E1E2EC]">
                  SOL/USD
                </p>
                <p className="text-[16px] font-jetbrainsmono text-[#4AE176]">
                  +2.8%
                </p>
              </div>
              <div className="flex justify-between p-[12px] rounded-[12px] border border-white/[.05]">
                <p className="text-[16px] font-jetbrainsmono text-[#E1E2EC]">
                  ARB/USD
                </p>
                <p className="text-[16px] font-jetbrainsmono text-[#4AE176]">
                  +5.2%
                </p>
              </div>
              <div className="flex justify-between p-[12px] rounded-[12px] border border-white/[.05]">
                <p className="text-[16px] font-jetbrainsmono text-[#E1E2EC]">
                  OP/USD
                </p>
                <p className="text-[16px] font-jetbrainsmono text-[#4AE176]">
                  +5.2%
                </p>
              </div>
              <div className="flex justify-between p-[12px] rounded-[12px] border border-white/[.02]">
                <p className="text-[16px] font-jetbrainsmono text-[#C2C6D6] opacity-50">
                  BTC/USD
                </p>
                <p className="text-[16px] font-jetbrainsmono text-[#C2C6D6] opacity-50">
                  +5.2%
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="flex justify-between">
              <button className="flex items-center gap-[8px] border border-[#FFFFFF]/[.05] text-[#E1E2EC] hover:border-b-[#ADC6FF] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all rounded-[8px] px-[25px] py-[12px]">
                <Share2 size={15} color="#E1E2EC" />
                <span className="text-[16px] font-semibold font-inter ">
                  Share
                </span>
              </button>
              <button className="flex items-center gap-[8px] border border-[#FFFFFF]/[.05] text-[#E1E2EC] hover:border-b-[#ADC6FF] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all rounded-[8px] px-[25px] py-[12px]">
                <Eye size={15} color="#E1E2EC" />
                <span className="text-[16px] font-semibold font-inter ">
                  Watch
                </span>
              </button>
            </div>
            <div className="flex justify-center">
              <NavLink
                to="/Markets"
                className="w-full text-[#00285D] hover:text-[#00285D] text-center text-[16px] font-normal hover:font-bold font-inter bg-[#ADC6FF] rounded-[8px] py-[12px] hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all"
              >
                Trade Now
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

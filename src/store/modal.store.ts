import { create } from "zustand";
import type { MarketNews } from "@/shared/types";

// const modal store
interface ModalStore {
  isModalOpen: boolean;
  selectedNews: MarketNews | null;

  openNews: (news: MarketNews) => void;
  closeNews: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isModalOpen: false,
  selectedNews: null,

  openNews: (news) =>
    set({
      isModalOpen: true,
      selectedNews: news,
    }),

  closeNews: () =>
    set({
      isModalOpen: false,
      selectedNews: null,
    }),
}));

import { create } from "zustand";

interface ModalStore {
  isModalOpen: boolean;

  openProfile: () => void;
  closeProfile: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isModalOpen: false,

  openProfile: () =>
    set({
      isModalOpen: true,
    }),

  closeProfile: () =>
    set({
      isModalOpen: false,
    }),
}));

import { useEffect } from "react";
import type { ReactNode } from "react";

import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
      "
    >
      {/* overlay */}
      <div
        onClick={onClose}
        className="
          absolute inset-0
          bg-black/60
          backdrop-blur-sm
        "
      />

      {/* content */}
      <div
        className="
          relative z-10
          w-[420px]
          rounded-3xl
          border border-white/10
          bg-[#11131A]
          p-6
          shadow-2xl
        "
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}

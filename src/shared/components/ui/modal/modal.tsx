import { useEffect, useRef, type ReactNode } from "react";

import { createPortal } from "react-dom";

import { useLocation } from "react-router-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const location = useLocation();

  const previousPathname = useRef(location.pathname);

  // Закрываем модалку при переходе через NavLink
  useEffect(() => {
    if (previousPathname.current !== location.pathname) {
      previousPathname.current = location.pathname;

      if (isOpen) {
        onClose();
      }
    }
  }, [location.pathname, isOpen, onClose]);

  // Закрытие по Escape
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

  // Блокировка скролла
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Content */}
      <div className="relative z-10 h-[90vh] w-[90vw] rounded-[32px] border border-white/10 bg-white/[.06] shadow-2xl">
        {/* Close button */}
        <div className="relative">
          <div
            onClick={onClose}
            className="absolute top-5 right-5 flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border border-white/10 text-white opacity-40 transition-all duration-200 hover:border-none hover:bg-black/[.5] hover:opacity-100"
          >
            <span className="text-[20px]">X</span>
          </div>
        </div>

        {children}
      </div>
    </div>,
    document.body,
  );
}

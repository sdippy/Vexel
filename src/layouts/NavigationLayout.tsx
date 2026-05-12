import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";
import Header from "../components/Header";

export function NavigationLayout() {
  return (
    <div className="min-h-screen bg-[#10131A]">
      {/* Градиент — отдельный слой, не перерисовывается при скролле */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(90deg, rgba(255,255,255,0.01) 3%, rgba(255,255,255,0) 9%),
            radial-gradient(ellipse 120% 140% at 55% 1%, rgba(173,198,255,0.08) 0%, rgba(173,198,255,0) 80%),
            radial-gradient(ellipse 40% 40% at 70% 70%, rgba(74,225,118,0.02) 0%, rgba(74,225,118,0) 80%),
            radial-gradient(ellipse 20% 20% at 95% 5%, rgba(173,198,255,0.03) 0%, rgba(173,198,255,0) 80%)
          `,
          willChange: "transform", // переносит на отдельный GPU слой
        }}
      />

      <aside className="fixed inset-y-0 left-0 z-40 w-[280px]">
        <Aside />
      </aside>

      <header className="fixed top-0 left-[280px] right-0 z-50 h-[64px]  backdrop-blur-xl border-b border-white/10">
        <Header />
      </header>

      <div className="relative z-10 ml-[280px] pt-[64px]">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

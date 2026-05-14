import { Outlet } from "react-router-dom";
import Aside from "../ui/DashboardComponents/Aside";
import Header from "../ui/DashboardComponents/Header";

export function NavigationLayout() {
  return (
    <div className="min-h-screen bg-[#10131A]">
      {/* Градиент — отдельный слой, не перерисовывается при скролле */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `
      linear-gradient(90deg, rgba(255,255,255,0.01) 3%, rgba(255,255,255,0) 9%),
      radial-gradient(ellipse 120% 140% at 55% 1%, rgba(173,198,255,0.08) 0%, rgba(173,198,255,0) 85%),
      radial-gradient(ellipse 40% 40% at 70% 70%, rgba(74,225,118,0.02) 0%, rgba(74,225,118,0) 85%),
      radial-gradient(ellipse 20% 20% at 95% 5%, rgba(173,198,255,0.03) 0%, rgba(173,198,255,0) 85%)
    `,
          WebkitBackfaceVisibility: "hidden", // устраняет артефакты рендера
          backfaceVisibility: "hidden",
          willChange: "transform",
          transform: "translateZ(0)", // форсирует GPU слой в Safari
        }}
      />

      <aside className="fixed inset-y-0 left-0 z-40 w-[280px]">
        <Aside />
      </aside>

      <header
        className="fixed top-0 left-[280px] right-0 z-50 h-[64px] border-b border-white/10"
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)", // Safari
        }}
      >
        <Header />
      </header>

      <div className="relative z-10 ml-[280px] pt-[64px]">
        <main className="p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

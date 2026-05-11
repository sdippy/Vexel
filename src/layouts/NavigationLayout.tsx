import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";

export function NavigationLayout() {
  return (
    <div className="min-h-screen flex bg-[#10131A] bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_3%,rgba(255,255,255,0)_9%),radial-gradient(ellipse_120%_140%_at_55%_1%,rgba(173,198,255,0.08)_0%,rgba(173,198,255,0)_80%),radial-gradient(ellipse_40%_40%_at_70%_70%,rgba(74,225,118,0.02)_0%,rgba(74,225,118,0)_80%)]">
      {/* SIDEBAR FIXED */}
      <div className="sticky top-0">
        <Aside />
      </div>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col h-screen">
        {/* HEADER FIXED */}
        <header className="h-[60px] sticky top-0 z-50 bg-[#10131A]/60 backdrop-blur-md border-b border-white/10">
          Header
        </header>

        {/* SCROLLABLE CONTENT */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

// src/layouts/DashboardLayout.tsx
import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";

export function DashboardLayout() {
  return (
    <div className="min-h-screen flex bg-[#10131A] bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_3%,rgba(255,255,255,0)_9%),radial-gradient(ellipse_120%_140%_at_55%_1%,rgba(173,198,255,0.08)_0%,rgba(173,198,255,0)_80%),radial-gradient(ellipse_40%_40%_at_70%_70%,rgba(74,225,118,0.02)_0%,rgba(74,225,118,0)_80%)]">
      <Aside />

      <div style={{ flex: 1 }}>
        <header style={{ height: 60, borderBottom: "1px solid #333" }}>
          Header
        </header>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

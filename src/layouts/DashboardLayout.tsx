// src/layouts/DashboardLayout.tsx
import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";

export function DashboardLayout() {
  return (
    <div className="min-h-screen flex bg-[#10131A]">
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

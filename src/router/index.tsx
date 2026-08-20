import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { NavigationLayout } from "@/shared/components/layout/NavigationLayout";

const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Markets = lazy(() => import("@/pages/Markets"));
const News = lazy(() => import("@/pages/News"));
const Watchlist = lazy(() => import("@/pages/Watchlist"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/Dashboard" replace />,
      },
      {
        path: "Dashboard",
        element: (
          <Suspense fallback={<div></div>}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "Markets",
        element: (
          <Suspense fallback={<div></div>}>
            <Markets />
          </Suspense>
        ),
      },
      {
        path: "Watchlist",
        element: (
          <Suspense fallback={<div></div>}>
            <Watchlist />
          </Suspense>
        ),
      },
      {
        path: "News",
        element: (
          <Suspense fallback={<div></div>}>
            <News />
          </Suspense>
        ),
      },
    ],
  },
]);

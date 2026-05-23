import { createBrowserRouter, Navigate } from "react-router-dom";
import { NavigationLayout } from "../shared/components/layout/NavigationLayout";
import Dashboard from "../pages/Dashboard";
import Markets from "../pages/Markets";
import News from "../pages/News";

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
        element: <Dashboard />,
      },
      {
        path: "Markets",
        element: <Markets />,
      },
      {
        path: "News",
        element: <News />,
      },
    ],
  },
]);

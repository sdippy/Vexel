import { createBrowserRouter, Navigate } from "react-router-dom";
import { NavigationLayout } from "../shared/components/layout/NavigationLayout";
import Dashboard from "../pages/Dashboard";

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
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

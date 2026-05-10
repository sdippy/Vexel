import { createBrowserRouter, Navigate } from "react-router-dom";
import { DashboardLayout } from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/Dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      }
    ],
  },
]);
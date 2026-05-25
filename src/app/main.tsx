import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { getMarketNews } from "@/shared/services/fetchMarketNews";

const queryClient = new QueryClient();

queryClient.prefetchQuery({
  queryKey: ["market-news", 2],
  queryFn: () => getMarketNews(2, "desc"),
});

import { router } from "../router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);

import React from "react";
import ReactDOM from "react-dom/client";
import News from "@/pages/News";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleNews from "./pages/SingleNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <News />,
  },
  {
    path: "news/:newsId",
    element: <SingleNews />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

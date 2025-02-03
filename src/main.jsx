import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Tooltip } from "react-tooltip";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <Tooltip id="my-tooltip" />
          <RouterProvider router={router}></RouterProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);

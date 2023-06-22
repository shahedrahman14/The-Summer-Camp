import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProviders from "./Providers/AuthProviders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <div className="max-w-7xl  mx-auto px-2">
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProviders>
  </React.StrictMode>
);

import type { RouteObject } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import LandingPage from "../pages/LandingPage";
import NotFoundPage from "../pages/NotFoundPage";
import ServiceDetailPage from "../pages/ServiceDetailPage";

// Dipakai bersama oleh browser (main.tsx) dan prerender (entry-server.tsx).
const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "layanan/:slug", element: <ServiceDetailPage /> },
      { path: "*", element: <NotFoundPage /> }
    ]
  }
];

export default routes;

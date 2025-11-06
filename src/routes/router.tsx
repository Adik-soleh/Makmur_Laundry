import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import LandingPage from "../pages/LandingPage";
import ServiceDetailPage from "../pages/ServiceDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "layanan/:slug", element: <ServiceDetailPage /> }
    ]
  }
]);

export default router;

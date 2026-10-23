import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "@fontsource-variable/plus-jakarta-sans/wght.css";
import routes from "./routes/routes";
import "./index.css";

const router = createBrowserRouter(routes);
const container = document.getElementById("root") as HTMLElement;
const app = (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Build produksi berisi HTML hasil prerender → hydrate; dev server → render biasa.
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}

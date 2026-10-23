import React from "react";
import { renderToString } from "react-dom/server";
import {
  StaticRouterProvider,
  createStaticHandler,
  createStaticRouter
} from "react-router-dom/server";
import routes from "./routes/routes";

export { allPages, headHtml, notFoundMeta, SITE_URL } from "./seo";

const handler = createStaticHandler(routes);

/** Render satu path menjadi HTML untuk diisi ke #root (dipakai scripts/prerender.mjs). */
export const render = async (path: string) => {
  const context = await handler.query(new Request(`http://localhost${path}`));
  if (context instanceof Response) throw new Error(`Unexpected redirect for ${path}`);
  const router = createStaticRouter(handler.dataRoutes, context);
  return renderToString(
    <React.StrictMode>
      <StaticRouterProvider router={router} context={context} hydrate={false} />
    </React.StrictMode>
  );
};

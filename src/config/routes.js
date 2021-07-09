import { lazy } from "react";

const routes = [
  {
    path: "/",
    exact: true,
    component: lazy(() => import("views/shop/SearchProduct.view")),
  },
  // {
  //   path: "*",
  //   component: lazy(() => import("views/error-page/404")),
  // },
];

export default routes;

import { lazy } from "react";
import SearchProduct from "./SearchProduct";

const Footer = lazy(() => import("./Footer/Footer.component"));
const Header = lazy(() => import("./Header/Header.component"));
const SidebarMenuLeft = lazy(() =>
  import("./SidebarLeftMenu/SidebarMenuLeft.component")
);

export { Footer, SearchProduct, Header, SidebarMenuLeft };

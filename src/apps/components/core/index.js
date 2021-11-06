import { lazy } from 'react';
import SearchProduct from './SearchProduct';
import Header from './Header';

const Footer = lazy(() => import('./Footer/Footer.component'));
const FooterNavigation = lazy(() => import('./Footer/FooterNavigation.component'));
const SidebarMenuLeft = lazy(() => import('./SidebarLeftMenu/SidebarMenuLeft.component'));

export { Footer, FooterNavigation, SearchProduct, Header, SidebarMenuLeft };

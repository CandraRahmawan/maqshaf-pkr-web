import { lazy } from 'react';

const routes = [
  {
    path: '/:action(identitas|pin)?',
    exact: true,
    component: lazy(() => import('views/shop/SearchProduct.view')),
  },
  {
    path: '/dashboard',
    exact: true,
    component: lazy(() => import('views/dashboard/Dashboard.view')),
  },
  {
    path: '/dashboard/login',
    exact: true,
    component: lazy(() => import('views/dashboard/Login.view')),
  },
  {
    path: '/dashboard/produk',
    exact: true,
    component: lazy(() => import('views/dashboard/products/ProductList.view')),
  },
  {
    path: '/dashboard/santri',
    exact: true,
    component: lazy(() => import('views/dashboard/users/UserList.view')),
  },
  {
    path: '/dashboard/santri/:id',
    exact: true,
    component: lazy(() => import('views/dashboard/users/UserDetail.view')),
  },
  {
    path: '/dashboard/administrator',
    exact: true,
    component: lazy(() => import('views/dashboard/administrator/AdministratorList.view')),
  },
  {
    path: '/dashboard/transaksi/masuk',
    exact: true,
    component: lazy(() => import('views/dashboard/users/UserList.view')),
  },
  {
    path: '/dashboard/transaksi/keluar',
    exact: true,
    component: lazy(() => import('views/dashboard/users/UserList.view')),
  },
  {
    path: '/dashboard/cek-saldo',
    exact: true,
    component: lazy(() => import('views/dashboard/CheckBalanced.view')),
  },
  // {
  //   path: "*",
  //   component: lazy(() => import("views/error-page/404")),
  // },
];

export default routes;

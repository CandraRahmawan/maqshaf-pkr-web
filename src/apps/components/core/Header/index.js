import { lazy } from 'react';

const Dashboard = lazy(() => import('./Dashboard.component'));
const Login = lazy(() => import('./Login.component'));

export default { Dashboard, Login };

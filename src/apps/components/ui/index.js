import { lazy } from 'react';
import Spinner from './Spinner/Spinner.component';
import Alert from './Alerts';
import Skeleton from './Skeleton';

const Card = lazy(() => import('./Cards/Card.component'));
const DataTables = lazy(() => import('./DataTables/DataTable.component'));
const Button = lazy(() => import('./Button/Button.component'));

export { Card, Spinner, Alert, Skeleton, DataTables, Button };

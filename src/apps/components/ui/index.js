import { lazy } from 'react';
import Spinner from './Spinner/Spinner.component';
import Alert from './Alerts';
import Skeleton from './Skeleton';

const Card = lazy(() => import('./Cards/Card.component'));

export { Card, Spinner, Alert, Skeleton };

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import dayjs from 'dayjs';
import ThemeProvider from 'providers/Themes.provider';
import QueryClientProvider from 'providers/QueryClient.provider';
import ReduxProvider from 'providers/Redux.provider';
import { Spinner } from 'apps/components/ui';
import i18n from 'lib/i18n';
import App from './apps';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import { pwaTrackingListeners } from './pwaEventListeners';

import 'dayjs/locale/id';

import 'styles/styles.scss';
import 'sweetalert2/src/sweetalert2.scss';

dayjs.locale('id');

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner label="Sedang memnuat halaman..." />}>
      <ReduxProvider>
        <QueryClientProvider>
          <I18nextProvider i18n={i18n}>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </I18nextProvider>
        </QueryClientProvider>
      </ReduxProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();

reportWebVitals();

const isBrowser = typeof window !== 'undefined';

if (isBrowser) {
  pwaTrackingListeners();
}

if (isBrowser && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(() => {
        console.log('Service worker registered');
      })
      .catch((err) => {
        console.log('Service worker registration failed', err);
      });
  });
}

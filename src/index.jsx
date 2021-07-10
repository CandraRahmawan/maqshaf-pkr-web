import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import ThemeProvider from "providers/Themes.provider";
import { Spinner } from "apps/components/ui";
import i18n from "lib/i18n";
import App from "./apps";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

import "styles/styles.scss";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner label="Sedang memnuat halaman..." />}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </I18nextProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.unregister();

reportWebVitals();

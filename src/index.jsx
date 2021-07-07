import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import ThemeProvider from "providers/Themes";
import App from "./apps";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

import "styles/styles.scss";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="loading...">
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.unregister();

reportWebVitals();

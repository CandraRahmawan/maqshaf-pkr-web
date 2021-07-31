import { lazy } from "react";

const SummaryDialog = lazy(() => import("./SummaryDialog.component"));
const IdentityDataDialog = lazy(() => import("./IdentityDataDialog.component"));
const ConfirmationPinDialog = lazy(() =>
  import("./ConfirmationPinDialog.component")
);

export default { SummaryDialog, IdentityDataDialog, ConfirmationPinDialog };

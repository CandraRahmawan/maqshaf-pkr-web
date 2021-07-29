import { lazy } from "react";

const SummaryDialog = lazy(() => import("./SummaryDialog.component"));
const IdentityDataDialog = lazy(() => import("./IdentityDataDialog.component"));

export default { SummaryDialog, IdentityDataDialog };

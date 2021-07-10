import { lazy } from "react";
import Spinner from "./Spinner/Spinner.component";

const Card = lazy(() => import("./Cards/Card.component"));

export { Card, Spinner };

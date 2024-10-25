import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PatientDetailPage from "@/components/patientdetail/patientdetail";
import PatientList from "@/components/patientlist/patientlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <PatientList /> },
      { path: "patients", element: <PatientList /> },
      { path: "patient/:patientId", element: <PatientDetailPage /> },
    ],
  },
]);

export default router;

import getAllPatients from "@/api/patient/getAll";
import { useState, useEffect } from "react";
import PatientCard from "../patientcard/patientcard";
import type { Patient } from "fhir/r4b";

const PatientList = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    getAllPatients().then((newPatients) => {
      setPatients(newPatients);
    });
  }, []);

  return (
    <div className="w-full flex flex-col gap-2">
      {patients.map((patient) => (
        <PatientCard key={patient.id} patient={patient} />
      ))}
    </div>
  );
};

export default PatientList;

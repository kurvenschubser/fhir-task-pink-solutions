import { Link } from "react-router-dom";
import type { Patient } from "fhir/r4b";
import { Card, CardHeader } from "../ui/card";

interface PatientCardProps {
  patient: Patient;
}

const PatientCard = ({ patient }: PatientCardProps) => {
  return (
    <Link to={`/patient/${patient.id ?? ""}`}>
      <Card key={patient.id} className="w-[350px]">
        <CardHeader>
          <h2 className="text-xl font-bold">
            {[
              patient.name ? patient.name[0].family : "",
              patient.name ? patient.name[0].given : "",
            ]
              .filter(Boolean)
              .join(", ")}
          </h2>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default PatientCard;

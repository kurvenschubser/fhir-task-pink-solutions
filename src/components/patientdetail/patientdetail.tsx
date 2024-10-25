import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import type { Patient } from "fhir/r4b";
import getOnePatient from "@/api/patient/getOne";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { User, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface PatientDetailProps {
  patient: Patient | null;
}

function PatientDetailField({
  icon: Icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start space-x-4 p-2">
      <div className="mt-0.5">
        <Icon className="h-5 w-5 text-muted-foreground" />
      </div>
      <div className="space-y-1">
        <Label className="text-sm text-muted-foreground">{label}</Label>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  );
}

const PatientDetail = ({ patient }: PatientDetailProps) => {
  const fullName = patient
    ? [
        patient.name ? (patient.name[0].given || []).join(" ") : "",
        patient.name ? patient.name[0]?.family : "",
      ]
        .filter(Boolean)
        .join(" ")
    : "No name provided";

  const address = patient?.address ? patient.address[0] : null;

  const fullAddress = address
    ? `${address.line ? address.line[0] : ""}, ${address.city}, ${
        address.state
      } ${address.postalCode}, ${address.country}`
    : "No address provided";

  return (
    <Card className="shadow-lg">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold">Patient Details</CardTitle>
          <div className="px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary rounded-full">
            FHIR R4B
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <PatientDetailField icon={User} label="Full Name" value={fullName} />
          <Separator />
          <PatientDetailField
            icon={User}
            label="Gender"
            value={
              (patient?.gender ?? "").charAt(0).toUpperCase() +
              (patient?.gender ?? "").slice(1)
            }
          />
          <Separator />
          <PatientDetailField
            icon={Calendar}
            label="Date of Birth"
            value={new Date(patient?.birthDate ?? "").toLocaleDateString(
              "de-DE",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}
          />
          <Separator />
          <PatientDetailField
            icon={MapPin}
            label="Address"
            value={fullAddress}
          />
        </div>
      </CardContent>
    </Card>
  );
};

const PatientDetailPage = () => {
  const { patientId } = useParams();

  const [patient, setPatient] = useState<Patient | null>();

  useEffect(() => {
    if (patientId) {
      getOnePatient(patientId).then((newPatient) => {
        setPatient(newPatient);
      });
    }
  }, [patientId]);

  return !patient ? (
    <div>No data...</div>
  ) : (
    <div>
      <PatientDetail patient={patient} />
    </div>
  );
};

export default PatientDetailPage;

import FHIR from "fhirclient";
import type { Patient } from "fhir/r4b";

const getOnePatient = async (patientId: string): Promise<Patient | null> => {
  const client = FHIR.client({ serverUrl: "https://hapi.fhir.org/baseR4" });
  return client.request(`/Patient/${patientId}`);
};

export default getOnePatient;

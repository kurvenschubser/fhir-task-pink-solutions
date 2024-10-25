import FHIR from "fhirclient";
import type { Patient } from "fhir/r4b";

const getAllPatients = async (): Promise<Patient[]> => {
  const client = FHIR.client({ serverUrl: "https://hapi.fhir.org/baseR4" });
  return client
    .request("/Patient", { pageLimit: 1 })
    .catch((reason) => {
      // todo: improve error handling
      console.error("Failed to fetch patients", reason);
      return [];
    })
    .then((response) => {
      const page = response;
      if (page.entry.length === 0) {
        return [];
      }
      return page.entry.map((entry: any) => entry.resource);
    });
};

export default getAllPatients;

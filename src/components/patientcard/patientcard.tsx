import exp from "constants";
import { Card, CardHeader, CardContent } from "../ui/card";

const PatientCard = () => (
  <Card className="w-[350px]">
    <CardHeader>
      <h2 className="text-xl font-bold">Patient 1</h2>
    </CardHeader>
    <CardContent>i'm a patient!</CardContent>
  </Card>
);

export default PatientCard;

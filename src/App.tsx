import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PatientList from "./components/patientlist/patientlist";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1 className="text-3xl font-bold underline">
          FHIR Task Pink Solutions
        </h1>
      </header>

      <PatientList />
    </div>
  );
};

export default App;

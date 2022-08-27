import React, { useState } from "react";
import Form from "./form/Form";
import ResultLineChart from "./chart/ResultLineChart";

export default function Calculator() {
  const [values, setValues] = useState({
    primaryGear: "3.842",
    frontSprocket: "14",
    rearSprocket: "53",
    finalGearRatio: "3.786",
    maxRpm: "9400",
    rearWheelSize: "64",
  });

  const [gearFormFields, setGearFormFields] = useState([
    { gear: 3.166 },
    { gear: 1.941 },
    { gear: 1.38 },
    { gear: 1.083 },
    { gear: 0.923 },
    { gear: 0.823 },
  ]);

  return (
    <div className="flex sm:justify-center w-full">
      <div className="w-full md:w-1/2">
        <Form
          values={values}
          setValues={setValues}
          gearFormFields={gearFormFields}
          setGearFormFields={setGearFormFields}
        />
        <ResultLineChart values={values} gearFormFields={gearFormFields} />
      </div>
    </div>
  );
}

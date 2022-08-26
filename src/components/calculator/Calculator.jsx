import React, { useState, useRef, useEffect } from "react";
import Form from "./form/Form";
import ResultLineChart from "./chart/ResultLineChart";

export default function Calculator() {
  // let values = useRef({
  //   primaryGear: "3.842",
  //   frontSprocket: "14",
  //   rearSprocket: "53",
  //   finalGearRatio: "",
  //   maxRpm: "9400",
  //   rearWheelSize: "64",
  // });

  const [gearFormFields, setGearFormFields] = useState([
    { gear: 3.166 },
    { gear: 1.941 },
    { gear: 1.38 },
    { gear: 1.083 },
    { gear: 0.923 },
    { gear: 0.823 },
  ]);

  const [values, setValues] = useState({
    primaryGear: "3.842",
    frontSprocket: "14",
    rearSprocket: "53",
    finalGearRatio: "",
    maxRpm: "9400",
    rearWheelSize: "64",
    gearFormFields: {},
  });

  useEffect(() => {
    console.log("parentshit", values);
  }, [values]);

  return (
    <div className="flex lg:justify-center">
      <div className="w-full sm:w-1/2 justify-center">
        <Form
          setValues={setValues}
          values={values}
          gearFormFields={gearFormFields}
          setGearFormFields={setGearFormFields}
        />
        <ResultLineChart
          maxRpm={values.maxRpm}
          rearWheelSize={values.rearWheelSize}
          finalGearRatio={values.finalGearRatio}
          primaryGear={values.primaryGear}
          gearFormFields={values.gearFormFields}
        />
      </div>
    </div>
  );
}

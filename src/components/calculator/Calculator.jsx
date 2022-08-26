import React, { useState, useEffect } from "react";
import Form from "./form/Form";
import ResultLineChart from "./chart/ResultLineChart";

export default function Calculator() {
  const [values, setValues] = useState({
    primaryGear: "3.842",
    frontSprocket: "14",
    rearSprocket: "53",
    finalGearRatio: "",
    maxRpm: "9400",
    rearWheelSize: "64",
  });

  useEffect(() => {
    console.log("parentshit", values);
  }, [values]);

  return (
    <div className="flex lg:justify-center">
      <div className="w-full sm:w-1/2 justify-center">
        <Form values={values} setValues={setValues} />
        <ResultLineChart values={values} />
      </div>
    </div>
  );
}

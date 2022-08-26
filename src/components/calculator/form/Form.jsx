import React, { useState } from "react";
import FormInput from "../../utils/FormInput";
import Button from "../../utils/Button";
import DynamicFinalGearCalculation from "./formsubcomponents/DynamicFinalGearCalculation";
import DynamicGearForm from "./formsubcomponents/DynamicGearForm";

export default function Form({ values, setValues }) {
  const [gearFormFields, setGearFormFields] = useState([
    { gear: 3.166 },
    { gear: 1.941 },
    { gear: 1.38 },
    { gear: 1.083 },
    { gear: 0.923 },
    { gear: 0.823 },
  ]);

  const [frontSprocket, setFrontSprocket] = useState(values.frontSprocket);
  const [rearSprocket, setRearSprocket] = useState(values.rearSprocket);
  const [finalGearRatio, setfinalGearRatio] = useState(values.finalGearRatio);

  let tempValues = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    tempValues = {
      ...tempValues,
      frontSprocket,
      rearSprocket,
      finalGearRatio,
      gearFormFields,
    };
    setValues(tempValues);
  };

  const onChange = (e) => {
    tempValues = { ...tempValues, [e.target.name]: e.target.value };
  };

  return (
    <div>
      <form className="justify-center" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mt-3 mb-2">
          Calculate your bikes top speed
        </h1>
        <div className="sm:flex sm:max-w-[400px] sm:space-x-1">
          <FormInput
            id={1}
            name={"primaryGear"}
            label={"Primary gear"}
            defaultValue={values.primaryGear}
            onChange={onChange}
          />
          <FormInput
            id={2}
            name={"maxRpm"}
            label={"Max rpm"}
            defaultValue={values.maxRpm}
            onChange={onChange}
          />
          <FormInput
            id={3}
            name={"rearWheelSize"}
            label={"Rear tyre (cm)"}
            defaultValue={values.rearWheelSize}
            onChange={onChange}
          />
        </div>
        <DynamicGearForm
          gearFormFields={gearFormFields}
          setGearFormFields={setGearFormFields}
        />

        <DynamicFinalGearCalculation
          frontSprocket={frontSprocket}
          rearSprocket={rearSprocket}
          finalGearRatio={finalGearRatio}
          setFrontSprocket={setFrontSprocket}
          setRearSprocket={setRearSprocket}
          setfinalGearRatio={setfinalGearRatio}
        />

        <Button
          borderColor={"border-blue-500"}
          buttonInnerText={"Submit"}
          hoverColor={"hover:bg-blue-500"}
          textColor={"text-blue-700"}
        />
      </form>
    </div>
  );
}

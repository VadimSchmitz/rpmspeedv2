import React, { useState, useEffect } from "react";
import FormInput from "./formsubcomponents/FormInput";
import Button from "./formsubcomponents/Button";
import DisabledButton from "./formsubcomponents/disabledButton";
import DynamicFinalGearCalculation from "./formsubcomponents/DynamicFinalGearCalculation";

export default function Form({
  values,
  setValues,
  gearFormFields,
  setGearFormFields,
}) {
  let tempValues = values;
  const [frontSprocket, setFrontSprocket] = useState(values.frontSprocket);
  const [rearSprocket, setRearSprocket] = useState(values.rearSprocket);
  const [finalGearRatio, setfinalGearRatio] = useState(values.finalGearRatio);

  const handleSubmit = (e) => {
    e.preventDefault();
    tempValues = { ...tempValues, frontSprocket, rearSprocket, finalGearRatio };
    setValues(tempValues);
  };

  const onChange = (e) => {
    tempValues = { ...tempValues, [e.target.name]: e.target.value };
  };

  const handleGearFormChange = (index, event) => {
    const data = [...gearFormFields];
    data[index][event.target.name] = event.target.value;
    setGearFormFields(data);
  };

  const addFields = () => {
    const object = {
      gear: 0,
    };
    setGearFormFields([...gearFormFields, object]);
  };

  const removeFields = (index) => {
    const data = [...gearFormFields];
    data.splice(index, 1);
    setGearFormFields(data);
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
        <div className="flex space-x-1 max-w-4xl mr-1">
          <div className="max-h-8 mt-[19px]">
            {gearFormFields.length - 1 && gearFormFields.length > 1 ? (
              <Button
                borderColor={"border-red-700"}
                buttonInnerText={"-"}
                hoverColor={"hover:bg-red-500"}
                textColor={"text-red-600"}
                onClickHandler={() => removeFields(-1)}
              />
            ) : (
              <DisabledButton
                borderColor={"border-red-500"}
                buttonInnerText={"-"}
                textColor={"text-red-700"}
              />
            )}
          </div>
          {gearFormFields.map((form, index) => {
            return (
              <div key={index}>
                <p className="text-sm pl-[2px]">Gear {index + 1}</p>
                <div className="flex">
                  <FormInput
                    name={"gear"}
                    defaultValue={form.gear}
                    onChange={(event) => handleGearFormChange(index, event)}
                  />
                </div>
              </div>
            );
          })}
          <div className="max-h-8 mt-[19px]">
            {gearFormFields.length < 6 ? (
              <Button
                borderColor={"border-blue-500"}
                buttonInnerText={"+"}
                hoverColor={"hover:bg-blue-500"}
                textColor={"text-blue-700"}
                onClickHandler={() => addFields()}
              />
            ) : (
              <DisabledButton
                borderColor={"border-blue-500"}
                buttonInnerText={"+"}
                textColor={"text-blue-700"}
              />
            )}
          </div>
        </div>

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

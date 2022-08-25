import React, { useState, useEffect } from "react";
import FormInput from "./FormInput";
import Button from "../../../utils/Button";
import DisabledButton from "../../../utils/disabledButton";
import buildRpmMatrix from "../calculations/buildRpmMatrix";

export default function Form() {
  const [values, setValues] = useState({
    primaryGear: "3.842",
    frontSprocket: "14",
    rearSprocket: "53",
    finalGearRatio: "",
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

  const rpmMatrix = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    buildRpmMatrix(values.maxRpm, rpmMatrix);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
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

  useEffect(() => {
    if (values.frontSprocket && values.rearSprocket) {
      setValues({
        ...values,
        ["finalGearRatio"]: parseFloat(
          values.rearSprocket / values.frontSprocket
        ).toFixed(2),
      });
    } else {
      setValues({ ...values, [values.finalGearRatio]: "" });
    }
  }, [values.frontSprocket, values.rearSprocket]);

  return (
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
      {/* {values.finalGearRatio} */}
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
              {console.log(form)}
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
      <div className="flex max-w-[250px] space-x-1">
        <FormInput
          id={4}
          name={"frontSprocket"}
          label={"Front sprocket"}
          defaultValue={values.frontSprocket}
          onChange={onChange}
        />
        <FormInput
          id={5}
          name={"rearSprocket"}
          label={"Rear sprocket"}
          defaultValue={values.rearSprocket}
          onChange={onChange}
        />
      </div>
      <div className="mb-6 pl-[2px]">
        Final Gear Ratio: {values.finalGearRatio}
      </div>

      <Button
        borderColor={"border-blue-500"}
        buttonInnerText={"Submit"}
        hoverColor={"hover:bg-blue-500"}
        textColor={"text-blue-700"}
      />
    </form>
  );
}

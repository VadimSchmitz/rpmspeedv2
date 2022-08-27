import { useEffect, useState } from "react";
import FormInput from "../../../utils/FormInput";

export default function DynamicFinalGearCalculation({ values, setValues }) {
  const [frontSprocket, setFrontSprocket] = useState(values.frontSprocket);
  const [rearSprocket, setRearSprocket] = useState(values.rearSprocket);
  const [finalGearRatio, setFinalGearRatio] = useState(values.finalGearRatio);

  useEffect(() => {
    if (values.frontSprocket && values.rearSprocket) {
      setValues({
        ...values,
        ["frontSprocket"]: frontSprocket,
        ["rearSprocket"]: rearSprocket,
        ["finalGearRatio"]: parseFloat(rearSprocket / frontSprocket).toFixed(2),
      });
    } else {
      setFinalGearRatio("");
    }
  }, [frontSprocket, rearSprocket]);

  const handleFrontSprocketChange = (e) => {
    setFrontSprocket(e.target.value);
  };

  const handleRearSprocketChange = (e) => {
    setRearSprocket(e.target.value);
  };

  return (
    <div>
      <div className="flex max-w-[250px] space-x-1">
        <FormInput
          id={4}
          name={"frontSprocket"}
          label={"Front sprocket"}
          defaultValue={values.frontSprocket}
          onChange={handleFrontSprocketChange}
        />
        <FormInput
          id={5}
          name={"rearSprocket"}
          label={"Rear sprocket"}
          defaultValue={values.rearSprocket}
          onChange={handleRearSprocketChange}
        />
      </div>
      <div className="mb-6 pl-[2px]">
        Final Gear Ratio: {values.finalGearRatio}
      </div>
    </div>
  );
}

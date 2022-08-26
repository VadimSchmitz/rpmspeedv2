import { useEffect } from "react";
import FormInput from "./FormInput";

export default function DynamicFinalGearCalculation({
  frontSprocket,
  rearSprocket,
  finalGearRatio,
  setFrontSprocket,
  setRearSprocket,
  setfinalGearRatio,
}) {
  useEffect(() => {
    if (frontSprocket && rearSprocket) {
      setfinalGearRatio(parseFloat(rearSprocket / frontSprocket).toFixed(2));
    } else {
      setfinalGearRatio("");
    }
  }, [frontSprocket, rearSprocket]);

  const HandleFrontSprocketChange = (e) => {
    setFrontSprocket(e.target.value);
  };

  const HandleRearSprocketChange = (e) => {
    setRearSprocket(e.target.value);
  };

  return (
    <div>
      <div className="flex max-w-[250px] space-x-1">
        <FormInput
          id={4}
          name={"frontSprocket"}
          label={"Front sprocket"}
          defaultValue={frontSprocket}
          onChange={HandleFrontSprocketChange}
        />
        <FormInput
          id={5}
          name={"rearSprocket"}
          label={"Rear sprocket"}
          defaultValue={rearSprocket}
          onChange={HandleRearSprocketChange}
        />
      </div>
      <div className="mb-6 pl-[2px]">Final Gear Ratio: {finalGearRatio}</div>
    </div>
  );
}

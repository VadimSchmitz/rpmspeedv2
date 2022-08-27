import React from "react";
import Button from "../../../utils/Button";
import DisabledButton from "../../../utils/disabledButton";
import FormInput from "../../../utils/FormInput";

export default function DynamicGearForm({ gearFormFields, setGearFormFields }) {
  const handleGearFormChange = (index, event) => {
    const data = [...gearFormFields];
    data[index][event.target.name] = event.target.value;
    setGearFormFields(data);
  };

  const addField = () => {
    const object = {
      gear: (gearFormFields.reverse()[0].gear - 0.1).toFixed(3),
    };
    setGearFormFields([...gearFormFields, object]);
  };

  const removeField = (index) => {
    const data = [...gearFormFields];
    data.splice(index, 1);
    setGearFormFields(data);
    console.log(gearFormFields);
  };

  return (
    <div className="flex space-x-1 max-w-4xl mr-1">
      <div className="max-h-8 mt-[19px]">
        {gearFormFields.length - 1 && gearFormFields.length > 1 ? (
          <Button
            borderColor={"border-red-700"}
            buttonInnerText={"-"}
            hoverColor={"hover:bg-red-500"}
            textColor={"text-red-600"}
            onClickHandler={() => removeField(-1)}
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
            onClickHandler={() => addField()}
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
  );
}

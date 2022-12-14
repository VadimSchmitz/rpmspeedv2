import FormInput from "../../utils/FormInput";
import DynamicFinalGearCalculation from "./formsubcomponents/DynamicFinalGearCalculation";
import DynamicGearForm from "./formsubcomponents/DynamicGearForm";

export default function Form({
  values,
  setValues,
  gearFormFields,
  setGearFormFields,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    e.preventDefault();

    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form className="justify-center" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mt-3 mb-2">
          Calculate your bikes top speed
        </h1>
        <div className="flex max-w-[97.5%] sm:max-w-[400px] space-x-1">
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
        <DynamicFinalGearCalculation values={values} setValues={setValues} />
      </form>
    </div>
  );
}

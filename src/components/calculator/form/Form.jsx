import React, { useState } from "react";
import FormInput from "./FormInput";
import { formData } from "./formData";

export default function Form() {
  const [values, setValues] = useState({
    primaryGear: "",
    frontSprocket: "",
    rearSprocket: "",
    finalGearRatio: "",
    maxRpm: "",
    rearWheelSize: "",
  });
  // console.log(username);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  return (
    <form className="w-3/6 justify-center bg-green-100" onSubmit={handleSubmit}>
      <h1>Register</h1>
      {formData.map((input) => (
        <FormInput
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}
        />
      ))}
      <div className="flex space-x-1 max-w-4xl">
        <FormInput />
        <FormInput />
        <FormInput />
        <FormInput />
        <FormInput />
        <FormInput />
      </div>
      <button>Submit</button>
    </form>
  );
}

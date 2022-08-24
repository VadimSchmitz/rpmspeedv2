import React from "react";
import Form from "./form/Form";

export default function Calculator() {
  return (
    <div className="flex lg:justify-center ">
      <div className="sm:w-9/12 justify-center bg-green-100">
        <Form />
      </div>
    </div>
  );
}

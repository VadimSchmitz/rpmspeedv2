import React from "react";
import Form from "./form/Form";

export default function Calculator() {
  return (
    <div className="flex lg:justify-center">
      <div className="w-full sm:w-1/2 justify-center">
        <Form />
      </div>
    </div>
  );
}

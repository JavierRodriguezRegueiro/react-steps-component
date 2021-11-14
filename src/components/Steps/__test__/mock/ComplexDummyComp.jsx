import React from "react";
import DummyStep from "./DummyStep";
import DummyComp from "./DummyComp";

const ComplexDummyComp = ({ label }) => {
  return (
    <>
      <DummyComp label={label} />
      <DummyStep />
    </>
  );
};

export default ComplexDummyComp;

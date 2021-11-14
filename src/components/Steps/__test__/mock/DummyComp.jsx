import React from "react";

const DummyComp = ({ label }) => {
  return <p data-testid={`dummy-${label}`}>{label}</p>;
};

export default DummyComp;

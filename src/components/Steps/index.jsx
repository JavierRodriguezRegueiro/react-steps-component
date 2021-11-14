import React from "react";
import { StepsContextProvider, useStepsContext } from "./StepsContext";

const Steps = ({ steps }) => {
  return (
    <StepsContextProvider maxStep={steps.length - 1}>
      <StepsContent steps={steps} />
    </StepsContextProvider>
  );
};

const StepsContent = ({ steps }) => {
  const [state] = useStepsContext();

  const getComponent = () => {
    return steps[state.currentStep]?.component;
  };

  const getProps = () => {
    return steps[state.currentStep]?.props;
  };

  return <>{React.createElement(getComponent(), getProps())}</>;
};

export default Steps;

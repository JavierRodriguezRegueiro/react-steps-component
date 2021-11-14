import React from "react";
import { useStepsContext } from "../../StepsContext";

const DummyStep = () => {
  const [state, dispatch] = useStepsContext();
  return (
    <button
      data-testid="dostep"
      onClick={() =>
        dispatch({ type: "SET_STEP", data: { step: state.currentStep + 1 } })
      }
    >
      {state.currentStep}
    </button>
  );
};

export default DummyStep;

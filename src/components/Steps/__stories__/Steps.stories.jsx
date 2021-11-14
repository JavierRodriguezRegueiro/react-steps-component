import React from "react";
import Steps from "../";
import { useStepsContext } from "../StepsContext";

export default {
  component: Steps,
  title: "Components/Steps",
};

const MockShowStepComponent = ({ title }) => {
  const [state, dispatch] = useStepsContext();
  return (
    <>
      <p>{`Component Title: ${title}`}</p>
      <p>{`Current step: ${state.currentStep}`}</p>
      <button
        onClick={() =>
          dispatch({ type: "SET_STEP", data: { step: state.currentStep + 1 } })
        }
      >
        Do Step
      </button>
    </>
  );
};

const stepsComponents = [
  {
    component: MockShowStepComponent,
    props: {
      title: "First one",
    },
  },
  {
    component: MockShowStepComponent,
    props: {
      title: "Second one",
    },
  },
  {
    component: MockShowStepComponent,
    props: {
      title: "Third one",
    },
  },
];

export const SimpleUse = () => <Steps steps={stepsComponents} />;

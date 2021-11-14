import React, { createContext, useContext, useReducer } from "react";

const StepsContext = createContext(null);

const StepsContextProvider = ({ children, maxStep }) => {
  const [state, dispatch] = useReducer(StepsReducer, {
    currentStep: 0,
    maxStep,
  });
  return (
    <StepsContext.Provider value={[state, dispatch]}>
      {children}
    </StepsContext.Provider>
  );
};

const canStep = (step, maxStep) => {
  return step <= maxStep && step > 0;
};

const StepsReducer = (state, action) => {
  const { type, data } = action;
  switch (type) {
    case "SET_STEP":
      return canStep(data.step, state.maxStep)
        ? {
            ...state,
            currentStep: data.step,
          }
        : state;
    default:
      return state;
  }
};

const useStepsContext = () => {
  const [state, dispatch] = useContext(StepsContext);
  return [state, dispatch];
};

export { StepsContextProvider, useStepsContext, StepsContext };

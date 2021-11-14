import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { StepsContextProvider } from "../StepsContext";
import DummyStep from "./mock/DummyStep";

describe("<StepsContextProvider />", () => {
  it("Should do a step", () => {
    const { getByTestId, getByText } = render(
      <StepsContextProvider maxStep={2}>
        <DummyStep />
      </StepsContextProvider>
    );
    expect(getByText("0")).not.toBeNull();
    fireEvent.click(getByTestId("dostep"));
    expect(getByText("1")).not.toBeNull();
  });

  it("Should not do an step if the state is in the maxStep", () => {
    const { getByTestId, getByText } = render(
      <StepsContextProvider maxStep={0}>
        <DummyStep />
      </StepsContextProvider>
    );
    fireEvent.click(getByTestId("dostep"));
    expect(getByText("0")).not.toBeNull();
  });
});

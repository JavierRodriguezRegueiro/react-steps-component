import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DummyComp from "./mock/DummyComp";
import ComplexDummyComp from "./mock/ComplexDummyComp";
import Steps from "../index";

describe("<Steps />", () => {
  const steps = [{ component: DummyComp, props: { label: "step" } }];

  it("Should render without crash", () => {
    const { container } = render(<Steps steps={steps} />);
    expect(container).not.toBeNull();
  });

  it("Should create components", () => {
    const { getByTestId } = render(<Steps steps={steps} />);
    expect(getByTestId("dummy-step")).not.toBeNull();
  });

  it("Should pass props", () => {
    const { getByText } = render(<Steps steps={steps} />);
    expect(getByText("step")).not.toBeNull();
  });

  it("Should render only one per step", () => {
    const customSteps = [...steps, ...steps, ...steps];
    const { queryAllByTestId } = render(<Steps steps={customSteps} />);
    expect(queryAllByTestId("dummy-step").length).toBe(1);
  });

  it("Should render other component instance when the step changed", () => {
    const customStep = [
      { component: ComplexDummyComp, props: { label: "zero" } },
      {
        component: DummyComp,
        props: {
          label: "one",
        },
      },
    ];
    const { getByText, getByTestId } = render(<Steps steps={customStep} />);
    expect(getByText("zero")).not.toBeNull();
    fireEvent.click(getByTestId("dostep"));
    expect(getByText("one")).not.toBeNull();
  });
});

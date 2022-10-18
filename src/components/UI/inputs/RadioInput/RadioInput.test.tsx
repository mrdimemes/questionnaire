import { screen } from "@testing-library/react";
import { renderWithProviders } from "src/utils/test-utils";

import RadioInput from "./RadioInput";

describe("RadioInput component", () => {
  test("RadioInput renders", () => {
    renderWithProviders(
      <RadioInput name="test" value={""} />);
    expect(screen.getByRole("radio")).toBeInTheDocument();
  });

  test("RadioInput snapshot", () => {
    const view = renderWithProviders(
      <RadioInput name="test" value={""} />);
    expect(view).toMatchSnapshot();
  });
});
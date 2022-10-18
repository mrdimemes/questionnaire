import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "src/utils/test-utils";

import CheckboxInput from "./CheckboxInput";

describe("CheckboxInput component", () => {
  test("CheckboxInput renders", () => {
    renderWithProviders(
      <CheckboxInput name="test" value={""} />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  test("CheckboxInput select changes on click", () => {
    renderWithProviders(
      <CheckboxInput name="test" value={""} />);
    const checkbox = screen.getByRole<HTMLInputElement>("checkbox");
    userEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
  });

  test("CheckboxInput snapshot", () => {
    const view = renderWithProviders(
      <CheckboxInput name="test" value={""} />);
    expect(view).toMatchSnapshot();
  });
});
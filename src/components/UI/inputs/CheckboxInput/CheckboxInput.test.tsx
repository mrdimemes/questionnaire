import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "src/utils/test-utils";
import CheckboxInput from "./CheckboxInput";

const callback = jest.fn();

describe("CheckboxInput component", () => {
  test("CheckboxInput renders", () => {
    renderWithProviders(
      <CheckboxInput name="test" callback={callback} value={""} />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  test("CheckboxInput select changes on click", () => {
    renderWithProviders(
      <CheckboxInput name="test" callback={callback} value={""} />);
    const checkbox = screen.getByRole<HTMLInputElement>("checkbox");
    userEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
  });

  test("CheckboxInput snapshot", () => {
    const checkbox = renderWithProviders(
      <CheckboxInput name="test" callback={callback} value={""} />);
    expect(checkbox).toMatchSnapshot();
  });
});
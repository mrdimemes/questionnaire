import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "src/utils/test-utils";
import Checkbox from "./Checkbox";

describe("Checkbox component", () => {
  test("Checkbox renders", () => {
    renderWithProviders(<Checkbox name="test"/>);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  test("Checkbox select changes on click", () => {
    renderWithProviders(<Checkbox name="test"/>);
    const checkbox = screen.getByRole<HTMLInputElement>("checkbox");
    userEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
  });

  test("Checkbox snapshot", () => {
    const checkbox = renderWithProviders(<Checkbox name="test"/>);
    expect(checkbox).toMatchSnapshot();
  });
});
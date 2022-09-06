import { screen } from "@testing-library/react";
import { renderWithProviders } from "src/utils/test-utils";
import CheckboxField from "./CheckboxField";

const callback = jest.fn();

describe("CheckboxField tests", () => {
  test("CheckboxField renders", () => {
    renderWithProviders(
      <CheckboxField id={1} questionId={1} text="test" value={""} callback={callback} />);
    expect(screen.getByText(/test/i)).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  test("CheckboxField snapshot", () => {
    const checkbox = renderWithProviders(
      <CheckboxField id={1} questionId={1} text="test" value={""} callback={callback} />);
    expect(checkbox).toMatchSnapshot();
  });
});
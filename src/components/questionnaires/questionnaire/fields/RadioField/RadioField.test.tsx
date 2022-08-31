import { screen } from "@testing-library/react";
import { renderWithProviders } from "src/utils/test-utils";
import RadioField from "./RadioField";

describe("RadioField tests", () => {
  test("RadioField renders", () => {
    renderWithProviders(<RadioField id={1} questionId={1} text="test" />);
    expect(screen.getByText(/test/i)).toBeInTheDocument();
    expect(screen.getByRole("radio")).toBeInTheDocument();
  });

  test("RadioField snapshot", () => {
    const radio = renderWithProviders(
      <RadioField id={1} questionId={1} text="test" />);
    expect(radio).toMatchSnapshot();
  });
});
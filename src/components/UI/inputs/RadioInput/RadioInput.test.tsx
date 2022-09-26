import { screen } from "@testing-library/react";
import { renderWithProviders } from "src/utils/test-utils";
import RadioInput from "./RadioInput";

const callback = jest.fn();

describe("RadioInput component", () => {
  test("RadioInput renders", () => {
    renderWithProviders(
      <RadioInput name="test" value={""} />);
    expect(screen.getByRole("radio")).toBeInTheDocument();
  });

  test("RadioInput snapshot", () => {
    const radio = renderWithProviders(
      <RadioInput name="test" value={""} />);
    expect(radio).toMatchSnapshot();
  });
});
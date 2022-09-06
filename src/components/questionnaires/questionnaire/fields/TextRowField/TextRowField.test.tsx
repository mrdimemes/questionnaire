import { screen } from "@testing-library/react";
import { renderWithProviders } from "src/utils/test-utils";
import TextRowField from "./TextRowField";

const callback = jest.fn();

describe("TextRowField tests", () => {
  test("TextRowField renders", () => {
    renderWithProviders(
      <TextRowField id={1} questionId={1} text="test" value={""} callback={callback} />);
    expect(screen.getByText(/test/i)).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("TextRowField snapshot", () => {
    const textRow = renderWithProviders(
      <TextRowField id={1} questionId={1} text="test" value={""} callback={callback} />);
    expect(textRow).toMatchSnapshot();
  });
});
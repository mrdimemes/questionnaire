import { screen } from "@testing-library/react";
import { renderWithProviders } from "src/utils/test-utils";
import Radio from "./Radio";

describe("Radio component", () => {
  test("Radio renders", () => {
    renderWithProviders(<Radio name="test"/>);
    expect(screen.getByRole("radio")).toBeInTheDocument();
  });

  test("Radio snapshot", () => {
    const radio = renderWithProviders(<Radio name="test"/>);
    expect(radio).toMatchSnapshot();
  });
});
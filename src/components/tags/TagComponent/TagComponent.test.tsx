import { screen } from "@testing-library/react";
import { renderWithProviders } from "src/utils/test-utils";

import TagComponent from "./TagComponent";

describe("Tag component", () => {
  test("Tag renders", () => {
    renderWithProviders(<TagComponent label="TestLabel" frequency={123} />);
    expect(screen.getByText(/testlabel/i)).toBeInTheDocument();
    expect(screen.getByText(/123/i)).toBeInTheDocument();
  });

  test("Tag renders without freq prop", () => {
    renderWithProviders(<TagComponent label="TestLabel" />);
    expect(screen.getByText(/testlabel/i)).toBeInTheDocument();
  });

  test("Tag snapshot", () => {
    const { container } = renderWithProviders(<TagComponent label="TestLabel" />);
    expect(container).toMatchSnapshot();
  });
});
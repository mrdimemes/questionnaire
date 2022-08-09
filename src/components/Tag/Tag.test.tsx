import { screen } from "@testing-library/react";
import { renderWithProviders } from "src/utils/test-utils";
import Tag from "./Tag";

describe("Tag component", () => {
  test("Tag renders", () => {
    renderWithProviders(<Tag label="TestLabel" freq={123} />);
    expect(screen.getByText(/testlabel/i)).toBeInTheDocument();
    expect(screen.getByText(/123/i)).toBeInTheDocument();
  });

  test("Tag renders without freq prop", () => {
    renderWithProviders(<Tag label="TestLabel" />);
    expect(screen.getByText(/testlabel/i)).toBeInTheDocument();
  });

  test("Tag snapshot", () => {
    const { container } = renderWithProviders(<Tag label="TestLabel" />);
    expect(container).toMatchSnapshot();
  });
});
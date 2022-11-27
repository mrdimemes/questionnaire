import { screen } from "@testing-library/react";
import { Tag } from "src/models";
import { renderWithProviders } from "src/utils/test-utils";

import TagComponent from "./TagComponent";


describe("Tag component with non zero frequency", () => {
  test("Tag renders", () => {
    renderWithProviders(<TagComponent tag={new Tag(0, "TestLabel", 123)} />);
    expect(screen.getByText(/testlabel/i)).toBeInTheDocument();
    expect(screen.getByText(/123/i)).toBeInTheDocument();
  });

  test("Tag renders with zero frequency", () => {
    renderWithProviders(<TagComponent tag={new Tag(0, "TestLabel", 0)} />);
    expect(screen.getByText(/testlabel/i)).toBeInTheDocument();
  });

  test("Tag snapshot", () => {
    const { container } = renderWithProviders(
      <TagComponent tag={new Tag(0, "TestLabel", 123)} />
    );
    expect(container).toMatchSnapshot();
  });
});
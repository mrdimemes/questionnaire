import { screen } from "@testing-library/react";
import { renderWithProviders } from "src/utils/test-utils";
import TagBar from "./TagBar";

const tags = [
  {
    id: 0,
    label: "Tag1"
  },
  {
    id: 1,
    label: "Tag2"
  },
  {
    id: 3,
    label: "Tag3"
  },
]

describe("TagBar component", () => {
  test("TagBar renders", () => {
    renderWithProviders(<TagBar tags={tags}/>);
    expect(screen.getByText(/tag1/i)).toBeInTheDocument();
    expect(screen.getByText(/tag2/i)).toBeInTheDocument();
    expect(screen.getByText(/tag3/i)).toBeInTheDocument();
  });

  test("TagBar snapshot", () => {
    const { container } = renderWithProviders(<TagBar tags={tags}/>);
    expect(container).toMatchSnapshot();
  });
});
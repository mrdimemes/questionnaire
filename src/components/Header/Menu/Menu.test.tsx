import { screen } from "@testing-library/react";
import { renderWithProvidersAndRouters } from "src/utils/test-utils";
import Menu from "./Menu";

describe("Header/Menu component", () => {
  test("Menu renders", () => {
    renderWithProvidersAndRouters(<Menu />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText(/главная/i)).toBeInTheDocument();
    expect(screen.getByText(/тэги/i)).toBeInTheDocument();
    expect(screen.getByText(/опросы/i)).toBeInTheDocument();
    screen.findAllByRole("button")
      .then((buttons) => expect(buttons).toHaveLength(2))
  });

  test("Menu snapshot", () => {
    const { container } = renderWithProvidersAndRouters(<Menu />);
    expect(container).toMatchSnapshot();
  });
});
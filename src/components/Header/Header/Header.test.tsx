import { screen } from "@testing-library/react";
import { renderWithProvidersAndRouters } from "src/utils/test-utils";
import Header from "./Header";

describe("Header component", () => {
  test("Menu renders", () => {
    renderWithProvidersAndRouters(<Header />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText(/главная/i)).toBeInTheDocument();
    expect(screen.getByText(/тэги/i)).toBeInTheDocument();
    expect(screen.getByText(/опросы/i)).toBeInTheDocument();
    screen.findAllByRole("button")
      .then((buttons) => expect(buttons).toHaveLength(2))
  });

  test("Logo renders", () => {
    renderWithProvidersAndRouters(<Header />);
    expect(screen.getByText(/questions!/i)).toBeInTheDocument();
  });

  test("Header snapshot", () => {
    const { container } = renderWithProvidersAndRouters(<Header />);
    expect(container).toMatchSnapshot();
  });
});
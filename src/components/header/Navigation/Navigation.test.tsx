import { screen } from "@testing-library/react";
import { renderWithProvidersAndRouters } from "src/utils/test-utils";

import Navigation from "./Navigation";

describe("Header/Navigation component", () => {
  test("Navigation renders", () => {
    renderWithProvidersAndRouters(<Navigation />);
    expect(screen.getByText(/главная/i)).toBeInTheDocument();
    expect(screen.getByText(/тэги/i)).toBeInTheDocument();
    expect(screen.getByText(/опросы/i)).toBeInTheDocument();
  });

  test("Navigation snapshot", () => {
    const { container } = renderWithProvidersAndRouters(<Navigation />);
    expect(container).toMatchSnapshot();
  });
});
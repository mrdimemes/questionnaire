import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProvidersAndRouters } from "src/utils/test-utils";
import { setupStore } from "src/redux/store";
import { NavigationPage } from "src/redux/slices/browseSlice";
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
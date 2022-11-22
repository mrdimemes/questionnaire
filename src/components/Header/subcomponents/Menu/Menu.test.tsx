import { screen } from "@testing-library/react";
import { renderWithProvidersAndRouters } from "src/utils/test-utils";
import { setupStore } from "src/redux";

import Menu from "./Menu";

describe("Header/Menu component", () => {
  test("Menu renders without user in the store", () => {
    const store = setupStore({
      auth: {
        userName: null,
        userId: null,
        isAdmin: false,
      },
    });
    renderWithProvidersAndRouters(<Menu />, { store });
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText(/главная/i)).toBeInTheDocument();
    expect(screen.getByText(/тэги/i)).toBeInTheDocument();
    expect(screen.getByText(/опросы/i)).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(3);
  });

  test("Menu renders with user in the store", () => {
    const store = setupStore({
      auth: {
        userName: "TestName",
        userId: 0,
        isAdmin: false,
      },
    });
    renderWithProvidersAndRouters(<Menu />, { store });
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText("TestName")).toBeInTheDocument();
    expect(screen.getByText(/главная/i)).toBeInTheDocument();
    expect(screen.getByText(/тэги/i)).toBeInTheDocument();
    expect(screen.getByText(/опросы/i)).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(4);
  });

  test("Menu snapshot", () => {
    const { container } = renderWithProvidersAndRouters(<Menu />);
    expect(container).toMatchSnapshot();
  });
});
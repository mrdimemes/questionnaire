import { screen } from "@testing-library/react";
import { renderWithProvidersAndRouters } from "src/utils/test-utils";
import { setupStore } from "src/redux";

import Header from "./Header";

describe("Header component", () => {
  test("Menu renders without user in the store", () => {
    const store = setupStore({ auth: { user: null } });
    renderWithProvidersAndRouters(<Header />, { store });
    expect(screen.getByText(/questions!/i)).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText(/главная/i)).toBeInTheDocument();
    expect(screen.getByText(/тэги/i)).toBeInTheDocument();
    expect(screen.getByText(/опросы/i)).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(3);
  });

  test("Menu renders with user in the store", () => {
    const store = setupStore({
      auth: {
        user: { name: "TestName", id: 0, isAdmin: false },
      },
    });
    renderWithProvidersAndRouters(<Header />, { store });
    expect(screen.getByText(/questions!/i)).toBeInTheDocument();
    expect(screen.getByText("TestName")).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText(/главная/i)).toBeInTheDocument();
    expect(screen.getByText(/тэги/i)).toBeInTheDocument();
    expect(screen.getByText(/опросы/i)).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(4);
  });

  test("Header snapshot", () => {
    const { container } = renderWithProvidersAndRouters(<Header />);
    expect(container).toMatchSnapshot();
  });
});
import { screen } from "@testing-library/react";
import { renderWithProvidersAndRouters } from "src/utils/test-utils";
import { setupStore } from "src/redux";

import User from "./User";

describe("Header/User component", () => {
  test("Header/User renders without user in the store", () => {
    const store = setupStore({ auth: { user: null } });
    renderWithProvidersAndRouters(<User />, { store });
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("Header/User renders with user in the store", () => {
    const store = setupStore({
      auth: {
        user: { name: "TestName", id: 0, isAdmin: false },
      },
    });
    renderWithProvidersAndRouters(<User />, { store });
    expect(screen.getByText("TestName")).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });

  test("Header/User snapshot", () => {
    const { container } = renderWithProvidersAndRouters(<User />);
    expect(container).toMatchSnapshot();
  });
});
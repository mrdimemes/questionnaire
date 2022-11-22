import { screen } from "@testing-library/react";
import { renderWithProvidersAndRouters } from "src/utils/test-utils";
import { setupStore } from "src/redux";

import User from "./UserPanel";

describe("Header/User component", () => {
  test("Header/User renders without user in the store", () => {
    const store = setupStore({ auth: {
      userName: null, 
      userId: null, 
      isAdmin: false,
    } });
    renderWithProvidersAndRouters(<User />, { store });
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("Header/User renders with user in the store", () => {
    const store = setupStore({
      auth: {
        userName: "TestName", 
        userId: 0, 
        isAdmin: false,
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
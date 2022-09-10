import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "src/utils/test-utils";
import { setupStore } from "src/redux";
import { Theme } from "src/redux/slices/themeSlice";
import ThemeSwitchButton from "./ThemeSwitchButton";

describe("Header/ThemeSwitchButton component", () => {
  test("ThemeSwitchButton renders", () => {
    renderWithProviders(<ThemeSwitchButton />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("ThemeSwitchButton switches the app's theme", () => {
    const store = setupStore({ theme: { theme: Theme.Light } })
    renderWithProviders(<ThemeSwitchButton />, { store });
    userEvent.click(screen.getByRole("button"));
    expect(store.getState().theme.theme).toEqual(Theme.Dark);
  });

  test("ThemeSwitchButton snapshot", () => {
    const { container } = renderWithProviders(<ThemeSwitchButton />);
    expect(container).toMatchSnapshot();
  });
});
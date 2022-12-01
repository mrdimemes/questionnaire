import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "src/utils/test-utils";

import Burger from "./BurgerMenuButton";

const onClick = jest.fn();

describe("Header/Burger component", () => {
  test("Burger renders", () => {
    renderWithProviders(<Burger onClick={onClick} isOpen={false} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("onClick works", () => {
    const anotherOnClick = jest.fn();
    renderWithProviders(<Burger onClick={anotherOnClick} isOpen={false} />);
    userEvent.click(screen.getByRole("button"));
    expect(anotherOnClick).toHaveBeenCalled();
  });

  test("Burger snapshot", () => {
    const view = renderWithProviders(
      <Burger onClick={onClick} isOpen={false} />,
    );
    expect(view).toMatchSnapshot();
  });
});

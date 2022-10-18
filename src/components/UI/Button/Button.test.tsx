import { screen } from "@testing-library/react";
import { renderWithProviders } from "src/utils/test-utils";
import userEvent from "@testing-library/user-event";

import Button from "./Button";

const onClick = jest.fn();

describe("Button component", () => {
  test("Button renders", () => {
    renderWithProviders(<Button children="Button" onClick={onClick} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText(/button/i)).toBeInTheDocument();
  });

  test("Button renders without children", () => {
    renderWithProviders(<Button onClick={onClick} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("onClick works", () => {
    const anotherOnClick = jest.fn();
    renderWithProviders(<Button children="Button" onClick={anotherOnClick} />);
    userEvent.click(screen.getByRole("button"));
    expect(anotherOnClick).toHaveBeenCalled();
  });

  test("Button snapshot", () => {
    const view = renderWithProviders(
      <Button children="Button" onClick={onClick} />);
    expect(view).toMatchSnapshot();
  });
});

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "src/utils/test-utils";

import { GalleryView } from "../../../models";

import ViewSwitchButton from "./ViewSwitchButton";

let currentView: GalleryView;
const setCurrentView = (newView: GalleryView) => {
  currentView = newView;
};

beforeEach(() => setCurrentView(GalleryView.Rows));

describe("QuestionnaireGallery/ViewSwitchButton component", () => {
  test("ViewSwitchButton renders", () => {
    renderWithProviders(
      <ViewSwitchButton
        setCurrentView={setCurrentView}
        currentView={currentView}
      />,
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("ViewSwitchButton switches the view", () => {
    renderWithProviders(
      <ViewSwitchButton
        setCurrentView={setCurrentView}
        currentView={currentView}
      />,
    );
    userEvent.click(screen.getByRole("button"));
    expect(currentView).toEqual(GalleryView.Plates);
  });

  test("ViewSwitchButton snapshot", () => {
    const { container } = renderWithProviders(
      <ViewSwitchButton
        setCurrentView={setCurrentView}
        currentView={currentView}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
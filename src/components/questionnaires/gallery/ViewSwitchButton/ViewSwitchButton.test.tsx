import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "src/utils/test-utils";
import { GalleryViews } from "../QuestionnaireGallery/QuestionnaireGallery";
import ViewSwitchButton from "./ViewSwitchButton";

let currentView: GalleryViews;
const setCurrentView = (newView: GalleryViews) => {
  currentView = newView;
}

beforeEach(() => setCurrentView(GalleryViews.Rows));

describe("QuestionnaireGallery/ViewSwitchButton component", () => {
  test("ViewSwitchButton renders", () => {
    renderWithProviders(
      <ViewSwitchButton
        setCurrentView={setCurrentView}
        currentView={currentView}
      />
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("ViewSwitchButton switches the view", () => {
    renderWithProviders(
      <ViewSwitchButton
        setCurrentView={setCurrentView}
        currentView={currentView}
      />
    );
    userEvent.click(screen.getByRole("button"));
    expect(currentView).toEqual(GalleryViews.Plates);
  });

  test("ViewSwitchButton snapshot", () => {
    const { container } = renderWithProviders(
      <ViewSwitchButton
        setCurrentView={setCurrentView}
        currentView={currentView}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
import { screen } from "@testing-library/react";
import { renderWithProviders } from "src/utils/test-utils";
import QuestionnaireCardComponent from "./QuestionnaireCardComponent";

describe("QuestionnaireCard component", () => {

  test("QuestionnaireCard renders", () => {
    renderWithProviders(<QuestionnaireCardComponent
      label={"Question123"}
      tags={[{ id: 1, label: "Tag123" }]}
    />);
    expect(screen.getByText(/question123/i)).toBeInTheDocument();
    expect(screen.getByText(/tag123/i)).toBeInTheDocument();
  });

  test("QuestionnaireCard snapshot", () => {
    const { container } = renderWithProviders(<QuestionnaireCardComponent
      label={"Question123"}
      tags={[{ id: 1, label: "Tag123" }]}
    />);
    expect(container).toMatchSnapshot();
  });
});
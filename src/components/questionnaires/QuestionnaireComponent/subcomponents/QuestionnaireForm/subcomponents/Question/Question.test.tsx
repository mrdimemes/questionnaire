import { screen } from "@testing-library/react";
import { renderWithProviders } from "src/utils/test-utils";

import { QuestionType } from "src/models";

import QuestionComponent from "./Question";


const questionPlaceholder = {
  id: 1,
  questionType: QuestionType.Checkbox,
  text: "test",
  fields: [
    { id: 1, text: "field1" },
    { id: 2, text: "field2" },
  ],
  isRequired: false,
};

describe("Question component", () => {
  test("Checkbox question renders", () => {
    renderWithProviders(<QuestionComponent question={questionPlaceholder} />);
    expect(screen.getByText(/test/i)).toBeInTheDocument();
    expect(screen.getByText(/field1/i)).toBeInTheDocument();
    expect(screen.getByText(/field2/i)).toBeInTheDocument();
    expect(screen.getAllByRole("checkbox")).toHaveLength(2);
  });

  test("Radio question renders", () => {
    renderWithProviders(
      <QuestionComponent
        question={{
          ...questionPlaceholder,
          questionType: QuestionType.Radio,
        }}
      />,
    );
    expect(screen.getByText(/test/i)).toBeInTheDocument();
    expect(screen.getByText(/field1/i)).toBeInTheDocument();
    expect(screen.getByText(/field2/i)).toBeInTheDocument();
    expect(screen.getAllByRole("radio")).toHaveLength(2);
  });

  test("Text question renders", () => {
    renderWithProviders(
      <QuestionComponent
        question={{
          ...questionPlaceholder,
          questionType: QuestionType.Text,
        }}
      />,
    );
    expect(screen.getByText(/test/i)).toBeInTheDocument();
    expect(screen.getByText(/field1/i)).toBeInTheDocument();
    expect(screen.getByText(/field2/i)).toBeInTheDocument();
    expect(screen.getAllByRole("textbox")).toHaveLength(2);
  });

  test("Question snapshot", () => {
    const view = renderWithProviders(
      <QuestionComponent question={questionPlaceholder} />,
    );
    expect(view).toMatchSnapshot();
  });
});
import { screen } from "@testing-library/react";
import { renderWithProviders } from "src/utils/test-utils";
import QuestionComponent from "./QuestionComponent";
import { QuestionType } from "src/models";

const fieldsPlaceholder = [
  { id: 1, text: "field1" },
  { id: 2, text: "field2" }
]

describe("Question component", () => {
  test("Checkbox question renders", () => {
    renderWithProviders(
      <QuestionComponent
        id={1}
        questionType={QuestionType.Checkbox}
        text="test"
        fields={fieldsPlaceholder}
        isRequired={false}
        callback={jest.fn()}
      />);
    expect(screen.getByText(/test/i)).toBeInTheDocument();
    expect(screen.getByText(/field1/i)).toBeInTheDocument();
    expect(screen.getByText(/field2/i)).toBeInTheDocument();
    expect(screen.getAllByRole("checkbox")).toHaveLength(2);
  });

  test("Radio question renders", () => {
    renderWithProviders(
      <QuestionComponent
        id={1}
        questionType={QuestionType.Radio}
        text="test"
        fields={fieldsPlaceholder}
        isRequired={false}
        callback={jest.fn()}
      />);
    expect(screen.getByText(/test/i)).toBeInTheDocument();
    expect(screen.getByText(/field1/i)).toBeInTheDocument();
    expect(screen.getByText(/field2/i)).toBeInTheDocument();
    expect(screen.getAllByRole("radio")).toHaveLength(2);
  });

  test("Text question renders", () => {
    renderWithProviders(
      <QuestionComponent
        id={1}
        questionType={QuestionType.Text}
        text="test"
        fields={fieldsPlaceholder}
        isRequired={false}
        callback={jest.fn()}
      />);
    expect(screen.getByText(/test/i)).toBeInTheDocument();
    expect(screen.getByText(/field1/i)).toBeInTheDocument();
    expect(screen.getByText(/field2/i)).toBeInTheDocument();
    expect(screen.getAllByRole("textbox")).toHaveLength(2);
  });

  test("Question snapshot", () => {
    const question = renderWithProviders(
      <QuestionComponent
        id={1}
        questionType={QuestionType.Checkbox}
        text="test"
        fields={fieldsPlaceholder}
        isRequired={false}
        callback={jest.fn()}
      />);
    expect(question).toMatchSnapshot();
  });
});
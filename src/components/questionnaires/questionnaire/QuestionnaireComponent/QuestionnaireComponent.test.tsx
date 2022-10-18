import { rest } from "msw";
import { setupServer } from "msw/node";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "src/utils/test-utils";
import { setupStore } from "src/redux";

import { FetchStatus, QuestionType } from "src/models";

import QuestionnaireComponent from "./QuestionnaireComponent";

const questionPlaceholder = {
  id: 1,
  label: "testLabel",
  about: "testAbout",
  tags: [1],
  questions: [
    {
      id: 1,
      questionType: QuestionType.Checkbox,
      text: "questionText",
      fields: [{ id: 1, text: "field1" }, { id: 2, text: "field2" }],
    },
    {
      id: 2,
      questionType: QuestionType.Radio,
      text: "questionText",
      fields: [{ id: 1, text: "field1" }, { id: 2, text: "field2" }],
    },
    {
      id: 3,
      questionType: QuestionType.Text,
      text: "questionText",
      fields: [{ id: 1, text: "field" }],
    },
  ],
};

const server = setupServer(
  rest.get(process.env.REACT_APP_BACKEND_URL + "questionnaires/questionnaire/:id",
    (_req, res, ctx) => {
      return res(ctx.json({ questionnaire: questionPlaceholder }));
    },
  ),
);

const store = setupStore({
  tags: {
    tags: [
      { id: 1, label: "TestTag1", freq: 7 },
    ],
    tagsLoadingStatus: FetchStatus.Complete,
  },
});

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Questionnaire component", () => {
  test("QuestionnaireComponent load questionnaire from api and renders",
    async () => {
      renderWithProviders(<QuestionnaireComponent id={1} />, { store });
      await screen.findByText(/testlabel/i);
      expect(screen.getByText(/testabout/i)).toBeInTheDocument();
      expect(screen.getByText(/testtag/i)).toBeInTheDocument();
      expect(screen.getAllByText(/questiontext/i)).toHaveLength(3);
      expect(screen.getAllByText(/field/i)).toHaveLength(5);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
});
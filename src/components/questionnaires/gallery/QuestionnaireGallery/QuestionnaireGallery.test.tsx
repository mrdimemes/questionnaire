import { rest } from "msw";
import { setupServer } from "msw/node";
import { screen, waitFor } from "@testing-library/react";
import { renderWithProvidersAndRouters } from "src/utils/test-utils";
import { setupStore } from "src/redux";

import { FetchStatus } from "src/models";

import QuestionnaireGallery from "./QuestionnaireGallery";

const cardsPlaceholder = [
  {
    "id": 1,
    "label": "label1",
    "tags": [1],
  },
  {
    "id": 2,
    "label": "label2",
    "tags": [1],
  },
  {
    "id": 3,
    "label": "label3",
    "tags": [1],
  },
  {
    "id": 4,
    "label": "label4",
    "tags": [1],
  },
  {
    "id": 5,
    "label": "label5",
    "tags": [1],
  },
];

const server = setupServer(
  rest.get(process.env.REACT_APP_BACKEND_URL + "questionnaires/questionnaireCards",
    (_req, res, ctx) => {
      return res(ctx.json({ questionnaires: cardsPlaceholder }));
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

describe("QuestionnaireGallery component", () => {
  test("QuestionnaireGallery load cards from api and renders",
    async () => {
      renderWithProvidersAndRouters(<QuestionnaireGallery />, { store });
      await waitFor(
        () => expect(screen.getAllByText(/label/i)).toHaveLength(5),
      );
      expect(screen.getAllByText(/testtag/i)).toHaveLength(5);
    });
});
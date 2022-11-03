import { screen } from "@testing-library/react";
import { FetchStatus } from "src/models";
import { setupStore } from "src/redux";
import { renderWithProvidersAndRouters } from "src/utils/test-utils";

import QuestionnaireCardComponent from "./QuestionnaireCardComponent";

describe("QuestionnaireCard component", () => {

  test("QuestionnaireCard renders", () => {
    const store = setupStore({
      tags: {
        tags: [{ id: 1, label: "TestTag", frequency: 7 }],
        tagsLoadingStatus: FetchStatus.Complete,
      },
    });
    renderWithProvidersAndRouters(
      <QuestionnaireCardComponent id={1} label="QuestionLabel" tags={[1]} />,
      { store },
    );
    expect(screen.getByText(/questionlabel/i)).toBeInTheDocument();
    expect(screen.getByText(/testtag/i)).toBeInTheDocument();
  });

  test("QuestionnaireCard snapshot", () => {
    const store = setupStore({
      tags: {
        tags: [{ id: 1, label: "TestTag", frequency: 7 }],
        tagsLoadingStatus: FetchStatus.Complete,
      },
    });
    const { container } = renderWithProvidersAndRouters(
      <QuestionnaireCardComponent id={1} label="QuestionLabel" tags={[1]} />,
      { store },
    );
    expect(container).toMatchSnapshot();
  });
});
import { screen } from "@testing-library/react";
import { renderWithProviders } from "src/utils/test-utils";
import { setupStore } from "src/redux";

import { FetchStatus } from "src/models";

import TagGallery from "./TagGallery";

describe("TagGallery component", () => {
  test("TagGallery renders", () => {
    const store = setupStore({
      tags: {
        tags: [
          { id: 0, label: "tag0", freq: 99 },
          { id: 1, label: "tag1", freq: 1 },
          { id: 2, label: "tag2", freq: 205 }],
        tagsLoadingStatus: FetchStatus.Complete,
      },
    });
    renderWithProviders(<TagGallery />, { store });
    expect(screen.getByText("tag0")).toBeInTheDocument();
    expect(screen.getAllByText(/tag/i)).toHaveLength(3);
    expect(screen.getByText("99")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("205")).toBeInTheDocument();
  });

  test("TagGallery empty snapshot", () => {
    const store = setupStore({
      tags:
        { tags: [], tagsLoadingStatus: FetchStatus.Complete },
    });
    const { container } = renderWithProviders(<TagGallery />, { store });
    expect(container).toMatchSnapshot();
  });

  test("TagGallery fillfull snapshot", () => {
    const store = setupStore({
      tags: {
        tags: [
          { id: 0, label: "tag0", freq: 99 },
          { id: 1, label: "tag1", freq: 1 },
          { id: 2, label: "tag2", freq: 205 }],
        tagsLoadingStatus: FetchStatus.Complete,
      },
    });
    const { container } = renderWithProviders(<TagGallery />, { store });
    expect(container).toMatchSnapshot();
  });
});
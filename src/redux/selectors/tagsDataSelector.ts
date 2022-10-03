import { Tag, FetchStatus } from "src/models";
import type { RootState } from "../";

const tagsDataSelector = (state: RootState): [Tag[], FetchStatus] => {
  return [state.tags.tags, state.tags.tagsLoadingStatus];
};

export default tagsDataSelector;
import { FetchStatus } from "src/models";

export type LoadableProps = {
  load?: () => Promise<void>,
  loadingStatus?: FetchStatus,
  children: JSX.Element,
  className?: string,
};
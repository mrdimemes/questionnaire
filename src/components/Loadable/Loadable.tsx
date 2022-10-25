import { useState, useEffect } from "react";

import { LoadingSpinner, NotFoundErrorComponent } from "src/components";
import { FetchStatus } from "src/models";

import type { LoadableProps } from "./types/LoadableProps";


const Loadable = ({
  load,
  loadingStatus,
  children,
  className,
}: LoadableProps) => {

  const [status, setStatus] = useState(loadingStatus ?? FetchStatus.Loading);
  useEffect(() => {
    if (load) {
      load()
        .then(() => setStatus(FetchStatus.Complete))
        .catch(() => setStatus(FetchStatus.Error));
    }
  }, [load]);

  return (
    <div className={className}>
      {status === FetchStatus.Loading ? <LoadingSpinner /> :
        status === FetchStatus.Complete ? children :
          <NotFoundErrorComponent />}
    </div>
  );
};

export default Loadable;
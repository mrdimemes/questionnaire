import { AxiosError } from "axios";

import { FetchError, ErrorStatusCode } from "../errors";

const getFetchError = (error: unknown) => {
  if (error instanceof AxiosError && error.response) {
    return new FetchError(
      error.response.status,
      error.response.data.message,
      error.response.data.errors,
    );
  } else if (error instanceof AxiosError && error.request) {
    return new FetchError(
      ErrorStatusCode.ServiceUnavailable,
      "Сервер временно недоступен",
    );
  }
};

export default getFetchError;
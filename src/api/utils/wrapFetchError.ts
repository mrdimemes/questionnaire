import { AxiosError } from "axios";

import {
  FetchError,
  ClientError,
  ServerError,
  HTTPErrorStatusCode,
} from "../exceptions";


const wrapFetchError = (error: unknown): FetchError | unknown => {
  if (error instanceof AxiosError && error.response) {
    switch (error.response.status) {
      case HTTPErrorStatusCode.BadRequest:
        return ClientError.BadRequestError(
          error.response.data.message,
          error.response.data.errors,
        );
      case HTTPErrorStatusCode.NotFound:
        return ClientError.NotFoundError(error.response.data.message);
      case HTTPErrorStatusCode.Unauthorized:
        return ClientError.UnauthorizedError();
      case HTTPErrorStatusCode.Forbidden:
        return ClientError.AccessDeniedError();
      case HTTPErrorStatusCode.ServerError:
        return ServerError.ServerError();
    }
  } else if (error instanceof AxiosError && error.request) {
    return ServerError.ServiceUnavailableError();
  } else {
    return error;
  };
};

export default wrapFetchError;
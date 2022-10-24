import { FetchError, HTTPErrorStatusCode } from "./";


class ServerError extends FetchError {
  static ServiceUnavailableError(message?: string) {
    return new FetchError(
      HTTPErrorStatusCode.ServiceUnavailable,
      this._formatErrorMassage("Сервис временно недоступен", message),
    );
  };

  static ServerError(message?: string) {
    return new FetchError(
      HTTPErrorStatusCode.ServerError,
      this._formatErrorMassage("Неизвестная ошибка сервера", message),
    );
  };
}

export default ServerError;
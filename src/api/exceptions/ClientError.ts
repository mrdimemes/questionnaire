import { FetchError, HTTPErrorStatusCode } from "./";


class ClientError extends FetchError {
  static BadRequestError(message?: string, errors?: object[]) {
    return new FetchError(
      HTTPErrorStatusCode.BadRequest,
      this._formatErrorMassage("Неудачный запрос", message),
      errors,
    );
  };

  static NotFoundError(message?: string) {
    return new FetchError(
      HTTPErrorStatusCode.NotFound,
      this._formatErrorMassage("По данному запросу ничего не найдено", message),
    );
  };

  static UnauthorizedError(message?: string) {
    return new FetchError(
      HTTPErrorStatusCode.Unauthorized,
      this._formatErrorMassage("Необходима авторизация", message),
    );
  };

  static AccessDeniedError(message?: string) {
    return new FetchError(
      HTTPErrorStatusCode.Forbidden,
      this._formatErrorMassage("Отказано в доступе", message),
    );
  };
}

export default ClientError;
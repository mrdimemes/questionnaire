import HTTPErrorStatusCode from "./HTTPErrorStatusCode";


class FetchError extends Error {
  statusCode: HTTPErrorStatusCode;
  errors?: object[];

  constructor(
    statusCode: HTTPErrorStatusCode,
    message?: string,
    errors?: object[],
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
  };

  protected static _formatErrorMassage(
    basicMessage: string,
    extension?: string,
  ) {
    return basicMessage + (extension ? ": " + extension : ".");
  };
}

export default FetchError;
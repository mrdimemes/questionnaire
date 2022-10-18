import ErrorStatusCode from "./ErrorStatusCode";

class FetchError {
  statusCode: ErrorStatusCode;
  message?: string;
  errors?: object[];

  constructor(
    statusCode: ErrorStatusCode,
    message?: string,
    errors?: object[],
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
  }
}

export default FetchError;
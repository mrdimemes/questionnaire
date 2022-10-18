import { ErrorStatusCode } from "src/api/errors";

type ErrorComponentProps = {
  statusCode: ErrorStatusCode;
  label: string;
  text?: string;
}

const ErrorComponent = ({ statusCode, label, text }: ErrorComponentProps) => {
  return (
    <div>
      <h1>{label}</h1>
      {text && <p>{text}</p>}
      <p>Код ошибки: {statusCode}</p>
    </div>
  );
};

export default ErrorComponent;
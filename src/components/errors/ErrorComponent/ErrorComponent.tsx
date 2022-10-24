import { HTTPErrorStatusCode } from "src/api/exceptions";

type ErrorComponentProps = {
  statusCode: HTTPErrorStatusCode;
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
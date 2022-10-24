import { HTTPErrorStatusCode } from "src/api/exceptions";

import { ErrorComponent } from "../ErrorComponent";

const AccessDeniedErrorComponent = () => {
  return (
    <ErrorComponent
      statusCode={HTTPErrorStatusCode.Forbidden}
      label="Доступ запрещён"
    />
  );
};

export default AccessDeniedErrorComponent;
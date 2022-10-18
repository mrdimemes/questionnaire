import { ErrorStatusCode } from "src/api/errors";

import { ErrorComponent } from "../ErrorComponent";

const AccessDeniedErrorComponent = () => {
  return (
    <ErrorComponent
      statusCode={ErrorStatusCode.Forbidden}
      label="Доступ запрещён"
    />
  );
};

export default AccessDeniedErrorComponent;
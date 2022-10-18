import { ErrorStatusCode } from "src/api/errors";

import { ErrorComponent } from "../ErrorComponent";

const NotFoundErrorComponent = () => {
  return (
    <ErrorComponent 
      statusCode={ErrorStatusCode.NotFound}
      label="Страница не найдена"
    />
  );
};

export default NotFoundErrorComponent;
import { HTTPErrorStatusCode } from "src/api/exceptions";

import { ErrorComponent } from "../ErrorComponent";

const NotFoundErrorComponent = () => {
  return (
    <ErrorComponent 
      statusCode={HTTPErrorStatusCode.NotFound}
      label="Страница не найдена"
    />
  );
};

export default NotFoundErrorComponent;
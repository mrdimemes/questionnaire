import { ErrorStatusCode } from "src/models";
import { ErrorComponent } from "../ErrorComponent";

const NotFoundErrorComponent = () => {
  return (
    <ErrorComponent 
      statusCode={ErrorStatusCode.NotFound}
      label="Страница не найдена"
    />
  )
}

export default NotFoundErrorComponent
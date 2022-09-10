import { ErrorStatusCode } from "src/models";
import { ErrorComponent } from "../ErrorComponent";

const AccessDeniedErrorComponent = () => {
  return (
    <ErrorComponent
      statusCode={ErrorStatusCode.Forbidden}
      label="Доступ запрещён"
    />
  )
}

export default AccessDeniedErrorComponent
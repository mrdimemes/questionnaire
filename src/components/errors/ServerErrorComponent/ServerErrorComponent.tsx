import { ErrorStatusCode } from "src/models";
import { ErrorComponent } from "../ErrorComponent";

const ServerErrorComponent = () => {
  return (
    <ErrorComponent
      statusCode={ErrorStatusCode.ServerError}
      label="Что-то сломалось. Бип-буп... :("
    />
  )
}

export default ServerErrorComponent
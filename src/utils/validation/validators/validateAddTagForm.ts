import { ValidationError } from "../exceptions";

import { checkTagLabelField } from "./";


const validateAddTagForm = (tagLabel: string) => {
  const labelFieldWarning = checkTagLabelField(tagLabel);
  if (labelFieldWarning) throw new ValidationError([labelFieldWarning]);
};

export default validateAddTagForm;
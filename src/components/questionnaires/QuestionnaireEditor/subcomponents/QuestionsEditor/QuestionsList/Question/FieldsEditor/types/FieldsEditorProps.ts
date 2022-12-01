import { Field } from "src/models";


export type FieldsEditorProps = {
  fields: Field[],
  setFields: (fields: Field[]) => void,
  className?: string,
};
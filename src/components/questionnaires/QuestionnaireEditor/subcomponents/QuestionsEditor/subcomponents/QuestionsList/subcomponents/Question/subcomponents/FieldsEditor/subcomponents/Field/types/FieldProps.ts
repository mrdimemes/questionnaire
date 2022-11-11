import { Field } from "src/models";


export type FieldProps = {
  field: Field,
  update: (value: string) => void,
};
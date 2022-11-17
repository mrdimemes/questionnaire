import { ComponentType } from "react";

import { SpecificInputProps } from "src/components/UI/inputs/types";


export type AuthFormFieldProps = {
  name: string,
  value: string,
  setValue: (value: string) => void,
  error: string,
  label: string,
  Input: ComponentType<SpecificInputProps>,
  required?: boolean,
  className?: string,
};
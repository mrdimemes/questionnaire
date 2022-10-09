import { RefObject } from "react";

export interface SpecificInputProps {
  className?: string,
  name: string,
  value?: string,
  placeholder?: string,
  maxLength?: number,
  isRequired?: boolean,
  onChange?: (value: string) => void,
  onFocus?: (value: string) => void,
  onBlur?: (value: string) => void,
  forwardedRef?: RefObject<HTMLInputElement>,
  autoFocus?: boolean,
}

export interface InputProps extends SpecificInputProps {
  inputType: string,
}
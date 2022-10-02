import { RefObject } from "react";

export interface SpecificInputProps {
  className?: string,
  name: string,
  value?: string,
  placeholder?: string,
  maxLength?: number,
  isRequired?: boolean,
  onChange?: () => void,
  forwardedRef?: RefObject<HTMLInputElement>
}

export interface InputProps extends SpecificInputProps {
  inputType: string,
}
export interface SpecificInputProps {
  className?: string,
  name: string,
  value?: string,
  placeholder?: string,
  maxLength?: number,
  isRequired?: boolean,
}

export interface InputProps extends SpecificInputProps {
  inputType: string,
}
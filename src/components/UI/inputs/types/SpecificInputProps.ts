export type SpecificInputProps = {
  className?: string,
  name: string,
  value: string,
  callback: (value: string) => void,
  placeholder?: string,
  maxLength?: number,
  isRequired?: boolean
}
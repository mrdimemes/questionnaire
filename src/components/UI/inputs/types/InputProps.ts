export type InputProps = {
  className?: string,
  inputType: string,
  name: string,
  value: string,
  callback: (value: string) => void,
  placeholder?: string
};
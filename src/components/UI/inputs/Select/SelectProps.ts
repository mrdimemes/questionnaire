import { RefObject } from "react";

export type SelectProps = {
  className?: string,
  name: string,
  forwardedRef?: RefObject<HTMLSelectElement>,
  options: [string | number, string][];
  onChange?: (value: string) => void;
};
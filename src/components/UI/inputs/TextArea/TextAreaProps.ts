import { RefObject } from "react";

import type { SpecificInputProps } from "../types";


interface TextAreaProps extends Omit<SpecificInputProps, "forwardedRef"> {
  forwardedRef?: RefObject<HTMLTextAreaElement>,
};

export default TextAreaProps;
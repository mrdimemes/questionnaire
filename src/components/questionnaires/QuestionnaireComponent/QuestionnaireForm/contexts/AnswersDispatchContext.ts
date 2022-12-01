import { createContext, Dispatch } from "react";

import type { ChangeAnswerAction } from "../reducers/actions";


export const AnswersDispatchContext =
  createContext<Dispatch<ChangeAnswerAction>>(() => { return; });
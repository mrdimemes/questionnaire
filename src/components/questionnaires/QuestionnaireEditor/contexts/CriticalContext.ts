import { createContext } from "react";


export const CriticalContext = createContext<() => void>(() => { });
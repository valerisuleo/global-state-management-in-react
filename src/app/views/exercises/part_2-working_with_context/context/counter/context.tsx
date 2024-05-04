import { createContext, useContext } from "react";

// Creating the context
export const Context = createContext(null);

export const useCounter = () => useContext(Context);
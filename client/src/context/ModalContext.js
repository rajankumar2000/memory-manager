import { createContext } from "react";

const initialState = createContext({
  memoryOpen: false,
  toggleMemory: () => {},
  loginOpen: false,
  toggleLogin: () => {},
  registerOpen: false,
  toggleRegister: () => {},
});

export const ModalContext = createContext(initialState);

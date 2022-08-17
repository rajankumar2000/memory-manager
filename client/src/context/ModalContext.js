import { createContext } from "react";

const initialState = createContext({
  memoryOpen: false,
  toggleMemory: () => {},
  loginOpen: false,
  toggleLogin: () => {},
});

export const ModalContext = createContext(initialState);

import { createContext } from "react";

const initialState = createContext({
  isOpen: false,
  toggle: () => {},
});

export const ModalContext = createContext(initialState);

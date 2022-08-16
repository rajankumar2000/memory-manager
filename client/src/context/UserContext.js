import { createContext } from "react";

const initialState = {
  user: null,
  login: () => {},
  logout: () => {},
};

export const UserContext = createContext(initialState);

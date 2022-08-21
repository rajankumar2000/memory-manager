import { createContext } from "react";

const initialState = {
  user: null,
  login: () => {},
  logout: () => {},
  getUser: () => {},
};

export const UserContext = createContext(initialState);

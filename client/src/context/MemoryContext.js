import { createContext } from "react";

const initialState = {
  memories: [],
};

const MemoryContext = createContext(initialState);
export default MemoryContext;

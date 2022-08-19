import React, { useState } from "react";
import MemoryContext from "../context/MemoryContext";

const MemoryProvider = (props) => {
  const [memories, setMemories] = useState(null);

  const getMemories = (payload) => {
    setMemories(payload);
  };
  return (
    <MemoryContext.Provider
      value={{
        memories,
        getMemories,
      }}
    >
      {props.children}
    </MemoryContext.Provider>
  );
};

export default MemoryProvider;

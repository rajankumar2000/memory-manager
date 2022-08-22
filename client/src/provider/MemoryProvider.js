import React, { useContext, useState } from "react";
import MemoryContext from "../context/MemoryContext";
import { UserContext } from "../context/UserContext";

const MemoryProvider = (props) => {
  const [memories, setMemories] = useState(null);
  const { user } = useContext(UserContext);

  const getMemories = async () => {
    await fetch(`http://localhost:8080/api/post/${user && user._id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMemories(data.memories);
      });
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

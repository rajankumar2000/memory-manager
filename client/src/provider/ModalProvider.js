import React, { useState } from "react";
import { ModalContext } from "../context/ModalContext";

const ModalProvider = (props) => {
  const [memoryOpen, setMemoryOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const MemoryHandler = () => {
    setMemoryOpen((memoryOpen) => !memoryOpen);
  };

  const LoginHandler = () => {
    setLoginOpen((loginOpen) => !loginOpen);
  };

  return (
    <ModalContext.Provider
      value={{
        memoryOpen,
        toggleMemory: MemoryHandler,
        loginOpen,
        toggleLogin: LoginHandler,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

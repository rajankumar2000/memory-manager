import React, { useState } from "react";
import { ModalContext } from "../context/ModalContext";

const ModalProvider = (props) => {
  const [memoryOpen, setMemoryOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const MemoryHandler = () => {
    setMemoryOpen((memoryOpen) => !memoryOpen);
  };

  const LoginHandler = () => {
    setLoginOpen((loginOpen) => !loginOpen);
  };

  const RegisterHandler = () => {
    setRegisterOpen((register) => !register);
  };

  return (
    <ModalContext.Provider
      value={{
        memoryOpen,
        toggleMemory: MemoryHandler,
        loginOpen,
        toggleLogin: LoginHandler,
        registerOpen,
        toggleRegister: RegisterHandler,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

import React, { useState, createContext } from "react";
import { ModalContext } from "../context/ModalContext";

const ModalProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const Handler = () => {
    setIsOpen((open) => !open);
  };

  return (
    <ModalContext.Provider value={{ isOpen, toggle: Handler }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

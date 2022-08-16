import React from "react";
import { ModalContext } from "../context/ModalContext";

const ModalProvider = (props) => {
  const initialState = {
    isOpen: false,
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  };
  return (
    <ModalContext.Provider value={initialState}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

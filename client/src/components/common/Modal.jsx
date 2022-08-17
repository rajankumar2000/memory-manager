import React from "react";

const Modal = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        zIndex: "999",
        top: "5rem",
        left: 0,
        right: 0,
        margin: "0 auto",
      }}
    >
      {props.children}
    </div>
  );
};

export default Modal;

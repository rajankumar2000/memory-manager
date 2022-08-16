import React, { useContext, useEffect } from "react";
import { ModalContext } from "../context/ModalContext";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const NavStyle = {
    position: "stikcy",
    top: "0",
    zIndex: "999",
  };
  const { isOpen, toggle } = useContext(ModalContext);
  const { user, login } = useContext(UserContext);
  return (
    <nav
      className="navbar navbar-light bg-primary text-light p-2"
      style={NavStyle}
    >
      <span style={{ fontSize: "2rem" }}>Memory Manager</span>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <span
          type="button"
          className="btn btn-outline-light"
          style={{ borderRadius: "10px", padding: "0 20px" }}
          onClick={() => {
            toggle();
          }}
        >
          {isOpen ? "-" : "+"}
        </span>
        <span
          className="btn btn-outline-light"
          style={{ borderRadius: "10px", padding: "0 20px" }}
        >
          Logout
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

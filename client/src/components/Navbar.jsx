import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../context/ModalContext";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  // Navigation

  const navigate = useNavigate();

  const NavStyle = {
    position: "absolute",
    width: "100%",
    top: "0",
    zIndex: "999",
    backgroundColor: "#1363DF",
  };
  const { memoryOpen, loginOpen, toggleMemory, toggleLogin } =
    useContext(ModalContext);
  const { user, login, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-light text-light p-2" style={NavStyle}>
      <span style={{ fontSize: "2rem" }}>Memory Manager</span>
      {user ? (
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <span
            type="button"
            className="btn btn-outline-light"
            style={{ borderRadius: "10px", padding: "0 20px" }}
            onClick={() => {
              toggleMemory();
            }}
          >
            {memoryOpen ? "-" : "Add"}
          </span>

          <span
            className="btn btn-outline-light"
            style={{ borderRadius: "10px", padding: "0 20px" }}
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            Logout
          </span>
        </div>
      ) : (
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <span
            type="button"
            className="btn btn-outline-light"
            style={{ borderRadius: "10px", padding: "0 20px" }}
            onClick={() => {
              toggleLogin();
            }}
          >
            Login
          </span>
          <span
            className="btn btn-outline-light"
            style={{ borderRadius: "10px", padding: "0 20px" }}
          >
            Register
          </span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

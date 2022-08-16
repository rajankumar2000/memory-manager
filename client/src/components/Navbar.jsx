import React from "react";

const Navbar = () => {
  const NavStyle = {
    position: "stikcy",
    top: "0",
    zIndex: "999",
  };

  
  return (
    <nav
      className="navbar navbar-light bg-primary text-light p-2"
      style={NavStyle}
    >
      <span style={{ fontSize: "2rem" }}>Memory Manager</span>
      <button
        type="button"
        className="btn btn-outline-light"
        style={{ borderRadius: "50%" }}
      >
        +
      </button>
    </nav>
  );
};

export default Navbar;

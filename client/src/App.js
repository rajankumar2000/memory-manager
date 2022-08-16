import React, { useContext } from "react";
import Cards from "./components/Cards";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import { ModalContext } from "./context/ModalContext";
import { UserContext } from "./context/UserContext";

const App = () => {
  const bodyStyle = {
    backgroundColor: "#54BAB9",
  };

  const { isOpen } = useContext(ModalContext);
  const { user } = useContext(UserContext);

  return (
    <div style={bodyStyle}>
      <Navbar />
      {isOpen && <Modal />}
      <div
        className="p-3"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "10px",
          justifyContent: "space-evenly",
        }}
      >
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default App;

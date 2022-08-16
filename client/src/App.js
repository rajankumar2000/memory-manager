import React, { useContext } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import { ModalContext } from "./context/ModalContext";
import { UserContext } from "./context/UserContext";

const App = () => {
  const bodyStyle = {
    backgroundColor: "#54BAB9",
  };

  const { isOpen, open, close } = useContext(ModalContext);
  const { user } = useContext(UserContext);

  return (
    <div style={bodyStyle}>
      <Navbar />
      <div className="p-3" style={{ display: "flex", flexDirection: "column" }}>
        <Cards />
      </div>
    </div>
  );
};

export default App;

import React, { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./components/common/Modal";
import Login from "./components/forms/Login";
import Memory from "./components/forms/Memory";
import Register from "./components/forms/Register";
import HeroSection from "./components/hero-section/HeroSection";
import Navbar from "./components/Navbar";
import MemoryContext from "./context/MemoryContext";
import { ModalContext } from "./context/ModalContext";
import { UserContext } from "./context/UserContext";
import Homepage from "./pages/Homepage";
import LandingPage from "./pages/LandingPage";

const App = () => {
  const bodyStyle = {
    backgroundColor: "#DFF6FF",
    minHeight: "100vh",
  };

  const { memoryOpen, loginOpen, registerOpen } = useContext(ModalContext);
  const { memories, getMemories } = useContext(MemoryContext);

  const { user, getUser } = useContext(UserContext);
  useEffect(() => {
    if (!user) getUser();
  }, []);

  

  return (
    <div style={bodyStyle}>
      <div
        style={{
          position: "absolute",
          top: 0,
          zIndex: "999",
          width: "100%",
        }}
      >
        <Navbar />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {memoryOpen && (
        <Modal>
          <Memory />
        </Modal>
      )}
      {loginOpen && (
        <Modal>
          <Login />
        </Modal>
      )}
      {registerOpen && (
        <Modal>
          <Register />
        </Modal>
      )}

      <Routes>
        <Route
          path="/"
          element={
            !user ? <LandingPage /> : <Navigate to="/dashboard" replace />
          }
        />
        <Route
          path="/dashboard"
          element={user ? <Homepage /> : <Navigate to="/" replace />}
        />
      </Routes>
    </div>
  );
};

export default App;

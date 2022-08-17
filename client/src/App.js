import React, { useContext, useEffect } from "react";
import Cards from "./components/Cards";
import Modal from "./components/common/Modal";
import Memory from "./components/forms/Memory";
import Login from "./components/forms/Login";
import Navbar from "./components/Navbar";
import { ModalContext } from "./context/ModalContext";
import { UserContext } from "./context/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MemoryContext from "./context/MemoryContext";

const App = () => {
  const bodyStyle = {
    backgroundColor: "#54BAB9",
    minHeight: "100vh",
  };

  const { memoryOpen, loginOpen } = useContext(ModalContext);
  const { memories, getMemories } = useContext(MemoryContext);

  const { user, login } = useContext(UserContext);
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("currentUser");
    if (isLoggedIn) {
      login(isLoggedIn);
    }
    fetchMemories();
  }, []);

  useEffect(() => {}, [memories]);

  const fetchMemories = async () => {
    await fetch("http://localhost:8080/api/post", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => getMemories(data));
  };

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
      <div
        className="p-3"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "10px",
          justifyContent: "space-evenly",
          marginTop: "60px",
        }}
      >
        {user ? (
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {memories && memories.length > 0
              ? memories.map((item) => (
                  <Cards key={item._id} title={item.title} story={item.story} />
                ))
              : "No Memories"}
          </div>
        ) : (
          <h1 style={{ color: "white" }}> Login First</h1>
        )}
      </div>
    </div>
  );
};

export default App;

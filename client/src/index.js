import React from "react";
import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import MemoryProvider from "./provider/MemoryProvider";
import ModalProvider from "./provider/ModalProvider";
import UserProvider from "./provider/UserProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <MemoryProvider>
        <ModalProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ModalProvider>
      </MemoryProvider>
    </UserProvider>
  </React.StrictMode>
);

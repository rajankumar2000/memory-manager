import React from "react";
import { UserContext } from "../context/UserContext";

const UserProvider = (props) => {
  const initialState = {
    user: null,
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
  };
  return (
    <UserContext.Provider value={initialState}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;

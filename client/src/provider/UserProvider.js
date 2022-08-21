import React, { useState } from "react";
import { UserContext } from "../context/UserContext";

const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  const loginHandler = (user) => {
    var stringedUser = JSON.stringify(user);
    localStorage.setItem("currentUser", stringedUser);
    setUser(user);
  };
  const getUser = () => {
    var user = localStorage.getItem("currentUser");
    if (!user) {
      return null;
    }

    user = JSON.parse(user);
    setUser(user);
  };
  const logoutHandler = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };
  return (
    <UserContext.Provider
      value={{
        user: user,
        login: loginHandler,
        logout: logoutHandler,
        getUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;

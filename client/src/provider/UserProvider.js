import React, { useState } from "react";
import { UserContext } from "../context/UserContext";

const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  const loginHandler = (user) => {
    console.log(user);
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
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;

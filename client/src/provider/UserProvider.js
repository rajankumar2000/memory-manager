import React, { useState } from "react";
import { UserContext } from "../context/UserContext";

const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  const loginHandler = () => {
    setUser((user) => (user = true));
  };
  const logoutHandler = () => {
    setUser((user) => (user = null));
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

import { createContext, useState, useContext } from "react";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <authContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export { useAuth, AuthProvider };

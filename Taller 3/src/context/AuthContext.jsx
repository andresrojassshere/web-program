import React, { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  isLogged: false,
  user: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLogged: true,
        user: { name: action.payload.name },
      };
    case "LOGOUT":
      return {
        ...state,
        isLogged: false,
        user: null,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (name) => {
    dispatch({ type: "LOGIN", payload: { name } });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

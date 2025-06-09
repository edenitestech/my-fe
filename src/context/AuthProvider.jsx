import { createContext, useState, useEffect } from "react";
import * as jwtDecodeModule from "jwt-decode";
// jwtDecodeModule may put the function on .default or as a named export:
const jwtDecode = jwtDecodeModule.default || jwtDecodeModule;

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const payload = jwtDecode(token);
      setUser({ username: payload.username, exp: payload.exp });
    }
  }, []);

  const login = ({ access, refresh }) => {
    localStorage.setItem("accessToken", access);
    localStorage.setItem("refreshToken", refresh);
    const payload = jwtDecode(access);
    setUser({ username: payload.username, exp: payload.exp });
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

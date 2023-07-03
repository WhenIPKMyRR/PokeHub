import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/authProvider";

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

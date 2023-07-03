import React, { createContext, useState, useEffect } from "react";
import { IAuthProvider, IContext, IAuthUserData } from "../../interfaces/IAuthContext";
import { getUserLocalStorage, setUserLocalStorage, useLoginRequest } from "../../services/useLoginRequest";

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IAuthUserData | null>();

  useEffect(() => {
    const userStorage = getUserLocalStorage();

    if (userStorage) {
      setUser(userStorage);
    }
  }, []);

  const authenticate = async (email: string, password: string) => {
    const response = await useLoginRequest(email, password);
    if (response) {
      const payload = { id: response.id, token: response.token, email };
      console.log("Payload:", payload);

      setUser(payload);
      setUserLocalStorage(payload);
    } else {
      console.log("Falha na autenticação");
    }
  };
  const logout = () => {
    setUser(null);
  };

  const authContextValue: IContext = {
    ...user,
    authenticate,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

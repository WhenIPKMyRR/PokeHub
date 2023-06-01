import React, { createContext, useState, useEffect } from "react";
import { IAuthProvider, IContext, IUserData } from "../../interfaces/IUserData";
import { getUserLocalStorage, setUserLocalStorage, useLoginRequest } from "../../utils/useLoginRequest";

export const AuthContext = createContext<IContext>({} as IContext) 

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUserData | null>();
  
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
            // Lógica para lidar com a falha na autenticação, se necessário
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
  
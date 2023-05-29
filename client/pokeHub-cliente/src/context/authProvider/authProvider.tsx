import React, { createContext, useState, useEffect } from "react";
import { IAuthProvider, IContext, IUserData } from "../../interfaces/IUserData";
import { getUserLocalStorage, setUserLocalStorage, useLoginRequest } from "../../utils/useLoginRequest";

export const AuthContext = createContext<IContext>({} as IContext) 

export const AuthProvider = ( { children }: IAuthProvider) =>{

    const [ user, setUser] = useState<IUserData | null>()

    useEffect(() => {
        const userStorage = getUserLocalStorage();
      
        if (userStorage) {
          setUser(userStorage);
        }
    }, []);
      

    const authenticate =  async (email: string, password: string) => {

        const response = await useLoginRequest(email, password)

        const payload = { token: response.token, email }

        setUser(payload)
        setUserLocalStorage(payload)

    }

    const logout = () => {
        setUser(null)
    }

    return(
        <AuthContext.Provider value={{ ...user, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
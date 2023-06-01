import { PokeHubApi } from "../services/api"
import { IUserData } from "../interfaces/IUserData"

export const setUserLocalStorage = (user: IUserData | null) =>{
    localStorage.setItem('us', JSON.stringify(user))
}

export const getUserLocalStorage = () =>{
    const user = localStorage.getItem('us')
    
    if(user){
        return JSON.parse(user) ?? null
    }
    return null
}

export const useLoginRequest = async ( email: string, password: string) =>{

    try{
        const request = await PokeHubApi.post('login', {email, password})
        return request.data
       
    }catch(error){
        return null
        
    }

}
import { useQuery } from "react-query";
import { IUserData } from "../../interfaces/IUserData";
import { PokeHubApi } from "../../utils/api";

export const useUserData = () => {
  return useQuery<IUserData[]>("users", async () => {
    const response = await PokeHubApi.get('/users');
    return response.data?.data;
  }, {
    staleTime: 1000 * 60, // 1 minuto
  });
};

export const useUserDataById = (userId: number) => {
  return useQuery<IUserData>(["users", userId], async () => {
    const response = await PokeHubApi.get(`/users/${userId}`);
    return response.data?.data;
  }, {
    staleTime: 1000 * 60, // 1 minuto
  });
};

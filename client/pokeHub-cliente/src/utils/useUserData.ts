import { useQuery } from "react-query";
import { IUserData } from "../interfaces/IUserData";
import axios from "axios";

const API_URL = "http://localhost:3003/users";

export const useUserData = () => {
  const { data, isFetching } = useQuery<IUserData[]>("users", async () => {
    const response = await axios.get(API_URL);

    return response.data?.data;
  }, {
    staleTime: 1000 * 60, // 1 minuto
  });

  return { data, isFetching };
};

import { useQuery } from "react-query";
import { IObservationData } from "../interfaces/ICommentData";
import axios from "axios";

const API_URL = "http://localhost:3003/observation/all";

export const useObservationData = () => {
    const { data: observations, isLoading: isLoadingComments } = useQuery<IObservationData[]>("observations", async () => {
      const response = await axios.get(API_URL);
      const observationData: IObservationData[] = response.data?.data;
  
      
      const observationsWithUser = await Promise.all(
        observationData.map(async (observation) => {
          const userResponse = await axios.get(`http://localhost:3003/user/${observation.masterId}`);
          const userData = userResponse.data?.data;
  
          return { ...observation, userName: userData.name }; 
        })
      );
  
      return observationsWithUser;
    }, {
      staleTime: 1000 * 60, // 1 minuto
    });
  
    return { observations, isLoadingComments };
  };

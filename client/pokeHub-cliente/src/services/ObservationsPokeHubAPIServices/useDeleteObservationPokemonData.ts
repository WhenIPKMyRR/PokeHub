import { useMutation, useQueryClient } from "react-query";
import { PokeHubApi } from "../../utils/api";

export const useDeleteObservation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (observationId: number) => {
      return PokeHubApi.delete(`observations/${observationId}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("observations");
      },
    }
  );
};

import axios from "axios";
import { useQuery } from "react-query";
import { apiUrl } from "../utils/apiUrl";

const getCastData = async (options: any) => {
  const { data } = await axios.get(
    `${apiUrl}/${options?.media_type}/${options?.id}/credits?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US`
  );
  return data;
};

export const useGetCastData = (options: any) => {
  const { data, isError, isFetching, isLoading } = useQuery(
    ["cast", options],
    () => getCastData(options),
    {
      refetchOnWindowFocus: false,
    }
  );
  return { data, isError, isFetching, isLoading };
};

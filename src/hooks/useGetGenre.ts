import axios from "axios";
import { useQuery } from "react-query";
import { apiUrl } from "../utils/apiUrl";

const getGenre = async (type: string) => {
  const { data } = await axios.get(
    `${apiUrl}/genre/${type}/list?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US`
  );
  return data;
};

export const useGetGenre = (type: string) => {
  const { data, isError, isFetching, isLoading } = useQuery(
    ["genre", type],
    () => getGenre(type)
  );
  return { data, isError, isFetching, isLoading };
};

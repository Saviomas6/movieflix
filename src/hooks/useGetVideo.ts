import axios from "axios";
import { useQuery } from "react-query";
import { apiUrl } from "../utils/apiUrl";

const getVideo = async (options: any) => {
  const { data } = await axios.get(
    `${apiUrl}/${options?.media_type}/${options?.id}/videos?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US`
  );
  return data;
};

export const useGetVideo = (options: any) => {
  const { data, isError, isLoading, isFetching } = useQuery(
    ["video", options],
    () => getVideo(options)
  );
  return { data, isError, isLoading, isFetching };
};

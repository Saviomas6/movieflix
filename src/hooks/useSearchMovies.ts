import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { apiUrl } from "../utils/apiUrl";

const getAllSearchMovies = async ({ pageParam = 1, queryKey }: any) => {
  const options = queryKey[1];
  const result = await axios.get(
    `${apiUrl}/search/${
      options?.searchTab === "movies" ? "movie" : "tv"
    }?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&query=${
      options?.searchValue === "" ? "spider" : options?.searchValue
    }&page=${pageParam}&include_adult=false`
  );
  return result?.data;
};

export const useGetAllSearchMovies = (option: any) => {
  const {
    data,
    isFetching,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(["search", option], getAllSearchMovies, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      if (allPages?.length < lastPage?.total_pages) {
        const nextPage = allPages.length + 1;
        return nextPage;
      }
    },
  });
  return {
    data,
    isFetching,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
};

import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { apiUrl } from "../utils/apiUrl";
const getMovies = async ({ pageParam = 1, queryKey }: any) => {
  const selectedData = queryKey[1];
  const result = await axios.get(
    `${apiUrl}/discover/movie?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageParam}&with_genres=${selectedData}&with_watch_monetization_types=flatrate`
  );
  return result?.data;
};

export const useGetMovies = (selectedData: string) => {
  const {
    data,
    isLoading,
    isFetching,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(["movies", selectedData], getMovies, {
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
    isLoading,
    isFetching,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
};

const getTrending = async ({ pageParam = 1 }: any) => {
  const result = await axios.get(
    `${apiUrl}/trending/all/day?api_key=${
      import.meta.env.VITE_API_KEY
    }&page=${pageParam}`
  );
  return result?.data;
};

export const useGetTrending = () => {
  const {
    data,
    isFetching,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(["trending"], getTrending, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      if (allPages?.length < lastPage?.total_pages) {
        const nextPage = allPages.length + 1;
        return nextPage;
      }
    },
  });
};

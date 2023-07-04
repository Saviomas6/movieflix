import { useState, Fragment, useEffect } from "react";
import {
  CardGridLayout,
  Container,
  HeadingTitle,
  LoadingSpinnerContainer,
  OpacityAnimation,
  StyledLink,
  Wrapper,
} from "../../styles/sharedStyles";
import {
  IconWrapper,
  InputField,
  InputFieldWrapper,
  NavTab,
  NavTabWrapper,
} from "./Search.style";
import { ImSearch } from "react-icons/im";
import MovieCard from "../../components/movieCard/MovieCard";
import { debounce } from "../../utils/utils";
import { useGetAllSearchMovies } from "../../hooks/useSearchMovies";
import NoItemFound from "../../components/noItemFound/NoItemFound";

const Search = () => {
  const [searchTab, setSearchTab] = useState("movies");
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
  };
  const handleDebounce = debounce((e: any) => handleChange(e), 1000);

  const option = {
    searchValue: searchValue && encodeURIComponent(searchValue),
    searchTab: searchTab,
  };

  const {
    data,
    isLoading,
    isError,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetAllSearchMovies(option);

  useEffect(() => {
    let fetching = false;
    const handleScroll = async (e: any) => {
      const { scrollHeight, scrollTop, clientHeight } =
        e.target.scrollingElement;
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 2) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage, hasNextPage]);

  return (
    <Container width="90%">
      <Wrapper>
        <InputFieldWrapper>
          <InputField
            type="text"
            placeholder="Search"
            onChange={handleDebounce}
          />
          <IconWrapper>
            <ImSearch />
          </IconWrapper>
        </InputFieldWrapper>

        <NavTabWrapper>
          <NavTab
            onClick={() => setSearchTab("movies")}
            tab={searchTab === "movies"}
          >
            Search Movies
          </NavTab>
          <NavTab
            onClick={() => setSearchTab("tvseries")}
            tab={searchTab === "tvseries"}
          >
            Search TV Series
          </NavTab>
        </NavTabWrapper>
        {searchTab === "movies" && (
          <div>
            <OpacityAnimation>
              <HeadingTitle>MOVIES</HeadingTitle>
              <CardGridLayout>
                {!isError &&
                  data?.pages?.map((x: any, id: number) => (
                    <Fragment key={id}>
                      {Array.isArray(x?.results) &&
                        x?.results?.map((results: any, index: number) => (
                          <Fragment key={results?.id}>
                            <StyledLink
                              to={`/movie_details/${results?.id}?media_type=movie`}
                            >
                              <MovieCard
                                poster={results?.poster_path}
                                name={results?.title || results?.name}
                                date={
                                  results?.first_air_date ||
                                  results?.release_date
                                }
                                vote={results?.vote_average}
                                mediaType="movie"
                              />
                            </StyledLink>
                          </Fragment>
                        ))}
                    </Fragment>
                  ))}

                {(isLoading || (isFetching && isFetchingNextPage)) &&
                  Array.from({ length: 10 }, (x, v) => (
                    <LoadingSpinnerContainer key={v} />
                  ))}
              </CardGridLayout>
              {data?.pages[0]?.total_pages === 0 && (
                <NoItemFound message="No Movie Found" />
              )}
            </OpacityAnimation>
          </div>
        )}
        {searchTab === "tvseries" && (
          <div>
            <OpacityAnimation>
              <HeadingTitle>TV SERIES</HeadingTitle>
              <CardGridLayout>
                {!isError &&
                  data?.pages?.map((x: any, id: number) => (
                    <Fragment key={id}>
                      {Array.isArray(x?.results) &&
                        x?.results?.map((results: any, index: number) => (
                          <Fragment key={results?.id}>
                            <StyledLink
                              to={`/movie_details/${results?.id}?media_type=tv`}
                            >
                              <MovieCard
                                poster={results?.poster_path}
                                name={results?.title || results?.name}
                                date={
                                  results?.first_air_date ||
                                  results?.release_date
                                }
                                vote={results?.vote_average}
                                mediaType="tv"
                              />
                            </StyledLink>
                          </Fragment>
                        ))}
                    </Fragment>
                  ))}

                {(isLoading || (isFetching && isFetchingNextPage)) &&
                  Array.from({ length: 10 }, (x, v) => (
                    <LoadingSpinnerContainer key={v} />
                  ))}
              </CardGridLayout>
              {data?.pages[0]?.total_pages === 0 && (
                <NoItemFound message="No Series Found" />
              )}
            </OpacityAnimation>
          </div>
        )}
      </Wrapper>
    </Container>
  );
};

export default Search;

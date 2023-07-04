import { Fragment, useState, useEffect } from "react";
import Category from "../../components/category/Category";
import MovieCard from "../../components/movieCard/MovieCard";
import NoItemFound from "../../components/noItemFound/NoItemFound";
import { useGetGenre } from "../../hooks/useGetGenre";
import { useGetMovies } from "../../hooks/useMovies";
import {
  CardGridLayout,
  CategoryMainLayout,
  Container,
  HeadingTitle,
  LoadingSpinnerContainer,
  OpacityAnimation,
  StyledLink,
  Wrapper,
} from "../../styles/sharedStyles";

const Movies = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const selectedData = selectedGenres
    .map((results: any) => results?.id)
    .join(",");
  const {
    data,
    isLoading,
    isFetching,
    isError,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useGetMovies(selectedData);

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
      <OpacityAnimation>
        <Wrapper>
          <HeadingTitle>MOVIES</HeadingTitle>
          <CategoryMainLayout>
            <Category
              type="movie"
              genres={genres}
              setGenres={setGenres}
              selectedGenres={selectedGenres}
              setSelectedGenres={setSelectedGenres}
            />
          </CategoryMainLayout>
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
                              results?.first_air_date || results?.release_date
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
        </Wrapper>
      </OpacityAnimation>
    </Container>
  );
};

export default Movies;

import { Fragment, useEffect } from "react";
import MovieCard from "../../components/movieCard/MovieCard";
import NoItemFound from "../../components/noItemFound/NoItemFound";
import { useGetTrending } from "../../hooks/useTrending";
import {
  CardGridLayout,
  Container,
  HeadingTitle,
  LoadingSpinnerContainer,
  OpacityAnimation,
  StyledLink,
  Wrapper,
} from "../../styles/sharedStyles";

const Trending = () => {
  const {
    data,
    isError,
    isFetching,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetTrending();

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
          <HeadingTitle>TRENDING</HeadingTitle>
          <CardGridLayout>
            {!isError &&
              data?.pages?.map((x: any, id: number) => (
                <Fragment key={id}>
                  {Array.isArray(x?.results) &&
                    x?.results?.map((results: any, index: number) => (
                      <Fragment key={results?.id}>
                        <StyledLink
                          to={`/movie_details/${results?.id}?media_type=${results?.media_type}`}
                        >
                          <MovieCard
                            poster={results?.poster_path}
                            name={results?.title || results?.name}
                            date={
                              results?.first_air_date || results?.release_date
                            }
                            vote={results?.vote_average}
                            mediaType={results?.media_type}
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
            <NoItemFound message="No Trending Found" />
          )}
        </Wrapper>
      </OpacityAnimation>
    </Container>
  );
};

export default Trending;

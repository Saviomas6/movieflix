import {
  Container,
  OpacityAnimation,
  StyledLink,
  Wrapper,
} from "../../styles/sharedStyles";
import {
  ButtonWrapper,
  MovieDetailsContainer,
  MovieDetailsDescription,
  MovieDetailsGenre,
  MovieDetailsImage,
  MovieDetailsImageContainer,
  MovieDetailsLeftContainer,
  MovieDetailsMainLayout,
  MovieDetailsRightContainer,
  MovieDetailsSubTitle,
  MovieDetailsTitle,
  RatingContainer,
  WatchTrailerButton,
} from "./MovieDetails.style";
import { BsYoutube } from "react-icons/bs";
import { useLocation, useParams } from "react-router-dom";
import { useGetMovieDetails } from "../../hooks/useMovieDetails";
import LoadingSpinner from "../../components/uploadSpinner/LoadingSpinner";
import { useGetVideo } from "../../hooks/useGetVideo";
import { img_500, noPicture } from "../../utils/apiUrl";

const MovieDetails = () => {
  const { id } = useParams();
  const query = new URLSearchParams(useLocation().search);
  const media_type = query.get("media_type");

  const options = {
    id: id,
    media_type: media_type,
  };

  const {
    data: moviesData,
    isError: movieError,
    isFetching: movieFetching,
    isLoading: movieLoading,
  } = useGetMovieDetails(options);
  const {
    data: videoData,
    isError: videoError,
    isFetching: videoFetching,
    isLoading: videoLoading,
  } = useGetVideo(options);

  return (
    <Container width="90%">
      <OpacityAnimation>
        <MovieDetailsMainLayout>
          <Wrapper>
            {movieLoading || movieFetching ? (
              <LoadingSpinner innerSize="20" outerSize="50" />
            ) : (
              <MovieDetailsContainer>
                <MovieDetailsLeftContainer>
                  <MovieDetailsImageContainer>
                    <MovieDetailsImage
                      src={
                        moviesData?.poster_path
                          ? `${img_500}${moviesData?.poster_path}`
                          : `${noPicture}`
                      }
                      alt="img"
                    />
                    <RatingContainer vote={Number(moviesData?.vote_average)}>
                      {Number(moviesData?.vote_average).toFixed(1)}
                    </RatingContainer>
                  </MovieDetailsImageContainer>
                </MovieDetailsLeftContainer>
                <MovieDetailsRightContainer>
                  <MovieDetailsTitle>
                    {moviesData?.title || moviesData?.name}
                  </MovieDetailsTitle>
                  <MovieDetailsSubTitle>
                    {moviesData?.tagline}
                  </MovieDetailsSubTitle>
                  <MovieDetailsDescription>
                    {moviesData?.overview}
                  </MovieDetailsDescription>
                  <MovieDetailsGenre>
                    Genre:
                    {moviesData?.genres?.map((value: any) => (
                      <div key={value?.id}>{value?.name}</div>
                    ))}
                  </MovieDetailsGenre>
                  <MovieDetailsGenre>
                    Release Date:{" "}
                    <div>
                      {moviesData?.release_date || moviesData?.last_air_date}
                    </div>
                  </MovieDetailsGenre>
                  <MovieDetailsGenre>
                    Language:
                    {moviesData?.spoken_languages?.map(
                      (value: any, index: number) => (
                        <div key={index}>{value?.english_name}</div>
                      )
                    )}
                  </MovieDetailsGenre>
                  <MovieDetailsGenre>
                    Runtime:{" "}
                    <div>
                      {moviesData?.runtime || moviesData?.episode_run_time[0]}{" "}
                      minutes
                    </div>
                  </MovieDetailsGenre>
                  <ButtonWrapper>
                    <StyledLink to={`/cast/${id}?media_type=${media_type}`}>
                      <WatchTrailerButton bg="#4AB8A1">
                        Cast and Crew
                      </WatchTrailerButton>
                    </StyledLink>
                  </ButtonWrapper>
                  <ButtonWrapper>
                    <a
                      target="_blank"
                      href={`https://www.youtube.com/watch?v=${videoData?.results[0]?.key}`}
                    >
                      <WatchTrailerButton bg="#b269f6">
                        <BsYoutube style={{ marginRight: "8px" }} />
                        Watch Trailer
                      </WatchTrailerButton>
                    </a>
                  </ButtonWrapper>
                </MovieDetailsRightContainer>
              </MovieDetailsContainer>
            )}
          </Wrapper>
        </MovieDetailsMainLayout>
      </OpacityAnimation>
    </Container>
  );
};

export default MovieDetails;

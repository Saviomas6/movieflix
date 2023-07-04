import { img_500, noPicture } from "../../utils/apiUrl";
import { handlePrecision } from "../../utils/utils";
import {
  MovieCardFooterWrapper,
  MovieCardImage,
  MovieCardImageContainer,
  MovieCardMainLayout,
  MovieName,
  MovieReleaseDate,
  RatingContainer,
} from "./MovieCard.style";

const MovieCard = ({ poster, name, date, vote, mediaType }: any) => {
  return (
    <MovieCardMainLayout>
      <MovieCardImageContainer>
        <MovieCardImage
          src={poster ? `${img_500}${poster}` : `${noPicture}`}
          alt="image"
        />
      </MovieCardImageContainer>
      <MovieName title={name}>{handlePrecision(name, 15)}</MovieName>
      <MovieCardFooterWrapper>
        <MovieReleaseDate>
          {mediaType === "tv" ? "TV Series" : "Movie"}
        </MovieReleaseDate>
        <MovieReleaseDate>{date}</MovieReleaseDate>
      </MovieCardFooterWrapper>
      <RatingContainer vote={Number(vote) > 7}>
        {vote.toFixed(1)}
      </RatingContainer>
    </MovieCardMainLayout>
  );
};

export default MovieCard;

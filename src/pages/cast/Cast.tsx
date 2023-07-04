import { useLocation, useParams } from "react-router-dom";
import { useGetCastData } from "../../hooks/useGetCastData";
import {
  Container,
  HeadingTitle,
  LoadingSpinnerContainer,
  OpacityAnimation,
  Wrapper,
} from "../../styles/sharedStyles";
import { img_500, noPicture } from "../../utils/apiUrl";
import { handlePrecision } from "../../utils/utils";
import {
  CastContainer,
  CastImage,
  CastImageContainer,
  CastMainLayout,
  CastName,
} from "./Cast.style";

const Cast = () => {
  const { id } = useParams();
  const query = new URLSearchParams(useLocation().search);
  const media_type = query.get("media_type");

  const options = {
    id: id,
    media_type: media_type,
  };

  const {
    data: castData,
    isError: castError,
    isFetching: castFetching,
    isLoading: castLoading,
  } = useGetCastData(options);

  return (
    <Container width="90%">
      <OpacityAnimation>
        <Wrapper>
          <HeadingTitle>CAST AND CREW</HeadingTitle>
          <CastMainLayout>
            {!castError &&
              !castLoading &&
              castData?.cast?.map((cast: any, index: number) => (
                <CastContainer key={index}>
                  <CastImageContainer>
                    <CastImage
                      src={
                        cast?.profile_path
                          ? `${img_500}/${cast?.profile_path}`
                          : noPicture
                      }
                      alt={cast?.name}
                    />
                  </CastImageContainer>
                  <CastName title={cast?.name}>
                    {cast?.name
                      ? handlePrecision(cast?.name, 10)
                      : "No Picture"}
                  </CastName>
                </CastContainer>
              ))}

            {(castLoading || castFetching) &&
              Array.from({ length: 30 }, (x, v) => (
                <LoadingSpinnerContainer key={v} />
              ))}
          </CastMainLayout>
        </Wrapper>
      </OpacityAnimation>
    </Container>
  );
};

export default Cast;

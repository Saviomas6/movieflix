import styled from "styled-components";
export const MovieDetailsMainLayout = styled.div`
  min-height: 100vh;
  color: #000;
  display: grid;
  place-items: center;
`;

export const MovieDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #212332;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const MovieDetailsLeftContainer = styled.div`
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;
export const MovieDetailsRightContainer = styled.div`
  padding: 15px;
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export const MovieDetailsImageContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const MovieDetailsImage = styled.img`
  aspect-ratio: 1/1.5;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const MovieDetailsTitle = styled.div`
  color: #fff;
  font-size: 38px;
  font-weight: 500;
  @media screen and (max-width: 1024px) {
    font-size: 32px;
  }
  @media screen and (max-width: 425px) {
    font-size: 24px;
  }
`;

export const MovieDetailsSubTitle = styled.div`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  margin-top: 10px;
  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;
export const MovieDetailsDescription = styled.div`
  min-height: 200px;
  border: 1px solid #808080;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  @media screen and (max-width: 1024px) {
    min-height: 150px;
    font-size: 14px;
  }
`;
export const MovieCastMainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  margin-top: 10px;
  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const WatchTrailerButton = styled.button<any>`
  height: 45px;
  width: 100%;
  background-color: ${({ bg }) => bg};
  color: #fff;
  outline: none;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    font-size: 16px;
    height: 40px;
  }
`;

export const RatingContainer = styled.div<any>`
  height: 20px;
  width: max-content;
  padding: 4px 8px;
  border-radius: 10px;
  background-color: ${(props: any) => (props?.vote ? "#03C988" : "#D61355")};
  color: #fff;
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const MovieDetailsGenre = styled.div`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  margin-top: 15px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
  div {
    background-color: #fafafa;
    color: #000;
    height: 30px;
    width: max-content;
    padding: 0 12px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1024px) {
      font-size: 14px;
      height: 25px;
      padding: 0 10px;
    }
  }
`;

import styled from "styled-components";
export const MovieCardMainLayout = styled.div`
  background-color: #212332;
  border-radius: 10px;
  padding: 8px;
  cursor: pointer;
  position: relative;
  transition: transform 450ms;
  :hover {
    transform: scale(1.03);
  }
`;

export const MovieCardImageContainer = styled.div`
  width: 100%;
`;

export const MovieCardImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1.5;
  object-fit: cover;
  border-radius: 10px;
`;
export const MovieName = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  margin: 15px 0;
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
  @media screen and (max-width: 370px) {
    font-size: 12px;
  }
`;

export const MovieCardFooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MovieReleaseDate = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  text-transform: capitalize;
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
  @media screen and (max-width: 370px) {
    font-size: 12px;
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

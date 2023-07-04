import styled from "styled-components";
export const CastMainLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 15px;
`;

export const CastContainer = styled.div`
  background-color: #212332;
  border-radius: 10px;
  padding: 5px;
  transition: transform 450ms;
  :hover {
    transform: scale(1.03);
  }
`;
export const CastImageContainer = styled.div`
  width: 100%;
`;
export const CastImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1.5;
  border-radius: 10px;
`;
export const CastName = styled.div`
  font-size: 16px;
  color: #fff;
  font-weight: 400;
`;

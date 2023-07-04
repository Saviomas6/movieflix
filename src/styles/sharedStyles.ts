import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const Container = styled.div<any>`
  position: relative;
  width: ${(props) => (props.width ? props.width : "100%")};
  padding-right: var(1.5rem, 0.75rem);
  padding-left: var(1.5rem, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 90%;
  }
  @media (min-width: 768px) {
    max-width: 90%;
  }
  @media (min-width: 992px) {
    max-width: 90%;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;

const opacityAnimation = keyframes`
0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const OpacityAnimation = styled.div<any>`
  animation: ${opacityAnimation} 1.5s;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const CardGridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 15px;
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    grid-gap: 10px;
  }
`;

export const HeadingTitle = styled.h1`
  margin: 20px 0;
  font-size: 35px;
  color: #fff;
  @media screen and (max-width: 480px) {
    font-size: 24px;
    margin: 10px 0;
  }
`;

export const Wrapper = styled.div`
  padding: 80px 0;
`;

export const CategoryMainLayout = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  gap: 20px;
  flex-wrap: wrap;
`;

export const SkeletonLoadingAnimation = () => keyframes`
  0% {
    background:#2b3641
  }
  100% {
    background: #7A798A;
  }
`;

export const LoadingSpinnerContainer = styled.div`
  width: 100%;
  aspect-ratio: 1/1.5;
  border-radius: 10px;
  animation: ${SkeletonLoadingAnimation} 1s linear infinite alternate !important;
`;

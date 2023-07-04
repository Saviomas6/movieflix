import styled, { keyframes } from "styled-components";

const AnimatedInner = keyframes`
    from {
      transform: rotate(0deg);
    }
    
    to {
      transform: rotate(360deg);
    }
  
`;

const AnimatedOuter = keyframes`
   from {
      transform: rotate(360deg);
    }
    
    to {
      transform: rotate(0deg);
    }
  
`;

export const DoubleLoadingSpinner = styled.div<any>`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ::before,
  ::after {
    content: "";
    position: absolute;
    border: 4px solid #b269f6;
    border-radius: 4em;
  }

  ::before {
    width: ${(props) => props.innerSize}px;
    height: ${(props) => props.innerSize}px;
    border-bottom-color: transparent;
    animation: ${AnimatedInner} 0.5s linear infinite;
  }

  ::after {
    width: ${(props) => props.outerSize}px;
    height: ${(props) => props.outerSize}px;
    border-top-color: transparent;
    animation: ${AnimatedOuter} 0.8s linear infinite;
  }
`;

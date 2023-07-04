import styled from "styled-components";
export const FooterMainContainer = styled.div`
  height: 70px;
  width: 100%;
  background-color: #13131d;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
`;

export const FooterContainer = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #13131d;
`;

export const FooterIcon = styled.div<any>`
  font-size: 32px;
  display: flex;
  color: ${({ pathname }) => (pathname ? "#B269F6" : "#fff")};
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const FooterNavTabs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FooterNavTab = styled.div<any>`
  font-size: 18px;
  font-weight: 600;
  color: ${({ pathname }) => (pathname ? "#B269F6" : "#fff")};
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
